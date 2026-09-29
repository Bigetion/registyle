import { register } from 'registyle/collector';

register.group('tabs', {
  root: { tw: 'w-full' },
  list: { tw: 'flex items-center gap-1 border-b', 'border-color': 'var(--c-border)', 'margin-bottom': '1.25rem', 'overflow-x': 'auto', 'scrollbar-width': 'none' },
  tab: {
    tw: 'px-4 py-2.5 text-sm font-medium cursor-pointer border-b-2 border-transparent transition-colors -mb-px whitespace-nowrap',
    color: 'var(--c-text-muted)',
    'background-color': 'transparent',
    border: 'none',
    outline: 'none',
    '&:hover': { color: 'var(--c-text)', 'background-color': '#f1f4ef' },
    '&:focus-visible': { outline: '2px solid var(--c-brand)', 'outline-offset': '-2px' },
  },
  'tab-active': {
    tw: 'px-4 py-2.5 text-sm font-semibold cursor-pointer -mb-px whitespace-nowrap',
    color: 'var(--c-brand)',
    'background-color': '#fff9f6',
    border: 'none',
    outline: 'none',
    'border-bottom': '2px solid var(--c-brand)',
    '&:focus-visible': { outline: '2px solid var(--c-brand)', 'outline-offset': '-2px' },
  },
  panel: { animation: 'fadeIn 200ms ease' },
});