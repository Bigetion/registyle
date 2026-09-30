const STATES = {
	hover: '&:hover', focus: '&:focus', active: '&:active', disabled: '&:disabled',
	visited: '&:visited', checked: '&:checked', required: '&:required', invalid: '&:invalid',
	valid: '&:valid', empty: '&:empty', enabled: '&:enabled', indeterminate: '&:indeterminate',
	'focus-within': '&:focus-within', 'focus-visible': '&:focus-visible', first: '&:first-child',
	last: '&:last-child', odd: '&:nth-child(odd)', even: '&:nth-child(even)',
	placeholder: '&::placeholder', before: '&::before', after: '&::after', selection: '&::selection',
	marker: '&::marker', file: '&::file-selector-button', backdrop: '&::backdrop',
	dark: '@media (prefers-color-scheme: dark)', light: '@media (prefers-color-scheme: light)',
	'motion-safe': '@media (prefers-reduced-motion: no-preference)',
	'motion-reduce': '@media (prefers-reduced-motion: reduce)', print: '@media print',
	'contrast-more': '@media (prefers-contrast: more)', 'contrast-less': '@media (prefers-contrast: less)',
	portrait: '@media (orientation: portrait)', landscape: '@media (orientation: landscape)',
};

const GROUP_PEER = {
	'group-hover': '.group:hover &', 'group-focus': '.group:focus &', 'group-active': '.group:active &',
	'group-focus-within': '.group:focus-within &', 'group-focus-visible': '.group:focus-visible &',
	'group-disabled': '.group:disabled &', 'group-checked': '.group:checked &',
	'peer-hover': '.peer:hover ~ &', 'peer-focus': '.peer:focus ~ &', 'peer-active': '.peer:active ~ &',
	'peer-focus-within': '.peer:focus-within ~ &', 'peer-focus-visible': '.peer:focus-visible ~ &',
	'peer-disabled': '.peer:disabled ~ &', 'peer-checked': '.peer:checked ~ &',
	'peer-placeholder-shown': '.peer:placeholder-shown ~ &',
};

const BREAKPOINTS = { sm: '640px', md: '768px', lg: '1024px', xl: '1280px', '2xl': '1536px' };
const CONTAINER_SIZES = { '@sm': '(min-width: 384px)', '@md': '(min-width: 448px)', '@lg': '(min-width: 640px)', '@xl': '(min-width: 768px)', '@2xl': '(min-width: 896px)' };
const HTML_TAGS = new Set('a abbr address article aside audio b blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hr html i iframe img input ins kbd label legend li link main map mark menu meta meter nav noscript object ol optgroup option output p picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td template textarea tfoot th thead time title tr track u ul var video wbr'.split(' '));
const CSS_PROPERTY = /^(-webkit-|-moz-|-ms-|-o-)?[a-z]+(-[a-z]+)*$/;
function toPropertyName(property) {
	return property.includes('-') ? property : property.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

function isStyleProperty(key) {
	return !STATES[key] && !GROUP_PEER[key] && !BREAKPOINTS[key] &&
		!key.startsWith('&') && !key.startsWith('.') && !key.startsWith(':') && !key.startsWith('@') &&
		(key.startsWith('--') || /[A-Z]/.test(key) || CSS_PROPERTY.test(key));
}

function merge(base, override) {
	const result = { ...base };
	for (const [key, value] of Object.entries(override || {})) {
		if (value === undefined || key === 'extend') continue;
		if (value && typeof value === 'object' && !Array.isArray(value) && result[key] && typeof result[key] === 'object') {
			result[key] = merge(result[key], value);
		} else {
			result[key] = value;
		}
	}
	return result;
}

function resolveExtend(config, rawConfigs, resolving = new Set()) {
	if (!config?.extend) return config;
	const names = Array.isArray(config.extend) ? config.extend : [config.extend];
	let result = {};
	for (const name of names) {
		const parent = rawConfigs.get(name);
		if (!parent || typeof parent !== 'object') throw new Error(`registyle: unknown extended class "${name}"`);
		if (resolving.has(name)) throw new Error(`registyle: circular extend detected for "${name}"`);
		resolving.add(name);
		result = merge(result, resolveExtend(parent, rawConfigs, resolving));
		resolving.delete(name);
	}
	return merge(result, config);
}

function toDeclarations(config, important = false) {
	const suffix = important ? ' !important' : '';
	return Object.entries(config)
		.filter(([key, value]) => key !== 'tw' && key !== '_' && key !== 'extend' && key !== 'layer' && key !== 'important' && isStyleProperty(key) && (typeof value === 'string' || typeof value === 'number'))
		.map(([key, value]) => `${toPropertyName(key)}: ${value}${suffix};`)
		.join(' ');
}

function assertNoUtilities(config) {
	if (!config || typeof config !== 'object') return;
	if (typeof config.tw === 'string' || Array.isArray(config.tw) || typeof config._ === 'string' || Array.isArray(config._)) {
		throw new Error('registyle: Tailwind utilities must be compiled at build time with `registyle/compile`; register() accepts CSS declarations only.');
	}
	for (const value of Object.values(config)) {
		if (value && typeof value === 'object') assertNoUtilities(value);
	}
}

function buildCss(selector, config, options = {}) {
	if (!config || typeof config !== 'object' || Array.isArray(config)) return '';
	assertNoUtilities(config);
	
	const layer = options.layer || config.layer;
	const important = options.important || config.important;
	
	const declarations = toDeclarations(config, important);
	let css = declarations ? `${selector} { ${declarations} }` : '';

	for (const [key, value] of Object.entries(config)) {
		if (isStyleProperty(key) || key === 'extend' || key === 'layer' || key === 'important' || !value || typeof value !== 'object') continue;
		const nested = buildCss;
		if (STATES[key]) {
			const rule = STATES[key].startsWith('@media') ? nested(selector, value, options) : nested(STATES[key].replace('&', selector), value, options);
			css += STATES[key].startsWith('@media') && rule ? `${STATES[key]} { ${rule} }` : rule;
		} else if (GROUP_PEER[key]) {
			css += nested(GROUP_PEER[key].replace('&', selector), value, options);
		} else if (BREAKPOINTS[key]) {
			const rule = nested(selector, value, options);
			if (rule) css += `@media (min-width: ${BREAKPOINTS[key]}) { ${rule} }`;
		} else if (CONTAINER_SIZES[key]) {
			const rule = nested(selector, value, options);
			if (rule) css += `@container ${CONTAINER_SIZES[key]} { ${rule} }`;
		} else if (key.startsWith('@container')) {
			const rule = nested(selector, value, options);
			if (rule) css += `${key} { ${rule} }`;
		} else if (key.startsWith('@')) {
			const rule = nested(selector, value, options);
			if (rule) css += `${key} { ${rule} }`;
		} else if (key.startsWith('&')) {
			css += nested(key.replaceAll('&', selector), value, options);
		} else if (key.startsWith(':') || key.startsWith('[') || key.startsWith('.')) {
			css += nested(`${selector}${key}`, value, options);
		}
	}
	
	// Wrap in layer if specified
	if (layer && css) {
		css = `@layer ${layer} { ${css} }`;
	}
	
	return css;
}

function isRawSelector(name) {
	return name === '*' || name.startsWith(':') || name.startsWith('[') || HTML_TAGS.has(name.toLowerCase());
}

function buildKeyframes(name, stops) {
	const frames = Object.entries(stops || {}).map(([stop, declarations]) => {
		const values = toDeclarations(declarations || {});
		return `${stop} { ${values} }`;
	}).join(' ');
	return `@keyframes ${name.slice('@keyframes'.length).trim()} { ${frames} }`;
}

export function createRegistry({ injectStyles = true } = {}) {
	const registry = new Map();
	const rawConfigs = new Map();
	let styleTag;

	function flush() {
		if (!injectStyles || typeof document === 'undefined') return;
		if (!styleTag?.parentNode) {
			styleTag = document.getElementById('registyle-style');
			if (!styleTag) {
				styleTag = document.createElement('style');
				styleTag.id = 'registyle-style';
				styleTag.setAttribute('data-registyle', '');
				(document.head || document.documentElement).appendChild(styleTag);
			}
		}
		styleTag.textContent = [...registry.values()].join('\n');
	}

	function inject(key, css) {
		registry.set(key, css);
		flush();
	}

	function register(name, config = {}) {
		if (typeof name !== 'string' || !name.trim()) throw new TypeError('registyle.register: className must be a non-empty string');
		if (!config || typeof config !== 'object' || Array.isArray(config)) throw new TypeError('registyle.register: config must be a CSS style object');
		assertNoUtilities(config);
		const previousConfig = rawConfigs.get(name);
		const hadPreviousConfig = rawConfigs.has(name);
		rawConfigs.set(name, config);
		let resolved;
		try {
			resolved = resolveExtend(config, rawConfigs);
		} catch (error) {
			if (hadPreviousConfig) rawConfigs.set(name, previousConfig);
			else rawConfigs.delete(name);
			throw error;
		}

		if (name.startsWith('@keyframes')) {
			inject(`registration:${name}`, buildKeyframes(name, resolved));
			return;
		}
		
		const layer = resolved.layer;
		const important = resolved.important;
		const options = { layer, important };
		
		const selector = isRawSelector(name) ? name : `.${name}`;
		let css = '';
		if ('base' in resolved || 'modifiers' in resolved) {
			const directStyles = Object.fromEntries(Object.entries(resolved).filter(([key]) => key !== 'base' && key !== 'modifiers' && key !== 'extend' && key !== 'layer' && key !== 'important'));
			const base = merge(resolved.base || {}, directStyles);
			if (Object.keys(base).length) css += buildCss(selector, base, options);
			for (const [modifier, styles] of Object.entries(resolved.modifiers || {})) css += buildCss(`.${name}-${modifier}`, styles, options);
		} else {
			css = buildCss(selector, resolved, options);
		}
		inject(`registration:${name}`, css.trim());
	}

	register.group = function group(baseName, components = {}) {
		if (typeof baseName !== 'string' || !baseName.trim()) throw new TypeError('registyle.register.group: baseName must be a non-empty string');
		if (!components || typeof components !== 'object' || Array.isArray(components)) throw new TypeError('registyle.register.group: components must be an object');
		const css = Object.entries(components).map(([key, config]) => {
			const selector = key === 'root' || key === baseName ? `.${baseName}` : `.${baseName}-${key}`;
			if (typeof config === 'string') throw new Error('registyle: Tailwind utilities must be compiled at build time with `registyle/compile`.');
			const layer = config?.layer;
			const important = config?.important;
			return buildCss(selector, config, { layer, important });
		}).filter(Boolean).join('\n');
		inject(`group:${baseName}`, css);
	};

	register.all = function all(configs = {}) {
		if (!configs || typeof configs !== 'object' || Array.isArray(configs)) throw new TypeError('registyle.register.all: expected an object map');
		for (const [name, config] of Object.entries(configs)) register(name, config);
	};

	register.extractCSS = () => [...registry.values()].join('\n');
	register.reset = () => {
		registry.clear();
		rawConfigs.clear();
		if (styleTag) styleTag.textContent = '';
	};
	return register;
}

const register = createRegistry();

function cx(...values) {
	const classes = [];
	for (const value of values) {
		if (!value) continue;
		if (typeof value === 'string' || typeof value === 'number') classes.push(String(value));
		else if (Array.isArray(value)) {
			const nested = cx(...value);
			if (nested) classes.push(nested);
		} else if (typeof value === 'object') {
			for (const [name, enabled] of Object.entries(value)) if (enabled) classes.push(name);
		}
	}
	return classes.join(' ');
}

cx.with = (...base) => (...values) => cx(...base, ...values);

export { register, cx };
export default register;