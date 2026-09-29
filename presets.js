/**
 * Preset system for registyle - reusable component configurations
 */

import { createTheme } from './theme.js';
import { createVariants, variantPresets } from './variants.js';

function isRecord(value) {
	return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function mergeRecords(base = {}, override = {}) {
	const result = isRecord(base) ? { ...base } : {};
	if (!isRecord(override)) return result;

	for (const [key, value] of Object.entries(override)) {
		result[key] = isRecord(value) && isRecord(result[key])
			? mergeRecords(result[key], value)
			: isRecord(value) ? mergeRecords({}, value) : value;
	}
	return result;
}

function resolveThemeFactories(value, theme) {
	if (typeof value === 'function') return resolveThemeFactories(value(theme), theme);
	if (Array.isArray(value)) return value.map((item) => resolveThemeFactories(item, theme));
	if (!isRecord(value)) return value;
	return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, resolveThemeFactories(item, theme)]));
}

/**
 * Create a preset from configuration
 */
export function createPreset(config) {
	return {
		name: config.name,
		description: config.description,
		theme: config.theme,
		classes: config.classes || {},
		groups: config.groups || {},
		variants: config.variants || {},
		extend: config.extend,
	};
}

/**
 * Merge multiple presets
 */
export function mergePresets(...presets) {
	const merged = {
		classes: {},
		groups: {},
		variants: {},
		theme: {},
	};

	for (const preset of presets) {
		merged.classes = mergeRecords(merged.classes, preset.classes);
		merged.groups = mergeRecords(merged.groups, preset.groups);
		merged.variants = mergeRecords(merged.variants, preset.variants);
		merged.theme = mergeRecords(merged.theme, preset.theme);
	}

	return merged;
}

/**
 * Apply preset to a manifest
 */
export function applyPreset(manifest, preset) {
	const themeTokens = mergeRecords(preset.theme, manifest.theme);
	const theme = createTheme(themeTokens);
	const result = {
		...manifest,
		classes: mergeRecords(
			resolveThemeFactories(preset.classes, theme),
			resolveThemeFactories(manifest.classes, theme),
		),
		groups: mergeRecords(
			resolveThemeFactories(preset.groups, theme),
			resolveThemeFactories(manifest.groups, theme),
		),
	};

	for (const key of ['theme', 'variants']) {
		if (Object.hasOwn(preset, key) || Object.hasOwn(manifest, key)) {
			result[key] = key === 'theme' ? themeTokens : mergeRecords(preset[key], manifest[key]);
		}
	}

	return result;
}

/**
 * Built-in presets
 */

/**
 * Shadcn-inspired preset
 */
export const shadcnPreset = createPreset({
	name: 'shadcn',
	description: 'Shadcn UI inspired component styles',
	theme: {
		colors: {
			border: '#e5e7eb',
			input: '#e5e7eb',
			ring: '#3b82f6',
			background: '#ffffff',
			foreground: '#0a0a0a',
			primary: {
				DEFAULT: '#0a0a0a',
				foreground: '#fafafa',
			},
			secondary: {
				DEFAULT: '#f4f4f5',
				foreground: '#0a0a0a',
			},
			destructive: {
				DEFAULT: '#ef4444',
				foreground: '#fafafa',
			},
			muted: {
				DEFAULT: '#f4f4f5',
				foreground: '#737373',
			},
			accent: {
				DEFAULT: '#f4f4f5',
				foreground: '#0a0a0a',
			},
		},
	},
	classes: {
		button: {
			base: {
				display: 'inline-flex',
				alignItems: 'center',
				justifyContent: 'center',
				whiteSpace: 'nowrap',
				borderRadius: '0.375rem',
				fontSize: '0.875rem',
				fontWeight: '500',
				transition: 'colors 150ms',
				'&:focus-visible': {
					outline: '2px solid',
					outlineColor: '#3b82f6',
					outlineOffset: '2px',
				},
				'&:disabled': {
					pointerEvents: 'none',
					opacity: '0.5',
				},
			},
			modifiers: {
				default: {
					backgroundColor: '#0a0a0a',
					color: '#fafafa',
					'&:hover': { backgroundColor: '#0a0a0a', opacity: '0.9' },
				},
				destructive: {
					backgroundColor: '#ef4444',
					color: '#fafafa',
					'&:hover': { backgroundColor: '#dc2626' },
				},
				outline: {
					border: '1px solid #e5e7eb',
					backgroundColor: 'transparent',
					'&:hover': { backgroundColor: '#f9fafb', color: '#0a0a0a' },
				},
				secondary: {
					backgroundColor: '#f4f4f5',
					color: '#0a0a0a',
					'&:hover': { backgroundColor: '#e4e4e7' },
				},
				ghost: {
					'&:hover': { backgroundColor: '#f9fafb', color: '#0a0a0a' },
				},
				link: {
					color: '#0a0a0a',
					textDecoration: 'underline',
					textUnderlineOffset: '4px',
					'&:hover': { textDecoration: 'none' },
				},
				sm: { height: '2.25rem', borderRadius: '0.375rem', padding: '0 0.75rem' },
				md: { height: '2.5rem', padding: '0 1rem' },
				lg: { height: '2.75rem', borderRadius: '0.375rem', padding: '0 2rem' },
				icon: { height: '2.5rem', width: '2.5rem' },
			},
		},
		input: {
			display: 'flex',
			height: '2.5rem',
			width: '100%',
			borderRadius: '0.375rem',
			border: '1px solid #e5e7eb',
			backgroundColor: 'transparent',
			padding: '0.5rem 0.75rem',
			fontSize: '0.875rem',
			'&:focus-visible': {
				outline: '2px solid',
				outlineColor: '#3b82f6',
				outlineOffset: '2px',
			},
			'&:disabled': {
				cursor: 'not-allowed',
				opacity: '0.5',
			},
			'&::placeholder': {
				color: '#a1a1aa',
			},
		},
		card: {
			borderRadius: '0.5rem',
			border: '1px solid #e5e7eb',
			backgroundColor: '#ffffff',
			color: '#0a0a0a',
			boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
		},
		badge: {
			base: {
				display: 'inline-flex',
				alignItems: 'center',
				borderRadius: '9999px',
				padding: '0 0.625rem',
				fontSize: '0.75rem',
				fontWeight: '600',
				transition: 'colors 150ms',
			},
			modifiers: {
				default: {
					border: '1px solid transparent',
					backgroundColor: '#0a0a0a',
					color: '#fafafa',
					'&:hover': { backgroundColor: '#0a0a0a', opacity: '0.8' },
				},
				secondary: {
					border: '1px solid transparent',
					backgroundColor: '#f4f4f5',
					color: '#0a0a0a',
					'&:hover': { backgroundColor: '#f4f4f5', opacity: '0.8' },
				},
				destructive: {
					border: '1px solid transparent',
					backgroundColor: '#ef4444',
					color: '#fafafa',
					'&:hover': { backgroundColor: '#ef4444', opacity: '0.8' },
				},
				outline: {
					color: '#0a0a0a',
					border: '1px solid #e5e7eb',
				},
			},
		},
	},
	groups: {
		card: {
			root: {
				borderRadius: '0.5rem',
				border: '1px solid #e5e7eb',
				backgroundColor: '#ffffff',
				color: '#0a0a0a',
				boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
			},
			header: {
				display: 'flex',
				flexDirection: 'column',
				padding: '1.5rem',
			},
			title: {
				fontSize: '1.5rem',
				fontWeight: '600',
				lineHeight: '1',
				letterSpacing: '-0.025em',
			},
			description: {
				fontSize: '0.875rem',
				color: '#737373',
			},
			content: {
				padding: '1.5rem',
				paddingTop: '0',
			},
			footer: {
				display: 'flex',
				alignItems: 'center',
				padding: '1.5rem',
				paddingTop: '0',
			},
		},
		alert: {
			root: {
				position: 'relative',
				width: '100%',
				borderRadius: '0.5rem',
				border: '1px solid #e5e7eb',
				padding: '1rem',
			},
			title: {
				marginBottom: '0.25rem',
				fontWeight: '500',
				lineHeight: '1',
				letterSpacing: '-0.025em',
			},
			description: {
				fontSize: '0.875rem',
				lineHeight: '1.25rem',
			},
		},
	},
});

/**
 * Material Design inspired preset
 */
export const materialPreset = createPreset({
	name: 'material',
	description: 'Material Design inspired component styles',
	classes: {
		button: {
			base: {
				display: 'inline-flex',
				alignItems: 'center',
				justifyContent: 'center',
				padding: '0.5rem 1rem',
				borderRadius: '0.25rem',
				fontSize: '0.875rem',
				fontWeight: '500',
				textTransform: 'uppercase',
				letterSpacing: '0.05em',
				transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
				'&:focus': {
					outline: 'none',
					boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.5)',
				},
			},
			modifiers: {
				filled: {
					backgroundColor: '#3b82f6',
					color: '#ffffff',
					boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
					'&:hover': {
						backgroundColor: '#2563eb',
						boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
					},
					'&:active': {
						boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
					},
				},
				outlined: {
					border: '1px solid #3b82f6',
					color: '#3b82f6',
					backgroundColor: 'transparent',
					'&:hover': {
						backgroundColor: 'rgba(59, 130, 246, 0.04)',
					},
				},
				text: {
					color: '#3b82f6',
					backgroundColor: 'transparent',
					'&:hover': {
						backgroundColor: 'rgba(59, 130, 246, 0.04)',
					},
				},
			},
		},
		'text-field': {
			position: 'relative',
			display: 'inline-flex',
			flexDirection: 'column',
			'.label': {
				fontSize: '0.75rem',
				color: '#6b7280',
				marginBottom: '0.25rem',
			},
			'.input': {
				padding: '0.75rem 1rem',
				border: '1px solid #d1d5db',
				borderRadius: '0.25rem',
				fontSize: '1rem',
				transition: 'all 200ms',
				'&:focus': {
					outline: 'none',
					borderColor: '#3b82f6',
					boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
				},
			},
		},
		chip: {
			display: 'inline-flex',
			alignItems: 'center',
			height: '2rem',
			padding: '0 0.75rem',
			borderRadius: '1rem',
			fontSize: '0.875rem',
			backgroundColor: '#e5e7eb',
			color: '#374151',
			transition: 'all 150ms',
			'&:hover': {
				backgroundColor: '#d1d5db',
			},
		},
	},
});

/**
 * Bootstrap-inspired preset
 */
export const bootstrapPreset = createPreset({
	name: 'bootstrap',
	description: 'Bootstrap inspired component styles',
	classes: {
		btn: {
			base: {
				display: 'inline-block',
				fontWeight: '400',
				lineHeight: '1.5',
				textAlign: 'center',
				textDecoration: 'none',
				verticalAlign: 'middle',
				cursor: 'pointer',
				userSelect: 'none',
				border: '1px solid transparent',
				padding: '0.375rem 0.75rem',
				fontSize: '1rem',
				borderRadius: '0.375rem',
				transition: 'color 0.15s, background-color 0.15s, border-color 0.15s, box-shadow 0.15s',
			},
			modifiers: {
				primary: {
					color: '#fff',
					backgroundColor: '#0d6efd',
					borderColor: '#0d6efd',
					'&:hover': {
						backgroundColor: '#0b5ed7',
						borderColor: '#0a58ca',
					},
				},
				secondary: {
					color: '#fff',
					backgroundColor: '#6c757d',
					borderColor: '#6c757d',
					'&:hover': {
						backgroundColor: '#5c636a',
						borderColor: '#565e64',
					},
				},
				success: {
					color: '#fff',
					backgroundColor: '#198754',
					borderColor: '#198754',
					'&:hover': {
						backgroundColor: '#157347',
						borderColor: '#146c43',
					},
				},
				danger: {
					color: '#fff',
					backgroundColor: '#dc3545',
					borderColor: '#dc3545',
					'&:hover': {
						backgroundColor: '#bb2d3b',
						borderColor: '#b02a37',
					},
				},
				'outline-primary': {
					color: '#0d6efd',
					borderColor: '#0d6efd',
					'&:hover': {
						color: '#fff',
						backgroundColor: '#0d6efd',
						borderColor: '#0d6efd',
					},
				},
			},
		},
		'form-control': {
			display: 'block',
			width: '100%',
			padding: '0.375rem 0.75rem',
			fontSize: '1rem',
			fontWeight: '400',
			lineHeight: '1.5',
			color: '#212529',
			backgroundColor: '#fff',
			border: '1px solid #ced4da',
			borderRadius: '0.375rem',
			transition: 'border-color 0.15s, box-shadow 0.15s',
			'&:focus': {
				color: '#212529',
				backgroundColor: '#fff',
				borderColor: '#86b7fe',
				outline: '0',
				boxShadow: '0 0 0 0.25rem rgba(13, 110, 253, 0.25)',
			},
		},
	},
});

/**
 * Minimal/Clean preset
 */
export const minimalPreset = createPreset({
	name: 'minimal',
	description: 'Minimal and clean component styles',
	classes: {
		button: {
			base: {
				padding: '0.5rem 1rem',
				fontSize: '0.875rem',
				fontWeight: '500',
				border: 'none',
				borderRadius: '0.25rem',
				cursor: 'pointer',
				transition: 'opacity 150ms',
			},
			modifiers: {
				primary: {
					backgroundColor: '#000',
					color: '#fff',
					'&:hover': { opacity: '0.8' },
				},
				secondary: {
					backgroundColor: '#f5f5f5',
					color: '#000',
					'&:hover': { backgroundColor: '#e5e5e5' },
				},
			},
		},
		input: {
			width: '100%',
			padding: '0.5rem 0.75rem',
			fontSize: '0.875rem',
			border: '1px solid #e5e5e5',
			borderRadius: '0.25rem',
			'&:focus': {
				outline: 'none',
				borderColor: '#000',
			},
		},
	},
});

/**
 * All built-in presets
 */
export const presets = {
	shadcn: shadcnPreset,
	material: materialPreset,
	bootstrap: bootstrapPreset,
	minimal: minimalPreset,
};

/**
 * Get preset by name
 */
export function getPreset(name) {
	return presets[name];
}

/**
 * List all available presets
 */
export function listPresets() {
	return Object.entries(presets).map(([key, preset]) => ({
		id: key,
		name: preset.name,
		description: preset.description,
	}));
}

export default {
	createPreset,
	mergePresets,
	applyPreset,
	getPreset,
	listPresets,
	presets,
	shadcnPreset,
	materialPreset,
	bootstrapPreset,
	minimalPreset,
};
