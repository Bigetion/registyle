import { register } from 'registyle/collector';

register.group('select', {
  root: { tw: 'relative w-full' },
  trigger: {
    tw: 'flex items-center justify-between w-full border cursor-pointer transition-all',
    padding: '8px 12px',
    'font-size': '14px',
    'font-family': 'inherit',
    'border-color': 'var(--c-border)',
    'border-radius': 'var(--radius-md)',
    'background-color': 'var(--c-surface)',
    color: 'var(--c-text)',
    outline: 'none',
    'border-width': '1px',
    '&:focus-visible': { 'border-color': 'var(--c-border-focus)', 'box-shadow': '0 0 0 3px var(--c-brand-ring)', outline: 'none' },
  },
  dropdown: {
    tw: 'absolute left-0 right-0 top-full mt-1 z-50 overflow-hidden rounded-xl border bg-white',
    'border-color': 'var(--c-border)',
    'box-shadow': 'var(--shadow-lg)',
    animation: 'slideDown 150ms ease',
  },
  option: {
    tw: 'flex items-center gap-2 px-4 py-2.5 text-sm cursor-pointer transition-colors',
    color: 'var(--c-text)',
    '&:hover': { 'background-color': 'var(--c-bg)' },
  },
  'option-selected': {
    tw: 'flex items-center gap-2 px-4 py-2.5 text-sm cursor-pointer font-medium',
    color: 'var(--c-brand)',
    'background-color': 'var(--c-brand-light)',
  },
});