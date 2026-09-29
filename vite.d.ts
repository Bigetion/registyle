/// <reference path="./virtual.d.ts" />

import type { Plugin } from 'vite';
import type { CompileOptions } from './compile.js';

export interface RegistyleViteOptions extends CompileOptions {
	entry?: string;
	/** Optional disk copy of generated CSS; by default, use the virtual stylesheet module. */
	outFile?: string;
	watch?: string;
}

export declare function registyle(options?: RegistyleViteOptions): Plugin;
export default registyle;