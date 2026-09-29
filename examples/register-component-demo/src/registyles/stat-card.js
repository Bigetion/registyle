import { register } from 'registyle/collector';

register.group('stat', {
  card: { tw: 'p-5 rounded-lg border', 'border-color': 'var(--c-border)', 'background-color': 'var(--c-surface)', 'box-shadow': 'var(--shadow-sm)', 'border-top': '3px solid var(--c-brand)' },
  label: { tw: 'text-xs font-semibold uppercase mb-2', 'letter-spacing': '0.06em', color: 'var(--c-text-muted)' },
  value: { tw: 'font-bold leading-none mb-1', 'font-size': '2rem', color: 'var(--c-text)' },
  change: { tw: 'text-xs font-semibold', color: 'var(--c-text-muted)' },
  'change-up': { color: 'var(--c-success)' },
  'change-down': { color: 'var(--c-danger)' },
  icon: { tw: 'flex items-center justify-center rounded-xl', width: '44px', height: '44px', 'background-color': 'var(--c-brand-light)', color: 'var(--c-brand)' },
});