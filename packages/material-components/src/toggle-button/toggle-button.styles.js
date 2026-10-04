import { register } from 'registyle/collector';

register('rgi-toggle-button', {
  base: {
    tw: 'inline-flex min-h-9 cursor-pointer items-center justify-center gap-2 border border-[var(--border,#354158)] bg-[var(--panel,#101722)] px-3.5 text-sm font-medium text-[var(--text-muted,#aab6ca)] transition-colors hover:bg-[var(--hover,rgba(255,255,255,.05))] hover:text-[var(--text,#edf2fb)] focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--mui-blue,#86a6ff)] aria-pressed:bg-[var(--mui-blue-soft,rgba(84,123,232,.2))] aria-pressed:text-[var(--mui-blue,#b9ccff)] disabled:cursor-not-allowed disabled:opacity-40',
  },
});

register('rgi-toggle-button-small', {
  base: { tw: 'min-h-7 gap-1.5 px-2.5 text-xs' },
});

register('rgi-toggle-button-selected', {
  base: { tw: '!bg-[var(--mui-blue-soft,rgba(84,123,232,.2))] !text-[var(--mui-blue,#b9ccff)]' },
});
