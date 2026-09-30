import { register } from 'registyle/collector';

register.group('card', {
  root: { tw: 'rounded-lg border border-[var(--c-border)] overflow-hidden bg-[var(--c-surface)] shadow-[var(--shadow-sm)]' },
  header: { tw: 'flex items-center justify-between px-5 py-4 border-b border-b-[var(--c-border)] bg-[#fbfcfa]' },
  title: { tw: 'font-semibold text-base text-[var(--c-text)]' },
  body: { tw: 'px-5 py-4' },
  footer: { tw: 'flex items-center gap-3 px-5 py-4 border-t border-t-[var(--c-border)] bg-[var(--c-bg)] rounded-b-[var(--radius-lg)]' },
});