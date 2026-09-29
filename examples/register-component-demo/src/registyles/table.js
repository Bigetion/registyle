import { register } from 'registyle/collector';

register.group('table', {
  root: {
    tw: 'w-full min-w-0 rounded-lg border',
    'border-color': 'var(--c-border)',
    'background-color': 'var(--c-surface)',
    'box-shadow': 'var(--shadow-sm)',
    'overflow-x': 'auto',
    'overscroll-behavior-x': 'contain',
    '&:focus-visible': { outline: '2px solid var(--c-brand)', 'outline-offset': '3px' },
  },
  thead: {
    'border-bottom': '1px solid var(--c-border)',
    'background-color': '#f5f7f3',
  },
  th: {
    tw: 'px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider',
    color: 'var(--c-text-muted)',
    'white-space': 'nowrap',
    '&:first-child': { 'padding-left': '1.25rem' },
    '&:last-child': { 'padding-right': '1.25rem', 'text-align': 'right' },
  },
  tr: {
    'border-bottom': '1px solid var(--c-border)',
    transition: 'background-color 140ms ease',
    '&:hover': { 'background-color': '#f7f9f5' },
    '&:last-child': { 'border-bottom': '0' },
  },
  'tr-last': { 'border-bottom': 'none' },
  td: {
    tw: 'px-4 py-3.5 text-sm',
    color: 'var(--c-text)',
    'vertical-align': 'middle',
    'white-space': 'nowrap',
    '&:first-child': { 'padding-left': '1.25rem' },
    '&:last-child': { 'padding-right': '1.25rem', 'text-align': 'right' },
  },
  empty: {
    tw: 'text-center py-12 text-sm',
    color: 'var(--c-text-muted)',
  },
});

register('table-table', {
  tw: 'w-full border-collapse',
  'min-width': '700px',
  'table-layout': 'fixed',
  'font-size': '14px',
});

register('table-demo-toolbar', {
  tw: 'flex justify-between gap-4 mb-5',
  'align-items': 'flex-start',
  '@media (max-width: 560px)': { 'flex-direction': 'column', 'align-items': 'stretch' },
});

register('table-demo-title', {
  'font-size': '16px',
  'font-weight': '700',
  color: 'var(--c-text)',
});

register('table-demo-copy', {
  'margin-top': '2px',
  'font-size': '13px',
  color: 'var(--c-text-muted)',
});

register('table-demo-controls', {
  tw: 'flex items-center justify-between gap-3 mb-3',
  '@media (max-width: 560px)': { 'align-items': 'stretch', 'flex-direction': 'column' },
});

register('table-demo-search', {
  width: 'min(340px, 100%)',
  '@media (max-width: 560px)': { width: '100%' },
});

register('table-demo-filter', {
  width: '180px',
  '@media (max-width: 560px)': { width: '100%' },
});

register('table-demo-footer', {
  tw: 'flex items-center justify-between gap-3',
  'padding-top': '0.85rem',
  'font-size': '12px',
  color: 'var(--c-text-muted)',
  '@media (max-width: 480px)': { 'align-items': 'flex-start', 'flex-direction': 'column' },
});