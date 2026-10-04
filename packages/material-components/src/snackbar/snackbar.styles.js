import { register } from 'registyle/collector';

register('rgi-snackbar', {
  base: {
    tw: 'flex w-full max-w-xl items-center gap-3 rounded-lg border px-4 py-3 text-sm shadow-[0_8px_30px_rgba(0,0,0,.28)]',
  },
  modifiers: {
    info: {
      tw: 'border-[var(--border,#354257)] bg-[var(--panel-raised,#202a39)] text-[var(--text,#edf2fb)]',
    },
    success: {
      tw: 'border-[var(--mui-success-border,#356548)] bg-[var(--mui-success-bg,#162e22)] text-[var(--mui-success,#a9dfba)]',
    },
    warning: {
      tw: 'border-[var(--mui-warning-border,#785c28)] bg-[var(--mui-warning-bg,#342a17)] text-[var(--mui-warning,#ffdc9b)]',
    },
    error: {
      tw: 'border-[var(--mui-error-border,#794248)] bg-[var(--mui-error-bg,#351d22)] text-[var(--mui-error,#f5b2b8)]',
    },
  },
});
register('rgi-snackbar-message', { base: { tw: 'min-w-0 flex-1 leading-relaxed' } });
register('rgi-snackbar-action', { base: { tw: 'flex shrink-0 items-center gap-2' } });
register('rgi-snackbar-close', {
  base: {
    tw: 'inline-flex size-7 shrink-0 cursor-pointer items-center justify-center rounded border-0 bg-transparent p-0 text-current opacity-70 hover:bg-white/10 hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-current',
  },
});
