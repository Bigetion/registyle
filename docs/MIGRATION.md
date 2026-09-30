# Migration Guide

This guide covers upgrades from Registyle 1.x to 2.0.0. For installation and workflow choices, start with the [README](../README.md); for current public signatures, see the [API reference](./API.md).

## Upgrade

```sh
npm install registyle@^2
```

Registyle 2.0 keeps runtime CSS registration, the collector, Tailwind compiler, Vite adapter, theme helpers, and the `createVariants`, `compound`, and `mergeVariants` APIs. The breaking changes are listed below and in the [2.0.0 changelog](./CHANGELOG.md#200---2026-09-30).

## Breaking Changes

### Rename `cn` to `cx`

```diff
- import { cn } from 'registyle';
+ import { cx } from 'registyle';
```

`cx()` still combines strings, arrays, and conditional object maps.

### Removed subpaths

The `registyle/cache`, `registyle/presets`, `registyle/validate`, and `registyle/optimize` subpaths are no longer published. Keep application-specific helpers in your app. CSS optimization is available through compiler and Vite options:

```js
await compileToFile(manifest, './styles.css', {
  minify: true,
  deduplicate: true,
});
```

Unknown Tailwind utilities fail compilation with the registration and token in the error message; there is no separate validation API in v2.

### Simplify variant helpers

The helpers `defineVariants`, `createVariantPreset`, `variantPresets`, `createButton`, and `applyVariants` were removed. Define variants with `createVariants()` and use `compound()` for compound cases:

```js
import { compound, createVariants } from 'registyle/variants';

const button = createVariants({
  base: { tw: 'inline-flex items-center rounded-md' },
  variants: {
    intent: {
      primary: { tw: 'bg-blue-600 text-white' },
      secondary: { tw: 'bg-gray-100 text-gray-900' },
    },
    size: {
      sm: { tw: 'px-3 py-1.5 text-sm' },
      md: { tw: 'px-4 py-2' },
    },
  },
  compoundVariants: [
    compound({ intent: 'primary', size: 'sm' }, { tw: 'shadow-sm' }),
  ],
  defaultVariants: { intent: 'primary', size: 'md' },
});

const classes = button.compose({ intent: 'secondary' }, 'button');
```

### Remove Vite cache options

The `cache` and `cacheSize` plugin options are gone. Registyle recompiles when watched registrations change. Configure `entry` and `watch` for your project layout; `outFile` remains optional.

## Vite Stylesheet Migration

If your v1 app imported a generated `.registyle/style.css`, the v2 Vite plugin uses a virtual stylesheet by default:

```diff
- import './.registyle/style.css';
+ import 'virtual:registyle.css';
```

The default manifest entry is `src/registyles/index.js`, which imports registration modules and default-exports `getManifest()`. To keep a physical CSS file, configure `outFile` and continue importing that file instead. See the Vite section in the [README](../README.md#vite-plugin).

## Verify the Upgrade

Run package tests from the Registyle repository:

```sh
npm test
```

Then run the production build from your consuming application directory:

```sh
npm run build
```

Also verify that your app imports the stylesheet exactly once and that every `tw` registration is compiled through `registyle/compile` or the Vite plugin. `register()` in the browser accepts CSS declarations only; it does not compile Tailwind utilities.
