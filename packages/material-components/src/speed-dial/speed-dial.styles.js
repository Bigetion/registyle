import { register } from 'registyle/collector';

register('rgi-speed-dial', {
  base: { tw: 'relative inline-flex flex-col items-center gap-2' },
  modifiers: {
    up: { tw: 'flex-col-reverse' },
    left: { tw: 'flex-row-reverse' },
    right: { tw: 'flex-row' },
    down: { tw: 'flex-col' },
  },
});
register('rgi-speed-dial-actions', {
  base: { tw: 'm-0 flex min-w-0 flex-col gap-2 border-0 p-0' },
});
register('rgi-speed-dial-action', {
  base: {
    tw: 'flex size-10 cursor-pointer items-center justify-center rounded-full border border-[var(--border,#d5d9e0)] bg-[var(--surface,#fff)] text-[var(--text,#20242b)] shadow-md hover:bg-[var(--surface-hover,#f0f2f5)] focus-visible:outline-2 focus-visible:outline-[var(--accent,#315fc4)] disabled:cursor-not-allowed disabled:opacity-45',
  },
});
register('rgi-speed-dial-trigger', {
  base: {
    tw: 'flex size-14 cursor-pointer items-center justify-center rounded-full border-0 bg-[var(--accent,#315fc4)] text-xl text-white shadow-lg transition-transform focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent,#315fc4)]',
  },
});
register('rgi-speed-dial-open .rgi-speed-dial-trigger', { base: { tw: 'rotate-45' } });
register('rgi-speed-dial [hidden]', { base: { tw: 'hidden' } });
