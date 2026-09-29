import { register } from 'registyle/collector';

register.group('toast', {
  container: {
    tw: 'flex flex-col gap-3 z-50',
    position: 'fixed',
    right: '20px',
    bottom: '20px',
    'pointer-events': 'none',
    '@media (max-width: 480px)': { right: '12px', bottom: '12px', left: '12px' },
  },
  item: {
    tw: 'flex items-start gap-3 rounded-lg border px-4 py-3',
    'font-size': '13px',
    'min-width': 'min(300px, calc(100vw - 24px))',
    'max-width': '400px',
    'background-color': 'var(--c-surface)',
    'pointer-events': 'auto',
    'border-color': 'var(--c-border)',
    'box-shadow': 'var(--shadow-lg)',
    animation: 'toastIn 220ms ease',
  },
  icon: { tw: 'flex-shrink-0 mt-0.5' },
  body: { tw: 'flex-1 min-w-0' },
  title: { tw: 'font-semibold mb-0.5', 'font-size': '13px', color: 'var(--c-text)' },
  desc: { 'font-size': '12px', color: 'var(--c-text-muted)' },
  close: { tw: 'flex-shrink-0 cursor-pointer border-0 bg-transparent p-0.5 rounded', color: 'var(--c-text-light)', '&:hover': { color: 'var(--c-text)' } },
  'item-success': { 'border-left': '3px solid var(--c-success)' },
  'item-warning': { 'border-left': '3px solid var(--c-warning)' },
  'item-danger': { 'border-left': '3px solid var(--c-danger)' },
  'item-info': { 'border-left': '3px solid var(--c-info)' },
});