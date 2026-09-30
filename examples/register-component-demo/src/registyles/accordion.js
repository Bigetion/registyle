import { register } from 'registyle/collector';

register.group('accordion', {
  root: { tw: 'w-full border rounded-lg overflow-hidden border-[var(--c-border)] bg-[var(--c-surface)] shadow-[var(--shadow-sm)]' },
  item: {
    tw: 'border-b border-b-[var(--c-border)] last:border-b-0',
  },
  trigger: {
    tw: ['flex items-center justify-between w-full px-5 py-4 text-sm font-medium cursor-pointer border-0 text-left transition-colors text-[var(--c-text)] bg-[var(--c-surface)]', 'hover:bg-[#f7f8f5] focus-visible:(outline-2 outline-[var(--c-brand)] outline-offset-[-3px]) aria-expanded:(text-[var(--c-brand)] bg-[#fff9f6])'],
  },
  icon: { tw: 'shrink-0 transition-transform text-[var(--c-text-muted)]' },
  'icon-open': { tw: 'rotate-180' },
  content: {
    tw: 'px-5 pt-[0.15rem] pb-[1.1rem] text-sm text-[var(--c-text-muted)] leading-[1.7] max-w-[72ch] bg-[#fff9f6] animate-[slideDown_180ms_ease]',
  },
});