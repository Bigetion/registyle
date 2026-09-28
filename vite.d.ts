import type { Plugin } from 'vite';
import type { CompileOptions } from './compile.js';

export interface RegistyleViteOptions extends CompileOptions {
	entry?: string;
	outFile?: string;
	watch?: string;
	/** Enable manifest caching (default: true) */
	cache?: boolean;
	/** Maximum cache size (default: 50) */
	cacheSize?: number;
}

export declare function registyle(options?: RegistyleViteOptions): Plugin;
export default registyle;