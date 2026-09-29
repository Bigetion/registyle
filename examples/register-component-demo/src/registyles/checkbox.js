import { register } from 'registyle/collector';

register('checkbox', {
  base: {
    tw: 'inline-flex items-center justify-center flex-shrink-0 border rounded transition-all cursor-pointer',
    width: '18px',
    height: '18px',
    'border-color': 'var(--c-border)',
    'background-color': 'var(--c-surface)',
    'border-radius': 'var(--radius-sm)',
    '&:focus-visible': { outline: '2px solid var(--c-brand)', 'outline-offset': '2px' },
  },
  modifiers: {
    checked: { 'background-color': 'var(--c-brand)', 'border-color': 'var(--c-brand)' },
    indeterminate: { 'background-color': 'var(--c-brand)', 'border-color': 'var(--c-brand)' },
    sm: { width: '14px', height: '14px' },
    lg: { width: '22px', height: '22px' },
  },
});