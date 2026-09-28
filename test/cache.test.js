import { test } from 'node:test';
import assert from 'node:assert/strict';
import { writeFile, unlink, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { createManifestCache } from '../cache.js';

test('createManifestCache creates cache instance', () => {
	const cache = createManifestCache();
	assert.ok(cache);
	assert.equal(typeof cache.get, 'function');
	assert.equal(typeof cache.set, 'function');
	assert.equal(typeof cache.has, 'function');
});

test('cache stores and retrieves values', () => {
	const cache = createManifestCache();
	const manifest = { classes: { button: { padding: '10px' } } };
	const key = cache.generateKey(manifest);
	
	cache.set(key, manifest);
	assert.ok(cache.has(key));
	
	const retrieved = cache.get(key);
	assert.deepEqual(retrieved, manifest);
});

test('cache respects maxSize limit', () => {
	const cache = createManifestCache({ maxSize: 3 });
	
	cache.set('key1', 'value1');
	cache.set('key2', 'value2');
	cache.set('key3', 'value3');
	
	assert.equal(cache.getStats().size, 3);
	
	// Adding 4th item should remove oldest
	cache.set('key4', 'value4');
	assert.equal(cache.getStats().size, 3);
	assert.ok(!cache.has('key1'));
	assert.ok(cache.has('key4'));
});

test('cache.get updates LRU order', () => {
	const cache = createManifestCache({ maxSize: 2 });
	
	cache.set('key1', 'value1');
	cache.set('key2', 'value2');
	
	// Access key1 to make it most recently used
	cache.get('key1');
	
	// Add key3, should evict key2 (not key1)
	cache.set('key3', 'value3');
	
	assert.ok(cache.has('key1'));
	assert.ok(!cache.has('key2'));
	assert.ok(cache.has('key3'));
});

test('generateKey creates consistent hashes', () => {
	const cache = createManifestCache();
	const manifest1 = { classes: { button: { padding: '10px' } } };
	const manifest2 = { classes: { button: { padding: '10px' } } };
	
	const key1 = cache.generateKey(manifest1);
	const key2 = cache.generateKey(manifest2);
	
	assert.equal(key1, key2);
});

test('generateKey creates different hashes for different manifests', () => {
	const cache = createManifestCache();
	const manifest1 = { classes: { button: { padding: '10px' } } };
	const manifest2 = { classes: { card: { margin: '20px' } } }; // Different class name
	
	const key1 = cache.generateKey(manifest1);
	const key2 = cache.generateKey(manifest2);
	
	assert.notEqual(key1, key2);
});

test('cache.clear removes all entries', () => {
	const cache = createManifestCache();
	
	cache.set('key1', 'value1');
	cache.set('key2', 'value2');
	
	assert.equal(cache.getStats().size, 2);
	
	cache.clear();
	
	assert.equal(cache.getStats().size, 0);
	assert.ok(!cache.has('key1'));
	assert.ok(!cache.has('key2'));
});

test('hasFilesChanged detects file modifications', async () => {
	const cache = createManifestCache();
	const testDir = resolve(process.cwd(), 'test', '.tmp-cache-test');
	const testFile = resolve(testDir, 'test-file.txt');
	
	try {
		await mkdir(testDir, { recursive: true });
		await writeFile(testFile, 'initial content');
		
		// First check - should return true (file not tracked yet)
		const changed1 = await cache.hasFilesChanged([testFile]);
		assert.ok(changed1);
		
		// Second check - should return false (file unchanged)
		const changed2 = await cache.hasFilesChanged([testFile]);
		assert.ok(!changed2);
		
		// Modify file
		await new Promise((resolve) => setTimeout(resolve, 10));
		await writeFile(testFile, 'modified content');
		
		// Third check - should return true (file modified)
		const changed3 = await cache.hasFilesChanged([testFile]);
		assert.ok(changed3);
	} finally {
		try {
			await unlink(testFile);
		} catch {}
	}
});

test('hasFilesChanged returns true for non-existent files', async () => {
	const cache = createManifestCache();
	const nonExistentFile = resolve(process.cwd(), 'non-existent-file.txt');
	
	const changed = await cache.hasFilesChanged([nonExistentFile]);
	assert.ok(changed);
});

test('cache.getStats returns accurate statistics', () => {
	const cache = createManifestCache({ maxSize: 10 });
	
	cache.set('key1', 'value1');
	cache.set('key2', 'value2');
	
	const stats = cache.getStats();
	
	assert.equal(stats.size, 2);
	assert.equal(stats.maxSize, 10);
	assert.ok(typeof stats.fileTracked === 'number');
});

test('cache returns null for non-existent keys', () => {
	const cache = createManifestCache();
	const value = cache.get('non-existent-key');
	assert.equal(value, null);
});

test('cache.has returns false for non-existent keys', () => {
	const cache = createManifestCache();
	assert.ok(!cache.has('non-existent-key'));
});
