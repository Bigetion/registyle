# registyle

A semantic CSS registration library with an optional Tailwind CSS v4 build adapter. The runtime entry stays small; the official Tailwind compiler is used only when generating CSS.

**Version 2.0.0**

## Features

- Semantic class registration with a small browser runtime
- CSS extraction for server-side and build-time workflows
- Optional Tailwind CSS v4 compilation from an explicit manifest
- Optional Vite adapter with a virtual stylesheet
- TypeScript declarations for the public APIs

## Install

```sh
npm install registyle
```

## Quick Start

### 1. Basic Registration

```js
import { register } from 'registyle';

register('button', {
  display: 'inline-flex',
  alignItems: 'center',
  padding: '0.5rem 1rem',
  backgroundColor: '#3b82f6',
  color: '#ffffff',
  borderRadius: '0.375rem',
  hover: { backgroundColor: '#2563eb' },
});
```

`register()` accepts CSS style objects. Tailwind utilities use the build-time manifest API below; they are not accepted by the browser runtime.

## Usage

```js
import { register } from 'registyle';

register('button', {
  display: 'inline-flex',
  color: '#fff',
  backgroundColor: '#2563eb',
  border: 0,
  borderRadius: '6px',
  hover: { backgroundColor: '#1d4ed8' },
  '&:disabled': { opacity: 0.5, cursor: 'not-allowed' },
  md: { padding: '12px 20px' },
});
```

In a browser, `register()` injects CSS into a single `<style id="registyle-style">` element. In Node.js, `register.extractCSS()` returns CSS from registrations that have already executed in the current runtime. It does **not** scan project files or compile Tailwind utilities. This runtime API accepts CSS style objects only; it rejects `tw` so utilities cannot be silently compiled by an incomplete runtime catalog.

## Tailwind v4 Build

Install the official compiler packages as development dependencies:

```sh
npm install -D @tailwindcss/postcss postcss postcss-selector-parser
```

Keep registrations in a manifest and compile it during the app build:

```js
// scripts/build-styles.mjs
import { compileToFile } from 'registyle/compile';

const manifest = {
  classes: {
    button: {
      tw: 'inline-flex items-center px-4 py-2 rounded-lg font-medium hover:bg-blue-700',
      backgroundColor: '#2563eb',
    },
    'icon-button': { extend: 'button', tw: 'h-10 w-10 p-0' },
  },
  groups: {
    card: {
      root: { tw: 'rounded-xl border bg-white shadow-sm' },
      title: { tw: 'text-xl font-bold' },
    },
  },
};

await compileToFile(manifest, '.registyle/style.css', {
  inputCss: '@reference "tailwindcss"; @import "tailwindcss/utilities.css";',
});
```

Import `.registyle/style.css` from the app stylesheet or entry point. Generated utility rules target the registered semantic classes; Tailwind's preflight is not included. Unknown utilities fail the build. For a custom theme or CSS-first plugins, point `@reference` at the app's Tailwind stylesheet and keep the utilities import in `inputCss`.

## API

`register(name, styles)` registers a class. Names beginning with `:`, `[`, or `*`, and standard HTML element names, are treated as raw selectors. CSS property names can use camelCase or kebab-case; nested selectors use `&`, pseudo shorthands include `hover`, `focus`, `active`, `disabled`, `before`, and `after`, and responsive shorthands include `sm`, `md`, `lg`, `xl`, and `2xl`.

```js
register('button', {
  base: { padding: '8px 12px', border: 0 },
  modifiers: {
    primary: { color: 'white', backgroundColor: '#2563eb' },
    compact: { padding: '4px 8px' },
  },
});

register('iconButton', { extend: 'button', width: '40px', height: '40px' });

register.group('card', {
  root: { border: '1px solid #ddd', borderRadius: '8px' },
  title: { fontSize: '18px', fontWeight: 600 },
});

register.all({
  ':root': { '--brand-color': '#2563eb' },
  '@keyframes fade-in': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
});

import { cx } from 'registyle';
cx('button', isActive && 'button-active', { 'button-disabled': isDisabled });
```

- `register.group(baseName, components)` generates a root class and prefixed component classes from CSS style objects.
- `register.all(map)` registers multiple selectors from an object map.
- Re-registering the same class or group replaces its previous CSS; class and group registrations have independent ownership.
- `register.extractCSS()` returns all registered CSS as a string.
- `register.reset()` clears the registry; useful for tests and isolated SSR renders.
- `cx()` combines conditional strings, arrays, and object maps; `cx.with()` binds base classes.
- `compile(manifest, options)` returns CSS compiled by Tailwind v4.
- `compileToFile(manifest, outputPath, options)` writes the compiled CSS during the build.

Use the exact same manifest for utility generation and class-name usage. Runtime-only consumers do not need any Tailwind packages; the optional compile subpath requires the three development packages listed above.

### Vite Plugin

For Vite projects, the plugin compiles registrations into a virtual stylesheet. Vite serves it from memory during development and emits a CSS asset during production builds:

```js
// vite.config.js
import { defineConfig } from 'vite';
import { registyle } from 'registyle/vite';

export default defineConfig({
  plugins: [registyle()],
});
```

The defaults use `src/registyles/index.js` as the manifest entry and watch the `src/registyles` directory. Override `entry` or `watch` when your project uses a different layout. `outFile` optionally writes a disk copy; otherwise the stylesheet is served through the virtual module. Optimization and debug options are available for builds that need them.

Register reusable styles in modules and collect them from the configured entry:

```js
// src/registyles/button.js
import { register } from 'registyle/collector';

register('button', {
  base: { tw: 'inline-flex items-center rounded-md font-medium' },
  modifiers: {
    primary: { tw: 'bg-blue-600 text-white hover:bg-blue-700' },
    secondary: { tw: 'bg-gray-100 text-gray-900' },
  },
});

// src/registyles/index.js
import { getManifest } from 'registyle/collector';
import './button.js';

export default getManifest();
```

Consume the semantic classes from a component; the utility choices stay in the registration:

```jsx
import { cx } from 'registyle';

export function Button({ variant = 'primary', className, ...props }) {
  return <button className={cx('button', `button-${variant}`, className)} {...props} />;
}
```

Import the virtual stylesheet once from the app entry: `import 'virtual:registyle.css';`.

When migrating from the previous file-based Vite setup, replace the `.registyle/style.css` import with the virtual import above. To keep importing a generated file, set `outFile: '.registyle/style.css'` in the plugin options.

`entry` is the JS/TS module that imports registration modules and default-exports the collected manifest. The plugin executes that entry and watches its directory by default; set `watch` to a wider path when registrations live across directories. Set `outFile` only when a separate on-disk CSS copy is needed. The plugin does not scan unrelated source files for class strings. See [the component demo](examples/register-component-demo) for a complete setup.

## Documentation

- [Advanced guide](./docs/ADVANCED.md) — themes, variants, CSS layers, container queries, and build options
- [Migration guide](./docs/MIGRATION.md) — breaking changes when moving to v2
- [Changelog](./docs/CHANGELOG.md) — release history
- [Examples](./examples/) — example projects

## When to Use Registyle

Registyle is aimed at projects that want semantic class names and explicit CSS registration, with Tailwind v4 compilation as an optional build step. It does not scan application source files for class names; register styles in a manifest or use the runtime API directly.

## Contributing

Contributions are welcome. Report bugs and feature requests through [GitHub Issues](https://github.com/Bigetion/registyle/issues/new).

## License

MIT