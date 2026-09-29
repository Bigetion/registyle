import { register } from 'registyle/collector';

register('tag', {
  base: {
    tw: 'inline-flex items-center gap-1.5 font-medium rounded-full transition-all',
    'font-size': '12px',
    padding: '3px 10px',
    'background-color': 'var(--c-bg)',
    border: '1px solid var(--c-border)',
    color: 'var(--c-text-muted)',
  },
  modifiers: {
    primary: { 'background-color': 'var(--c-brand-light)', color: 'var(--c-brand)', 'border-color': 'rgba(214,83,61,.22)' },
    success: { 'background-color': 'var(--c-success-bg)', color: 'var(--c-success)', 'border-color': 'rgba(22,163,74,.2)' },
    warning: { 'background-color': 'var(--c-warning-bg)', color: 'var(--c-warning)', 'border-color': 'rgba(217,119,6,.2)' },
    danger: { 'background-color': 'var(--c-danger-bg)', color: 'var(--c-danger)', 'border-color': 'rgba(220,38,38,.2)' },
    removable: { 'padding-right': '4px' },
    'remove-btn': {
      tw: 'inline-flex items-center justify-center rounded-full cursor-pointer border-0 bg-transparent transition-colors p-0.5',
      color: 'inherit',
      opacity: '0.6',
      '&:hover': { opacity: '1', 'background-color': 'rgba(0,0,0,.1)' },
    },
  },
});