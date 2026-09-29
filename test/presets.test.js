import assert from 'node:assert/strict';
import test from 'node:test';
import { applyPreset, createPreset, mergePresets } from '../presets.js';

test('mergePresets deep-merges nested component styles and themes', () => {
	const merged = mergePresets(
		{
			classes: { button: { base: { color: 'white', hover: { opacity: 0.8 } } } },
			theme: { colors: { brand: { 500: 'blue', 600: 'navy' } } },
		},
		{
			classes: { button: { base: { color: 'black', padding: '8px', hover: { opacity: 0.6 } } } },
			theme: { colors: { brand: { 500: 'red' } } },
		},
	);

	assert.deepEqual(merged.classes.button.base, {
		color: 'black',
		padding: '8px',
		hover: { opacity: 0.6 },
	});
	assert.deepEqual(merged.theme.colors.brand, { 500: 'red', 600: 'navy' });
});

test('applyPreset preserves manifest fields and merges theme and variants', () => {
	const preset = createPreset({
		name: 'base',
		theme: { colors: { brand: { 500: 'blue', 600: 'navy' } } },
		variants: { size: { sm: { padding: '4px' } } },
		classes: { button: { base: { color: 'white', padding: '4px' } } },
		groups: { card: { root: { display: 'grid' } } },
	});
	const manifest = {
		classes: { button: { base: { color: 'black' } } },
		groups: { card: { root: { gap: '8px' } } },
		theme: { colors: { brand: { 500: 'green' } } },
		variants: { size: { lg: { padding: '12px' } } },
		metadata: { source: 'app' },
	};

	const result = applyPreset(manifest, preset);

	assert.deepEqual(result.classes.button.base, { color: 'black', padding: '4px' });
	assert.deepEqual(result.groups.card.root, { display: 'grid', gap: '8px' });
	assert.deepEqual(result.theme.colors.brand, { 500: 'green', 600: 'navy' });
	assert.deepEqual(result.variants.size, { sm: { padding: '4px' }, lg: { padding: '12px' } });
	assert.deepEqual(result.metadata, { source: 'app' });
	assert.deepEqual(manifest.classes.button.base, { color: 'black' });
});

test('applyPreset resolves class factories against the merged theme', () => {
	const preset = createPreset({
		name: 'themed',
		theme: { colors: { primary: { 500: 'blue' } } },
		classes: {
			button: (theme) => ({ backgroundColor: theme.color('primary', 500) }),
		},
	});
	const result = applyPreset({
		theme: { colors: { primary: { 500: 'green' } } },
	}, preset);

	assert.deepEqual(result.classes.button, { backgroundColor: 'green' });
	assert.equal(result.theme.colors.primary[500], 'green');
});

test('mergePresets replaces arrays instead of merging their indices', () => {
	const merged = mergePresets(
		{ variants: { values: ['small', 'medium'] } },
		{ variants: { values: ['large'] } },
	);

	assert.deepEqual(merged.variants.values, ['large']);
});