import { register } from 'registyle/collector';

register('input-field', {
  base: {
    tw: 'w-full border transition-all',
    'font-family': 'inherit',
    'font-size': '14px',
    'border-radius': 'var(--radius-md)',
    'border-width': '1px',
    'border-color': 'var(--c-border)',
    'background-color': 'var(--c-surface)',
    color: 'var(--c-text)',
    '&:focus-visible': { 'border-color': 'var(--c-border-focus)', 'box-shadow': '0 0 0 3px var(--c-brand-ring)', outline: 'none' },
    '&:disabled': { opacity: '0.6', cursor: 'not-allowed', 'background-color': 'var(--c-bg)' },
    '&::placeholder': { color: 'var(--c-text-light)' },
  },
  modifiers: {
    sm: { padding: '6px 10px', 'font-size': '13px' },
    md: { padding: '8px 12px', 'font-size': '14px' },
    lg: { padding: '11px 14px', 'font-size': '15px' },
    error: { 'border-color': 'var(--c-danger)', '&:focus': { 'border-color': 'var(--c-danger)', 'box-shadow': '0 0 0 3px rgba(220,38,38,.2)' } },
  },
});