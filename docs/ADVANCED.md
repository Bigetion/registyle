# Advanced Guide

Deep dive into registyle's advanced features and patterns.

## Table of Contents

- [Theme System](#theme-system)
- [Variants Composition](#variants-composition)
- [Preset System](#preset-system)
- [CSS Layers & Specificity](#css-layers--specificity)
- [Container Queries](#container-queries)
- [Validation & Error Handling](#validation--error-handling)
- [Performance Optimization](#performance-optimization)
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
  });
  
  return (
    <button className={cx('button', ...variantClasses, className)} {...props}>
      {children}
    </button>
  );
}
```

### Merging Variants

```js
import { mergeVariants, variantPresets } from 'registyle/variants';

const customButton = mergeVariants(
  {
    base: { fontFamily: 'Inter' },
    variants: {
      size: variantPresets.size,
      variant: variantPresets.variant,
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

## Preset System

### Creating Custom Presets

```js
import { createPreset } from 'registyle/presets';

export const myCompanyPreset = createPreset({
  name: 'my-company',
  description: 'Company design system',
  theme: {
    colors: {
      primary: '#your-brand-color',
      // ...
    },
  },
  classes: {
    button: {
      base: { /* company button styles */ },
      modifiers: { /* variants */ },
    },
    input: { /* company input styles */ },
    // ... all components
  },
  groups: {
    card: {
      root: { /* card root */ },
      header: { /* card header */ },
      content: { /* card content */ },
    },
  },
});
```

### Extending Presets

```js
import { shadcnPreset, mergePresets } from 'registyle/presets';

const customPreset = mergePresets(
  shadcnPreset,
  {
    classes: {
      // Override button from shadcn
      button: {
        base: {
          ...shadcnPreset.classes.button.base,
          fontFamily: 'Custom Font',
        },
      },
      // Add new component
      tooltip: { /* tooltip styles */ },
    },
  }
);
```

### Preset with Theme

```js
import { createPreset } from 'registyle/presets';
import { createTheme } from 'registyle/theme';

const myTheme = createTheme({ /* ... */ });

const preset = createPreset({
  name: 'themed-preset',
  theme: myTheme.tokens,
  classes: {
    button: (theme) => ({
      backgroundColor: theme.colors.primary[500],
      // Use theme tokens in preset
    }),
  },
});
```

## CSS Layers & Specificity

### Layer Strategy

```js
// Define layer order first
register('@layer base, components, utilities');

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

## Validation & Error Handling

### Strict Mode

```js
import { validateManifest, ValidationError } from 'registyle/validate';

try {
  const result = validateManifest(manifest, {
    strict: true, // Throw on errors
    warnUnknownProperties: true,
    warnConflicts: true,
  });
} catch (error) {
  if (error instanceof ValidationError) {
    console.error('Validation failed:', error.message);
    console.error('Context:', error.context);
  }
}
```

### Custom Reporter

```js
import { createReporter } from 'registyle/validate';

const reporter = createReporter({
  onError: (message, result) => {
    // Send to error tracking
    Sentry.captureMessage(message, {
      level: 'error',
      extra: result,
    });
  },
  onWarning: (message, result) => {
    // Log warnings
    console.warn('[Registyle Warning]', message);
  },
  throwOnError: process.env.NODE_ENV === 'production',
});

reporter.validate(manifest);
```

### Conflict Detection

```js
import { detectConflicts } from 'registyle/validate';

const conflicts = detectConflicts({
  padding: '1rem',
  tw: 'p-4', // Conflicts with padding
});

if (conflicts.length > 0) {
  console.warn('Property conflicts detected:', conflicts);
}
```

## Performance Optimization

### Cache Configuration

```js
// Development: aggressive caching
registyle({
  cache: true,
  cacheSize: 100, // Large cache
  debug: true,
});

// Production: optimized output
registyle({
  cache: true,
  cacheSize: 10, // Smaller cache
  minify: true,
  deduplicate: true,
  optimize: true,
  debug: false,
});
```

### Manual Optimization

```js
import { optimizeCSS, minifyCSS, deduplicateCSS } from 'registyle/optimize';

// Full optimization
const optimized = optimizeCSS(css);

// Selective optimization
const minified = minifyCSS(css);
const deduplicated = deduplicateCSS(css);

// Get stats
import { getOptimizationStats } from 'registyle/optimize';
const stats = getOptimizationStats(original, optimized);
console.log(`Saved ${stats.percent} (${stats.savings} bytes)`);
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
    presets.js        # Custom presets
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
// Start with preset
import { shadcnPreset } from 'registyle/presets';

// Override specific components
const manifest = {
  ...shadcnPreset,
  classes: {
    ...shadcnPreset.classes,
    button: myCustomButton, // Override
    'custom-widget': myWidget, // Add new
  },
};
```

### Testing Styles

```js
import { validateConfig } from 'registyle/validate';
import { describe, it, expect } from 'vitest';

describe('Button Registration', () => {
  it('should be valid', () => {
    const result = validateConfig('button', buttonConfig);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });
  
  it('should not have conflicts', () => {
    const conflicts = detectConflicts(buttonConfig);
    expect(conflicts).toHaveLength(0);
  });
});
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
      - run: npm run styles:validate
      - run: npm run styles:build
      - run: npm run styles:test
```

```json
// package.json
{
  "scripts": {
    "styles:validate": "node scripts/validate-styles.js",
    "styles:build": "node scripts/build-styles.js",
    "styles:test": "vitest run"
  }
}
```

## Best Practices

1. **Use Theme for Consistency**: Centralize all design tokens
2. **Leverage Variants**: Better than manual modifier management
3. **Enable Validation**: Catch errors early in development
4. **Optimize for Production**: Enable all optimizations
5. **Layer Your Styles**: Use CSS layers for predictable specificity
6. **Document Presets**: Make reusable configs for team
7. **Test Configurations**: Validate registrations in CI
8. **Monitor Bundle Size**: Track CSS output size over time
9. **Use Type Safety**: TypeScript provides better DX
10. **Follow Naming Conventions**: Consistent class names across team

## Next Steps

- Review [PERFORMANCE.md](./PERFORMANCE.md) for optimization strategies
- Check [MIGRATION.md](./MIGRATION.md) if upgrading from v1
- Explore [examples/](./examples/) for real-world patterns
- Read [CHANGELOG.md](./CHANGELOG.md) for latest features
