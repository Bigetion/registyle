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
		compoundVariants.forEach((compound) => {
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

export default {
	createVariants,
	compound,
	mergeVariants,
};
