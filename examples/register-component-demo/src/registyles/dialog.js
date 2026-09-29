import { register } from 'registyle/collector';

register.group('dialog', {
  overlay: {
    tw: 'fixed inset-0 z-50 flex items-center justify-center p-4',
    'background-color': 'rgba(22,34,29,.62)',
    'backdrop-filter': 'blur(5px)',
    animation: 'overlayIn 180ms ease',
  },
  content: {
    tw: 'relative w-full overflow-hidden',
    'border-radius': 'var(--radius-lg)',
    'background-color': 'var(--c-surface)',
    'max-width': '560px',
    'box-shadow': 'var(--shadow-lg)',
    animation: 'dialogIn 200ms ease',
  },
  header: { tw: 'flex items-start justify-between gap-4 px-6 py-5 border-b', 'border-color': 'var(--c-border)', 'background-color': '#fbfcfa' },
  title: { tw: 'font-semibold text-lg', color: 'var(--c-text)' },
  body: { tw: 'px-6 py-5', 'font-size': '14px', color: 'var(--c-text-muted)', 'line-height': '1.7' },
  footer: { tw: 'flex items-center justify-end gap-3 px-6 py-4 border-t', 'border-color': 'var(--c-border)', 'background-color': '#f7f8f5' },
  close: {
    tw: 'flex items-center justify-center rounded-lg cursor-pointer border-0 transition-colors bg-transparent',
    width: '32px',
    height: '32px',
    color: 'var(--c-text-muted)',
    '&:hover': { 'background-color': 'var(--c-bg)', color: 'var(--c-text)' },
  },
});