import { resolve } from 'node:path';
import { dirname, resolve as resolvePath } from 'node:path';
import { mkdir, writeFile } from 'node:fs/promises';
import { createRegistry } from './core-runtime.js';
import { optimizeCSS, getOptimizationStats } from './optimize.js';

const BREAKPOINTS = new Set(['sm', 'md', 'lg', 'xl', '2xl']);
const CONTAINER_SIZES = new Set(['@sm', '@md', '@lg', '@xl', '@2xl']);
const HTML_TAGS = new Set('a abbr address article aside audio b blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hr html i iframe img input ins kbd label legend li link main map mark menu meta meter nav noscript object ol optgroup option output p picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td template textarea tfoot th thead time title tr track u ul var video wbr'.split(' '));
const PSEUDO_VARIANTS = new Set([
	'hover', 'focus', 'active', 'disabled', 'visited', 'checked', 'required',
	'invalid', 'valid', 'empty', 'enabled', 'indeterminate', 'focus-within',
	'focus-visible', 'first', 'last', 'odd', 'even', 'placeholder', 'before',
	'after', 'selection', 'marker', 'file', 'backdrop', 'dark', 'light',
	'motion-safe', 'motion-reduce', 'print', 'contrast-more', 'contrast-less',
	'portrait', 'landscape', 'group-hover', 'group-focus', 'group-active',
	'group-focus-within', 'group-focus-visible', 'group-disabled', 'group-checked',
	'peer-hover', 'peer-focus', 'peer-active', 'peer-focus-within',
	'peer-focus-visible', 'peer-disabled', 'peer-checked', 'peer-placeholder-shown',
]);

function splitClassList(value) {
	const classes = [];
	let current = '';
	let bracketDepth = 0;
	let groupDepth = 0;
	for (const character of value) {
		if (character === '[') bracketDepth++;
		if (character === ']') bracketDepth--;
		if (bracketDepth === 0 && character === '(') groupDepth++;
		if (bracketDepth === 0 && character === ')') groupDepth--;
		if (/\s/.test(character) && bracketDepth === 0 && groupDepth === 0) {
			if (current) classes.push(current);
			current = '';
		} else {
			current += character;
		}
	}
	if (current) classes.push(current);
	return classes.flatMap(expandVariantGroups);
}

function expandVariantGroups(value) {
	let bracketDepth = 0;
	for (let index = 0; index < value.length - 1; index++) {
		const character = value[index];
		if (character === '[') bracketDepth++;
		if (character === ']') bracketDepth--;
		if (bracketDepth !== 0 || character !== '(' || ![':', '-'].includes(value[index - 1])) continue;

		let groupDepth = 1;
		let nestedBracketDepth = 0;
		let closingIndex = -1;
		for (let cursor = index + 1; cursor < value.length; cursor++) {
			const nestedCharacter = value[cursor];
			if (nestedCharacter === '[') nestedBracketDepth++;
			if (nestedCharacter === ']') nestedBracketDepth--;
			if (nestedBracketDepth !== 0) continue;
			if (nestedCharacter === '(') groupDepth++;
			if (nestedCharacter === ')' && --groupDepth === 0) {
				closingIndex = cursor;
				break;
			}
		}

		if (closingIndex === -1) {
			throw new SyntaxError(`registyle compile: unclosed variant group in "${value}"`);
		}

		const prefix = value.slice(0, index);
		const contents = value.slice(index + 1, closingIndex);
		const suffix = value.slice(closingIndex + 1);
		const utilities = splitClassList(contents);
		if (!prefix.endsWith(':') && utilities.length < 2) return [value];
		return utilities.flatMap((utility) => expandVariantGroups(`${prefix}${utility}${suffix}`));
	}
	return [value];
}

function normalizeUtilityValue(value, context) {
	if (typeof value === 'string') return value;
	if (Array.isArray(value) && value.every((part) => typeof part === 'string')) return value.join(' ');
	throw new TypeError(`registyle compile: "${context}" must be a string or an array of strings`);
}

function isCssDeclarationKey(key) {
	if (key.startsWith('--') || /[A-Z]/.test(key)) return true;
	if (key.startsWith('&') || key.startsWith('.') || key.startsWith(':') || key.startsWith('@')) return false;
	if (utilityVariant(key)) return false;
	return /^(-webkit-|-moz-|-ms-|-o-)?[a-z]+(-[a-z]+)*$/.test(key);
}

function stripUtilities(value) {
	if (typeof value === 'string') return {};
	if (!value || typeof value !== 'object' || Array.isArray(value)) return value;
	const result = {};
	for (const [key, nested] of Object.entries(value)) {
		if (key === 'tw' || key === '_') continue;
		if (typeof nested === 'string') {
			if (isCssDeclarationKey(key) || key === 'layer' || key === 'important') result[key] = nested;
		} else if (typeof nested === 'number' || typeof nested === 'boolean' || nested === null) {
			result[key] = nested;
		} else {
			result[key] = stripUtilities(nested);
		}
	}
	return result;
}

function mergeConfigs(base, next, context = '') {
	const merged = { ...base };
	for (const [key, value] of Object.entries(next || {})) {
		if (key === 'tw' || key === '_') {
			const parts = [merged[key], value]
				.filter((part) => part !== undefined && part !== null)
				.map((part) => normalizeUtilityValue(part, context ? `${context}.${key}` : key))
				.filter(Boolean);
			merged[key] = parts.join(' ');
		} else if (
			value && typeof value === 'object' && !Array.isArray(value) &&
			merged[key] && typeof merged[key] === 'object' && !Array.isArray(merged[key])
		) {
			merged[key] = mergeConfigs(merged[key], value, context ? `${context}.${key}` : key);
		} else {
			merged[key] = value;
		}
	}
	return merged;
}

function orderedClassEntries(classes) {
	const ordered = [];
	const visited = new Set();
	const resolving = new Set();

	function visit(name) {
		if (visited.has(name)) return;
		if (resolving.has(name)) throw new Error(`registyle compile: circular extend detected for "${name}"`);
		resolving.add(name);
		const config = classes[name];
		const ownConfig = typeof config === 'string' ? { tw: config } : config || {};
		const parents = ownConfig.extend ? Array.isArray(ownConfig.extend) ? ownConfig.extend : [ownConfig.extend] : [];
		for (const parent of parents) {
			if (!Object.hasOwn(classes, parent)) throw new Error(`registyle compile: unknown extended class "${parent}"`);
			visit(parent);
		}
		resolving.delete(name);
		visited.add(name);
		ordered.push([name, config]);
	}

	for (const name of Object.keys(classes)) visit(name);
	return ordered;
}

function utilityVariant(key) {
	if (BREAKPOINTS.has(key) || CONTAINER_SIZES.has(key) || PSEUDO_VARIANTS.has(key)) return key;
	const pseudo = key.match(/^&:(:{0,1}[a-z-]+)$/i);
	if (!pseudo) return null;
	const name = pseudo[1].replace(/^:+/, '');
	const aliases = { 'first-child': 'first', 'last-child': 'last', 'nth-child(odd)': 'odd', 'nth-child(even)': 'even' };
	return aliases[name] || name;
}

function collectUtilities(selector, config, tokenSelectors, variants = [], options = {}) {
	if (typeof config === 'string') {
		for (const utility of splitClassList(config)) addUtility(utility, selector, tokenSelectors, variants);
		return;
	}
	if (!config || typeof config !== 'object' || Array.isArray(config)) return;

	const layer = options.layer || config.layer;
	const important = options.important || config.important;

	for (const key of ['tw', '_']) {
		if (config[key] === undefined || config[key] === null) continue;
		for (const utility of splitClassList(normalizeUtilityValue(config[key], `${selector}.${key}`))) {
			addUtility(utility, selector, tokenSelectors, variants, { layer, important });
		}
	}

	for (const [key, value] of Object.entries(config)) {
		if (key === 'tw' || key === '_' || key === 'layer' || key === 'important' || !value) continue;
		const variant = utilityVariant(key);
		if (!variant) continue;
		if (typeof value === 'string') {
			for (const utility of splitClassList(value)) addUtility(utility, selector, tokenSelectors, [...variants, variant], { layer, important });
		} else if (typeof value === 'object') {
			collectUtilities(selector, value, tokenSelectors, [...variants, variant], { layer, important });
		}
	}
}

function addUtility(utility, selector, tokenSelectors, variants, options = {}) {
	const token = [...variants, utility].filter(Boolean).join(':');
	const selectors = tokenSelectors.get(token) || new Map();
	
	// Store selector with its layer/important options
	selectors.set(selector, options);
	tokenSelectors.set(token, selectors);
}

function semanticSelector(name) {
	return name === '*' || name.startsWith(':') || name.startsWith('[') || HTML_TAGS.has(name.toLowerCase())
		? name
		: `.${name}`;
}

function collectRegistrationUtilities(classes = {}, groups = {}, classEntries = orderedClassEntries(classes)) {
	const tokenSelectors = new Map();
	const modifierSelectors = new Set();
	const resolved = new Map();
	const resolving = new Set();

	function resolveClass(name) {
		if (resolved.has(name)) return resolved.get(name);
		if (resolving.has(name)) throw new Error(`registyle compile: circular extend detected for "${name}"`);
		resolving.add(name);
		const config = classes[name];
		const ownConfig = typeof config === 'string' ? { tw: config } : { ...(config || {}) };
		const parents = ownConfig.extend ? Array.isArray(ownConfig.extend) ? ownConfig.extend : [ownConfig.extend] : [];
		delete ownConfig.extend;
		let result = {};
		for (const parent of parents) {
			if (Object.hasOwn(classes, parent)) result = mergeConfigs(result, resolveClass(parent));
		}
			result = mergeConfigs(result, ownConfig, name);
		resolving.delete(name);
		resolved.set(name, result);
		return result;
	}

	for (const [name] of classEntries) {
		const selector = semanticSelector(name);
		const config = resolveClass(name);
		const layer = config.layer;
		const important = config.important;
		const options = { layer, important };
		
		if (config.base || config.modifiers) {
			const directStyles = Object.fromEntries(Object.entries(config).filter(([key]) => key !== 'base' && key !== 'modifiers' && key !== 'layer' && key !== 'important'));
			const base = mergeConfigs(config.base || {}, directStyles);
			if (Object.keys(base).length) collectUtilities(selector, base, tokenSelectors, [], options);
			for (const [modifier, styles] of Object.entries(config.modifiers || {})) {
				const modifierSelector = `.${name}-${modifier}`;
				modifierSelectors.add(modifierSelector);
				collectUtilities(modifierSelector, styles, tokenSelectors, [], options);
			}
		} else {
			collectUtilities(selector, config, tokenSelectors, [], options);
		}
	}

	for (const [baseName, components] of Object.entries(groups)) {
		for (const [key, config] of Object.entries(components || {})) {
			const isRoot = key === 'root' || key === baseName;
			const selector = isRoot ? `.${baseName}` : `.${baseName}-${key}`;
			// Group sub-component selectors (non-root keys) are tracked as modifiers so
			// reorderRulesBaseFirst can place them after the root rule — same cascade
			// guarantee as class modifiers. Group root selectors are NOT tracked here.
			if (!isRoot) modifierSelectors.add(selector);
			const layer = config?.layer;
			const important = config?.important;
			collectUtilities(selector, config, tokenSelectors, [], { layer, important });
		}
	}

	return { tokenSelectors, modifierSelectors };
}

function isModifierRule(rule, modifierSelectors) {
	return rule.selector.split(',').map((s) => s.trim()).every((s) => modifierSelectors.has(s));
}

function reorderRulesBaseFirst(root, modifierSelectors) {
	const nodes = [];
	root.each((node) => nodes.push(node.clone()));
	root.removeAll();
	const base = nodes.filter((n) => n.type !== 'rule' || !isModifierRule(n, modifierSelectors));
	const mods = nodes.filter((n) => n.type === 'rule' && isModifierRule(n, modifierSelectors));
	for (const n of [...base, ...mods]) root.append(n);
}

function retargetSelectors(root, tokenSelectors, selectorParser, modifierSelectors = new Set()) {
	const uncompiled = new Set(tokenSelectors.keys());
	const baseLayerRules = new Map();    // layer name → rules that belong to base selectors
	const modifierLayerRules = new Map(); // layer name → rules that belong to modifier selectors
	
	root.walkRules((rule) => {
		let selectors;
		try {
			selectors = selectorParser().astSync(rule.selector);
		} catch {
			return;
		}

		const replacements = [];
		let ruleLayer = null;
		let ruleImportant = false;
		
		selectors.each((selector) => {
			let utilityNode;
			selector.walkClasses((node) => {
				if (!utilityNode && tokenSelectors.has(node.value)) utilityNode = node;
			});
			if (!utilityNode) {
				replacements.push(selector.clone());
				return;
			}

			uncompiled.delete(utilityNode.value);
			const targets = tokenSelectors.get(utilityNode.value);
			
			for (const [target, options] of targets) {
				const replacement = selector.clone();
				let targetNodes;
				try {
					targetNodes = selectorParser().astSync(target).nodes[0].nodes.map((node) => node.clone());
				} catch {
					continue;
				}
				let replacementNode;
				replacement.walkClasses((node) => {
					if (!replacementNode && node.value === utilityNode.value) replacementNode = node;
				});
				replacementNode?.replaceWith(...targetNodes);
				replacements.push(replacement);
				
				// Track layer and important from first target
				if (ruleLayer === null && options.layer) ruleLayer = options.layer;
				if (!ruleImportant && options.important) ruleImportant = true;
			}
		});

		selectors.removeAll();
		for (const selector of replacements) selectors.append(selector);
		rule.selector = selectors.toString();
		
		// Add !important if needed
		if (ruleImportant) {
			rule.walkDecls((decl) => {
				if (!decl.important) decl.important = true;
			});
		}
		
		// Store rule by layer, keeping base and modifier layer blocks separate so
		// reorderRulesBaseFirst can still place modifier rules after base rules even
		// when they are wrapped in @layer at-rules.
		if (ruleLayer) {
			const ruleIsModifier = isModifierRule(rule, modifierSelectors);
			const targetMap = ruleIsModifier ? modifierLayerRules : baseLayerRules;
			if (!targetMap.has(ruleLayer)) targetMap.set(ruleLayer, []);
			targetMap.get(ruleLayer).push(rule.clone());
			rule.remove();
		}
	});
	
	// Append base @layer blocks first, then modifier @layer blocks, so the
	// cascade order matches non-layered rules: base before modifier.
	for (const [layer, rules] of baseLayerRules) {
		const layerAtRule = root.append({ name: 'layer', params: layer });
		for (const rule of rules) layerAtRule.append(rule);
	}
	for (const [layer, rules] of modifierLayerRules) {
		const layerAtRule = root.append({ name: 'layer', params: layer });
		for (const rule of rules) layerAtRule.append(rule);
	}

	if (uncompiled.size) {
		const details = [...uncompiled].map((token) => {
			const selectors = [...(tokenSelectors.get(token)?.keys() || [])].join(', ');
			return selectors ? `${token} (${selectors})` : token;
		});
		throw new Error(`registyle compile: Tailwind did not generate CSS for: ${details.join(', ')}`);
	}
}

function escapeCssString(value) {
	return value.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/[\n\r\f]/g, ' ');
}

/**
 * Compile semantic registrations with the official Tailwind CSS v4 compiler.
 * @param {{ classes?: Record<string, object|string>, groups?: Record<string, Record<string, object|string>> }} manifest
 * @param {{ inputCss?: string, baseDir?: string, minify?: boolean, optimize?: boolean, debug?: boolean }} options
 * @returns {Promise<string>} Compiled CSS ready to import from the application.
 */
export async function compile(manifest = {}, options = {}) {
	const classes = manifest.classes || {};
	const groups = manifest.groups || {};
	if (!classes || typeof classes !== 'object' || Array.isArray(classes)) throw new TypeError('registyle compile: classes must be an object map');
	if (!groups || typeof groups !== 'object' || Array.isArray(groups)) throw new TypeError('registyle compile: groups must be an object map');

	const classEntries = orderedClassEntries(classes);
	const { tokenSelectors, modifierSelectors } = collectRegistrationUtilities(classes, groups, classEntries);
	const styleRegistry = createRegistry({ injectStyles: false });
	styleRegistry.all(Object.fromEntries(classEntries.map(([name, config]) => [name, stripUtilities(config)])));
	for (const [name, components] of Object.entries(groups)) {
		styleRegistry.group(name, Object.fromEntries(Object.entries(components).map(([key, config]) => [key, stripUtilities(config)])));
	}
	const rawCss = styleRegistry.extractCSS();

	if (!tokenSelectors.size) return rawCss;

	let postcss;
	let tailwind;
	let selectorParser;
	try {
		[{ default: postcss }, { default: tailwind }, { default: selectorParser }] = await Promise.all([
			import('postcss'),
			import('@tailwindcss/postcss'),
			import('postcss-selector-parser'),
		]);
	} catch (error) {
		throw new Error('registyle compile requires postcss, @tailwindcss/postcss v4, and postcss-selector-parser. Install them as development dependencies.', { cause: error });
	}

	const tokens = [...tokenSelectors.keys()].join(' ');
	const sourceDirective = `@source inline("${escapeCssString(tokens)}");`;
	const inputCss = options.inputCss || '@reference "tailwindcss"; @import "tailwindcss/utilities.css" source(none);';
	const input = `${inputCss}\n${sourceDirective}`;
	const from = resolve(options.baseDir || process.cwd(), 'registyle.generated.css');
	const result = await postcss([tailwind()]).process(input, { from, map: false });
	const root = postcss.parse(result.css);
	retargetSelectors(root, tokenSelectors, selectorParser, modifierSelectors);
	reorderRulesBaseFirst(root, modifierSelectors);
	
	let finalCss = [rawCss, root.toString()].filter(Boolean).join('\n');
	
	// Apply optimization only when explicitly requested.
	const shouldOptimize = options.optimize === true || options.minify === true || options.deduplicate === true;
	
	if (shouldOptimize) {
		finalCss = optimizeCSS(finalCss, {
			minify: options.minify ?? options.optimize === true,
			deduplicate: options.deduplicate ?? options.optimize === true,
		});
		
		if (options.debug) {
			const stats = getOptimizationStats(
				[rawCss, root.toString()].filter(Boolean).join('\n'),
				finalCss
			);
			console.log('[registyle] Optimization stats:', stats);
		}
	}
	
	return finalCss;
}

/** Compile a manifest and write its generated CSS to a file. */
export async function compileToFile(manifest, outputPath, options = {}) {
	if (typeof outputPath !== 'string' || !outputPath) throw new TypeError('registyle compileToFile: outputPath must be a non-empty string');
	const absolutePath = resolvePath(outputPath);
	const css = await compile(manifest, { ...options, baseDir: options.baseDir || process.cwd() });
	await mkdir(dirname(absolutePath), { recursive: true });
	await writeFile(absolutePath, css);
	return absolutePath;
}

export default compile;