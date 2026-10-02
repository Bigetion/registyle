# Advanced Guide

Deep dive into registyle's advanced features and patterns.

The modules in this guide are optional subpath APIs. The core workflow is semantic CSS registration, with Tailwind compilation and the Vite adapter available when needed.

## Table of Contents

- [Theme System](#theme-system)
- [Variants Composition](#variants-composition)
- [CSS Layers & Specificity](#css-layers--specificity)
- [Container Queries](#container-queries)
- [Build Options](#build-options)
- [Production Patterns](#production-patterns)
- [End-to-End: Variants + Theme + Collector](#end-to-end-variants--theme--collector)

## Theme System

### Creating Custom Themes

```js
import { createTheme } from 'registyle/theme';

const theme = createTheme({
  colors: {
    brand: {
      50: '#eff6ff',
      100: '#dbeafe',
      // ... full scale
      900: '#1e3a8a',
      950: '#172554',
    },
    semantic: {
      success: '#22c55e',
      warning: '#eab308',
      error: '#ef4444',
      info: '#3b82f6',
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  typography: {
    fontFamily: {
      sans: 'Inter, system-ui, sans-serif',
      mono: 'Fira Code, monospace',
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
    },
  },
  // Custom tokens
  elevation: {
    0: 'none',
    1: '0 1px 3px rgba(0,0,0,0.12)',
    2: '0 4px 6px rgba(0,0,0,0.1)',
    3: '0 10px 15px rgba(0,0,0,0.1)',
  },
});
```

### Theme Helpers

```js
// Color with default shade
theme.color('brand'); // → brand.500
theme.color('brand', 700); // → brand.700
theme.color('semantic.success'); // → success color

// Spacing
theme.space('md'); // → 1rem
theme.space(4); // → spacing.4

// Typography
theme.text('lg'); // → { fontSize: '1.125rem', lineHeight: '1.75rem' }

// Shadows
theme.shadow('md'); // → shadow value

// Border radius
theme.rounded('lg'); // → 0.5rem

// Custom tokens
theme.get('elevation.2'); // → elevation shadow
theme.get('typography.fontFamily.sans'); // → font family
```

### Theme Provider Pattern

```js
import { withTheme } from 'registyle/theme';

const themed = withTheme(theme);

// Single registration
const [name, config] = themed.register('button', (t) => ({
  backgroundColor: t.color('brand'),
  padding: `${t.space('sm')} ${t.space('md')}`,
  ...t.text('base'),
  boxShadow: t.shadow('sm'),
  borderRadius: t.rounded('md'),
  hover: {
    boxShadow: t.shadow('md'),
  },
}));

// Multiple registrations
const classes = themed.registerAll({
  button: (t) => ({ backgroundColor: t.color('brand') }),
  input: (t) => ({ borderColor: t.color('gray', 300) }),
  card: (t) => ({ boxShadow: t.shadow('lg') }),
});

// Groups
const [groupName, components] = themed.group('form', (t) => ({
  root: { display: 'flex', gap: t.space('md') },
  label: { ...t.text('sm'), color: t.color('gray', 700) },
  input: { padding: t.space('sm'), borderRadius: t.rounded('md') },
}));
```

### Dark Mode Themes

```js
import { createTheme, themes } from 'registyle/theme';

const darkTheme = createTheme({
  colors: {
    background: '#0a0a0a',
    foreground: '#fafafa',
    muted: '#171717',
    border: '#27272a',
  },
});

// Theme switching in app
const currentTheme = isDark ? darkTheme : themes.default;
```

## Variants Composition

### Complex Variant Patterns

```js
import { createVariants, compound } from 'registyle/variants';

const button = createVariants({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '500',
    transition: 'all 150ms',
    '&:disabled': {
      opacity: '0.5',
      cursor: 'not-allowed',
    },
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: '#3b82f6',
        color: '#ffffff',
        hover: { backgroundColor: '#2563eb' },
      },
      secondary: {
        backgroundColor: '#6b7280',
        color: '#ffffff',
        hover: { backgroundColor: '#4b5563' },
      },
      outline: {
        backgroundColor: 'transparent',
        border: '1px solid currentColor',
        hover: { backgroundColor: 'rgba(0,0,0,0.05)' },
      },
      ghost: {
        backgroundColor: 'transparent',
        hover: { backgroundColor: 'rgba(0,0,0,0.05)' },
      },
    },
    size: {
      xs: { padding: '0.25rem 0.5rem', fontSize: '0.75rem' },
      sm: { padding: '0.375rem 0.75rem', fontSize: '0.875rem' },
      md: { padding: '0.5rem 1rem', fontSize: '1rem' },
      lg: { padding: '0.625rem 1.25rem', fontSize: '1.125rem' },
      xl: { padding: '0.75rem 1.5rem', fontSize: '1.25rem' },
    },
    rounded: {
      none: { borderRadius: '0' },
      sm: { borderRadius: '0.125rem' },
      md: { borderRadius: '0.375rem' },
      lg: { borderRadius: '0.5rem' },
      full: { borderRadius: '9999px' },
    },
    fullWidth: {
      true: { width: '100%' },
      false: { width: 'auto' },
    },
  },
  compoundVariants: [
    // Outline + small needs thinner border
    {
      variant: 'outline',
      size: 'xs',
      styles: { borderWidth: '1px' },
    },
    // Ghost buttons at large sizes need more padding
    {
      variant: 'ghost',
      size: 'lg',
      styles: { padding: '0.75rem 1.5rem' },
    },
    // Full width + outline needs border adjustment
    {
      variant: 'outline',
      fullWidth: true,
      styles: { borderStyle: 'dashed' },
    },
  ],
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    rounded: 'md',
    fullWidth: false,
  },
});
```

### Using Variants in React

```tsx
import { button } from './variants';
import { cx } from 'registyle';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Button({ 
  variant, 
  size, 
  rounded, 
  fullWidth, 
  className,
  children,
  ...props 
}: ButtonProps) {
  const variantClasses = button.compose({ 
    variant, 
    size, 
    rounded, 
    fullWidth 
  }, 'button');
  
  return (
    <button className={cx('button', ...variantClasses, className)} {...props}>
      {children}
    </button>
  );
}
```

### Merging Variants

```js
import { mergeVariants } from 'registyle/variants';

const customButton = mergeVariants(
  {
    base: { fontFamily: 'Inter' },
    variants: {
      size: {
        sm: { padding: '0.375rem 0.75rem' },
        md: { padding: '0.5rem 1rem' },
      },
    },
  },
  {
    variants: {
      loading: {
        true: { opacity: '0.7', cursor: 'wait' },
        false: {},
      },
    },
  }
);
```

## CSS Layers & Specificity

### Layer Strategy

Declare global layer order in the application stylesheet:

```css
@layer base, components, utilities;
```

Assign registrations to layers:

```js

// Base layer (lowest specificity)
register('reset', {
  layer: 'base',
  margin: '0',
  padding: '0',
});

// Components layer
register('button', {
  layer: 'components',
  padding: '0.5rem 1rem',
});

// Utilities layer (highest specificity)
register('p-4', {
  layer: 'utilities',
  padding: '1rem',
});
```

### When to Use !important

```js
// Use sparingly, only for overrides
register('force-hide', {
  important: true,
  display: 'none', // Will be display: none !important
});

// Better: use layers instead
register('utility-hide', {
  layer: 'utilities',
  display: 'none',
});
```

### Layer Inheritance

```js
// Base component with layer
register('base-button', {
  layer: 'components',
  display: 'inline-flex',
});

// Extended components inherit layer
register('primary-button', {
  extend: 'base-button',
  // Inherits layer: 'components'
  backgroundColor: '#3b82f6',
});
```

## Container Queries

### Basic Container Queries

```js
register('card', {
  containerType: 'inline-size',
  padding: '1rem',
  
  // Container breakpoints
  '@sm': { padding: '1.5rem' },
  '@md': { padding: '2rem' },
  '@lg': { padding: '2.5rem' },
  
  // Custom container query
  '@container (min-width: 500px)': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
});
```

### Named Containers

```js
register('sidebar', {
  containerName: 'sidebar',
  containerType: 'inline-size',
});

register('sidebar-item', {
  padding: '0.5rem',
  
  '@container sidebar (min-width: 300px)': {
    padding: '1rem',
    display: 'flex',
  },
});
```

### Responsive + Container Queries

```js
register('responsive-card', {
  // Mobile: stack vertically
  display: 'flex',
  flexDirection: 'column',
  
  // Tablet: use breakpoint
  md: {
    flexDirection: 'row',
  },
  
  // Inside container: adjust layout
  '@container (min-width: 400px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
});
```

## Build Options

### CSS Optimization

Optimization is opt-in. Pass options to the compiler or Vite adapter when you want minified or deduplicated output:

```js
import { compile } from 'registyle/compile';

const css = await compile(manifest, {
  minify: true,
  deduplicate: true,
});
```

### Bundle Splitting

```js
// Split by feature
const coreManifest = {
  classes: { button, input, card },
};

const extendedManifest = {
  classes: { tooltip, popover, dialog },
};

// Compile separately
await compileToFile(coreManifest, './styles/core.css');
await compileToFile(extendedManifest, './styles/extended.css');
```

## Production Patterns

### Design System Structure

```
src/
  design-system/
    theme.js          # Theme configuration
    variants.js       # Variant definitions
    components/
      button.js       # Button registrations
      input.js        # Input registrations
      card.js         # Card registrations
    index.js          # Export manifest
```

### Monorepo Setup

```js
// packages/design-system/src/index.js
export { theme } from './theme';
export { buttonVariants } from './components/button';
export { manifest } from './manifest';

// packages/web-app/registyle.config.js
import { manifest } from '@company/design-system';

export default manifest;
```

### Incremental Adoption

```js
import { register } from 'registyle';

register('button', { padding: '0.5rem 1rem' });
```

### CI/CD Integration

```yaml
# .github/workflows/styles.yml
name: Validate Styles

on: [push, pull_request]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm test
```

The package root's `npm test` script runs the test suite and type checks. Run the consuming application's own build command separately when validating a Vite integration.

## Best Practices

1. **Use Theme for Consistency**: Centralize design tokens when a shared theme helps.
2. **Use Variants for Composition**: Keep variant configuration close to the component.
3. **Layer Styles Deliberately**: Use CSS layers for predictable specificity.
4. **Test Compiled Output**: Cover the generated CSS that your application relies on.
5. **Measure Build Changes**: Check CSS output before enabling minification or deduplication.
6. **Follow Naming Conventions**: Keep semantic class names consistent across the project.

## Next Steps

- Review the README for runtime and Tailwind build workflows
- Check [MIGRATION.md](./MIGRATION.md) if upgrading from v1
- Explore [examples/](../examples/) for real-world patterns
- Read [CHANGELOG.md](./CHANGELOG.md) for latest features

---

## End-to-End: Variants + Theme + Collector

This section shows a complete workflow that connects all three advanced APIs — `createTheme`, `createVariants`, and `register` from `registyle/collector` — into a single cohesive registration file.

### The Goal

Register a `btn` component with:
- A shared theme for colors and spacing
- Variant dimensions for `intent` (primary, secondary, danger) and `size` (sm, md, lg)
- A compound variant that adjusts padding for the danger+sm combination
- Everything collected and compiled through Vite

### Step 1 — Define the Theme

```js
// src/registyles/theme.js
import { createTheme } from 'registyle/theme';

export const theme = createTheme({
  colors: {
    brand: {
      50:  '#eff6ff',
      100: '#dbeafe',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
    },
    danger: {
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
    },
  },
});
```

### Step 2 — Define the Variants

```js
// src/registyles/button.variants.js
import { createVariants } from 'registyle/variants';

export const buttonVariants = createVariants({
  base: {
    tw: 'inline-flex items-center justify-center font-medium rounded-md transition-colors',
  },
  variants: {
    intent: {
      primary: {
        tw: 'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-500',
      },
      secondary: {
        tw: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-2 focus-visible:ring-gray-400',
      },
      danger: {
        tw: 'bg-red-500 text-white hover:bg-red-600 focus-visible:ring-2 focus-visible:ring-red-500',
      },
    },
    size: {
      sm: { tw: 'px-3 py-1.5 text-sm gap-1.5' },
      md: { tw: 'px-4 py-2 text-base gap-2' },
      lg: { tw: 'px-5 py-2.5 text-lg gap-2.5' },
    },
  },
  compoundVariants: [
    // danger + sm needs slightly less horizontal padding
    {
      intent: 'danger',
      size: 'sm',
      styles: { tw: 'px-2.5' },
    },
  ],
  defaultVariants: {
    intent: 'primary',
    size: 'md',
  },
});
```

### Step 3 — Register via Collector

`toManifest()` converts the variant definition into an object keyed by generated class name — ready to be passed to `register` from `registyle/collector`.

```js
// src/registyles/button.js
import { register } from 'registyle/collector';
import { buttonVariants } from './button.variants.js';
import { theme } from './theme.js';
import { withTheme } from 'registyle/theme';

// Register all variant combinations: btn, btn-primary, btn-secondary,
// btn-danger, btn-sm, btn-md, btn-lg, and any compound overrides.
const manifest = buttonVariants.toManifest('btn');
for (const [name, config] of Object.entries(manifest)) {
  register(name, config);
}

// Optionally add a themed icon button on top of the variant base
const themed = withTheme(theme);
const [iconName, iconConfig] = themed.register('btn-icon', (t) => ({
  extend: 'btn',
  tw: 'p-2',
  aspectRatio: '1 / 1',
  borderRadius: t.rounded('full'),
}));
register(iconName, iconConfig);
```

### Step 4 — Expose via Collector Index

```js
// src/registyles/index.js
import { getManifest } from 'registyle/collector';
import './button.js';
// import other component files here...

export default getManifest();
```

### Step 5 — Use in a React Component

```tsx
// src/components/Button.tsx
import { cx } from 'registyle';

type Intent = 'primary' | 'secondary' | 'danger';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  intent?: Intent;
  size?: Size;
  iconOnly?: boolean;
}

export function Button({
  intent = 'primary',
  size = 'md',
  iconOnly = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cx(
        iconOnly ? 'btn-icon' : 'btn',
        `btn-${intent}`,
        `btn-${size}`,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
```

### What Gets Compiled

The Vite plugin collects the manifest from `src/registyles/index.js` and compiles it through Tailwind v4. The output CSS contains one rule per class name:

```css
.btn { display: inline-flex; align-items: center; ... }
.btn-primary { background-color: ...; color: #fff; ... }
.btn-primary:hover { background-color: ...; }
.btn-secondary { ... }
.btn-danger { ... }
.btn-sm { padding: 0.375rem 0.75rem; font-size: 0.875rem; ... }
.btn-md { ... }
.btn-lg { ... }
.btn-icon { ... border-radius: 9999px; }
```

Your JSX stays clean — no utility strings in markup, and no runtime style computation on the hot path.

### Key Points

- `createVariants()` is framework-agnostic — it produces a plain config object, not a component
- `toManifest(baseName)` returns `Record<string, StyleConfig>` — iterate and `register()` each entry
- `withTheme()` + `register()` from collector is how you mix theme-driven one-off classes with variant-generated ones
- All class names are predictable and static — great for third-party tools that scan class names
