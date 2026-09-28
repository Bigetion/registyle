# Migration Guide

Guide for migrating to Registyle v2.0 from v1.0 and from other CSS-in-JS solutions.

## Migrating from Registyle v1.0 to v2.0

### Breaking Changes

#### 1. Runtime Tailwind Strings No Longer Supported

**Before (v1.0):**
```js
register('button', 'flex items-center px-4 py-2 bg-blue-500');
```

**After (v2.0):**
```js
register('button', {
  tw: 'flex items-center px-4 py-2 bg-blue-500',
});

// Or use CSS properties
register('button', {
  display: 'flex',
  alignItems: 'center',
  padding: '0.5rem 1rem',
  backgroundColor: '#3b82f6',
});
```

**Why?** Separates utility compilation from CSS declarations for better optimization.

#### 2. Multiple Extends Require Array

**Before (v1.0):**
```js
register('icon-button', {
  extend: 'button icon', // Space-separated
});
```

**After (v2.0):**
```js
register('icon-button', {
  extend: ['button', 'icon'], // Array
});
```

#### 3. New Module Structure

**Before (v1.0):**
```js
import { register, compile } from 'registyle';
```

**After (v2.0):**
```js
import { register } from 'registyle';
import { compile } from 'registyle/compile';
import { createTheme } from 'registyle/theme';
import { createVariants } from 'registyle/variants';
```

**Migration Script:**
```bash
# Find and replace imports
find . -name "*.js" -o -name "*.ts" | xargs sed -i "s/from 'registyle'/from 'registyle\/compile'/g"
```

### New Features You Should Adopt

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

### Vite Plugin Configuration

**Before (v1.0):**
```js
registyle({
  entry: 'src/styles/index.js',
  outFile: '.registyle/style.css',
})
```

**After (v2.0):**
```js
registyle({
  entry: 'src/styles/index.js',
  outFile: '.registyle/style.css',
  // New options
  cache: true,
  minify: true,
  deduplicate: true,
  debug: false,
})
```

### Performance Optimizations

v2.0 includes automatic optimizations, but you can configure them:

```js
// Build config
registyle({
  cache: true,        // Enable caching (50-80% faster rebuilds)
  cacheSize: 50,      // Cache up to 50 compilations
  minify: true,       // Minify CSS output
  deduplicate: true,  // Remove duplicate rules
  optimize: true,     // Enable all optimizations
  debug: false,       // Disable debug logs in production
})
```

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

Use this checklist to ensure a smooth migration:

- [ ] Update package.json to `registyle@^2.0.0`
- [ ] Update imports to use new module paths
- [ ] Convert runtime Tailwind strings to `tw` config
- [ ] Convert space-separated extends to arrays
- [ ] Add validation to your build process
- [ ] Enable caching and optimization
- [ ] Consider adopting theme system
- [ ] Consider adopting variant composition
- [ ] Consider using presets for faster development
- [ ] Update TypeScript types (if using TS)
- [ ] Test all components thoroughly
- [ ] Update documentation/comments
- [ ] Review CHANGELOG.md for detailed changes

## Getting Help

- **Documentation**: [README.md](./README.md)
- **Performance**: [PERFORMANCE.md](./PERFORMANCE.md)
- **Issues**: [GitHub Issues](https://github.com/Bigetion/registyle/issues)
- **Examples**: [examples/](./examples/)

## FAQ

### Do I need to migrate everything at once?

No! v2.0 is mostly backward compatible. You can:
1. Update core imports
2. Gradually adopt new features
3. Keep existing registrations as-is

### Will my CSS output change?

CSS output should be nearly identical, just more optimized (smaller size, deduplicated rules).

### Can I mix v1 and v2 patterns?

Yes, but it's not recommended long-term. The new patterns provide better type safety and DX.

### How do I migrate a large codebase?

1. Start with non-critical components
2. Use validation to catch issues early
3. Migrate incrementally
4. Keep both versions working during transition
5. Full cutover once confident

### Performance impact?

v2.0 is **faster** than v1.0:
- 50-80% faster rebuilds (caching)
- 20-40% smaller CSS (optimization)
- Better dev experience (validation, debug mode)
