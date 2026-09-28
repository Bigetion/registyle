/**
 * Base configuration for a variant component
 */
export interface VariantConfig<V extends Record<string, Record<string, any>> = {}> {
	/** Base styles applied to all variants */
	base?: Record<string, any>;
	
	/** Variant definitions with their options */
	variants?: V;
	
	/** Compound variants for specific combinations */
	compoundVariants?: CompoundVariant<V>[];
	
	/** Default variant values */
	defaultVariants?: {
		[K in keyof V]?: keyof V[K];
	};
}

/**
 * Compound variant definition
 */
export interface CompoundVariant<V extends Record<string, Record<string, any>>> {
	/** Conditions that must match */
	[K: string]: any;
	
	/** Styles to apply when conditions match */
	styles?: Record<string, any>;
	
	/** Alternative to styles */
	class?: string;
	className?: string;
}

/**
 * Variant component instance
 */
export interface VariantComponent<V extends Record<string, Record<string, any>>> {
	/** Compose variant classes based on props */
	compose(props?: Partial<{
		[K in keyof V]: keyof V[K];
	}>): string[];
	
	/** Convert to registration format */
	toRegistration(name: string): Record<string, any>;
	
	/** Convert to manifest classes format */
	toManifest(name: string): Record<string, any>;
	
	/** Original config */
	config: VariantConfig<V>;
}

/**
 * Variant props type helper
 */
export type VariantProps<V extends Record<string, Record<string, any>>> = Partial<{
	[K in keyof V]: keyof V[K];
}>;

/**
 * Create a variant-based component
 */
export function createVariants<V extends Record<string, Record<string, any>>>(
	config: VariantConfig<V>
): VariantComponent<V>;

/**
 * Helper to create compound variant definitions
 */
export function compound<V extends Record<string, Record<string, any>>>(
	conditions: Partial<{
		[K in keyof V]: keyof V[K];
	}>,
	styles: Record<string, any>
): CompoundVariant<V>;

/**
 * Type-safe variant config builder
 */
export function defineVariants<V extends Record<string, Record<string, any>>>(
	config: VariantConfig<V>
): VariantConfig<V>;

/**
 * Merge multiple variant configs
 */
export function mergeVariants<
	V1 extends Record<string, Record<string, any>>,
	V2 extends Record<string, Record<string, any>>
>(
	...configs: VariantConfig<any>[]
): VariantConfig<V1 & V2>;

/**
 * Create a reusable variant preset
 */
export function createVariantPreset<T extends Record<string, any>>(
	variants: T
): { variants: T };

/**
 * Common variant presets
 */
export const variantPresets: {
	size: {
		xs: Record<string, any>;
		sm: Record<string, any>;
		md: Record<string, any>;
		lg: Record<string, any>;
		xl: Record<string, any>;
	};
	variant: {
		primary: Record<string, any>;
		secondary: Record<string, any>;
		outline: Record<string, any>;
		ghost: Record<string, any>;
		danger: Record<string, any>;
		success: Record<string, any>;
	};
	state: {
		default: Record<string, any>;
		disabled: Record<string, any>;
		loading: Record<string, any>;
	};
	rounded: {
		none: Record<string, any>;
		sm: Record<string, any>;
		md: Record<string, any>;
		lg: Record<string, any>;
		xl: Record<string, any>;
		full: Record<string, any>;
	};
	shadow: {
		none: Record<string, any>;
		sm: Record<string, any>;
		md: Record<string, any>;
		lg: Record<string, any>;
		xl: Record<string, any>;
	};
};

/**
 * Button component variants
 */
export interface ButtonVariants {
	size: typeof variantPresets.size;
	variant: typeof variantPresets.variant;
	rounded: typeof variantPresets.rounded;
}

/**
 * Create a pre-configured button component
 */
export function createButton(
	customConfig?: Partial<VariantConfig<ButtonVariants>>
): VariantComponent<ButtonVariants>;

/**
 * Apply variants to a base class
 */
export function applyVariants(
	baseClass: string,
	variantClasses: Record<string, Record<string, any>>,
	props?: Record<string, any>
): string;

declare const variants: {
	createVariants: typeof createVariants;
	compound: typeof compound;
	defineVariants: typeof defineVariants;
	mergeVariants: typeof mergeVariants;
	createVariantPreset: typeof createVariantPreset;
	variantPresets: typeof variantPresets;
	createButton: typeof createButton;
	applyVariants: typeof applyVariants;
};

export default variants;
