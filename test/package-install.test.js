import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';
import test from 'node:test';

const run = promisify(execFile);
const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';

test('packed tarball installs in a clean consumer and exposes public entry points', { timeout: 60000 }, async () => {
	const tempDirectory = await mkdtemp(join(tmpdir(), 'registyle-consumer-'));
	const consumerDirectory = join(tempDirectory, 'consumer');

	try {
		const sourceManifest = JSON.parse(await readFile(join(packageRoot, 'package.json'), 'utf8'));
		const npmEnvironment = { ...process.env };
		delete npmEnvironment.npm_config_dry_run;
		delete npmEnvironment.NPM_CONFIG_DRY_RUN;
		const { stdout } = await run(npm, ['pack', '--pack-destination', tempDirectory, '--json'], {
			cwd: packageRoot,
			env: npmEnvironment,
			shell: process.platform === 'win32',
			windowsHide: true,
		});
		const [{ filename }] = JSON.parse(stdout);
		const tarballPath = join(tempDirectory, filename);
		await mkdir(consumerDirectory);
		await writeFile(join(consumerDirectory, 'package.json'), JSON.stringify({
			name: 'registyle-clean-consumer',
			private: true,
			version: '1.0.0',
			type: 'module',
			dependencies: { registyle: `file:../${filename}` },
			devDependencies: sourceManifest.peerDependencies,
		}));

		await run(npm, ['install', '--ignore-scripts', '--no-audit', '--no-fund'], {
			cwd: consumerDirectory,
			env: npmEnvironment,
			shell: process.platform === 'win32',
			windowsHide: true,
		});

		const installedPackage = JSON.parse(await readFile(join(consumerDirectory, 'node_modules', 'registyle', 'package.json'), 'utf8'));
		assert.equal(installedPackage.version, JSON.parse(await readFile(join(packageRoot, 'package.json'), 'utf8')).version);

		const smokeCode = [
			"import { register, cx } from 'registyle';",
			"import { getManifest, register as collect } from 'registyle/collector';",
			"import { compile } from 'registyle/compile';",
			"import { registyle } from 'registyle/vite';",
			"register('consumer-button', { color: 'red' });",
			"if (!register.extractCSS().includes('.consumer-button')) throw new Error('runtime entry failed');",
			"if (cx('consumer-button') !== 'consumer-button') throw new Error('cx entry failed');",
			"collect('collected-button', { color: 'blue' });",
			"if (!getManifest().classes['collected-button']) throw new Error('collector entry failed');",
			"const css = await compile({ classes: { 'consumer-button': { tw: 'inline-flex px-4 bg-blue-600' } } });",
			"if (!css.includes('.consumer-button') || !/display:\\s*inline-flex/.test(css)) throw new Error('compile entry failed');",
			"if (registyle().name !== 'registyle:vite') throw new Error('Vite entry failed');",
		].join('\n');
		await run(process.execPath, ['--input-type=module', '-e', smokeCode], {
			cwd: consumerDirectory,
			windowsHide: true,
		});
	} finally {
		await rm(tempDirectory, { recursive: true, force: true });
	}
});