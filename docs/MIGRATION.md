# Migration Guide

Guide for existing Registyle 1.0.0 projects moving to 1.1.1.

## Migrating from 1.0.0

No required API migration is intended: existing `register()`, `compile()`, collector, and Vite plugin APIs remain available. The theme, validation, variants, presets, cache, and optimizer modules are additive subpaths; adopt them only where useful.

CSS optimization is now opt-in to preserve 1.0.0 output by default. To enable minification and safe adjacent-rule deduplication explicitly, pass `optimize: true` to `compile()`, `compileToFile()`, or the Vite plugin.

### New Features You May Adopt

#### Use Theme System

**Before:**
```js
register('button', {
  backgroundColor: '#3b82f6',
  padding: '1rem',
});
```

**After:**
```js
import { createTheme, withTheme } from 'registyle/theme';

const theme = createTheme({
  colors: { primary: { 500: '#3b82f6' } },
  spacing: { 4: '1rem' },
});

const themed = withTheme(theme);

const [name, config] = themed.register('button', (t) => ({
  backgroundColor: t.color('primary', 500),
  padding: t.space(4),
}));
```

**Benefits:** Centralized tokens, easier rebranding, type-safe access.

#### Use Variants Instead of Modifiers

**Before:**
```js
register('button', {
  base: { display: 'flex' },
  modifiers: {
    primary: { backgroundColor: '#3b82f6' },
    secondary: { backgroundColor: '#6b7280' },
    small: { padding: '0.25rem 0.5rem' },
    large: { padding: '0.75rem 1.5rem' },
  },
});
```

**After:**
```js
import { createVariants } from 'registyle/variants';

const button = createVariants({
  base: { display: 'flex' },
  variants: {
    variant: {
      primary: { backgroundColor: '#3b82f6' },
      secondary: { backgroundColor: '#6b7280' },
    },
    size: {
      small: { padding: '0.25rem 0.5rem' },
      large: { padding: '0.75rem 1.5rem' },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'large',
  },
});

// Generate manifest
const manifest = button.toManifest('button');
```

**Benefits:** Better organization, compound variants, type-safe props.

#### Enable Validation

**Before:**
```js
// No validation
await compileToFile(manifest, './styles.css');
```

**After:**
```js
import { validateManifest } from 'registyle/validate';

const validation = validateManifest(manifest, {
  strict: false,
  warnConflicts: true,
});

if (validation.valid) {
  await compileToFile(manifest, './styles.css');
}
```

**Benefits:** Catch errors early, helpful warnings, better DX.

#### Use Presets

**Before:**
```js
// Define every component from scratch
register('button', { /* ... */ });
register('input', { /* ... */ });
register('card', { /* ... */ });
```

**After:**
```js
import { shadcnPreset, applyPreset } from 'registyle/presets';

const manifest = applyPreset(
  { classes: { /* custom classes */ } },
  shadcnPreset
);
```

**Benefits:** Faster development, consistent design, production-ready components.

### Optional Vite Features

Existing Vite configuration continues to work. You can opt into cache diagnostics and CSS optimization as needed:

```js
registyle({
  entry: 'src/styles/index.js',
  outFile: '.registyle/style.css',
  cache: true,
  optimize: true,
  debug: false,
})
```

CSS optimization is disabled by default for compatibility. Enable `optimize: true` to minify and safely deduplicate adjacent rules, or enable `minify` / `deduplicate` individually.

## Migrating from Other Solutions

### From CVA (Class Variance Authority)

**CVA:**
```ts
import { cva } from 'class-variance-authority';

const button = cva(['button'], {
  variants: {
    intent: {
      primary: ['bg-blue-500', 'text-white'],
      secondary: ['bg-gray-500', 'text-white'],
    },
    size: {
      small: ['text-sm', 'py-1', 'px-2'],
      medium: ['text-base', 'py-2', 'px-4'],
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
});
```

**Registyle:**
```js
import { createVariants } from 'registyle/variants';

const button = createVariants({
  base: { /* base styles */ },
  variants: {
    intent: {
      primary: {
        tw: 'bg-blue-500 text-white',
        // Or CSS properties
        backgroundColor: '#3b82f6',
        color: '#ffffff',
      },
      secondary: {
        tw: 'bg-gray-500 text-white',
      },
    },
    size: {
      small: { tw: 'text-sm py-1 px-2' },
      medium: { tw: 'text-base py-2 px-4' },
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
});
```

**Key Differences:**
- Registyle compiles to CSS, CVA generates class strings
- Registyle supports CSS properties alongside Tailwind
- Registyle has build-time optimization

### From Styled Components / Emotion

**Styled Components:**
```js
import styled from 'styled-components';

const Button = styled.button`
  padding: ${props => props.size === 'small' ? '0.25rem 0.5rem' : '0.5rem 1rem'};
  background-color: ${props => props.variant === 'primary' ? '#3b82f6' : '#6b7280'};
  
  &:hover {
    opacity: 0.9;
  }
`;
```

**Registyle:**
```js
import { createVariants } from 'registyle/variants';

const button = createVariants({
  base: {
    hover: { opacity: '0.9' },
  },
  variants: {
    size: {
      small: { padding: '0.25rem 0.5rem' },
      medium: { padding: '0.5rem 1rem' },
    },
    variant: {
      primary: { backgroundColor: '#3b82f6' },
      secondary: { backgroundColor: '#6b7280' },
    },
  },
});

// Generate CSS at build time
const manifest = button.toManifest('button');
```

**Benefits of Registyle:**
- Zero runtime overhead
- Better performance (no style injection)
- Smaller bundle size
- Optional Tailwind integration

### From Panda CSS

**Panda CSS:**
```tsx
import { css } from '../styled-system/css';

const button = css({
  padding: '4',
  bg: 'blue.500',
  _hover: { bg: 'blue.600' },
});
```

**Registyle:**
```js
import { register } from 'registyle';
import { createTheme } from 'registyle/theme';

const theme = createTheme({
  spacing: { 4: '1rem' },
  colors: { blue: { 500: '#3b82f6', 600: '#2563eb' } },
});

register('button', {
  padding: theme.space(4),
  backgroundColor: theme.color('blue', 500),
  hover: { backgroundColor: theme.color('blue', 600) },
});
```

**Similarities:**
- Both are build-time CSS solutions
- Both support type-safe design tokens
- Both have zero runtime

**Registyle Advantages:**
- Tailwind v4 integration
- Preset system for quick starts
- Variant composition
- No code generation required

### From Vanilla Extract

**Vanilla Extract:**
```ts
import { style } from '@vanilla-extract/css';

export const button = style({
  padding: '0.5rem 1rem',
  backgroundColor: 'blue',
  ':hover': {
    backgroundColor: 'darkblue',
  },
});
```

**Registyle:**
```js
import { register } from 'registyle';

register('button', {
  padding: '0.5rem 1rem',
  backgroundColor: 'blue',
  hover: { backgroundColor: 'darkblue' },
});
```

**Key Differences:**
- Registyle uses semantic class names (`.button`)
- Vanilla Extract generates atomic classes
- Registyle has optional Tailwind integration
- Registyle has runtime API for prototyping

## Checklist

Use this checklist when upgrading from 1.0.0:

- [ ] Update to `registyle@^1.1.1`
- [ ] Keep existing registration and Vite configuration unless adopting new features
- [ ] Adopt theme, variants, presets, and validation only where useful
- [ ] Enable CSS optimization explicitly only after checking generated output
- [ ] Run `npm test` and your application build
- [ ] Review CHANGELOG.md for release details

## Getting Help

- **Documentation**: [README.md](./README.md)
- **Optimization API**: [README.md](./README.md#optimization-api)
- **Issues**: [GitHub Issues](https://github.com/Bigetion/registyle/issues)
- **Examples**: [examples/](./examples/)

## FAQ

### Do I need to migrate everything at once?

No. Existing 1.0.0 APIs remain available; the 1.1 feature modules are additive.

### Will my CSS output change?

By default, 1.1.1 preserves the 1.0.0 CSS output. If you explicitly enable optimization, inspect the result with your own fixtures before shipping it.

### Can I adopt the new modules gradually?

Yes. Theme, validation, variants, presets, cache, and optimization are separate optional subpaths.

### How do I migrate a large codebase?

1. Start with non-critical components
2. Use validation to catch issues early
3. Migrate incrementally
4. Keep both versions working during transition
5. Full cutover once confident

### Performance impact?

There are no universal performance numbers: build time and CSS size depend on the manifest and project. Caching and CSS optimization are optional; measure them in your own build before enabling them.
