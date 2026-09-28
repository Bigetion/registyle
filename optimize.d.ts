/**
 * Options for CSS optimization
 */
export interface OptimizeOptions {
	/** Enable minification (default: true) */
	minify?: boolean;
	/** Enable deduplication (default: true) */
	deduplicate?: boolean;
}

/**
 * Optimization statistics
 */
export interface OptimizationStats {
	/** Original CSS size in bytes */
	originalSize: number;
	/** Optimized CSS size in bytes */
	optimizedSize: number;
	/** Bytes saved */
	savings: number;
	/** Percentage saved */
	percent: string;
}

/**
 * Minify CSS by removing unnecessary whitespace and comments
 */
export function minifyCSS(css: string): string;

/**
 * Deduplicate CSS rules by merging identical selectors
 */
export function deduplicateCSS(css: string): string;

/**
 * Optimize CSS with minification and deduplication
 */
export function optimizeCSS(css: string, options?: OptimizeOptions): string;

/**
 * Calculate optimization statistics
 */
export function getOptimizationStats(original: string, optimized: string): OptimizationStats;

export default optimizeCSS;
