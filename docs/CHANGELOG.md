# Changelog

All notable changes to registyle will be documented in this file.

## [2.0.0] - 2024

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
const classes = button.compose({ size: 'sm', variant: 'primary' });
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
- **50-80% Faster**: Rebuilds with unchanged manifests
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
- **20-40% Smaller**: Bundle size reduction
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

### 📦 Breaking Changes

#### API Changes
- Minimum Node.js version: 18+ (was 16+)
- `register()` no longer accepts raw Tailwind strings at runtime
  - Use `tw` key in config object instead
  - Migration: `register('button', 'flex p-4')` → `register('button', { tw: 'flex p-4' })`

#### Config Changes
- `extend` now requires explicit array for multiple parents
  - Migration: `extend: 'base1 base2'` → `extend: ['base1', 'base2']`

#### Export Changes
- New module structure with explicit subpaths
- Old: `import { compile } from 'registyle'`
- New: `import { compile } from 'registyle/compile'`

### 📚 Documentation

- **PERFORMANCE.md**: Performance optimization guide
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
