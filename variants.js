/**
 * Variants composition system for registyle
 * Inspired by CVA (Class Variance Authority) but integrated with registyle
 */

/**
 * Create a variant-based component registration
 */
export function createVariants(config) {
	const {
		base = {},
		variants = {},
		compoundVariants = [],
		defaultVariants = {},
	} = config;
	const getCompoundName = (conditions) => Object.entries(conditions)
		.map(([key, value]) => `${key}-${value}`)
		.join('-');
	const qualifyClass = (componentName, suffix) => componentName ? `${componentName}-${suffix}` : suffix;

	/**
	 * Generate variant classes and compose them
	 */
	function compose(props = {}, componentName) {
		const activeProps = { ...defaultVariants, ...props };
		const classes = [];

		for (const variantKey of Object.keys(variants)) {
			const variantValue = activeProps[variantKey];
			if (variantValue === undefined || variantValue === null) continue;
			const optionName = String(variantValue);
			if (!Object.hasOwn(variants[variantKey], optionName)) continue;
			classes.push(qualifyClass(componentName, `${variantKey}-${optionName}`));
		}

		// Check compound variants
		for (const compound of compoundVariants) {
			const { class: compoundClass, className, styles, ...conditions } = compound;
			const matches = Object.entries(conditions).every(
				([key, value]) => activeProps[key] === value
			);
			
			if (!matches) continue;
			const modifierName = getCompoundName(conditions);
			if (modifierName && styles && typeof styles === 'object' && !Array.isArray(styles)) {
				classes.push(qualifyClass(componentName, modifierName));
			}
			const customClass = compoundClass || className;
			if (customClass) classes.push(customClass);
		}

		return classes;
	}

	/**
	 * Generate the registration config with all variant combinations
	 */
	function toRegistration(name) {
		const registration = {
			base: { ...base },
			modifiers: {},
		};

		// Generate modifiers for each variant value
		for (const [variantKey, variantOptions] of Object.entries(variants)) {
			for (const [optionKey, optionStyles] of Object.entries(variantOptions)) {
				const modifierName = `${variantKey}-${optionKey}`;
				registration.modifiers[modifierName] = optionStyles;
			}
		}

		// Generate compound variant modifiers
		compoundVariants.forEach((compound, index) => {
			const { class: compoundClass, className, styles, ...conditions } = compound;
			const modifierName = getCompoundName(conditions);
			if (modifierName && styles && typeof styles === 'object' && !Array.isArray(styles)) {
				registration.modifiers[modifierName] = styles;
			}
		});

		return { [name]: registration };
	}

	/**
	 * Convert to manifest classes format
	 */
	function toManifest(name) {
		const classes = {};
		
		// Base class
		classes[name] = { ...base };

		// Individual variant classes
		for (const [variantKey, variantOptions] of Object.entries(variants)) {
			for (const [optionKey, optionStyles] of Object.entries(variantOptions)) {
				const className = `${name}-${variantKey}-${optionKey}`;
				classes[className] = optionStyles;
			}
		}

		// Compound variant classes
		compoundVariants.forEach((compound) => {
			const { styles, class: compoundClass, className, ...conditions } = compound;
			const modifierName = getCompoundName(conditions);
			if (modifierName && styles && typeof styles === 'object' && !Array.isArray(styles)) {
				classes[`${name}-${modifierName}`] = styles;
			}
		});

		return classes;
	}

	return {
		compose,
		toRegistration,
		toManifest,
		config,
	};
}

/**
 * Helper to create compound variants more easily
 */
export function compound(conditions, styles) {
	return { ...conditions, styles };
}

/**
 * Type-safe variant props builder
 */
export function defineVariants(config) {
	return config;
}

/**
 * Merge multiple variant configs
 */
export function mergeVariants(...configs) {
	const merged = {
		base: {},
		variants: {},
		compoundVariants: [],
		defaultVariants: {},
	};

	for (const config of configs) {
		// Merge base styles
		if (config.base) {
			merged.base = { ...merged.base, ...config.base };
		}

		// Merge variants
		if (config.variants) {
			for (const [key, options] of Object.entries(config.variants)) {
				if (!merged.variants[key]) {
					merged.variants[key] = {};
				}
				merged.variants[key] = { ...merged.variants[key], ...options };
			}
		}

		// Merge compound variants
		if (config.compoundVariants) {
			merged.compoundVariants.push(...config.compoundVariants);
		}

		// Merge default variants
		if (config.defaultVariants) {
			merged.defaultVariants = { ...merged.defaultVariants, ...config.defaultVariants };
		}
	}

	return merged;
}

/**
 * Create a variants preset for reuse
 */
export function createVariantPreset(variants) {
	return { variants };
}

/**
 * Common variant presets
 */
export const variantPresets = {
	// Size variants
	size: {
		xs: { padding: '0.25rem 0.5rem', fontSize: '0.75rem', lineHeight: '1rem' },
		sm: { padding: '0.375rem 0.75rem', fontSize: '0.875rem', lineHeight: '1.25rem' },
		md: { padding: '0.5rem 1rem', fontSize: '1rem', lineHeight: '1.5rem' },
		lg: { padding: '0.625rem 1.25rem', fontSize: '1.125rem', lineHeight: '1.75rem' },
		xl: { padding: '0.75rem 1.5rem', fontSize: '1.25rem', lineHeight: '1.75rem' },
	},

	// Color variants
	variant: {
		primary: {
			backgroundColor: '#3b82f6',
			color: '#ffffff',
			'&:hover': { backgroundColor: '#2563eb' },
		},
		secondary: {
			backgroundColor: '#6b7280',
			color: '#ffffff',
			'&:hover': { backgroundColor: '#4b5563' },
		},
		outline: {
			backgroundColor: 'transparent',
			border: '1px solid #d1d5db',
			color: '#374151',
			'&:hover': { backgroundColor: '#f3f4f6' },
		},
		ghost: {
			backgroundColor: 'transparent',
			color: '#374151',
			'&:hover': { backgroundColor: '#f3f4f6' },
		},
		danger: {
			backgroundColor: '#ef4444',
			color: '#ffffff',
			'&:hover': { backgroundColor: '#dc2626' },
		},
		success: {
			backgroundColor: '#22c55e',
			color: '#ffffff',
			'&:hover': { backgroundColor: '#16a34a' },
		},
	},

	// State variants
	state: {
		default: {},
		disabled: {
			opacity: '0.5',
			cursor: 'not-allowed',
			pointerEvents: 'none',
		},
		loading: {
			opacity: '0.7',
			cursor: 'wait',
		},
	},

	// Rounding variants
	rounded: {
		none: { borderRadius: '0' },
		sm: { borderRadius: '0.125rem' },
		md: { borderRadius: '0.375rem' },
		lg: { borderRadius: '0.5rem' },
		xl: { borderRadius: '0.75rem' },
		full: { borderRadius: '9999px' },
	},

	// Shadow variants
	shadow: {
		none: { boxShadow: 'none' },
		sm: { boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)' },
		md: { boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' },
		lg: { boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' },
		xl: { boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' },
	},
};

/**
 * Create a button component with variants
 */
export function createButton(customConfig = {}) {
	return createVariants({
		base: {
			display: 'inline-flex',
			alignItems: 'center',
			justifyContent: 'center',
			fontWeight: '500',
			transition: 'all 150ms',
			cursor: 'pointer',
			border: '0',
			'&:focus': {
				outline: '2px solid #3b82f6',
				outlineOffset: '2px',
			},
			...customConfig.base,
		},
		variants: {
			size: variantPresets.size,
			variant: variantPresets.variant,
			rounded: variantPresets.rounded,
			...customConfig.variants,
		},
		compoundVariants: [
			// Size + variant combinations
			{
				size: 'xs',
				variant: 'outline',
				styles: { borderWidth: '1px' },
			},
			{
				size: 'sm',
				variant: 'outline',
				styles: { borderWidth: '1px' },
			},
			...(customConfig.compoundVariants || []),
		],
		defaultVariants: {
			size: 'md',
			variant: 'primary',
			rounded: 'md',
			...customConfig.defaultVariants,
		},
	});
}

/**
 * Apply variants to a base class using cx helper
 */
export function applyVariants(baseClass, variantClasses, props = {}) {
	const classes = [baseClass];
	
	for (const [key, value] of Object.entries(props)) {
		if (value && variantClasses[key]?.[value]) {
			classes.push(`${baseClass}-${key}-${value}`);
		}
	}
	
	return classes.filter(Boolean).join(' ');
}

export default {
	createVariants,
	compound,
	defineVariants,
	mergeVariants,
	createVariantPreset,
	variantPresets,
	createButton,
	applyVariants,
};
