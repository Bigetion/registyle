import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
import { compile, compileToFile } from '../compile.js';
import { register } from '../core-entry.js';

test('compiles registered utilities with Tailwind v4 and semantic selectors', async () => {
	const css = await compile({
		classes: {
			btn: {
				tw: 'flex items-center px-4 dark:md:hover:opacity-50 w-[calc(100%-2rem)] bg-linear-to-r [mask-type:luminance]',
				hover: 'bg-blue-500',
			},
		},
	});

	assert.match(css, /\.btn\s*\{[^}]*display:\s*flex/);
	assert.match(css, /\.btn:hover\s*\{[^}]*background-color:/);
	assert.match(css, /\.btn:hover\s*\{[^}]*opacity:\s*50%/);
	assert.match(css, /width:\s*calc\(100% - 2rem\)/);
	assert.match(css, /background-image:\s*linear-gradient/);
	assert.match(css, /mask-type:\s*luminance/);
	assert.doesNotMatch(css, /^\.inline-flex\s*\{/m);
	assert.doesNotMatch(css, /@layer base\s*\{/);
});

test('compiles utility arrays across base, variants, and extends', async () => {
	const css = await compile({
		classes: {
			baseButton: {
				tw: ['inline-flex', 'items-center'],
				hover: { tw: ['bg-blue-600', 'text-white'] },
			},
			iconButton: { extend: 'baseButton', tw: ['gap-2', 'rounded-md'] },
			legacyUtilities: { _: ['flex', 'gap-2'] },
		},
	});

	assert.match(css, /\.iconButton\s*\{[^}]*display:\s*inline-flex/);
	assert.match(css, /\.iconButton\s*\{[^}]*align-items:\s*center/);
	assert.match(css, /\.iconButton:hover\s*\{[^}]*background-color:/);
	assert.match(css, /\.iconButton:hover\s*\{[^}]*color:/);
	assert.match(css, /\.iconButton(?:,[^{]+)?\s*\{[^}]*gap:/);
	assert.match(css, /\.legacyUtilities\s*\{[^}]*display:\s*flex/);
});

test('reports the registration when a utility array contains a non-string', async () => {
	await assert.rejects(
		compile({ classes: { btn: { tw: ['flex', 42] } } }),
		/"btn\.tw" must be a string or an array of strings/,
	);
});

test('compiles the component demo button registration into semantic utility rules', async () => {
	const { default: manifest } = await import('../examples/register-component-demo/src/registyles/index.js');
	const css = await compile(manifest);

	assert.match(css, /\.btn[^{}]*\{[^}]*display:\s*inline-flex/);
	assert.match(css, /\.btn-primary[^{}]*\{[^}]*background-color:/);
	assert.match(css, /\.btn-md[^{}]*\{[^}]*padding-inline:/);
	assert.match(css, /\.btn-primary:hover[^{}]*\{[^}]*background-color:/);
});

test('preserves 1.0-compatible output by default and safely optimizes only when enabled', async () => {
	const manifest = {
		classes: {
			'action-button': {
				tw: 'inline-flex',
				before: { content: '"a : b; c"' },
			},
		},
	};
	const css = await compile(manifest);
	const unoptimizedCss = await compile(manifest, { optimize: false });
	const optimizedCss = await compile(manifest, { optimize: true });

	assert.equal(css, unoptimizedCss);
	assert.match(css, /content:\s*"a : b; c"/);
	assert.match(optimizedCss, /content:"a : b; c"/);
	assert.match(optimizedCss, /\.action-button\s*\{[^}]*display:inline-flex/);
});

test('compiles groups, modifiers, and extended class utilities', async () => {
	const css = await compile({
		classes: {
			control: { tw: 'inline-flex px-3' },
			iconButton: { extend: 'control', tw: 'h-10 w-10 p-0' },
			button: { base: { tw: 'rounded font-medium' }, modifiers: { primary: { tw: 'bg-blue-600 text-white' } } },
		},
		groups: {
			card: {
				root: { tw: 'rounded-xl border' },
				title: { tw: 'text-xl font-bold' },
			},
		},
	});

	assert.match(css, /\.iconButton\s*\{[^}]*display:\s*inline-flex/);
	assert.match(css, /\.iconButton\s*\{[^}]*height:/);
	assert.match(css, /\.button-primary\s*\{/);
	assert.match(css, /\.card\s*\{/);
	assert.match(css, /\.card-title\s*\{/);
});

test('compiles inherited utilities and direct styles from structured registrations', async () => {
	const css = await compile({
		classes: {
			iconButton: { extend: 'button', tw: 'h-10', width: '40px' },
			iconButton: { extend: 'button', tw: 'h-10', width: '40px' },
			button: { base: { tw: 'inline-flex' }, modifiers: { primary: { tw: 'font-bold' } } },
		},
	});

	assert.match(css, /\.iconButton\s*\{[^}]*display:\s*inline-flex/);
	assert.match(css, /\.iconButton\s*\{[^}]*height:/);
	assert.match(css, /\.iconButton\s*\{[^}]*width:\s*40px/);
	assert.match(css, /\.iconButton-primary\s*\{/);
});

test('rejects missing and cyclic extends in manifests', async () => {
	await assert.rejects(
		compile({ classes: { child: { extend: 'missing' } } }),
		/unknown extended class "missing"/,
	);
	await assert.rejects(
		compile({ classes: { first: { extend: 'second' }, second: { extend: 'first' } } }),
		/circular extend detected/,
	);
});

test('compile does not clear registrations in the runtime singleton', async () => {
	register.reset();
	register('runtime-button', { color: 'red' });
	try {
		await compile({ classes: { generated: { tw: 'flex' } } });
		assert.match(register.extractCSS(), /\.runtime-button\s*\{/);
	} finally {
		register.reset();
	}
});

test('fails the build when a utility is not known to Tailwind', async () => {
	await assert.rejects(
		compile({ classes: { btn: { tw: ['not-a-real-tailwind-utility'] } } }),
		/Tailwind did not generate CSS for: not-a-real-tailwind-utility \(\.btn\)/,
	);
});

test('rejects utility arrays in the runtime registration API', () => {
	assert.throws(
		() => register('runtime-utility-array', { tw: ['flex'] }),
		/Tailwind utilities must be compiled at build time/,
	);
});

test('writes compiled CSS to an output file', async () => {
	const directory = await mkdtemp(join(tmpdir(), 'registyle-'));
	try {
		const outputPath = join(directory, 'generated.css');
		await compileToFile({ classes: { btn: { tw: 'bg-linear-to-r' } } }, outputPath);
		assert.match(await readFile(outputPath, 'utf8'), /\.btn/);
	} finally {
		await rm(directory, { recursive: true, force: true });
	}
});

test('preserves root tokens, universal reset, and global CSS declarations', async () => {
	const css = await compile({
		classes: {
			':root': { '--brand': '#123456' },
			'*': { 'box-sizing': 'border-box', margin: '0' },
			body: { tw: 'antialiased', 'font-family': 'sans-serif', color: 'var(--brand)' },
		},
	});

	assert.match(css, /:root\s*\{\s*--brand:\s*#123456/);
	assert.match(css, /\*\s*\{[^}]*box-sizing:\s*border-box/);
	assert.match(css, /body\s*\{[^}]*font-family:\s*sans-serif/);
});