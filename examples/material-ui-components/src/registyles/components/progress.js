import { register } from 'registyle/collector';

register('progress-demo', {
  base: { tw: 'flex w-full max-w-[620px] flex-col gap-4' },
});

register('progress-example', {
  base: { tw: 'flex w-full flex-col gap-3 rounded-lg border border-[var(--border)] bg-[#111720] p-4' },
});

register('progress-example-heading', {
  base: { tw: 'flex items-center justify-between gap-3' },
});

register('progress-copy', {
  base: { tw: 'flex min-w-0 flex-col gap-1' },
});

register('progress-copy strong', {
  base: { tw: 'text-[11px] font-semibold text-[var(--text)]' },
});

register('progress-copy span', {
  base: { tw: 'text-[9px] text-[var(--muted)]' },
});

register('progress-value', {
  base: { tw: 'shrink-0 text-[11px] font-semibold tabular-nums text-[#a9c4ff]' },
});

register('mui-progress-track', {
  base: { tw: 'h-1.5 w-full overflow-hidden rounded-full bg-[#293343]' },
});

register('progress-track', {
  base: { tw: 'relative' },
});

register('mui-progress-bar', {
  base: { tw: 'block h-full rounded-full bg-[var(--mui-blue)] transition-[width] duration-300' },
});

register('progress-buffer-bar', {
  base: { tw: 'absolute inset-y-0 left-0 rounded-full bg-[#60799f] transition-[width] duration-300' },
});

register('progress-indeterminate-bar', {
  base: { tw: 'absolute left-0 top-0 w-[35%]' },
});

register('progress-actions', {
  base: { tw: 'flex flex-wrap items-center gap-2' },
});

register('progress-example-indeterminate', {
  base: { tw: 'gap-3 border-dashed bg-transparent' },
});

register('progress-circular-grid', {
  base: { tw: 'flex w-full flex-wrap items-center gap-x-12 gap-y-6 rounded-lg border border-[var(--border)] bg-[#111720] p-5' },
});

register('progress-circular-example', {
  base: { tw: 'flex min-w-[170px] items-center gap-3' },
});

register('progress-circular', {
  base: { tw: 'relative inline-flex size-12 shrink-0 items-center justify-center text-[10px] font-semibold tabular-nums text-[var(--text)]' },
});

register('progress-circular svg', {
  base: { tw: 'absolute inset-0 size-full' },
});

register('progress-circular-spinner', {
  base: { tw: 'animate-spin' },
});

register('progress-circular-track', {
  base: { tw: 'fill-none stroke-[#293343] stroke-[3]' },
});

register('progress-circular-value', {
  base: { tw: 'fill-none stroke-[#83a9ff] stroke-[3] [stroke-linecap:round] [transition:stroke-dashoffset_300ms_ease]' },
});

register('progress-circular-example .progress-copy strong', {
  base: { tw: 'text-[10px]' },
});

register('progress-circular-example .progress-copy span', {
  base: { tw: 'text-[9px]' },
});

register('progress-buffer-legend', {
  base: { tw: 'flex flex-wrap gap-x-4 gap-y-2 text-[9px] text-[var(--muted)]' },
});

register('progress-buffer-legend span', {
  base: { tw: 'inline-flex items-center gap-1.5' },
});

register('progress-buffer-legend i', {
  base: { tw: 'size-2 rounded-full bg-[var(--mui-blue)]' },
});

register('progress-buffer-legend .progress-legend-buffered', {
  base: { tw: 'bg-[#60799f]' },
});

register('progress-legend-played', {
  base: { tw: 'bg-[var(--mui-blue)]' },
});
