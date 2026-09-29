import { register } from 'registyle/collector';

register.group('accordion', {
  root: { tw: 'w-full border rounded-lg overflow-hidden', 'border-color': 'var(--c-border)', 'background-color': 'var(--c-surface)', 'box-shadow': 'var(--shadow-sm)' },
  item: {
    'border-bottom': '1px solid var(--c-border)',
    '&:last-child': { 'border-bottom': '0' },
  },
  trigger: {
    tw: 'flex items-center justify-between w-full px-5 py-4 text-sm font-medium cursor-pointer border-0 text-left transition-colors',
    color: 'var(--c-text)',
    'background-color': 'var(--c-surface)',
    '&:hover': { 'background-color': '#f7f8f5' },
    '&:focus-visible': { outline: '2px solid var(--c-brand)', 'outline-offset': '-3px' },
    '&[aria-expanded="true"]': { color: 'var(--c-brand)', 'background-color': '#fff9f6' },
  },
  icon: { tw: 'flex-shrink-0 transition-transform', color: 'var(--c-text-muted)' },
  'icon-open': { transform: 'rotate(180deg)' },
  content: {
    tw: 'px-5 text-sm',
    color: 'var(--c-text-muted)',
    'line-height': '1.7',
    'padding-bottom': '1.1rem',
    'padding-top': '0.15rem',
    'max-width': '72ch',
    'background-color': '#fff9f6',
    animation: 'slideDown 180ms ease',
  },
});