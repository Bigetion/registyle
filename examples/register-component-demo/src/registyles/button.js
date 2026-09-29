import { register } from 'registyle/collector';

register('btn', {
  base: {
    tw: 'inline-flex items-center justify-center gap-2 font-semibold leading-none cursor-pointer border select-none whitespace-nowrap transition-all',
    'font-family': 'inherit',
    'border-radius': 'var(--radius-md)',
    '&:focus-visible': { outline: '2px solid var(--c-brand)', 'outline-offset': '2px' },
    '&:active': { transform: 'translateY(1px)' },
    '&:disabled': { opacity: '0.48', cursor: 'not-allowed', 'pointer-events': 'none', transform: 'none' },
  },
  modifiers: {
    primary: {
      tw: 'text-white',
      'background-color': 'var(--c-brand)',
      'border-color': 'var(--c-brand)',
      'box-shadow': '0 2px 4px rgba(150,55,39,.16)',
      '&:hover:not(:disabled)': { 'background-color': 'var(--c-brand-hover)', 'border-color': 'var(--c-brand-hover)' },
    },
    secondary: {
      color: 'var(--c-text)',
      'background-color': '#e9eee8',
      'border-color': '#e9eee8',
      '&:hover:not(:disabled)': { 'background-color': '#dfe7df', 'border-color': '#dfe7df' },
    },
    danger: {
      tw: 'text-white',
      'background-color': 'var(--c-danger)',
      'border-color': 'var(--c-danger)',
      '&:hover:not(:disabled)': { filter: 'brightness(.92)' },
    },
    success: {
      tw: 'text-white',
      'background-color': 'var(--c-success)',
      'border-color': 'var(--c-success)',
      '&:hover:not(:disabled)': { filter: 'brightness(.92)' },
    },
    ghost: {
      color: 'var(--c-text-muted)',
      'background-color': 'transparent',
      'border-color': 'transparent',
      '&:hover:not(:disabled)': { color: 'var(--c-text)', 'background-color': '#e9eee8' },
    },
    outline: {
      color: 'var(--c-brand)',
      'background-color': 'transparent',
      'border-color': 'var(--c-brand)',
      '&:hover:not(:disabled)': { color: '#fff', 'background-color': 'var(--c-brand)' },
    },
    xs: { tw: 'px-2.5 py-1.5 text-xs', 'border-radius': 'var(--radius-sm)' },
    sm: { tw: 'px-3 py-2 text-sm' },
    md: { tw: 'px-4 py-2.5 text-sm' },
    lg: { tw: 'px-6 py-3 text-base' },
    xl: { tw: 'px-8 py-4 text-base' },
    pill: { 'border-radius': 'var(--radius-full)' },
    'icon-sm': { tw: 'p-2', 'border-radius': 'var(--radius-sm)' },
    'icon-md': { tw: 'p-2.5' },
    'icon-lg': { tw: 'p-3' },
    block: { tw: 'w-full' },
  },
});
