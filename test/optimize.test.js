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

test('deduplicateCSS merges identical selectors', () => {
	const input = `
		.button { padding: 10px; }
		.card { margin: 20px; }
		.button { background: blue; }
	`;
	
	const output = deduplicateCSS(input);
	const buttonMatches = (output.match(/\.button/g) || []).length;
	assert.equal(buttonMatches, 1, 'Should have only one .button rule');
	assert.ok(output.includes('padding: 10px'));
	assert.ok(output.includes('background: blue'));
});

test('deduplicateCSS overrides earlier declarations', () => {
	const input = `
		.button { padding: 10px; color: red; }
		.button { color: blue; }
	`;
	
	const output = deduplicateCSS(input);
	assert.ok(output.includes('color: blue'));
	assert.ok(!output.includes('color: red'));
	assert.ok(output.includes('padding: 10px'));
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
