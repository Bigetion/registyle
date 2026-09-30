import { register } from 'registyle/collector';

register.group('accordion', {
  root: { tw: 'w-full border rounded-lg overflow-hidden border-[var(--c-border)] bg-[var(--c-surface)] [box-shadow:var(--shadow-sm)]' },
  item: {
    tw: 'border-b border-b-[var(--c-border)] last:[border-bottom:0]',
  },
  trigger: {
    tw: 'flex items-center justify-between w-full px-5 py-4 text-sm font-medium cursor-pointer border-0 text-left transition-colors text-[var(--c-text)] bg-[var(--c-surface)] hover:bg-[#f7f8f5] focus-visible:outline-2 focus-visible:outline-[var(--c-brand)] focus-visible:outline-offset-[-3px] aria-expanded:text-[var(--c-brand)] aria-expanded:bg-[#fff9f6]',
  },
  icon: { tw: 'flex-shrink-0 transition-transform text-[var(--c-text-muted)]' },
  'icon-open': { tw: '[transform:rotate(180deg)]' },
  content: {
    tw: 'px-5 text-sm text-[var(--c-text-muted)] leading-5 pb-[1.1rem] pt-[.15rem] max-w-[72ch] bg-[#fff9f6] animate-[slideDown_180ms_ease]',
  },
});