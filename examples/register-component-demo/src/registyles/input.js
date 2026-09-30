import { register } from 'registyle/collector';

register('input-field', {
  base: {
    tw: 'w-full border transition-all [font-family:inherit] [font-size:14px] rounded-[var(--radius-md)] border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] focus-visible:border-[var(--c-border-focus)] focus-visible:shadow-[0_0_0_3px_var(--c-brand-ring)] focus-visible:outline-none disabled:opacity-60 disabled:cursor-not-allowed disabled:bg-[var(--c-bg)] placeholder:text-[var(--c-text-light)]',
  },
  modifiers: {
    sm: { tw: 'px-2.5 py-1.5 text-[13px]' },
    md: { tw: 'px-3 py-2 [font-size:14px]' },
    lg: { tw: 'px-3.5 py-[11px] text-[15px]' },
    error: { tw: 'border-[var(--c-danger)] [&:focus]:border-[var(--c-danger)] [&:focus]:shadow-[0_0_0_3px_rgba(220,38,38,.2)]' },
  },
});