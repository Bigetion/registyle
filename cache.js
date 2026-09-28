import { createHash } from 'node:crypto';
import { stat } from 'node:fs/promises';
import { resolve } from 'node:path';

/**
 * Simple LRU cache with file-based invalidation
 */
class ManifestCache {
	constructor(maxSize = 50) {
		this.cache = new Map();
		this.maxSize = maxSize;
		this.fileTimestamps = new Map();
	}

	/**
	 * Generate cache key from manifest content
	 */
	generateKey(manifest) {
		const normalized = JSON.stringify(manifest, (key, value) => {
			if (value && typeof value === 'object' && !Array.isArray(value)) {
				return Object.keys(value).sort().reduce((sorted, key) => {
					sorted[key] = value[key];
					return sorted;
				}, {});
			}
			return value;
		});
		return createHash('sha256').update(normalized).digest('hex').slice(0, 16);
	}

	/**
	 * Check if files have changed since last compilation
	 */
	async hasFilesChanged(files) {
		for (const file of files) {
			try {
				const stats = await stat(file);
				const mtime = stats.mtimeMs;
				const cached = this.fileTimestamps.get(file);
				
				if (cached !== mtime) {
					this.fileTimestamps.set(file, mtime);
					return true;
				}
			} catch {
				// File doesn't exist or not accessible, treat as changed
				return true;
			}
		}
		return false;
	}

	/**
	 * Get cached CSS for manifest
	 */
	get(key) {
		if (!this.cache.has(key)) return null;
		
		// Move to end (most recently used)
		const value = this.cache.get(key);
		this.cache.delete(key);
		this.cache.set(key, value);
		
		return value;
	}

	/**
	 * Store compiled CSS in cache
	 */
	set(key, value) {
		// Remove oldest if at capacity
		if (this.cache.size >= this.maxSize) {
			const firstKey = this.cache.keys().next().value;
			this.cache.delete(firstKey);
		}
		
		this.cache.set(key, value);
	}

	/**
	 * Check if cache has key
	 */
	has(key) {
		return this.cache.has(key);
	}

	/**
	 * Clear all cache entries
	 */
	clear() {
		this.cache.clear();
		this.fileTimestamps.clear();
	}

	/**
	 * Get cache statistics
	 */
	getStats() {
		return {
			size: this.cache.size,
			maxSize: this.maxSize,
			fileTracked: this.fileTimestamps.size,
		};
	}
}

export function createManifestCache(options = {}) {
	return new ManifestCache(options.maxSize);
}

export default createManifestCache;
