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

register('popper-demo', {
  base: { tw: 'relative flex min-h-[180px] w-full max-w-[650px] flex-col justify-center gap-3' },
});

register('popper-demo-stage', {
  base: { tw: 'flex min-h-[180px] flex-wrap items-center justify-between gap-4 rounded-lg border border-dashed border-[#303a49] bg-[#0d121b] p-5' },
});

register('popper-demo-copy', {
  base: { tw: 'flex min-w-[220px] flex-1 flex-col gap-1.5 [&_strong]:text-[10px] [&_strong]:font-semibold [&_span:last-child]:max-w-[340px] [&_span:last-child]:text-[8px] [&_span:last-child]:leading-relaxed [&_span:last-child]:text-[var(--muted)]' },
});

register('popper-demo-eyebrow', {
  base: { tw: 'text-[7px] font-semibold tracking-[.12em] text-[#8baeff]' },
});

register('popper-demo-footer', {
  base: { tw: 'min-h-5 text-[8px] text-[var(--muted)]' },
});

register('popper-demo-surface', {
  base: { tw: 'z-50 w-[min(250px,calc(100vw-24px))] overflow-hidden rounded-lg border border-[#354154] bg-[#171f2c] text-[var(--text)] shadow-[0_16px_38px_rgba(0,0,0,.48)]' },
});

register('popper-demo-content', {
  base: { tw: 'grid grid-cols-[auto_1fr_auto] items-center gap-2.5 p-3 [&_div]:flex [&_div]:min-w-0 [&_div]:flex-col [&_div]:gap-1 [&_strong]:text-[9px] [&_strong]:font-semibold [&_span:not(.popper-demo-icon)]:text-[8px] [&_span:not(.popper-demo-icon)]:text-[var(--muted)] [&_p]:col-span-3 [&_p]:m-0 [&_p]:border-t [&_p]:border-[#303a49] [&_p]:pt-2.5 [&_p]:text-[8px] [&_p]:leading-relaxed [&_p]:text-[var(--muted)]' },
});

register('popper-demo-icon', {
  base: { tw: 'inline-flex size-7 items-center justify-center rounded-md border border-[#364760] bg-[#24344a] text-[#adc6fa]' },
});

register('popper-demo-close', {
  base: { tw: 'inline-flex size-6 cursor-pointer items-center justify-center rounded border-0 bg-transparent p-0 text-[var(--muted)] hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff]' },
});

register('popper-placement-controls', {
  base: { tw: 'flex flex-wrap gap-1' },
});

register('popper-placement-option', {
  base: { tw: 'inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-md border border-[var(--border)] bg-transparent px-2.5 text-[8px] capitalize text-[var(--muted)] hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff]' },
});

register('popper-placement-option-active', {
  base: { tw: 'border-[#536985] bg-[#20304a] text-[#c5d7ff] hover:bg-[#20304a]' },
});

register('popper-placement-stage', {
  base: { tw: 'flex min-h-[180px] flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-[#303a49] bg-[#0d121b] p-5' },
});

register('popper-placement-status', {
  base: { tw: 'text-center text-[8px] text-[var(--muted)]' },
});

register('popper-placement-surface', {
  base: { tw: 'w-[190px]' },
});

register('popper-placement-content', {
  base: { tw: 'flex flex-col gap-1.5 p-3 [&_strong]:text-[9px] [&_strong]:font-semibold [&_strong]:capitalize [&_strong]:text-[#c5d7ff] [&_span]:text-[8px] [&_span]:text-[var(--muted)]' },
});

register('popper-offset-controls', {
  base: { tw: 'grid grid-cols-2 gap-3 rounded-lg border border-[#303a49] bg-[#111720] p-3 max-sm:grid-cols-1' },
});

register('popper-range-control', {
  base: { tw: 'flex min-w-0 flex-col gap-2 [&_span]:flex [&_span]:items-center [&_span]:justify-between [&_strong]:text-[8px] [&_output]:text-[8px] [&_output]:text-[#c5d7ff] [&_input]:w-full [&_input]:accent-[#8baeff] [&_small]:text-[7px] [&_small]:text-[var(--muted)]' },
});

register('popper-offset-stage', {
  base: { tw: 'flex min-h-[160px] flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-[#303a49] bg-[#0d121b] p-5' },
});

register('popper-offset-surface', {
  base: { tw: 'w-[210px]' },
});

register('popper-offset-content', {
  base: { tw: 'flex items-center gap-2.5 p-3 [&_div]:flex [&_div]:flex-col [&_div]:gap-1 [&_strong]:text-[9px] [&_strong]:font-semibold [&_span]:text-[8px] [&_span]:text-[var(--muted)]' },
});
