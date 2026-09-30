import { register } from 'registyle/collector';

register('checkbox', {
  base: {
    tw: 'inline-flex items-center justify-center shrink-0 size-[18px] border rounded-[var(--radius-sm)] transition-all cursor-pointer border-[var(--c-border)] bg-[var(--c-surface)] focus-visible:(outline-2 outline-[var(--c-brand)] outline-offset-2)',
  },
  modifiers: {
    checked: { tw: 'aria-checked:(bg-[var(--c-brand)] border-[var(--c-brand)])' },
    indeterminate: { tw: 'aria-[checked=mixed]:(bg-[var(--c-brand)] border-[var(--c-brand)])' },
    sm: { tw: 'size-[14px]', important: true },
    lg: { tw: 'size-[22px]' },
  },
});