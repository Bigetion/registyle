import { register } from 'registyle/collector';

register('rgi-chip', {
  base: {
    tw: 'inline-flex h-8 shrink-0 items-center gap-1.5 rounded-full border border-[var(--border,#273142)] px-3 text-xs font-medium text-[var(--text,#edf2fb)] transition-colors',
  },
  modifiers: {
    outlined: { tw: 'bg-transparent' },
    filled: { tw: 'border-transparent bg-[var(--panel-raised,#171e2a)]' },
    primary: { tw: 'border-transparent !bg-[var(--rgi-blue-dark,#547be8)] !text-white' },
    success: { tw: 'border-transparent !bg-[#1b5e20] text-[#c8e6c9]' },
    warning: { tw: 'border-transparent !bg-[#684b28] !text-[#ffe0ae]' },
    small: { tw: '!h-6 px-2 text-[10px]' },
    interactive: {
      tw: 'cursor-pointer hover:border-[var(--rgi-blue,#9bbcff)] hover:bg-[var(--panel-raised,#171e2a)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--rgi-blue,#9bbcff)]',
    },
    selected: { tw: 'border-transparent !bg-[var(--rgi-blue-dark,#547be8)] !text-white' },
    disabled: { tw: 'cursor-not-allowed opacity-45' },
  },
});

register('rgi-chip button', {
  base: {
    tw: 'inline-flex cursor-pointer items-center justify-center rounded-full border-0 bg-transparent p-0 text-current opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-current disabled:cursor-not-allowed',
  },
});
