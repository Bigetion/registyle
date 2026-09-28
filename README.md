# registyle

A semantic CSS registration library with an optional Tailwind CSS v4 build adapter. The runtime entry stays small; the official Tailwind compiler is used only when generating CSS.

## Install

```sh
npm install registyle
```

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

import { cx, cn } from 'registyle';
cx('button', isActive && 'button-active', { 'button-disabled': isDisabled });
cn('button', ['button-primary', isLarge && 'button-large']);
```

- `register.group(baseName, components)` generates a root class and prefixed component classes from CSS style objects.
- `register.all(map)` registers multiple selectors from an object map.
- Re-registering the same class or group replaces its previous CSS; class and group registrations have independent ownership.
- `register.extractCSS()` returns all registered CSS as a string.
- `register.reset()` clears the registry; useful for tests and isolated SSR renders.
- `cx()` / `cn()` combine conditional strings, arrays, and object maps; `cx.with()` binds base classes.
- `compile(manifest, options)` returns CSS compiled by Tailwind v4.
- `compileToFile(manifest, outputPath, options)` writes the compiled CSS during the build.

Use the exact same manifest for utility generation and class-name usage. Runtime-only consumers do not need any Tailwind packages; the optional compile subpath requires the three development packages listed above.

### Vite Plugin

For Vite projects, the plugin handles manifest loading, CSS generation, and watch-mode rebuilds:

```js
// vite.config.js
import { defineConfig } from 'vite';
import { registyle } from 'registyle/vite';

export default defineConfig({
  plugins: [registyle({
    entry: 'src/registyles/index.js',
    outFile: '.registyle/style.css',
  })],
});
```

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

Import the generated stylesheet from the app entry, for example `import '../.registyle/style.css';`.

`entry` is the JS/TS module that imports registration modules and default-exports the collected manifest. `outFile` is the generated CSS artifact imported by the app; by default it lives in `.registyle/`, outside `src`, and should be ignored by Git. The plugin executes that entry, compiles its registrations, and watches the entry directory by default; set `watch` to a wider path when registrations live across directories. It does not scan unrelated source files for class strings. See [the component demo](examples/register-component-demo) for a complete setup.

## Component Demo

Run the copied React component library demo from [`examples/register-component-demo`](examples/register-component-demo):

```sh
cd examples/register-component-demo
npm install
npm run dev
```