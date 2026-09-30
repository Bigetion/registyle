import { register } from 'registyle/collector';

register('textarea-field', {
  base: {
    tw: [
      'w-full border transition-all resize-y font-[inherit] text-sm leading-[1.6] px-3 py-2 rounded-[var(--radius-md)] border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-text-light)]',
      'focus-visible:(border-[var(--c-border-focus)] shadow-[0_0_0_3px_var(--c-brand-ring)] outline-none)',
    ],
  },
  modifiers: {
    error: { tw: 'border-[var(--c-danger)] focus:(border-[var(--c-danger)] shadow-[0_0_0_3px_rgba(220,38,38,.2)])' },
  },
});