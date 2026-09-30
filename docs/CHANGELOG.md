# Changelog

All notable changes to registyle will be documented in this file.

## [2.0.0] - 2026-09-30

### Added

- Expand Tailwind utility arrays and grouped prefixes at compile time, including variant groups such as `max-sm:(items-stretch flex-col)` and utility groups such as `border-(2 red-500)`.
- Preserve native Tailwind v4 parenthesis shorthands such as `bg-(--brand)` while supporting grouped utility authoring.

### Breaking Changes

- Remove the `cache`, `presets`, and `validate` subpaths.
- Remove the public `optimize` subpath; compilation optimization remains available through compile options.
- Remove `cn`; use `cx` for conditional class names.
- Remove `defineVariants`, `createVariantPreset`, `variantPresets`, `createButton`, and `applyVariants`. Keep variant definitions in application code and use `createVariants`, `compound`, and `mergeVariants`.
- Remove the Vite `cache` and `cacheSize` options; Vite recompiles registrations when watched files change.

## [1.1.1] - 2026-09-29

### Fixed

- Preserve Tailwind-generated CSS by default; optimization is now explicitly opt-in.
- Use PostCSS AST operations for minification and adjacent-rule deduplication so strings, keyframes, layers, and cascade order are preserved.
- Align composed variant class names with generated manifests, including compound and boolean variants.
- Deep-merge applied presets and resolve theme-backed class factories against merged tokens.
- Detect circular `extend` chains during manifest validation.

## [1.1.0] - 2026-09-28

### 🎉 Major Features

#### Theme System
- **Design Tokens**: Centralized theme with colors, spacing, typography, shadows, and more
- **Theme Helpers**: `color()`, `space()`, `text()`, `shadow()`, `rounded()` utilities
- **Theme Provider**: `withTheme()` for theme-aware registrations
- **Preset Themes**: Built-in `default`, `dark`, and `minimal` themes

```js
import { createTheme, withTheme } from 'registyle/theme';

const theme = createTheme({
  colors: {
    brand: { 500: '#3b82f6' }
  }
});

const themed = withTheme(theme);
const [name, config] = themed.register('button', (t) => ({
  backgroundColor: t.color('brand', 500),
  padding: t.space(4),
}));
```

#### Validation System
- **Schema Validation**: Comprehensive validation for configs and manifests
- **Conflict Detection**: Warns when tw utilities conflict with CSS properties
- **Error Suggestions**: Helpful fix suggestions for common mistakes
- **Custom Reporters**: Build custom validation workflows

```js
import { validateManifest, createReporter } from 'registyle/validate';

const result = validateManifest(manifest, {
  strict: true,
  warnConflicts: true,
});
```

#### Variants Composition
- **CVA-Inspired API**: Familiar variant composition patterns
- **Compound Variants**: Combine multiple variant states
- **Preset Variants**: Reusable size, color, state, rounded, shadow presets
- **Type-Safe**: Full TypeScript support with inference

```js
import { createVariants, createButton } from 'registyle/variants';

const button = createVariants({
  base: { display: 'inline-flex' },
  variants: {
    size: { sm: { padding: '0.375rem 0.75rem' }, md: { padding: '0.5rem 1rem' } },
    variant: { primary: { backgroundColor: '#3b82f6' } },
  },
  compoundVariants: [
    { size: 'sm', variant: 'primary', styles: { fontSize: '0.875rem' } }
  ],
  defaultVariants: { size: 'md', variant: 'primary' },
});

// Use in components
const classes = button.compose({ size: 'sm', variant: 'primary' }, 'button');
```

#### Preset System
- **Built-in Presets**: Shadcn, Material, Bootstrap, Minimal
- **Preset Composition**: Merge and extend presets
- **Drop-in Components**: Pre-configured buttons, inputs, cards, badges

```js
import { shadcnPreset, applyPreset } from 'registyle/presets';

const manifest = applyPreset(myManifest, shadcnPreset);
```

#### CSS Layers & Specificity Control
- **@layer Support**: Control cascade order with CSS layers
- **!important Flag**: Force specificity when needed
- **Automatic Generation**: Layers properly generated in compiled CSS

```js
register('button', {
  layer: 'components',
  important: false,
  padding: '0.5rem 1rem',
});
```

#### Container Queries
- **@container Support**: Modern container query syntax
- **Container Breakpoints**: `@sm`, `@md`, `@lg`, `@xl`, `@2xl`
- **Custom Containers**: Use any `@container` at-rule

```js
register('card', {
  padding: '1rem',
  '@md': { padding: '1.5rem' },
  '@container (min-width: 400px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
});
```

### ⚡ Performance Improvements

#### Compilation Caching
- **LRU Cache**: Intelligent caching with automatic invalidation
- **File Tracking**: Monitors modification times
- **Faster Rebuilds**: Reuse cached manifests when the configured inputs have not changed
- **Configurable**: Adjust cache size and behavior

```js
registyle({
  cache: true,
  cacheSize: 50,
  debug: true,
})
```

#### CSS Optimization
- **Minification**: Removes whitespace and comments
- **Deduplication**: Merges identical selectors
- **CSS Size Reduction**: Minification and deduplication can be enabled for production builds
- **Zero Dependencies**: Pure JavaScript optimization

```js
import { optimizeCSS } from 'registyle/optimize';

const optimized = optimizeCSS(css, {
  minify: true,
  deduplicate: true,
});
```

### 🛠️ Developer Experience

#### Better Error Messages
- Clear validation errors with context
- Suggestions for common typos and mistakes
- Circular dependency detection
- Type mismatch warnings

#### Debug Mode
- Compilation time tracking
- Cache hit/miss statistics
- Optimization statistics
- Performance profiling

```js
registyle({
  debug: true, // See compilation stats
})
```

### Compatibility

- Existing 1.0.0 registration and compile APIs remain available.
- Tailwind utility compilation, themes, variants, presets, validation, and cache/optimization helpers are additive subpaths/features.

### 📚 Documentation

- Performance guidance is included in the README and advanced guide.
- **Examples**: Added variants, themes, and presets examples
- **TypeScript**: Improved type definitions with better inference
- **API Reference**: Complete API documentation

### 🐛 Bug Fixes

- Fixed circular dependency detection in extends
- Fixed modifier precedence in compound styles
- Fixed media query nesting in generated CSS
- Fixed cache invalidation edge cases
- Fixed TypeScript types for nested configurations

### 🔧 Internal

- Refactored compilation pipeline for better performance
- Improved test coverage (47 tests → all passing)
- Optimized CSS generation algorithms
- Better separation of concerns across modules

## [1.0.0] - Initial Release

- Core registration API
- Tailwind v4 integration
- Vite plugin
- Basic caching
- TypeScript support
