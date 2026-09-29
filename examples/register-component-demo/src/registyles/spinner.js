import { register } from 'registyle/collector';

register('spinner', {
  base: {
    tw: 'inline-block rounded-full border-2',
    'border-color': 'color-mix(in srgb, currentColor 24%, transparent)',
    'border-top-color': 'currentColor',
    'border-right-color': 'currentColor',
    animation: 'spin 0.7s linear infinite',
  },
  modifiers: {
    xs: { width: '14px', height: '14px' },
    sm: { width: '18px', height: '18px' },
    md: { width: '24px', height: '24px' },
    lg: { width: '32px', height: '32px' },
    xl: { width: '48px', height: '48px' },
    primary: { color: 'var(--c-brand)' },
    white: { color: '#fff' },
    gray: { color: 'var(--c-text-muted)' },
  },
});