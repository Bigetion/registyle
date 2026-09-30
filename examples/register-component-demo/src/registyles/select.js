import { register } from 'registyle/collector';

register.group('select', {
  root: { tw: 'relative w-full' },
  trigger: {
    tw: 'flex items-center justify-between w-full border cursor-pointer transition-all px-3 py-2 [font-size:14px] [font-family:inherit] border-[var(--c-border)] rounded-[var(--radius-md)] bg-[var(--c-surface)] text-[var(--c-text)] outline-none focus-visible:border-[var(--c-border-focus)] focus-visible:[box-shadow:0_0_0_3px_var(--c-brand-ring)] focus-visible:outline-none',
  },
  dropdown: {
    tw: 'absolute left-0 right-0 top-full mt-1 z-50 overflow-hidden rounded-xl border bg-white border-[var(--c-border)] [box-shadow:var(--shadow-lg)] animate-[slideDown_150ms_ease]',
  },
  option: {
    tw: 'flex items-center gap-2 px-4 py-2.5 text-sm cursor-pointer transition-colors text-[var(--c-text)] hover:bg-[var(--c-bg)]',
  },
  'option-selected': {
    tw: 'flex items-center gap-2 px-4 py-2.5 text-sm cursor-pointer font-medium text-[var(--c-brand)] bg-[var(--c-brand-light)]',
  },
});