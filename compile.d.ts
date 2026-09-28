import type { Registration } from './index.js';

export interface RegistyleManifest {
	classes?: Record<string, Registration | string>;
	groups?: Record<string, Record<string, Registration | string>>;
}

export interface CompileOptions {
	inputCss?: string;
	baseDir?: string;
	/** Enable CSS minification (default: true) */
	minify?: boolean;
	/** Enable CSS optimization including minification and deduplication (default: true) */
	optimize?: boolean;
	/** Enable CSS deduplication (default: true) */
	deduplicate?: boolean;
	/** Enable debug logging (default: false) */
	debug?: boolean;
}

export declare function compile(manifest?: RegistyleManifest, options?: CompileOptions): Promise<string>;
export declare function compileToFile(manifest: RegistyleManifest, outputPath: string, options?: CompileOptions): Promise<string>;
export default compile;