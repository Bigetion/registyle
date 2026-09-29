export interface StyleObject {
	[property: string]: string | number | null | undefined | StyleObject | string[] | Record<string, StyleObject>;
}

export interface Registration extends StyleObject {
	base?: StyleObject;
	modifiers?: Record<string, StyleObject>;
	extend?: string | string[];
}

export interface RegisterFunction {
	(name: string, config?: Registration): void;
	group(baseName: string, components?: Record<string, StyleObject>): void;
	all(configs?: Record<string, Registration>): void;
	extractCSS(): string;
	reset(): void;
}

export type ClassValue = string | number | null | false | undefined | ClassValue[] | Record<string, unknown>;
export interface ClassNamesFunction {
	(...values: ClassValue[]): string;
	with(...base: ClassValue[]): (...values: ClassValue[]) => string;
}

export declare const register: RegisterFunction;
export declare const cx: ClassNamesFunction;
export default register;