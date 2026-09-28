import { createRequire } from 'node:module';
import { resolve, relative, dirname, sep } from 'node:path';
import { pathToFileURL } from 'node:url';
import { compileToFile } from './compile.js';
import { createManifestCache } from './cache.js';

function asViteModuleId(root, file) {
	return `/${relative(root, file).split(sep).join('/')}`;
}

export function registyle(options = {}) {
	const entry = options.entry || 'src/registyles/index.js';
	const outFile = options.outFile || '.registyle/style.css';
	const inputCss = options.inputCss || '@reference "tailwindcss"; @import "tailwindcss/utilities.css" source(none);';
	const enableCache = options.cache !== false;
	const debug = options.debug || false;
	
	let root = process.cwd();
	let outputPath;
	let entryPath;
	let watchPath;
	
	// Create cache instance
	const cache = enableCache ? createManifestCache({ maxSize: options.cacheSize || 50 }) : null;
	let compilationCount = 0;

	async function compileStyles() {
		const startTime = Date.now();
		compilationCount++;
		
		const requireFromProject = createRequire(resolve(root, 'package.json'));
		const viteUrl = pathToFileURL(requireFromProject.resolve('vite')).href;
		const { createServer } = await import(viteUrl);
		const server = await createServer({
			configFile: false,
			root,
			server: { middlewareMode: true },
			appType: 'custom',
			logLevel: 'error',
			optimizeDeps: { noDiscovery: true, include: [] },
		});

		try {
			const collector = await server.ssrLoadModule('registyle/collector');
			collector.resetManifest();
			const module = await server.ssrLoadModule(asViteModuleId(root, entryPath));
			const manifest = module.default || module.manifest;
			if (!manifest || typeof manifest !== 'object') {
				throw new TypeError(`registyle/vite: ${entry} must export a manifest as default`);
			}
			
			// Check cache
			const cacheKey = cache?.generateKey(manifest);
			
			if (cache && cacheKey && cache.has(cacheKey)) {
				const hasChanged = await cache.hasFilesChanged([entryPath]);
				
				if (!hasChanged) {
					if (debug) {
						console.log(`[registyle] Using cached compilation (${Date.now() - startTime}ms)`);
					}
					return manifest;
				}
			}
			
			// Compile with optimization enabled
			await compileToFile(manifest, outputPath, { 
				baseDir: root, 
				inputCss,
				minify: options.minify !== false,
				optimize: options.optimize !== false,
				deduplicate: options.deduplicate !== false,
				debug,
			});
			
			// Store in cache
			if (cache && cacheKey) {
				cache.set(cacheKey, manifest);
			}
			
			if (debug) {
				const duration = Date.now() - startTime;
				const cacheStats = cache?.getStats();
				console.log(`[registyle] Compiled in ${duration}ms (compilation #${compilationCount})`);
				if (cacheStats) {
					console.log(`[registyle] Cache stats:`, cacheStats);
				}
			}
			
			return manifest;
		} finally {
			await server.close();
		}
	}

	return {
		name: 'registyle:vite',
		enforce: 'pre',
		configResolved(config) {
			root = config.root;
			entryPath = resolve(root, entry);
			outputPath = resolve(root, outFile);
			watchPath = resolve(root, options.watch || dirname(entry));
		},
		async buildStart() {
			await compileStyles();
		},
		async configureServer(server) {
			await compileStyles();
			server.watcher.add(watchPath);

			let timer;
			let compiling = false;
			let pending = false;
			const rebuild = async () => {
				if (compiling) {
					pending = true;
					return;
				}
				compiling = true;
				try {
					await compileStyles();
					server.ws.send({ type: 'full-reload' });
				} catch (error) {
					server.config.logger.error(error instanceof Error ? error.message : String(error));
				} finally {
					compiling = false;
					if (pending) {
						pending = false;
					void rebuild();
					}
				}
			};
			const onChange = (file) => {
				if (file === outputPath || !/\.[cm]?[jt]sx?$/.test(file)) return;
				clearTimeout(timer);
				timer = setTimeout(() => void rebuild(), 60);
			};
			server.watcher.on('change', onChange);
			server.watcher.on('add', onChange);
			server.watcher.on('unlink', onChange);
			server.httpServer?.once('close', () => {
				clearTimeout(timer);
				server.watcher.off('change', onChange);
				server.watcher.off('add', onChange);
				server.watcher.off('unlink', onChange);
			});
		},
	};
}

export default registyle;