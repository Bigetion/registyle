import { register } from 'registyle/collector';

register('rgi-floating-action-button', {
  base: {
    tw: 'inline-flex size-14 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full border-0 bg-[var(--mui-blue-dark,#547be8)] px-4 text-white shadow-[0_4px_12px_rgba(0,0,0,.24)] transition-[background-color,box-shadow,transform] hover:brightness-110 hover:shadow-[0_6px_16px_rgba(0,0,0,.3)] active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--mui-blue,#9bbcff)] disabled:cursor-not-allowed disabled:opacity-45',
  },
  modifiers: {
    primary: { tw: '' },
    secondary: { tw: 'bg-[var(--surface-raised,#334155)] text-[var(--text,#edf2fb)]' },
    extended: { tw: 'h-14 w-auto min-w-14 rounded-full' },
    action: { tw: 'size-11 bg-[var(--surface-raised,#334155)] text-[var(--text,#edf2fb)]' },
    small: { tw: 'size-11' },
    large: { tw: 'size-16' },
  },
});
