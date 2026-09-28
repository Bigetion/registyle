import assert from 'node:assert/strict';
import test from 'node:test';
import { getManifest, register, resetManifest } from '../collector.js';

test.beforeEach(() => resetManifest());

test('collects registrations and groups into a manifest', () => {
	register('button', { tw: 'inline-flex' });
	register.all({ badge: { tw: 'rounded-full' } });
	register.group('card', { root: { tw: 'border' } });

	assert.deepEqual(getManifest(), {
		classes: { button: { tw: 'inline-flex' }, badge: { tw: 'rounded-full' } },
		groups: { card: { root: { tw: 'border' } } },
	});
});

test('reset removes previous registrations before a rebuild', () => {
	register('old-button', { tw: 'hidden' });
	resetManifest();
	register('new-button', { tw: 'flex' });

	assert.deepEqual(getManifest(), {
		classes: { 'new-button': { tw: 'flex' } },
		groups: {},
	});
});