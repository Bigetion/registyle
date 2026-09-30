import { register } from 'registyle/collector';

register.group('stat', {
  card: { tw: 'p-5 rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] shadow-[var(--shadow-sm)] border-t-[3px] border-t-[var(--c-brand)]' },
  label: { tw: 'text-xs font-semibold uppercase mb-2 tracking-[0.06em] text-[var(--c-text-muted)]' },
  value: { tw: 'font-bold leading-none mb-1 text-[2rem] text-[var(--c-text)]' },
  change: { tw: 'text-xs font-semibold text-[var(--c-text-muted)]' },
  'change-up': { tw: 'text-[var(--c-success)]' },
  'change-down': { tw: 'text-[var(--c-danger)]' },
  icon: { tw: 'flex items-center justify-center rounded-xl size-[44px] bg-[var(--c-brand-light)] text-[var(--c-brand)]' },
});