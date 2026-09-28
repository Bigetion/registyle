import { createRequire } from 'node:module';
import { resolve, relative, dirname, sep } from 'node:path';
import { pathToFileURL } from 'node:url';
import { compileToFile } from './compile.js';

function asViteModuleId(root, file) {
	return `/${relative(root, file).split(sep).join('/')}`;
}

export function registyle(options = {}) {
	const entry = options.entry || 'src/registyles/index.js';
	const outFile = options.outFile || '.registyle/style.css';
	const inputCss = options.inputCss || '@reference "tailwindcss"; @import "tailwindcss/utilities.css" source(none);';
	let root = process.cwd();
	let outputPath;
	let entryPath;
	let watchPath;

	async function compileStyles() {
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
			await compileToFile(manifest, outputPath, { baseDir: root, inputCss });
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