import { register } from 'registyle/collector';

register('mui-radio-group', {
  base: { tw: 'm-0 flex min-w-0 flex-col gap-2 border-0 p-0 text-[var(--text,#edf2fb)]' },
  modifiers: {
    horizontal: { tw: 'flex-row flex-wrap items-start gap-x-5 gap-y-2' },
    vertical: { tw: '' },
  },
});

register.group('mui-radio-option', {
  root: {
    tw: 'relative inline-flex cursor-pointer items-start gap-2.5 text-sm text-[var(--text,#edf2fb)] focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[var(--mui-blue,#547be8)]',
  },
  disabled: { tw: 'cursor-not-allowed opacity-50' },
  input: {
    tw: 'absolute left-0 top-0 z-10 size-[18px] cursor-pointer opacity-0 disabled:cursor-not-allowed',
  },
  indicator: {
    tw: 'mt-0.5 flex size-[18px] shrink-0 items-center justify-center rounded-full border border-[var(--border,#64748b)] bg-[var(--surface,#111827)] transition-[border-color,box-shadow]',
  },
  'indicator-checked': { tw: 'border-[var(--mui-blue,#547be8)]' },
  dot: { tw: 'size-2.5 scale-0 rounded-full bg-[var(--mui-blue,#547be8)] transition-transform' },
  'dot-visible': { tw: 'scale-100' },
  copy: { tw: 'flex flex-col gap-0.5' },
  label: { tw: 'font-medium' },
  description: { tw: 'text-xs text-[var(--muted,#94a3b8)]' },
});

register('mui-radio-group-legend', {
  base: { tw: 'mb-2 text-sm font-semibold text-[var(--text,#edf2fb)]' },
});
