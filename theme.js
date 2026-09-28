/**
 * Theme system for registyle - centralized design tokens
 */

const defaultTheme = {
	colors: {
		transparent: 'transparent',
		current: 'currentColor',
		black: '#000000',
		white: '#ffffff',
		gray: {
			50: '#f9fafb',
			100: '#f3f4f6',
			200: '#e5e7eb',
			300: '#d1d5db',
			400: '#9ca3af',
			500: '#6b7280',
			600: '#4b5563',
			700: '#374151',
			800: '#1f2937',
			900: '#111827',
			950: '#030712',
		},
		blue: {
			50: '#eff6ff',
			100: '#dbeafe',
			200: '#bfdbfe',
			300: '#93c5fd',
			400: '#60a5fa',
			500: '#3b82f6',
			600: '#2563eb',
			700: '#1d4ed8',
			800: '#1e40af',
			900: '#1e3a8a',
			950: '#172554',
		},
		red: {
			50: '#fef2f2',
			100: '#fee2e2',
			200: '#fecaca',
			300: '#fca5a5',
			400: '#f87171',
			500: '#ef4444',
			600: '#dc2626',
			700: '#b91c1c',
			800: '#991b1b',
			900: '#7f1d1d',
			950: '#450a0a',
		},
		green: {
			50: '#f0fdf4',
			100: '#dcfce7',
			200: '#bbf7d0',
			300: '#86efac',
			400: '#4ade80',
			500: '#22c55e',
			600: '#16a34a',
			700: '#15803d',
			800: '#166534',
			900: '#14532d',
			950: '#052e16',
		},
		yellow: {
			50: '#fefce8',
			100: '#fef9c3',
			200: '#fef08a',
			300: '#fde047',
			400: '#facc15',
			500: '#eab308',
			600: '#ca8a04',
			700: '#a16207',
			800: '#854d0e',
			900: '#713f12',
			950: '#422006',
		},
	},
	spacing: {
		0: '0',
		1: '0.25rem',
		2: '0.5rem',
		3: '0.75rem',
		4: '1rem',
		5: '1.25rem',
		6: '1.5rem',
		8: '2rem',
		10: '2.5rem',
		12: '3rem',
		16: '4rem',
		20: '5rem',
		24: '6rem',
		32: '8rem',
		40: '10rem',
		48: '12rem',
		56: '14rem',
		64: '16rem',
	},
	fontSize: {
		xs: ['0.75rem', { lineHeight: '1rem' }],
		sm: ['0.875rem', { lineHeight: '1.25rem' }],
		base: ['1rem', { lineHeight: '1.5rem' }],
		lg: ['1.125rem', { lineHeight: '1.75rem' }],
		xl: ['1.25rem', { lineHeight: '1.75rem' }],
		'2xl': ['1.5rem', { lineHeight: '2rem' }],
		'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
		'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
		'5xl': ['3rem', { lineHeight: '1' }],
		'6xl': ['3.75rem', { lineHeight: '1' }],
	},
	fontWeight: {
		thin: '100',
		extralight: '200',
		light: '300',
		normal: '400',
		medium: '500',
		semibold: '600',
		bold: '700',
		extrabold: '800',
		black: '900',
	},
	borderRadius: {
		none: '0',
		sm: '0.125rem',
		DEFAULT: '0.25rem',
		md: '0.375rem',
		lg: '0.5rem',
		xl: '0.75rem',
		'2xl': '1rem',
		'3xl': '1.5rem',
		full: '9999px',
	},
	breakpoints: {
		sm: '640px',
		md: '768px',
		lg: '1024px',
		xl: '1280px',
		'2xl': '1536px',
	},
	shadows: {
		sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
		DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
		md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
		lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
		xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
		'2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
		none: 'none',
	},
	zIndex: {
		0: '0',
		10: '10',
		20: '20',
		30: '30',
		40: '40',
		50: '50',
		auto: 'auto',
	},
	transitionDuration: {
		75: '75ms',
		100: '100ms',
		150: '150ms',
		200: '200ms',
		300: '300ms',
		500: '500ms',
		700: '700ms',
		1000: '1000ms',
	},
};

/**
 * Deep merge two objects
 */
function deepMerge(target, source) {
	const result = { ...target };
	
	for (const [key, value] of Object.entries(source)) {
		if (value && typeof value === 'object' && !Array.isArray(value)) {
			result[key] = deepMerge(result[key] || {}, value);
		} else {
			result[key] = value;
		}
	}
	
	return result;
}

/**
 * Create a theme with custom tokens
 */
export function createTheme(customTokens = {}) {
	const theme = deepMerge(defaultTheme, customTokens);
	
	// Helper to access nested values
	const get = (path, fallback) => {
		const keys = path.split('.');
		let value = theme;
		
		for (const key of keys) {
			if (value && typeof value === 'object' && key in value) {
				value = value[key];
			} else {
				return fallback;
			}
		}
		
		return value;
	};
	
	// Helper to access colors with shade
	const color = (name, shade = 500) => {
		if (typeof name === 'string' && name.includes('.')) {
			return get(`colors.${name}`);
		}
		return get(`colors.${name}.${shade}`, get(`colors.${name}`));
	};
	
	// Helper for spacing
	const space = (size) => get(`spacing.${size}`);
	
	// Helper for font size
	const text = (size) => {
		const value = get(`fontSize.${size}`);
		if (Array.isArray(value)) {
			return { fontSize: value[0], ...value[1] };
		}
		return { fontSize: value };
	};
	
	// Helper for shadows
	const shadow = (size) => get(`shadows.${size}`);
	
	// Helper for border radius
	const rounded = (size) => get(`borderRadius.${size}`);
	
	return {
		tokens: theme,
		get,
		color,
		space,
		text,
		shadow,
		rounded,
	};
}

/**
 * Theme provider for registrations
 */
export function withTheme(theme) {
	return {
		/**
		 * Create a registration with theme access
		 */
		register(name, stylesFn) {
			if (typeof stylesFn === 'function') {
				return [name, stylesFn(theme)];
			}
			return [name, stylesFn];
		},
		
		/**
		 * Create multiple registrations with theme access
		 */
		registerAll(configMap) {
			const result = {};
			for (const [name, stylesFn] of Object.entries(configMap)) {
				if (typeof stylesFn === 'function') {
					result[name] = stylesFn(theme);
				} else {
					result[name] = stylesFn;
				}
			}
			return result;
		},
		
		/**
		 * Create a group with theme access
		 */
		group(baseName, componentsFn) {
			if (typeof componentsFn === 'function') {
				return [baseName, componentsFn(theme)];
			}
			return [baseName, componentsFn];
		},
	};
}

/**
 * Export default theme for reference
 */
export { defaultTheme };

/**
 * Preset themes
 */
export const themes = {
	default: createTheme(),
	
	// Dark theme variant
	dark: createTheme({
		colors: {
			background: '#0a0a0a',
			foreground: '#fafafa',
			primary: {
				50: '#eff6ff',
				500: '#3b82f6',
				900: '#1e3a8a',
			},
		},
	}),
	
	// Minimal theme
	minimal: createTheme({
		colors: {
			gray: {
				50: '#fafafa',
				100: '#f5f5f5',
				200: '#e5e5e5',
				300: '#d4d4d4',
				400: '#a3a3a3',
				500: '#737373',
				600: '#525252',
				700: '#404040',
				800: '#262626',
				900: '#171717',
			},
		},
		borderRadius: {
			none: '0',
			sm: '0.125rem',
			DEFAULT: '0.25rem',
			md: '0.375rem',
			lg: '0.5rem',
		},
	}),
};

export default createTheme;
