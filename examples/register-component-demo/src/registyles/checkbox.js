import { register } from 'registyle/collector';

register('checkbox', {
  base: {
    tw: 'inline-flex size-[18px] items-center justify-center flex-shrink-0 border rounded transition-all cursor-pointer border-[var(--c-border)] bg-[var(--c-surface)] focus-visible:outline-2 focus-visible:outline-[var(--c-brand)] focus-visible:outline-offset-2',
  },
  modifiers: {
    checked: { tw: '!bg-[var(--c-brand)] !border-[var(--c-brand)]' },
    indeterminate: { tw: '!bg-[var(--c-brand)] !border-[var(--c-brand)]' },
    sm: { tw: '!size-[14px]' },
    lg: { tw: '!size-[22px]' },
  },
});