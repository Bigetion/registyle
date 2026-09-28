/**
 * CSS optimization utilities for registyle
 * Provides minification and deduplication without external dependencies
 */

/**
 * Simple CSS minifier - removes unnecessary whitespace and comments
 */
export function minifyCSS(css) {
	return css
		// Remove comments
		.replace(/\/\*[\s\S]*?\*\//g, '')
		// Remove whitespace around special characters
		.replace(/\s*([{}:;,>+~])\s*/g, '$1')
		// Remove whitespace between } and @media/@keyframes
		.replace(/}\s*@/g, '}@')
		// Collapse multiple spaces
		.replace(/\s+/g, ' ')
		// Remove leading/trailing whitespace
		.trim();
}

/**
 * Parse CSS into rules for deduplication analysis
 */
function parseRules(css) {
	const rules = [];
	let depth = 0;
	let currentRule = '';
	let inAtRule = false;
	let atRulePrefix = '';

	for (let i = 0; i < css.length; i++) {
		const char = css[i];
		currentRule += char;

		if (char === '@' && depth === 0) {
			inAtRule = true;
		}

		if (char === '{') {
			depth++;
			if (depth === 1 && inAtRule) {
				atRulePrefix = currentRule.slice(0, -1).trim();
			}
		} else if (char === '}') {
			depth--;
			if (depth === 0) {
				rules.push({
					content: currentRule.trim(),
					atRule: atRulePrefix,
				});
				currentRule = '';
				inAtRule = false;
				atRulePrefix = '';
			}
		}
	}

	return rules;
}

/**
 * Extract selector and declarations from a rule
 */
function parseRule(ruleContent) {
	const match = ruleContent.match(/^(.*?)\s*{\s*(.*?)\s*}$/s);
	if (!match) return null;

	const [, selector, declarations] = match;
	return {
		selector: selector.trim(),
		declarations: declarations.trim(),
	};
}

/**
 * Deduplicate CSS rules - merge identical selectors and remove duplicate declarations
 */
export function deduplicateCSS(css) {
	const rules = parseRules(css);
	const selectorMap = new Map();

	for (const { content, atRule } of rules) {
		const parsed = parseRule(content);
		if (!parsed) continue;

		const { selector, declarations } = parsed;
		const key = atRule ? `${atRule}::${selector}` : selector;

		if (selectorMap.has(key)) {
			// Merge declarations, later ones override earlier ones
			const existing = selectorMap.get(key);
			const merged = mergeDeclarations(existing.declarations, declarations);
			selectorMap.set(key, {
				selector,
				declarations: merged,
				atRule,
			});
		} else {
			selectorMap.set(key, {
				selector,
				declarations,
				atRule,
			});
		}
	}

	// Rebuild CSS
	const atRuleGroups = new Map();
	const plainRules = [];

	for (const { selector, declarations, atRule } of selectorMap.values()) {
		const rule = `${selector} { ${declarations} }`;

		if (atRule) {
			if (!atRuleGroups.has(atRule)) {
				atRuleGroups.set(atRule, []);
			}
			atRuleGroups.get(atRule).push(rule);
		} else {
			plainRules.push(rule);
		}
	}

	// Combine all rules
	let result = plainRules.join('\n');

	for (const [atRule, rules] of atRuleGroups) {
		result += `\n${atRule} {\n${rules.join('\n')}\n}`;
	}

	return result.trim();
}

/**
 * Merge CSS declarations, with later declarations overriding earlier ones
 */
function mergeDeclarations(existing, incoming) {
	const declMap = new Map();

	// Parse existing declarations
	parseDeclarations(existing).forEach(({ property, value }) => {
		declMap.set(property, value);
	});

	// Parse incoming declarations (override existing)
	parseDeclarations(incoming).forEach(({ property, value }) => {
		declMap.set(property, value);
	});

	// Rebuild declaration string
	return Array.from(declMap.entries())
		.map(([property, value]) => `${property}: ${value}`)
		.join('; ');
}

/**
 * Parse declaration block into property-value pairs
 */
function parseDeclarations(declarations) {
	if (!declarations.trim()) return [];

	return declarations
		.split(';')
		.map((decl) => decl.trim())
		.filter(Boolean)
		.map((decl) => {
			const colonIndex = decl.indexOf(':');
			if (colonIndex === -1) return null;

			return {
				property: decl.slice(0, colonIndex).trim(),
				value: decl.slice(colonIndex + 1).trim(),
			};
		})
		.filter(Boolean);
}

/**
 * Optimize CSS: minify and deduplicate
 */
export function optimizeCSS(css, options = {}) {
	const { minify = true, deduplicate = true } = options;

	let result = css;

	if (deduplicate) {
		result = deduplicateCSS(result);
	}

	if (minify) {
		result = minifyCSS(result);
	}

	return result;
}

/**
 * Calculate size savings from optimization
 */
export function getOptimizationStats(original, optimized) {
	const originalSize = Buffer.byteLength(original, 'utf8');
	const optimizedSize = Buffer.byteLength(optimized, 'utf8');
	const savings = originalSize - optimizedSize;
	const percent = originalSize > 0 ? ((savings / originalSize) * 100).toFixed(2) : 0;

	return {
		originalSize,
		optimizedSize,
		savings,
		percent: `${percent}%`,
	};
}

export default optimizeCSS;
