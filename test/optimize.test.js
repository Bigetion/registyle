import { test } from 'node:test';
import assert from 'node:assert/strict';
import { minifyCSS, deduplicateCSS, optimizeCSS, getOptimizationStats } from '../optimize.js';

test('minifyCSS removes unnecessary whitespace', () => {
	const input = `
		.button {
			padding: 10px;
			background: blue;
		}
		
		.card {
			margin: 20px;
		}
	`;
	
	const output = minifyCSS(input);
	assert.ok(!output.includes('\n\n'));
	assert.ok(output.includes('.button{'));
	assert.ok(output.includes('padding:10px'));
});

test('minifyCSS removes comments', () => {
	const input = `
		/* This is a comment */
		.button {
			padding: 10px; /* inline comment */
		}
	`;
	
	const output = minifyCSS(input);
	assert.ok(!output.includes('/*'));
	assert.ok(!output.includes('comment'));
});

test('minifyCSS preserves quoted values and data URLs', () => {
	const input = '.icon::before { content: "a : b; c"; background-image: url("data:image/svg+xml;utf8,<svg viewBox=\"0 0 1 1\"></svg>"); }';
	const output = minifyCSS(input);

	assert.match(output, /content:"a : b; c"/);
	assert.match(output, /data:image\/svg\+xml;utf8/);
	assert.match(output, /viewBox=\\?"0 0 1 1/);
});

test('deduplicateCSS merges identical selectors', () => {
	const input = `
		.button { padding: 10px; }
		.button { background: blue; }
		.card { margin: 20px; }
	`;
	
	const output = deduplicateCSS(input);
	const buttonMatches = (output.match(/\.button/g) || []).length;
	assert.equal(buttonMatches, 1, 'Should have only one .button rule');
	assert.ok(output.includes('padding: 10px'));
	assert.ok(output.includes('background: blue'));
});

test('deduplicateCSS preserves declaration order when merging adjacent rules', () => {
	const input = `
		.button { padding: 10px; color: red; }
		.button { color: blue; }
	`;
	
	const output = deduplicateCSS(input);
	assert.ok(output.includes('color: blue'));
	assert.ok(output.includes('color: red'));
	assert.ok(output.indexOf('color: red') < output.indexOf('color: blue'));
	assert.ok(output.includes('padding: 10px'));
});

test('deduplicateCSS does not move rules across other selectors', () => {
	const input = '.button { color: red; }.card { color: green; }.button { color: blue; }';
	const output = deduplicateCSS(input);

	assert.equal((output.match(/\.button\s*\{/g) || []).length, 2);
	assert.ok(output.indexOf('.card') < output.lastIndexOf('.button'));
});

test('deduplicateCSS handles @media rules', () => {
	const input = `
		.button { padding: 10px; }
		@media (min-width: 768px) {
			.button { padding: 20px; }
		}
		.button { color: blue; }
	`;
	
	const output = deduplicateCSS(input);
	assert.ok(output.includes('@media (min-width: 768px)'));
	assert.ok(output.includes('padding: 10px'));
	assert.ok(output.includes('padding: 20px'));
});

test('optimizeCSS combines minification and deduplication', () => {
	const input = `
		/* Comment */
		.button { 
			padding: 10px; 
		}
		
		.button { 
			color: blue; 
		}
	`;
	
	const output = optimizeCSS(input);
	assert.ok(!output.includes('/*'), 'Should remove comments');
	// After deduplication and minification, we should have compact CSS
	assert.ok(output.length < input.length, 'Should be smaller than input');
	assert.ok(output.includes('.button'), 'Should contain .button selector');
	assert.ok(output.includes('padding'), 'Should contain padding');
	assert.ok(output.includes('color'), 'Should contain color');
});

test('optimizeCSS respects options', () => {
	const input = `.button { padding: 10px; }`;
	
	const withMinify = optimizeCSS(input, { minify: true, deduplicate: false });
	const withoutMinify = optimizeCSS(input, { minify: false, deduplicate: false });
	
	assert.ok(withMinify.length < withoutMinify.length);
});

test('getOptimizationStats calculates size reduction', () => {
	const original = `
		.button {
			padding: 10px;
			margin: 20px;
		}
	`;
	const optimized = `.button{padding:10px;margin:20px}`;
	
	const stats = getOptimizationStats(original, optimized);
	
	assert.ok(stats.originalSize > stats.optimizedSize);
	assert.ok(stats.savings > 0);
	assert.ok(parseFloat(stats.percent) > 0);
});

test('deduplicateCSS preserves keyframes', () => {
	const input = `
		@keyframes fade {
			from { opacity: 0; }
			to { opacity: 1; }
		}
		.button { animation: fade 1s; }
	`;
	
	const output = deduplicateCSS(input);
	assert.ok(output.includes('@keyframes'));
	assert.ok(output.includes('opacity: 0'));
	assert.ok(output.includes('animation: fade'));
	assert.doesNotMatch(output, /@keyframes fade\s*\{\s*@keyframes fade/);
});

test('deduplicateCSS preserves nested layer and media structure', () => {
	const input = '@layer components { .button { color: red; } @media (min-width: 40rem) { .button { color: blue; } } }';
	const output = deduplicateCSS(input);

	assert.equal((output.match(/@layer components/g) || []).length, 1);
	assert.match(output, /@layer components\s*\{[^]*@media\s*\(min-width: 40rem\)/);
	assert.match(output, /color: blue/);
});

test('optimizeCSS handles empty input', () => {
	const output = optimizeCSS('');
	assert.equal(output, '');
});

test('deduplicateCSS handles pseudo-selectors', () => {
	const input = `
		.button:hover { background: blue; }
		.button:hover { color: white; }
	`;
	
	const output = deduplicateCSS(input);
	const hoverMatches = (output.match(/\.button:hover/g) || []).length;
	assert.equal(hoverMatches, 1);
	assert.ok(output.includes('background: blue'));
	assert.ok(output.includes('color: white'));
});
