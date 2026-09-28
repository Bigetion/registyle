import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, rm, symlink, writeFile } from 'node:fs/promises';
import test from 'node:test';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import { registyle } from '../vite.js';

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');

async function waitForCss(outputPath, predicate) {
	const deadline = Date.now() + 5000;
	while (Date.now() < deadline) {
		try {
			const css = await readFile(outputPath, 'utf8');
			if (predicate(css)) return css;
		} catch {}
		await new Promise((resolvePromise) => setTimeout(resolvePromise, 50));
	}
	throw new Error(`Timed out waiting for generated CSS at ${outputPath}`);
}

test('Vite plugin generates CSS on startup and rebuilds after registration changes', { timeout: 15000 }, async () => {
	const root = await mkdtemp(join(packageRoot, '.test-vite-'));
	const sourceDirectory = join(root, 'src');
	const entryPath = join(sourceDirectory, 'registrations.js');
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
			plugins: [registyle({ entry: 'src/registrations.js', watch: 'src' })],
			server: { host: '127.0.0.1', port: 0 },
			logLevel: 'silent',
		});
		await server.listen();

		const initialCss = await waitForCss(outputPath, (css) => /\.action-button\s*\{[^}]*display:\s*flex/.test(css));
		assert.match(initialCss, /display:\s*flex/);

		await writeEntry('grid');
		const rebuiltCss = await waitForCss(outputPath, (css) => /\.action-button\s*\{[^}]*display:\s*grid/.test(css));
		assert.match(rebuiltCss, /display:\s*grid/);
		assert.doesNotMatch(rebuiltCss, /display:\s*flex/);
	} finally {
		await server?.close();
		await rm(root, { recursive: true, force: true });
	}
});