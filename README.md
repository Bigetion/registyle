# registyle

A semantic styling library that compiles Tailwind CSS v4 utilities into named component classes, with a separate CSS-only runtime for plain declarations.

**Version 2.0.0**

## Features

- Compile Tailwind utilities onto semantic selectors such as `.action-button` and `.action-button-primary`
- Register component slots with `register.group()`
- Use utility arrays and grouped prefixes such as `max-sm:(w-full flex-col)`
- Compose conditional class names with `cx()` or generate variant registrations with `registyle/variants`
- Choose a Vite plugin, a manual compiler step, or the CSS-only runtime
- Extract runtime CSS for server-side rendering

## Install

```sh
npm install registyle
```

## How It Works

For a React app, the Vite plugin is the shortest path:

```text
registration files -> Vite collects styles -> Tailwind v4 compiles utilities -> virtual CSS -> semantic classes in JSX
```

You write `register()` calls in JavaScript modules. The plugin collects them from `src/registyles/index.js` and exposes compiled CSS as `virtual:registyle.css`. You do not create a manifest by hand. Registyle compiles only registered utilities; it does not scan JSX or HTML for class names, and its stylesheet does not include Tailwind Preflight.

For apps without Vite, use `compileToFile()` in a build script. If you do not need Tailwind, use the CSS-only runtime API instead.

## Quick Start: React + Vite

Create a React app if you do not already have one:

```sh
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm install registyle
npm install -D @tailwindcss/postcss postcss postcss-selector-parser
```

Vite's React template already includes Vite and `@vitejs/plugin-react`. Add the Registyle plugin to `vite.config.js`:

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { registyle } from 'registyle/vite';

export default defineConfig({
  plugins: [react(), registyle()],
});
```

Create `src/registyles/button.js` and register a component style:

```js
import { register } from 'registyle/collector';

register('action-button', {
  base: {
    tw: [
      'inline-flex items-center rounded-md',
      'px-4 py-2 font-medium',
    ],
  },
  modifiers: {
    primary: { tw: 'bg-blue-600 text-white hover:bg-blue-700' },
    secondary: { tw: 'bg-gray-100 text-gray-900' },
  },
});
```

Create `src/registyles/index.js` to collect the styles. The Vite plugin uses this entry by default:

```js
import { getManifest } from 'registyle/collector';
import './button.js';

export default getManifest();
```

Import the virtual stylesheet once in `src/main.jsx`:

```js
import 'virtual:registyle.css';
```

Then use the semantic class in your React component:

```jsx
import { cx } from 'registyle';

export function Button({ variant = 'primary', className, ...props }) {
  return (
    <button
      className={cx('action-button', `action-button-${variant}`, className)}
      {...props}
    />
  );
}
```

Run the app as usual:

```sh
npm run dev
```

The CSS flow is handled by Vite: it watches `src/registyles`, recompiles when a registration changes, and emits CSS during `npm run build`. The component demo in [`examples/register-component-demo`](./examples/register-component-demo/README.md) shows the complete setup.

## Writing Utilities

A `tw` value can be a string or an array of strings. Use a string for a short set of utilities and an array to keep longer sets readable:

```js
register('action-button', {
  tw: [
    'inline-flex items-center rounded-md',
    'bg-blue-600 px-4 py-2 font-medium text-white',
    'hover:(bg-blue-700 text-white)',
  ],
});
```

Grouped prefixes expand at compile time:

```text
max-sm:(w-full flex-col) -> max-sm:w-full max-sm:flex-col
border-(2 red-500)       -> border-2 border-red-500
```

Native Tailwind v4 single-value shorthand such as `bg-(--brand)` is passed through unchanged. Use Tailwind v4 slash notation for color alpha, for example `bg-red-500/50`.

## Other Build Setups

For bundlers without a Registyle plugin, compile a manifest in a Node build script and import the generated CSS through your app's normal CSS pipeline:

```js
// scripts/build-styles.mjs
import { compileToFile } from 'registyle/compile';

const manifest = {
  classes: {
    'action-button': {
      tw: 'inline-flex rounded-md bg-blue-600 px-4 py-2 text-white',
    },
  },
};

await compileToFile(manifest, 'src/registyle.css');
```

Run `node scripts/build-styles.mjs` before your framework's build command, then import `src/registyle.css` from your app entry. If you use a custom Tailwind theme or CSS-first plugins, pass an `inputCss` option that references your app stylesheet:

```js
await compileToFile(manifest, 'src/registyle.css', {
  inputCss: '@reference "./src/app.css"; @import "tailwindcss/utilities.css";',
  baseDir: process.cwd(),
});
```

See the [integration guide](./docs/INTEGRATIONS.md) for more build and server-rendering options.

## CSS-Only Runtime

For plain CSS declarations without Tailwind, import `register()` from the package root:

```js
import { register } from 'registyle';

register('notice', {
  padding: '0.75rem 1rem',
  color: '#1e3a8a',
  backgroundColor: '#eff6ff',
});
```

In the browser, the runtime injects a style tag. In Node.js, call `register.extractCSS()` after importing registration modules to get the registered CSS for server-side extraction. The runtime API does not compile `tw` utilities.

## API and Guides

- [Documentation guide](./docs/README.md) — choose a workflow and find the right guide
- [API reference](./docs/API.md) — runtime, collector, compiler, and Vite APIs
- [Integrations](./docs/INTEGRATIONS.md) — Vite, other bundlers, and runtime CSS extraction
- [CodeSandbox & Online IDEs](./docs/CODESANDBOX.md) — setup for browser-based development
- [Advanced guide](./docs/ADVANCED.md) — themes, variants, CSS layers, and container queries
- [Troubleshooting](./docs/TROUBLESHOOTING.md) — common compiler, CSS, and Vite issues
- [Migration guide](./docs/MIGRATION.md) — upgrade from v1 to v2
- [Changelog](./docs/CHANGELOG.md) — release history
- [Examples](./examples/) — component library and todo app

## When to Use Registyle

Registyle is for projects that want Tailwind v4 utilities compiled onto semantic class names from an explicit set of registrations. It is especially useful when component markup should stay independent of the utilities that style it. Choose the CSS-only runtime when you only need plain declarations.

## Support This Project

If Registyle helps your project, consider buying me a coffee! Your support helps maintain and improve the library.

<a href="https://buymeacoffee.com/bigetion" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" width="200" /></a>

## Contributing

Contributions are welcome. Report bugs and feature requests through [GitHub Issues](https://github.com/Bigetion/registyle/issues/new).

## License

MIT
