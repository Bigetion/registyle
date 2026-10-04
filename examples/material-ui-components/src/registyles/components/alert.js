import { register } from 'registyle/collector';

register('alert-stack', {
  base: { tw: 'flex w-full max-w-[620px] flex-col gap-2' },
});

register('alert-copy', {
  base: { tw: 'flex min-w-0 flex-1 flex-col gap-1' },
});

register('alert-copy strong', {
  base: { tw: 'text-[10px] font-semibold leading-snug' },
});

register('alert-copy small', {
  base: { tw: 'text-[9px] leading-relaxed opacity-80' },
});

register('alert-icon', {
  base: { tw: 'mt-0.5 shrink-0' },
});

register('mui-alert-outlined', {
  base: { tw: '!bg-transparent' },
});

register('alert-actions', {
  base: { tw: 'flex shrink-0 items-center gap-1 self-center' },
});

register('alert-action-link', {
  base: { tw: 'inline-flex h-7 cursor-pointer appearance-none items-center rounded border-0 bg-transparent px-2 text-[9px] font-semibold text-current shadow-none hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-current' },
});

register('alert-action-icon', {
  base: { tw: 'size-7 justify-center p-0' },
});

register('alert-dismiss', {
  base: { tw: 'inline-flex size-6 shrink-0 cursor-pointer items-center justify-center rounded border-0 bg-transparent p-0 text-current opacity-70 hover:bg-white/10 hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-current' },
});

register('alert-empty', {
  base: { tw: 'flex min-h-[70px] w-full flex-wrap items-center justify-between gap-2 rounded-lg border border-dashed border-[var(--border)] px-3 py-2 text-[10px] text-[var(--muted)]' },
});
