import { register } from 'registyle/collector';

register('textarea-field', {
  base: {
    tw: 'w-full border transition-all resize-y',
    'font-family': 'inherit',
    'font-size': '14px',
    'line-height': '1.6',
    padding: '8px 12px',
    'border-radius': 'var(--radius-md)',
    'border-width': '1px',
    'border-color': 'var(--c-border)',
    'background-color': 'var(--c-surface)',
    color: 'var(--c-text)',
    '&:focus-visible': { 'border-color': 'var(--c-border-focus)', 'box-shadow': '0 0 0 3px var(--c-brand-ring)', outline: 'none' },
    '&::placeholder': { color: 'var(--c-text-light)' },
  },
  modifiers: {
    error: { 'border-color': 'var(--c-danger)', '&:focus': { 'border-color': 'var(--c-danger)', 'box-shadow': '0 0 0 3px rgba(220,38,38,.2)' } },
  },
});