import { register } from 'registyle/collector';

register('input-field', {
  base: {
    tw: [
      'w-full border transition-all font-[inherit] text-sm rounded-[var(--radius-md)] border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-text-light)]',
      'focus-visible:(border-[var(--c-border-focus)] shadow-[0_0_0_3px_var(--c-brand-ring)] outline-none) disabled:(opacity-[0.6] cursor-not-allowed bg-[var(--c-bg)])',
    ],
  },
  modifiers: {
    sm: { tw: 'px-2.5 py-1.5 text-[13px]' },
    md: { tw: 'px-3 py-2 text-sm' },
    lg: { tw: 'px-3.5 py-[11px] text-[15px]' },
    error: { tw: 'border-[var(--c-danger)] focus:(border-[var(--c-danger)] shadow-[0_0_0_3px_rgba(220,38,38,.2)])' },
  },
});