/**
 * Preset configuration
 */
export interface PresetConfig {
	/** Preset name */
	name: string;
	
	/** Preset description */
	description?: string;
	
	/** Theme configuration */
	theme?: Record<string, any>;
	
	/** Component classes */
	classes?: Record<string, any>;
	
	/** Component groups */
	groups?: Record<string, any>;
	
	/** Variant definitions */
	variants?: Record<string, any>;
	
	/** Presets to extend */
	extend?: string | string[];
}

/**
 * Preset instance
 */
export interface Preset extends PresetConfig {}

/**
 * Preset list item
 */
export interface PresetInfo {
	id: string;
	name: string;
	description?: string;
}

/**
 * Create a preset from configuration
 */
export function createPreset(config: PresetConfig): Preset;

/**
 * Merge multiple presets
 */
export function mergePresets(...presets: Preset[]): {
	classes: Record<string, any>;
	groups: Record<string, any>;
	variants: Record<string, any>;
	theme: Record<string, any>;
};

/**
 * Apply preset to a manifest
 */
export function applyPreset(
	manifest: {
		classes?: Record<string, any>;
		groups?: Record<string, any>;
		theme?: Record<string, any>;
		variants?: Record<string, any>;
		[key: string]: any;
	},
	preset: Preset
): {
	classes: Record<string, any>;
	groups: Record<string, any>;
	theme?: Record<string, any>;
	variants?: Record<string, any>;
	[key: string]: any;
};

/**
 * Shadcn UI inspired preset
 */
export const shadcnPreset: Preset;

/**
 * Material Design inspired preset
 */
export const materialPreset: Preset;

/**
 * Bootstrap inspired preset
 */
export const bootstrapPreset: Preset;

/**
 * Minimal/Clean preset
 */
export const minimalPreset: Preset;

/**
 * All built-in presets
 */
export const presets: {
	shadcn: Preset;
	material: Preset;
	bootstrap: Preset;
	minimal: Preset;
};

/**
 * Get preset by name
 */
export function getPreset(name: keyof typeof presets): Preset | undefined;

/**
 * List all available presets
 */
export function listPresets(): PresetInfo[];

declare const presetsModule: {
	createPreset: typeof createPreset;
	mergePresets: typeof mergePresets;
	applyPreset: typeof applyPreset;
	getPreset: typeof getPreset;
	listPresets: typeof listPresets;
	presets: typeof presets;
	shadcnPreset: typeof shadcnPreset;
	materialPreset: typeof materialPreset;
	bootstrapPreset: typeof bootstrapPreset;
	minimalPreset: typeof minimalPreset;
};

export default presetsModule;
