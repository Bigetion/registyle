import assert from 'node:assert/strict';
import test from 'node:test';
import { cn, cx, register } from '../core-entry.js';

test.beforeEach(() => register.reset());

test('registers declarations and nested selectors', () => {
	register('btn', {
		backgroundColor: 'blue',
		'&:hover': { backgroundColor: 'navy' },
		md: { padding: '8px' },
	});

	const css = register.extractCSS();
	assert.match(css, /\.btn\s*\{\s*background-color:\s*blue/);
	assert.match(css, /\.btn:hover\s*\{\s*background-color:\s*navy/);
	assert.match(css, /@media\s*\(min-width:\s*768px\)/);
});

test('registers modifiers, groups, and inherited styles', () => {
	register('btn', {
		base: { display: 'inline-flex' },
		modifiers: { primary: { color: 'white' } },
	});
	register('control', { display: 'inline-flex' });
	register('iconControl', { extend: 'control', width: '40px' });
	register.group('card', {
		root: { border: '1px solid black' },
		title: { fontWeight: 600 },
	});

	const css = register.extractCSS();
	assert.match(css, /\.btn\s*\{\s*display:\s*inline-flex/);
	assert.match(css, /\.btn-primary\s*\{\s*color:\s*white/);
	assert.match(css, /\.iconControl\s*\{[^}]*display:\s*inline-flex/);
	assert.match(css, /\.card\s*\{\s*border:\s*1px solid black/);
	assert.match(css, /\.card-title\s*\{\s*font-weight:\s*600/);
});

test('replaces previous CSS when a class or group is registered again', () => {
	register('status', { color: 'red' });
	register('status', { color: 'blue' });
	register.group('panel', { root: { color: 'red' }, title: { fontWeight: 600 } });
	register.group('panel', { root: { color: 'blue' } });

	const css = register.extractCSS();
	assert.equal((css.match(/\.status\s*\{/g) || []).length, 1);
	assert.match(css, /\.status\s*\{\s*color:\s*blue/);
	assert.doesNotMatch(css, /\.status\s*\{[^}]*color:\s*red/);
	assert.equal((css.match(/\.panel\s*\{/g) || []).length, 1);
	assert.match(css, /\.panel\s*\{\s*color:\s*blue/);
	assert.doesNotMatch(css, /\.panel-title/);
});

test('keeps class and group registrations independent when names match', () => {
	register('panel', { color: 'red' });
	register.group('panel', { root: { backgroundColor: 'blue' } });

	const css = register.extractCSS();
	assert.match(css, /\.panel\s*\{\s*color:\s*red/);
	assert.match(css, /\.panel\s*\{\s*background-color:\s*blue/);
});

test('clears old CSS when a registration is replaced with an empty style', () => {
	register('temporary', { color: 'red' });
	register('temporary', {});

	assert.doesNotMatch(register.extractCSS(), /temporary|color:\s*red/);
});

test('keeps direct styles when extending a base/modifier registration', () => {
	register('button', {
		base: { display: 'inline-flex' },
		modifiers: { primary: { color: 'white' } },
	});
	register('iconButton', { extend: 'button', width: '40px' });

	const css = register.extractCSS();
	assert.match(css, /\.iconButton\s*\{[^}]*display:\s*inline-flex/);
	assert.match(css, /\.iconButton\s*\{[^}]*width:\s*40px/);
	assert.match(css, /\.iconButton-primary\s*\{/);
});

test('rejects missing and cyclic extends with clear errors', () => {
	assert.throws(() => register('missingChild', { extend: 'missingParent' }), /unknown extended class "missingParent"/);
	register('first', { color: 'red' });
	register('second', { extend: 'first' });
	assert.throws(() => register('first', { extend: 'second' }), /circular extend/);
});

test('registers raw selectors and keyframes in bulk', () => {
	register.all({
		':root': { '--brand-color': 'blue' },
		'@keyframes fade-in': { from: { opacity: 0 }, to: { opacity: 1 } },
	});

	assert.match(register.extractCSS(), /:root\s*\{\s*--brand-color:\s*blue/);
	assert.match(register.extractCSS(), /@keyframes fade-in\s*\{/);
});

test('rejects invalid registrations and reset clears CSS', () => {
	assert.throws(() => register('', {}), /className must be a non-empty string/);
	assert.throws(() => register('btn', null));
	register('btn', { color: 'red' });
	register.reset();
	assert.equal(register.extractCSS(), '');
});

test('cx and cn combine conditional values and support bound classes', () => {
	assert.equal(cx('btn', false, ['btn-primary', { 'is-large': true }]), 'btn btn-primary is-large');
	assert.equal(cn('btn', { disabled: 0, active: true }), 'btn active');
	assert.equal(cx.with('base')('extra'), 'base extra');
});

test('rejects runtime Tailwind classes and requires the build adapter', () => {
	assert.throws(() => register('btn', { tw: 'bg-blue-500' }), /registyle\/compile/);
	assert.throws(() => register.group('badge', { root: 'bg-blue-100' }), /registyle\/compile/);
	assert.equal(register.extractCSS(), '');
});