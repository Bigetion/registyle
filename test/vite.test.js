import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, rm, symlink, writeFile } from 'node:fs/promises';
import test from 'node:test';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build, createServer } from 'vite';
import { registyle } from '../vite.js';

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');

async function waitForCss(server, predicate) {
	const deadline = Date.now() + 5000;
	while (Date.now() < deadline) {
		const loaded = await server.pluginContainer.load('\0virtual:registyle.css');
		const css = typeof loaded === 'string' ? loaded : loaded?.code || '';
		if (predicate(css)) return css;
		await new Promise((resolvePromise) => setTimeout(resolvePromise, 50));
	}
	throw new Error('Timed out waiting for generated CSS in the virtual stylesheet module');
}

test('Vite plugin generates CSS on startup and rebuilds after registration changes', { timeout: 15000 }, async () => {
	const root = await mkdtemp(join(packageRoot, '.test-vite-'));
	const sourceDirectory = join(root, 'src', 'registyles');
	const entryPath = join(sourceDirectory, 'index.js');
	const outputPath = join(root, '.registyle', 'style.css');
	let server;

	try {
		await mkdir(sourceDirectory, { recursive: true });
		await mkdir(join(root, 'node_modules'), { recursive: true });
		await symlink(packageRoot, join(root, 'node_modules', 'registyle'), 'junction');
		const writeEntry = (utility) => writeFile(entryPath, [
			"import { getManifest, register } from 'registyle/collector';",
			`register('action-button', { tw: '${utility}' });`,
			'export default getManifest();',
		].join('\n'));
		await writeEntry('flex');

		server = await createServer({
			configFile: false,
			root,
			plugins: [registyle()],
			server: { host: '127.0.0.1', port: 0 },
			logLevel: 'silent',
		});
		await server.listen();

		const initialCss = await waitForCss(server, (css) => /\.action-button\s*\{[^}]*display:\s*flex/.test(css));
		assert.match(initialCss, /display:\s*flex/);
		await assert.rejects(readFile(outputPath));

		await writeEntry('grid');
		const rebuiltCss = await waitForCss(server, (css) => /\.action-button\s*\{[^}]*display:\s*grid/.test(css));
		assert.match(rebuiltCss, /display:\s*grid/);
		assert.doesNotMatch(rebuiltCss, /display:\s*flex/);
	} finally {
		await server?.close();
		await rm(root, { recursive: true, force: true });
	}
});

test('Vite build emits the virtual stylesheet as a CSS asset', { timeout: 15000 }, async () => {
	const root = await mkdtemp(join(packageRoot, '.test-vite-build-'));
	const sourceDirectory = join(root, 'src');

	try {
		await mkdir(sourceDirectory, { recursive: true });
		await mkdir(join(root, 'node_modules'), { recursive: true });
		await symlink(packageRoot, join(root, 'node_modules', 'registyle'), 'junction');
		await writeFile(join(root, 'index.html'), '<script type="module" src="/src/main.js"></script>');
		await writeFile(join(sourceDirectory, 'main.js'), "import 'virtual:registyle.css';");
		await writeFile(join(sourceDirectory, 'registrations.js'), [
			"import { getManifest, register } from 'registyle/collector';",
			"register('action-button', { tw: 'flex' });",
			'export default getManifest();',
		].join('\n'));

		const result = await build({
			configFile: false,
			root,
			plugins: [registyle({ entry: 'src/registrations.js', watch: 'src' })],
			logLevel: 'silent',
			build: { write: false },
		});
		const outputs = Array.isArray(result) ? result : [result];
		const cssAssets = outputs.flatMap((output) => output.output)
			.filter((item) => item.type === 'asset' && item.fileName.endsWith('.css'));

		assert.equal(cssAssets.length, 1);
		assert.match(String(cssAssets[0].source), /\.action-button\s*\{[^}]*display:\s*flex/);
	} finally {
		await rm(root, { recursive: true, force: true });
	}
});

test('Vite plugin writes an optional CSS copy when outFile is configured', { timeout: 15000 }, async () => {
	const root = await mkdtemp(join(packageRoot, '.test-vite-output-'));
	const sourceDirectory = join(root, 'src');
	const outputPath = join(root, '.registyle', 'style.css');
	let server;

	try {
		await mkdir(sourceDirectory, { recursive: true });
		await mkdir(join(root, 'node_modules'), { recursive: true });
		await symlink(packageRoot, join(root, 'node_modules', 'registyle'), 'junction');
		await writeFile(join(sourceDirectory, 'registrations.js'), [
			"import { getManifest, register } from 'registyle/collector';",
			"register('action-button', { tw: 'flex' });",
			'export default getManifest();',
		].join('\n'));

		server = await createServer({
			configFile: false,
			root,
			plugins: [registyle({ entry: 'src/registrations.js', outFile: '.registyle/style.css' })],
			server: { host: '127.0.0.1', port: 0 },
			logLevel: 'silent',
		});
		await server.listen();

		const css = await readFile(outputPath, 'utf8');
		assert.match(css, /\.action-button\s*\{[^}]*display:\s*flex/);
	} finally {
		await server?.close();
		await rm(root, { recursive: true, force: true });
	}
});