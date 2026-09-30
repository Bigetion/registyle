import { register } from 'registyle/collector';

register.group('card', {
  root: { tw: 'rounded-lg border overflow-hidden border-[var(--c-border)] bg-[var(--c-surface)] [box-shadow:var(--shadow-sm)]' },
  header: { tw: 'flex items-center justify-between px-5 py-4 border-b border-[var(--c-border)] bg-[#fbfcfa]' },
  title: { tw: 'font-semibold text-base text-[var(--c-text)]' },
  body: { tw: 'px-5 py-4' },
  footer: {
    tw: 'flex items-center gap-3 px-5 py-4 border-t border-[var(--c-border)] bg-[var(--c-bg)] rounded-[0_0_var(--radius-lg)_var(--radius-lg)]',
  },
});