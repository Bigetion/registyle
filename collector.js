const manifest = { classes: {}, groups: {} };

export function register(name, config = {}) {
	manifest.classes[name] = config;
}

register.all = function all(configs = {}) {
	Object.assign(manifest.classes, configs);
};

register.group = function group(name, components = {}) {
	manifest.groups[name] = components;
};

export function getManifest() {
	return {
		classes: { ...manifest.classes },
		groups: { ...manifest.groups },
	};
}

export function resetManifest() {
	manifest.classes = {};
	manifest.groups = {};
}