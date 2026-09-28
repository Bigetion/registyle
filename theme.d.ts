/**
 * Theme tokens structure
 */
export interface ThemeTokens {
	colors?: Record<string, string | Record<string | number, string>>;
	spacing?: Record<string | number, string>;
	fontSize?: Record<string, string | [string, { lineHeight?: string; letterSpacing?: string }]>;
	fontWeight?: Record<string, string>;
	borderRadius?: Record<string, string>;
	breakpoints?: Record<string, string>;
	shadows?: Record<string, string>;
	zIndex?: Record<string | number, string>;
	transitionDuration?: Record<string | number, string>;
	[key: string]: any;
}

/**
 * Theme object with helper methods
 */
export interface Theme {
	/** Raw theme tokens */
	tokens: ThemeTokens;
	
	/** Get a value from theme by path (e.g., 'colors.blue.500') */
	get(path: string, fallback?: any): any;
	
	/** Get a color value */
	color(name: string, shade?: number | string): string | undefined;
	
	/** Get a spacing value */
	space(size: string | number): string | undefined;
	
	/** Get font size with line height */
	text(size: string): { fontSize: string; lineHeight?: string } | undefined;
	
	/** Get a shadow value */
	shadow(size: string): string | undefined;
	
	/** Get a border radius value */
	rounded(size: string): string | undefined;
}

/**
 * Theme provider for registrations
 */
export interface ThemeProvider {
	/**
	 * Create a registration with theme access
	 */
	register<T>(name: string, stylesFn: T | ((theme: Theme) => T)): [string, T];
	
	/**
	 * Create multiple registrations with theme access
	 */
	registerAll<T extends Record<string, any>>(
		configMap: { [K in keyof T]: T[K] | ((theme: Theme) => T[K]) }
	): T;
	
	/**
	 * Create a group with theme access
	 */
	group<T>(baseName: string, componentsFn: T | ((theme: Theme) => T)): [string, T];
}

/**
 * Create a theme with custom tokens
 */
export function createTheme(customTokens?: ThemeTokens): Theme;

/**
 * Create a theme provider
 */
export function withTheme(theme: Theme): ThemeProvider;

/**
 * Default theme tokens
 */
export const defaultTheme: ThemeTokens;

/**
 * Preset themes
 */
export const themes: {
	default: Theme;
	dark: Theme;
	minimal: Theme;
};

export default createTheme;
