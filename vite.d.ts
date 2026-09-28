import type { Plugin } from 'vite';
import type { CompileOptions } from './compile.js';

export interface RegistyleViteOptions extends CompileOptions {
	entry?: string;
	outFile?: string;
	watch?: string;
}

export declare function registyle(options?: RegistyleViteOptions): Plugin;
export default registyle;