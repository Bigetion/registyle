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
      - run: npm run build
```

```json
// package.json
{
  "scripts": {
    "build": "vite build",
    "test": "node --test"
  }
}
```

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
- Explore [examples/](./examples/) for real-world patterns
- Read [CHANGELOG.md](./CHANGELOG.md) for latest features
