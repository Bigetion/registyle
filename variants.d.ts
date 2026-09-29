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
	}>, componentName?: string): string[];
	
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
 * Merge multiple variant configs
 */
export function mergeVariants<
	V1 extends Record<string, Record<string, any>>,
	V2 extends Record<string, Record<string, any>>
>(
	...configs: VariantConfig<any>[]
): VariantConfig<V1 & V2>;

declare const variants: {
	createVariants: typeof createVariants;
	compound: typeof compound;
	mergeVariants: typeof mergeVariants;
};

export default variants;
