import assert from 'node:assert/strict';
import test from 'node:test';
import { createVariants } from '../variants.js';

test('compose can emit the same component-prefixed classes as the manifest', () => {
	const button = createVariants({
		variants: {
			size: { sm: { padding: '4px' }, lg: { padding: '8px' } },
			variant: { primary: { color: 'white' } },
			fullWidth: { true: { width: '100%' }, false: { width: 'auto' } },
		},
		defaultVariants: { size: 'sm', fullWidth: false },
	});

	assert.deepEqual(button.compose({ variant: 'primary', unrelated: 'ignored' }, 'button'), [
		'button-size-sm',
		'button-variant-primary',
		'button-fullWidth-false',
	]);
	assert.deepEqual(button.compose({ variant: 'primary' }), ['size-sm', 'variant-primary', 'fullWidth-false']);
	assert.deepEqual(button.compose({ size: false }), ['fullWidth-false']);
});

test('compound styles are composed and registered under matching names', () => {
	const button = createVariants({
		variants: {
			size: { sm: { padding: '4px' } },
			variant: { outline: { borderStyle: 'solid' } },
		},
		compoundVariants: [
			{ size: 'sm', variant: 'outline', styles: { borderWidth: '1px' } },
		],
	});
	const manifest = button.toManifest('button');
	const registration = button.toRegistration('button');

	assert.deepEqual(button.compose({ size: 'sm', variant: 'outline' }, 'button'), [
		'button-size-sm',
		'button-variant-outline',
		'button-size-sm-variant-outline',
	]);
	assert.deepEqual(manifest['button-size-sm-variant-outline'], { borderWidth: '1px' });
	assert.deepEqual(registration.button.modifiers['size-sm-variant-outline'], { borderWidth: '1px' });
	assert.deepEqual(button.compose({ size: 'sm', variant: 'outline' }, 'button'),
		Object.keys(manifest).filter((name) => name !== 'button' && name !== 'button-size-sm-variant-outline')
			.concat('button-size-sm-variant-outline'));
});

test('compound class aliases are included only when their conditions match', () => {
	const button = createVariants({
		variants: {
			size: { sm: { padding: '4px' } },
			variant: { primary: { color: 'white' }, outline: { color: 'black' } },
		},
		compoundVariants: [
			{ size: 'sm', variant: 'primary', className: 'primary-emphasis', styles: { fontWeight: 'bold' } },
		],
	});

	assert.deepEqual(button.compose({ size: 'sm', variant: 'primary' }, 'button'), [
		'button-size-sm',
		'button-variant-primary',
		'button-size-sm-variant-primary',
		'primary-emphasis',
	]);
	assert.deepEqual(button.compose({ size: 'sm', variant: 'outline' }, 'button'), [
		'button-size-sm',
		'button-variant-outline',
	]);
});