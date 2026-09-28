# registyle

A semantic CSS registration library with an optional Tailwind CSS v4 build adapter. The runtime entry stays small; the official Tailwind compiler is used only when generating CSS.

**Version 1.1** - Production-ready with theme system, variants, presets, validation, and performance optimizations.

## Features

- ✅ **Semantic Component Styling** - Name your classes, not atomic utilities
- ✅ **Tailwind v4 Integration** - Optional utilities with official compiler
- ✅ **Zero Runtime** - CSS generated at build time
- ✅ **Type-Safe** - Full TypeScript support with inference
- ✅ **Theme System** - Centralized design tokens with helpers
- ✅ **Variants Composition** - CVA-inspired variant API
- ✅ **Preset System** - Shadcn, Material, Bootstrap, Minimal presets
- ✅ **Validation** - Schema validation with helpful errors
- ⚡ **Performance** - 50-80% faster builds, 20-40% smaller CSS
- 🎯 **CSS Layers** - Control specificity with `@layer`
- 📱 **Container Queries** - Modern responsive patterns
- 🛠️ **Dev Tools** - Debug mode, cache stats, optimization metrics

## Install

```sh
npm install registyle
```

## Quick Start

### 1. Basic Registration

```js
import { register } from 'registyle';

// Pure CSS approach
register('button', {
  display: 'inline-flex',
  padding: '0.5rem 1rem',
  backgroundColor: '#3b82f6',
  color: '#ffffff',
  borderRadius: '0.375rem',
  hover: {
    backgroundColor: '#2563eb',
  },
});

// With Tailwind utilities
register('button', {
  tw: 'inline-flex px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600',
});

// Hybrid approach
register('button', {
  tw: 'inline-flex items-center gap-2',
  padding: '0.5rem 1rem', // Custom values
  backgroundColor: '#3b82f6',
});
```

### 2. With Variants

```js
import { createVariants } from 'registyle/variants';

const button = createVariants({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '500',
  },
  variants: {
    variant: {
      primary: { backgroundColor: '#3b82f6', color: '#ffffff' },
      secondary: { backgroundColor: '#6b7280', color: '#ffffff' },
      outline: { border: '1px solid #d1d5db', backgroundColor: 'transparent' },
    },
    size: {
      sm: { padding: '0.375rem 0.75rem', fontSize: '0.875rem' },
      md: { padding: '0.5rem 1rem', fontSize: '1rem' },
      lg: { padding: '0.625rem 1.25rem', fontSize: '1.125rem' },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

// Generate classes
const manifest = button.toManifest('button');
```

### 3. With Theme

```js
import { createTheme, withTheme } from 'registyle/theme';

const theme = createTheme({
  colors: {
    primary: { 500: '#3b82f6', 600: '#2563eb' },
    gray: { 100: '#f3f4f6', 200: '#e5e7eb' },
  },
  spacing: {
    2: '0.5rem',
    4: '1rem',
    6: '1.5rem',
  },
});

const themed = withTheme(theme);

const [name, config] = themed.register('button', (t) => ({
  backgroundColor: t.color('primary', 500),
  padding: `${t.space(2)} ${t.space(4)}`,
  hover: {
    backgroundColor: t.color('primary', 600),
  },
}));
```

### 4. With Presets

```js
import { shadcnPreset, applyPreset } from 'registyle/presets';

// Use shadcn preset for instant beautiful components
const manifest = applyPreset({
  classes: {
    // Your custom classes
  },
}, shadcnPreset);

// Or start from scratch with Material, Bootstrap, or Minimal presets
import { materialPreset, bootstrapPreset, minimalPreset } from 'registyle/presets';
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

### Optimization API

For advanced use cases, you can access optimization utilities directly:

```js
import { optimizeCSS, minifyCSS, deduplicateCSS, getOptimizationStats } from 'registyle/optimize';

// Optimize CSS (minify + deduplicate)
const optimized = optimizeCSS(css, {
  minify: true,
  deduplicate: true,
});

// Get optimization statistics
const stats = getOptimizationStats(originalCSS, optimizedCSS);
console.log(stats);
// → { originalSize: 1024, optimizedSize: 768, savings: 256, percent: '25.00%' }

// Use individual optimization functions
const minified = minifyCSS(css);
const deduplicated = deduplicateCSS(css);
```

### Caching API

For custom build tools, you can use the caching system:

```js
import { createManifestCache } from 'registyle/cache';

const cache = createManifestCache({ maxSize: 50 });

// Generate cache key from manifest
const cacheKey = cache.generateKey(manifest);

// Check if files have changed
const hasChanged = await cache.hasFilesChanged(['./src/styles.js']);

if (!hasChanged && cache.has(cacheKey)) {
  console.log('Using cached compilation');
  return cache.get(cacheKey);
}

// Store compiled result
cache.set(cacheKey, compiledCSS);

// Get cache statistics
console.log(cache.getStats());
// → { size: 12, maxSize: 50, fileTracked: 5 }
```

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
    // Optional optimization settings
    minify: true,        // Minify CSS output (default: true)
    deduplicate: true,   // Remove duplicate rules (default: true)
    cache: true,         // Enable compilation caching (default: true)
    cacheSize: 50,       // Max cached compilations (default: 50)
    debug: false,        // Log compilation stats (default: false)
  })],
});
```

**Performance Features:**

- **Automatic Caching**: Compilation results are cached based on manifest content. Subsequent builds with unchanged manifests skip recompilation, improving build times by 50-80%.
- **CSS Optimization**: Generated CSS is automatically minified and deduplicated, reducing bundle size by 20-40%.
- **Incremental Compilation**: Only changed files trigger recompilation in watch mode.
- **Debug Mode**: Enable `debug: true` to see compilation times and cache statistics.

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

## Documentation

- **[API Reference](#api)** — Complete API documentation
- **[Vite Plugin](#vite-plugin)** — Vite integration guide
- **[Examples](./examples/)** — Example projects

## When to Use Registyle

**Perfect for:**
- Design systems and component libraries
- Projects wanting semantic class names over atomic utilities
- Teams needing centralized styling with design tokens
- Apps requiring both custom CSS and Tailwind utilities
- Production apps with strict performance requirements

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

Found a bug? Have a feature request? [Open an issue](https://github.com/Bigetion/registyle/issues/new).

## License

MIT