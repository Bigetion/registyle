import { register } from 'registyle/collector';

register.group('pagination', {
  root: { tw: 'flex items-center gap-1 flex-wrap' },
  item: {
    tw: 'inline-flex items-center justify-center text-sm font-medium cursor-pointer border border-transparent transition-all rounded-lg',
    'min-width': '36px',
    height: '36px',
    padding: '0 8px',
    color: 'var(--c-text-muted)',
    'background-color': 'transparent',
    '&:hover': { 'background-color': 'var(--c-bg)', color: 'var(--c-text)', 'border-color': 'var(--c-border)' },
    '&:disabled': { opacity: '0.4', cursor: 'not-allowed' },
  },
  'item-active': {
    tw: 'inline-flex items-center justify-center text-sm font-semibold rounded-lg',
    'min-width': '36px',
    height: '36px',
    'background-color': 'var(--c-brand)',
    color: '#fff',
    border: '1px solid var(--c-brand)',
  },
  ellipsis: { tw: 'inline-flex items-center justify-center text-sm', width: '36px', height: '36px', color: 'var(--c-text-light)' },
});