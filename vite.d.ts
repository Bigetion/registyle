/// <reference path="./virtual.d.ts" />

import type { Plugin } from 'vite';
import type { CompileOptions } from './compile.js';

export interface RegistyleViteOptions extends CompileOptions {
	entry?: string;
	/** Optional disk copy of generated CSS; by default, use the virtual stylesheet module. */
	outFile?: string;
	/** Force physical file output even when virtual module would work. Useful for online IDEs like CodeSandbox. */
	forceOutFile?: boolean;
	watch?: string;
}

export declare function registyle(options?: RegistyleViteOptions): Plugin;
export default registyle;