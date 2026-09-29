import assert from 'node:assert/strict';
import test from 'node:test';
import { validateManifest } from '../validate.js';

test('validateManifest detects circular extends across classes', () => {
	const result = validateManifest({
		classes: {
			button: { extend: 'control' },
			control: { extend: 'button' },
		},
	});

	assert.equal(result.valid, false);
	assert.ok(result.errors.some((error) => error.includes('button -> control -> button')));
});

test('validateManifest detects cycles in multiple extends', () => {
	const result = validateManifest({
		classes: {
			base: { color: 'black' },
			control: { extend: ['base', 'button'] },
			button: { extend: 'control' },
		},
	});

	assert.equal(result.valid, false);
	assert.ok(result.errors.some((error) => error.includes('control -> button -> control')));
});

test('validateManifest accepts acyclic extends and independent chains', () => {
	const result = validateManifest({
		classes: {
			base: { color: 'black' },
			control: { extend: 'base', padding: '4px' },
			button: { extend: ['base', 'control'], display: 'inline-flex' },
		},
	});

	assert.equal(result.valid, true);
	assert.deepEqual(result.errors, []);
});