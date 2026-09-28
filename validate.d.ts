/**
 * Validation error class
 */
export class ValidationError extends Error {
	context: {
		errors?: string[];
		warnings?: string[];
		[key: string]: any;
	};
	
	constructor(message: string, context?: Record<string, any>);
}

/**
 * Validation options
 */
export interface ValidationOptions {
	/** Throw errors instead of returning them (default: false) */
	strict?: boolean;
	/** Warn about unknown CSS properties (default: true) */
	warnUnknownProperties?: boolean;
	/** Warn about conflicts between tw and CSS props (default: true) */
	warnConflicts?: boolean;
	/** Allow arbitrary values in utilities (default: true) */
	allowArbitrary?: boolean;
}

/**
 * Validation result
 */
export interface ValidationResult {
	/** Whether validation passed */
	valid: boolean;
	/** List of error messages */
	errors: string[];
	/** List of warning messages */
	warnings: string[];
}

/**
 * Property conflict information
 */
export interface PropertyConflict {
	/** Property name that conflicts */
	property: string;
	/** Path in config where conflict occurs */
	path: string;
	/** Previous property value */
	previousValue: any;
	/** Current conflicting value */
	currentValue: any;
}

/**
 * Validation reporter options
 */
export interface ReporterOptions {
	/** Custom error handler */
	onError?: (message: string, result: ValidationResult) => void;
	/** Custom warning handler */
	onWarning?: (message: string, result: ValidationResult) => void;
	/** Throw on validation errors */
	throwOnError?: boolean;
}

/**
 * Validation reporter
 */
export interface Reporter {
	/** Report validation results */
	report(result: ValidationResult): void;
	/** Validate and report */
	validate(manifest: any, options?: ValidationOptions): ValidationResult;
}

/**
 * Validate a single registration config
 */
export function validateConfig(
	name: string,
	config: any,
	options?: ValidationOptions
): ValidationResult;

/**
 * Validate entire manifest
 */
export function validateManifest(
	manifest: any,
	options?: ValidationOptions
): ValidationResult;

/**
 * Detect property conflicts in a config
 */
export function detectConflicts(config: any): PropertyConflict[];

/**
 * Suggest fixes for validation errors
 */
export function suggestFixes(error: string): string[];

/**
 * Create a validation reporter
 */
export function createReporter(options?: ReporterOptions): Reporter;

declare const validate: {
	validateConfig: typeof validateConfig;
	validateManifest: typeof validateManifest;
	detectConflicts: typeof detectConflicts;
	suggestFixes: typeof suggestFixes;
	createReporter: typeof createReporter;
	ValidationError: typeof ValidationError;
};

export default validate;
