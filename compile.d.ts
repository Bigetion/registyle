import type { Registration } from './index.js';

export interface RegistyleManifest {
	classes?: Record<string, Registration | string>;
	groups?: Record<string, Record<string, Registration | string>>;
}

export interface CompileOptions {
	inputCss?: string;
	baseDir?: string;
}

export declare function compile(manifest?: RegistyleManifest, options?: CompileOptions): Promise<string>;
export declare function compileToFile(manifest: RegistyleManifest, outputPath: string, options?: CompileOptions): Promise<string>;
export default compile;