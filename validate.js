/**
 * Validation and error handling for registyle
 */

const VALID_CSS_PROPERTIES = new Set([
	// Layout
	'display', 'position', 'top', 'right', 'bottom', 'left', 'float', 'clear', 'z-index', 'zIndex',
	'overflow', 'overflow-x', 'overflowX', 'overflow-y', 'overflowY', 'visibility', 'clip', 'clip-path', 'clipPath',
	// Flexbox
	'flex', 'flex-direction', 'flexDirection', 'flex-wrap', 'flexWrap', 'flex-flow', 'flexFlow',
	'justify-content', 'justifyContent', 'align-items', 'alignItems', 'align-content', 'alignContent',
	'align-self', 'alignSelf', 'order', 'flex-grow', 'flexGrow', 'flex-shrink', 'flexShrink',
	'flex-basis', 'flexBasis', 'gap', 'row-gap', 'rowGap', 'column-gap', 'columnGap',
	// Grid
	'grid', 'grid-template', 'gridTemplate', 'grid-template-columns', 'gridTemplateColumns',
	'grid-template-rows', 'gridTemplateRows', 'grid-template-areas', 'gridTemplateAreas',
	'grid-column', 'gridColumn', 'grid-row', 'gridRow', 'grid-area', 'gridArea',
	'grid-auto-columns', 'gridAutoColumns', 'grid-auto-rows', 'gridAutoRows', 'grid-auto-flow', 'gridAutoFlow',
	// Spacing
	'margin', 'margin-top', 'marginTop', 'margin-right', 'marginRight', 'margin-bottom', 'marginBottom',
	'margin-left', 'marginLeft', 'padding', 'padding-top', 'paddingTop', 'padding-right', 'paddingRight',
	'padding-bottom', 'paddingBottom', 'padding-left', 'paddingLeft',
	// Sizing
	'width', 'height', 'min-width', 'minWidth', 'min-height', 'minHeight', 'max-width', 'maxWidth',
	'max-height', 'maxHeight', 'box-sizing', 'boxSizing',
	// Typography
	'font', 'font-family', 'fontFamily', 'font-size', 'fontSize', 'font-weight', 'fontWeight',
	'font-style', 'fontStyle', 'line-height', 'lineHeight', 'letter-spacing', 'letterSpacing',
	'text-align', 'textAlign', 'text-decoration', 'textDecoration', 'text-transform', 'textTransform',
	'text-indent', 'textIndent', 'text-overflow', 'textOverflow', 'white-space', 'whiteSpace',
	'word-break', 'wordBreak', 'word-wrap', 'wordWrap', 'word-spacing', 'wordSpacing',
	'vertical-align', 'verticalAlign', 'color',
	// Backgrounds
	'background', 'background-color', 'backgroundColor', 'background-image', 'backgroundImage',
	'background-position', 'backgroundPosition', 'background-size', 'backgroundSize',
	'background-repeat', 'backgroundRepeat', 'background-attachment', 'backgroundAttachment',
	'background-clip', 'backgroundClip', 'background-origin', 'backgroundOrigin',
	// Borders
	'border', 'border-width', 'borderWidth', 'border-style', 'borderStyle', 'border-color', 'borderColor',
	'border-top', 'borderTop', 'border-right', 'borderRight', 'border-bottom', 'borderBottom',
	'border-left', 'borderLeft', 'border-radius', 'borderRadius', 'border-top-left-radius', 'borderTopLeftRadius',
	'border-top-right-radius', 'borderTopRightRadius', 'border-bottom-left-radius', 'borderBottomLeftRadius',
	'border-bottom-right-radius', 'borderBottomRightRadius', 'outline', 'outline-width', 'outlineWidth',
	'outline-style', 'outlineStyle', 'outline-color', 'outlineColor', 'outline-offset', 'outlineOffset',
	// Effects
	'opacity', 'box-shadow', 'boxShadow', 'text-shadow', 'textShadow', 'filter', 'backdrop-filter', 'backdropFilter',
	// Transforms
	'transform', 'transform-origin', 'transformOrigin', 'transform-style', 'transformStyle',
	'perspective', 'perspective-origin', 'perspectiveOrigin', 'backface-visibility', 'backfaceVisibility',
	// Transitions
	'transition', 'transition-property', 'transitionProperty', 'transition-duration', 'transitionDuration',
	'transition-timing-function', 'transitionTimingFunction', 'transition-delay', 'transitionDelay',
	// Animations
	'animation', 'animation-name', 'animationName', 'animation-duration', 'animationDuration',
	'animation-timing-function', 'animationTimingFunction', 'animation-delay', 'animationDelay',
	'animation-iteration-count', 'animationIterationCount', 'animation-direction', 'animationDirection',
	'animation-fill-mode', 'animationFillMode', 'animation-play-state', 'animationPlayState',
	// Miscellaneous
	'cursor', 'pointer-events', 'pointerEvents', 'user-select', 'userSelect', 'resize',
	'content', 'list-style', 'listStyle', 'list-style-type', 'listStyleType', 'table-layout', 'tableLayout',
	'border-collapse', 'borderCollapse', 'border-spacing', 'borderSpacing', 'caption-side', 'captionSide',
	'empty-cells', 'emptyCells', 'object-fit', 'objectFit', 'object-position', 'objectPosition',
	'will-change', 'willChange', 'contain', 'isolation', 'mix-blend-mode', 'mixBlendMode',
	'background-blend-mode', 'backgroundBlendMode', 'aspect-ratio', 'aspectRatio',
	'container', 'container-type', 'containerType', 'container-name', 'containerName',
]);

const VARIANT_KEYS = new Set([
	'hover', 'focus', 'active', 'disabled', 'visited', 'checked', 'required', 'invalid', 'valid',
	'empty', 'enabled', 'indeterminate', 'focus-within', 'focus-visible', 'first', 'last', 'odd',
	'even', 'placeholder', 'before', 'after', 'selection', 'marker', 'file', 'backdrop',
	'dark', 'light', 'motion-safe', 'motion-reduce', 'print', 'contrast-more', 'contrast-less',
	'portrait', 'landscape', 'group-hover', 'group-focus', 'group-active', 'group-focus-within',
	'group-focus-visible', 'group-disabled', 'group-checked', 'peer-hover', 'peer-focus',
	'peer-active', 'peer-focus-within', 'peer-focus-visible', 'peer-disabled', 'peer-checked',
	'peer-placeholder-shown', 'sm', 'md', 'lg', 'xl', '2xl',
]);

const SPECIAL_KEYS = new Set(['tw', '_', 'extend', 'base', 'modifiers', 'variants', 'layer', 'important']);

/**
 * Validation error class
 */
export class ValidationError extends Error {
	constructor(message, context = {}) {
		super(message);
		this.name = 'ValidationError';
		this.context = context;
	}
}

/**
 * Validation options
 */
const defaultOptions = {
	strict: false,
	warnUnknownProperties: true,
	warnConflicts: true,
	allowArbitrary: true,
};

/**
 * Check if a key is a valid CSS property
 */
function isValidCssProperty(key) {
	// Custom properties (CSS variables)
	if (key.startsWith('--')) return true;
	
	// Vendor prefixes
	if (key.startsWith('-webkit-') || key.startsWith('-moz-') || 
	    key.startsWith('-ms-') || key.startsWith('-o-')) return true;
	
	return VALID_CSS_PROPERTIES.has(key);
}

/**
 * Check if key is a valid nested selector
 */
function isValidSelector(key) {
	return key.startsWith('&') || key.startsWith('.') || 
	       key.startsWith(':') || key.startsWith('[') || 
	       key.startsWith('@');
}

/**
 * Validate a single registration config
 */
export function validateConfig(name, config, options = {}) {
	const opts = { ...defaultOptions, ...options };
	const errors = [];
	const warnings = [];
	
	if (!config || typeof config !== 'object' || Array.isArray(config)) {
		errors.push(`Config for "${name}" must be an object`);
		return { errors, warnings, valid: false };
	}
	
	// Validate keys
	function validateKeys(obj, path = '') {
		for (const [key, value] of Object.entries(obj)) {
			const fullPath = path ? `${path}.${key}` : key;
			
			// Skip special keys
			if (SPECIAL_KEYS.has(key)) continue;
			
			// Check variants
			if (VARIANT_KEYS.has(key)) {
				if (value && typeof value === 'object') {
					validateKeys(value, fullPath);
				}
				continue;
			}
			
			// Check selectors
			if (isValidSelector(key)) {
				if (value && typeof value === 'object') {
					validateKeys(value, fullPath);
				}
				continue;
			}
			
			// Check CSS properties
			if (!isValidCssProperty(key)) {
				if (opts.warnUnknownProperties) {
					warnings.push(`Unknown property "${key}" in "${fullPath}". Did you mean to use camelCase?`);
				}
			}
			
			// Validate nested objects
			if (value && typeof value === 'object' && !Array.isArray(value)) {
				validateKeys(value, fullPath);
			}
		}
	}
	
	validateKeys(config, name);
	
	// Check for conflicts between tw and CSS properties
	if (opts.warnConflicts && config.tw) {
		const cssProps = Object.keys(config).filter(k => isValidCssProperty(k));
		if (cssProps.length > 0) {
			warnings.push(
				`Mixing "tw" utilities with CSS properties in "${name}". ` +
				`Properties: ${cssProps.join(', ')}. This may cause conflicts.`
			);
		}
	}
	
	// Validate base/modifiers structure
	if (config.base || config.modifiers) {
		if (config.modifiers && typeof config.modifiers !== 'object') {
			errors.push(`"${name}.modifiers" must be an object`);
		}
		
		if (config.modifiers) {
			for (const [modName, modConfig] of Object.entries(config.modifiers)) {
				if (modConfig && typeof modConfig === 'object') {
					validateKeys(modConfig, `${name}.modifiers.${modName}`);
				}
			}
		}
	}
	
	// Validate variants structure
	if (config.variants) {
		if (typeof config.variants !== 'object') {
			errors.push(`"${name}.variants" must be an object`);
		} else {
			for (const [variantType, variantValues] of Object.entries(config.variants)) {
				if (typeof variantValues !== 'object') {
					errors.push(`"${name}.variants.${variantType}" must be an object`);
				}
			}
		}
	}
	
	return {
		errors,
		warnings,
		valid: errors.length === 0,
	};
}

/**
 * Validate entire manifest
 */
export function validateManifest(manifest, options = {}) {
	const opts = { ...defaultOptions, ...options };
	const allErrors = [];
	const allWarnings = [];
	
	if (!manifest || typeof manifest !== 'object') {
		throw new ValidationError('Manifest must be an object');
	}
	
	// Validate classes
	if (manifest.classes) {
		if (typeof manifest.classes !== 'object' || Array.isArray(manifest.classes)) {
			throw new ValidationError('manifest.classes must be an object');
		}
		
		for (const [name, config] of Object.entries(manifest.classes)) {
			const result = validateConfig(name, config, opts);
			allErrors.push(...result.errors.map(e => `classes.${e}`));
			allWarnings.push(...result.warnings.map(w => `classes.${w}`));
		}

		const state = new Map();
		const path = [];
		function visitClass(name) {
			if (state.get(name) === 'complete') return;
			if (state.get(name) === 'visiting') {
				const cycleStart = path.indexOf(name);
				allErrors.push(`classes.Circular extend detected: ${[...path.slice(cycleStart), name].join(' -> ')}`);
				return;
			}

			state.set(name, 'visiting');
			path.push(name);
			const config = manifest.classes[name];
			const parents = Array.isArray(config?.extend)
				? config.extend
				: typeof config?.extend === 'string' ? [config.extend] : [];
			for (const parent of parents) {
				if (typeof parent === 'string' && Object.hasOwn(manifest.classes, parent)) visitClass(parent);
			}
			path.pop();
			state.set(name, 'complete');
		}

		for (const name of Object.keys(manifest.classes)) visitClass(name);
	}
	
	// Validate groups
	if (manifest.groups) {
		if (typeof manifest.groups !== 'object' || Array.isArray(manifest.groups)) {
			throw new ValidationError('manifest.groups must be an object');
		}
		
		for (const [groupName, components] of Object.entries(manifest.groups)) {
			if (typeof components !== 'object') {
				allErrors.push(`groups.${groupName} must be an object`);
				continue;
			}
			
			for (const [componentName, config] of Object.entries(components)) {
				const result = validateConfig(`${groupName}.${componentName}`, config, opts);
				allErrors.push(...result.errors.map(e => `groups.${e}`));
				allWarnings.push(...result.warnings.map(w => `groups.${w}`));
			}
		}
	}
	
	const valid = allErrors.length === 0;
	
	// Throw in strict mode
	if (opts.strict && !valid) {
		throw new ValidationError(
			`Validation failed:\n${allErrors.join('\n')}`,
			{ errors: allErrors, warnings: allWarnings }
		);
	}
	
	return {
		valid,
		errors: allErrors,
		warnings: allWarnings,
	};
}

/**
 * Detect property conflicts
 */
export function detectConflicts(config) {
	const conflicts = [];
	
	function checkObject(obj, path = '') {
		const properties = new Map();
		
		for (const [key, value] of Object.entries(obj)) {
			// Skip special keys and selectors
			if (SPECIAL_KEYS.has(key) || VARIANT_KEYS.has(key) || isValidSelector(key)) {
				if (value && typeof value === 'object') {
					checkObject(value, path ? `${path}.${key}` : key);
				}
				continue;
			}
			
			// Track CSS properties
			if (isValidCssProperty(key)) {
				const normalized = key.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
				
				if (properties.has(normalized)) {
					conflicts.push({
						property: key,
						path: path || 'root',
						previousValue: properties.get(normalized),
						currentValue: value,
					});
				} else {
					properties.set(normalized, value);
				}
			}
		}
	}
	
	checkObject(config);
	return conflicts;
}

/**
 * Suggest fixes for common mistakes
 */
export function suggestFixes(error) {
	const suggestions = [];
	
	// Kebab-case to camelCase
	if (error.includes('Unknown property') && error.includes('-')) {
		const match = error.match(/"([^"]+)"/);
		if (match) {
			const kebab = match[1];
			const camel = kebab.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
			suggestions.push(`Try using camelCase: "${camel}"`);
		}
	}
	
	// Common typos
	const typos = {
		'colour': 'color',
		'centre': 'center',
		'grey': 'gray',
		'marginn': 'margin',
		'paddinng': 'padding',
	};
	
	for (const [typo, fix] of Object.entries(typos)) {
		if (error.toLowerCase().includes(typo)) {
			suggestions.push(`Did you mean "${fix}"?`);
		}
	}
	
	return suggestions;
}

/**
 * Create a validation reporter
 */
export function createReporter(options = {}) {
	const { onError, onWarning, throwOnError = false } = options;
	
	return {
		report(result) {
			if (result.errors.length > 0) {
				const message = `Validation errors:\n${result.errors.join('\n')}`;
				
				if (onError) {
					onError(message, result);
				} else {
					console.error(`[registyle]`, message);
				}
				
				if (throwOnError) {
					throw new ValidationError(message, result);
				}
			}
			
			if (result.warnings.length > 0) {
				const message = `Validation warnings:\n${result.warnings.join('\n')}`;
				
				if (onWarning) {
					onWarning(message, result);
				} else {
					console.warn(`[registyle]`, message);
				}
			}
		},
		
		validate(manifest, opts) {
			const result = validateManifest(manifest, opts);
			this.report(result);
			return result;
		},
	};
}

export default {
	validateConfig,
	validateManifest,
	detectConflicts,
	suggestFixes,
	createReporter,
	ValidationError,
};
