import { register } from 'registyle/collector';

register.group('card', {
  root: { tw: 'rounded-lg border overflow-hidden', 'border-color': 'var(--c-border)', 'background-color': 'var(--c-surface)', 'box-shadow': 'var(--shadow-sm)' },
  header: { tw: 'flex items-center justify-between px-5 py-4 border-b', 'border-color': 'var(--c-border)', 'background-color': '#fbfcfa' },
  title: { tw: 'font-semibold text-base', color: 'var(--c-text)' },
  body: { tw: 'px-5 py-4' },
  footer: {
    tw: 'flex items-center gap-3 px-5 py-4 border-t',
    'border-color': 'var(--c-border)',
    'background-color': 'var(--c-bg)',
    'border-radius': '0 0 var(--radius-lg) var(--radius-lg)',
  },
});