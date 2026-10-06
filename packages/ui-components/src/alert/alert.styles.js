import { register } from 'registyle/collector';

register('rgi-alert', {
  base: { tw: 'flex w-full items-start gap-3 rounded-lg border px-4 py-3 text-sm' },
  modifiers: {
    info: {
      tw: 'border-[var(--rgi-info-border,#315a78)] bg-[var(--rgi-info-bg,#142b3b)] text-[var(--rgi-info,#a9d6f5)]',
    },
    success: {
      tw: 'border-[var(--rgi-success-border,#356548)] bg-[var(--rgi-success-bg,#162e22)] text-[var(--rgi-success,#a9dfba)]',
    },
    warning: {
      tw: 'border-[var(--rgi-warning-border,#785c28)] bg-[var(--rgi-warning-bg,#342a17)] text-[var(--rgi-warning,#ffdc9b)]',
    },
    error: {
      tw: 'border-[var(--rgi-error-border,#794248)] bg-[var(--rgi-error-bg,#351d22)] text-[var(--rgi-error,#f5b2b8)]',
    },
    standard: { tw: '' },
    outlined: { tw: '!bg-transparent' },
  },
});
register('rgi-alert-icon', {
  base: { tw: 'mt-0.5 flex size-5 shrink-0 items-center justify-center font-bold' },
});
register('rgi-alert-content', { base: { tw: 'flex min-w-0 flex-1 flex-col gap-1' } });
register('rgi-alert-title', { base: { tw: 'font-semibold leading-snug' } });
register('rgi-alert-message', { base: { tw: 'leading-relaxed opacity-90' } });
register('rgi-alert-close', {
  base: {
    tw: 'inline-flex size-7 shrink-0 cursor-pointer items-center justify-center rounded border-0 bg-transparent p-0 text-current opacity-70 hover:bg-white/10 hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-current',
  },
});
