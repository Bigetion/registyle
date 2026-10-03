import { register } from 'registyle/collector';

register('progress-demo', {
  base: { tw: 'flex w-full max-w-[530px] flex-col gap-4' },
});

register('progress-line', {
  base: { tw: 'flex w-full items-center gap-3 [&_.mui-progress-track]:flex-1 [&_span:last-child]:w-10 [&_span:last-child]:text-right [&_span:last-child]:text-xs [&_span:last-child]:text-[var(--muted)]' },
});

register('progress-actions', {
  base: { tw: 'flex items-center gap-2' },
});

register('circular-progress', {
  base: { tw: 'ml-3 inline-flex size-8 animate-spin items-center justify-center rounded-full border-2 border-[var(--border)] border-t-[var(--mui-blue)] text-[var(--mui-blue)]' },
});

register('mui-progress-track', {
  base: { tw: 'h-1 w-full overflow-hidden rounded-full bg-[#39414a]' },
});

register('mui-progress-bar', {
  base: { tw: 'h-full rounded-full bg-[var(--mui-blue)] transition-[width]' },
});
