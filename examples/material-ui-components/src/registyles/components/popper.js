import { register } from 'registyle/collector';

register('floating-demo', {
  base: { tw: 'relative flex min-h-16 min-w-0 flex-wrap items-center gap-4' },
});

register('floating-trigger', {
  base: { tw: 'normal-case tracking-normal' },
});

register('floating-hint', {
  base: { tw: 'w-full text-[11px] text-[var(--subtle)]' },
});

register('floating-selected', {
  base: { tw: 'text-xs text-[var(--mui-blue)]' },
});

register('popper-surface', {
  base: {
    tw: 'z-50 min-w-[190px] rounded-lg border border-[var(--border)] bg-[#25282d] text-[var(--text)] shadow-[0_12px_32px_#0009]',
  },
});

register('floating-close', {
  base: { tw: 'ml-auto inline-flex cursor-pointer border-0 bg-transparent text-[var(--subtle)] hover:text-white' },
});

register('placement-picker', {
  base: { tw: 'flex flex-wrap gap-1' },
});

register('placement-button', {
  base: { tw: 'cursor-pointer rounded border border-[var(--border)] bg-transparent px-2 py-1 text-[10px] capitalize text-[var(--muted)] hover:text-white' },
});

register('placement-active', {
  base: { tw: 'cursor-pointer rounded border border-[var(--mui-blue)] bg-[var(--mui-blue-soft)] px-2 py-1 text-[10px] capitalize text-[var(--mui-blue)]' },
});
