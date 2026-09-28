/**
 * Cache options for manifest compilation
 */
export interface CacheOptions {
	/** Maximum number of cached compilations (default: 50) */
	maxSize?: number;
}

/**
 * Cache statistics
 */
export interface CacheStats {
	/** Current number of cached entries */
	size: number;
	/** Maximum cache size */
	maxSize: number;
	/** Number of files being tracked for changes */
	fileTracked: number;
}

/**
 * Manifest cache for compilation results
 */
export interface ManifestCache {
	/**
	 * Generate a cache key from manifest content
	 */
	generateKey(manifest: any): string;

	/**
	 * Check if tracked files have changed
	 */
	hasFilesChanged(files: string[]): Promise<boolean>;

	/**
	 * Get cached value
	 */
	get(key: string): any | null;

	/**
	 * Store value in cache
	 */
	set(key: string, value: any): void;

	/**
	 * Check if cache has key
	 */
	has(key: string): boolean;

	/**
	 * Clear all cache entries
	 */
	clear(): void;

	/**
	 * Get cache statistics
	 */
	getStats(): CacheStats;
}

/**
 * Create a new manifest cache instance
 */
export function createManifestCache(options?: CacheOptions): ManifestCache;

export default createManifestCache;
