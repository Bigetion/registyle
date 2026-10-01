# API Reference

This page documents the public Registyle v2 APIs. For choosing between runtime CSS, manual compilation, and Vite, see the [README](../README.md) or [documentation guide](./README.md).

## Runtime Registration

Import `register` from the package root for CSS declarations that do not need Tailwind compilation:

```js
import { register } from 'registyle';

register('notice', {
  padding: '0.75rem 1rem',
  borderRadius: '0.5rem',
  backgroundColor: '#eff6ff',
});
```

`register(name, styles)` registers one selector. A non-tag name such as `notice` becomes `.notice`; names that are standard HTML tags or begin with `:`, `[`, or `*` are treated as raw selectors.

Style objects support camelCase and kebab-case CSS properties, nested selectors using `&`, state shorthands such as `hover` and `focus`, responsive shorthands (`sm`, `md`, `lg`, `xl`, `2xl`), and native media/container at-rules. Runtime registration accepts CSS declarations only; `tw` and `_` utilities must be compiled at build time.

### Groups and Modifiers

`register.group(name, slots)` registers a root class and prefixed slot classes. `register(name, { base, modifiers })` registers a base class and modifier classes:

```js
register('button', {
  base: { padding: '0.5rem 1rem', borderRadius: '0.375rem' },
  modifiers: {
    primary: { backgroundColor: '#2563eb', color: 'white' },
    compact: { padding: '0.25rem 0.5rem' },
  },
});

register.group('card', {
  root: { border: '1px solid #ddd' },
  title: { fontSize: '1.125rem', fontWeight: 600 },
});
```

The selectors are `.button`, `.button-primary`, `.button-compact`, `.card`, and `.card-title`. `extend` reuses another class registration and detects missing or cyclic references.

### Bulk Registration and Extraction

- `register.all(map)` registers multiple selectors from an object map.
- `register.extractCSS()` returns the CSS currently held by the runtime registry. This is useful for server-side extraction and tests.
- `register.reset()` clears runtime registrations; use it between isolated renders or tests.

## Tailwind Compiler

Tailwind utilities are compiled from an explicit manifest with the official Tailwind CSS v4 compiler:

```js
import { compileToFile } from 'registyle/compile';

const manifest = {
  classes: {
    button: {
      base: { tw: ['inline-flex items-center rounded-md', 'px-4 py-2 font-medium'] },
      modifiers: {
        primary: { tw: 'bg-blue-600 text-white hover:bg-blue-700' },
      },
    },
  },
};

await compileToFile(manifest, './src/registyle.css');
```

Install the compiler peers in the consuming project:

```sh
npm install -D @tailwindcss/postcss postcss postcss-selector-parser
```

Import the generated stylesheet once. `compileToFile()` writes CSS but does not include Tailwind Preflight. Use `inputCss` to reference a custom Tailwind theme or CSS-first plugin setup.

### `tw` Arrays and Grouped Prefixes

A `tw` value may be a string or an array of strings. Arrays are joined at compile time, so use them to keep long utility sets readable. Prefix groups are also expanded at compile time:

```js
{
  tw: [
    'flex items-center',
    'hover:(bg-blue-700 text-white)',
    'max-sm:(w-full flex-col)',
    'border-(2 red-500)',
  ],
}
```

For example, `max-sm:(w-full flex-col)` expands to `max-sm:w-full max-sm:flex-col`. Native Tailwind v4 single-value shorthand such as `bg-(--brand)` is passed through unchanged. Unknown utilities fail the build with the utility and registration name.

### `compile()` and `compileToFile()`

- `compile(manifest, options)` resolves to the generated CSS string.
- `compileToFile(manifest, outputPath, options)` writes the stylesheet and resolves to the output path.

Both accept these options:

| Option | Purpose |
| --- | --- |
| `inputCss` | Tailwind CSS input; defaults to a reference plus the utilities import |
| `baseDir` | Base directory used to resolve Tailwind CSS inputs |
| `minify` | Minify generated CSS; off by default |
| `deduplicate` | Merge safe adjacent duplicate rules; off by default |
| `optimize` | Enable both minification and deduplication |
| `debug` | Print optimization statistics when optimization is enabled |

## Collector

The collector builds a manifest from registration modules for a build tool such as Vite:

```js
// src/registyles/button.js
import { register } from 'registyle/collector';

register('button', { tw: 'inline-flex rounded px-4 py-2' });
```

```js
// src/registyles/index.js
import { getManifest } from 'registyle/collector';
import './button.js';

export default getManifest();
```

The collector exports `register`, `getManifest()`, and `resetManifest()`. The Vite plugin executes the configured entry and compiles its default-exported manifest.

## Vite Plugin

```js
import { defineConfig } from 'vite';
import { registyle } from 'registyle/vite';

export default defineConfig({ plugins: [registyle()] });
```

Options:

| Option | Default | Purpose |
| --- | --- | --- |
| `entry` | `src/registyles/index.js` | Module that imports registrations and exports `getManifest()` |
| `watch` | `src/registyles` | Directory watched for registration changes |
| `outFile` | unset | Optional disk copy; otherwise use `virtual:registyle.css` |
| `forceOutFile` | `false` | Force physical file output for environments like CodeSandbox |
| Compiler options | See above | `inputCss`, `baseDir`, `minify`, `deduplicate`, `optimize`, `debug` |

Import `virtual:registyle.css` once from the app entry when `outFile` is not set. The plugin watches registration sources; it does not scan application markup for arbitrary class names.

**Note for CodeSandbox/StackBlitz:** The plugin auto-detects browser-based IDEs and writes a physical file when needed. See the [CodeSandbox guide](./CODESANDBOX.md) for details.

## Class Composition

`cx()` combines conditional class values without generating CSS:

```js
import { cx } from 'registyle';

const className = cx(
  'button',
  isPrimary && 'button-primary',
  { 'button-disabled': disabled },
  classNameFromProps,
);
```

`cx.with('button')` returns a helper that always includes the provided base values. For CSS-generating variants, import `createVariants`, `compound`, or `mergeVariants` from `registyle/variants`; see [Variants Composition](./ADVANCED.md#variants-composition).
