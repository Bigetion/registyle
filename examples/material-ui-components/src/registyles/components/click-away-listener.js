import { register } from 'registyle/collector';

register('click-away-demo .floating-hint', {
  base: {
    tw: 'rounded-md border border-dashed border-[var(--border)] px-3 py-2',
  },
});

register('click-away-showcase', {
  base: { tw: 'flex w-full max-w-[650px] flex-col gap-2.5' },
});

register('click-away-stage', {
  base: { tw: 'relative flex min-h-[190px] flex-col items-start gap-2 rounded-lg border border-dashed border-[#303a49] bg-[#0d121b] p-4 sm:p-5' },
});

register('click-away-stage-copy', {
  base: { tw: 'mb-1 flex max-w-[420px] flex-col gap-1.5 [&_strong]:text-[10px] [&_strong]:font-semibold [&_span:last-child]:text-[8px] [&_span:last-child]:leading-relaxed [&_span:last-child]:text-[var(--muted)]' },
});

register('click-away-eyebrow', {
  base: { tw: 'text-[7px] font-semibold tracking-[.13em] text-[#90a8cd]' },
});

register('click-away-trigger', {
  base: { tw: 'inline-flex items-center gap-2' },
});

register('click-away-panel', {
  base: { tw: 'z-10 w-[min(270px,100%)] rounded-lg border border-[#354154] bg-[#171f2c] p-3 shadow-[0_10px_24px_#0008]' },
});

register('click-away-portal-panel', {
  base: { tw: 'z-50 w-[min(270px,calc(100vw-24px))] rounded-lg border border-[#354154] bg-[#171f2c] p-3 text-[var(--text)] shadow-[0_10px_24px_#0008]' },
});

register('click-away-panel-heading', {
  base: { tw: 'flex items-center gap-2 [&_span:last-child]:flex [&_span:last-child]:flex-col [&_span:last-child]:gap-1 [&_strong]:text-[9px] [&_strong]:font-semibold [&_small]:text-[8px] [&_small]:text-[var(--muted)]' },
});

register('click-away-panel-icon', {
  base: { tw: 'inline-flex size-7 shrink-0 items-center justify-center rounded-md border border-[#364760] bg-[#24344a] text-[#adc6fa]' },
});

register('click-away-inside-action', {
  base: { tw: 'mt-3 inline-flex min-h-8 w-full cursor-pointer items-center gap-2 rounded-md border border-[#303a49] bg-[#111720] px-2.5 text-left text-[8px] text-[#c1cad7] hover:border-[#536985] hover:bg-[#1c2737] focus-visible:outline-2 focus-visible:outline-[#8baeff] [&_svg]:text-[#9edab7] [&_span]:ml-auto [&_span]:text-[var(--muted)]' },
});

register('click-away-feedback', {
  base: { tw: 'flex min-h-7 items-center gap-2 text-[8px] text-[var(--muted)]' },
});

register('click-away-status-dot', {
  base: { tw: 'size-1.5 shrink-0 rounded-full bg-[#697789]' },
});

register('click-away-status-dot-open', {
  base: { tw: 'bg-[#e8bd69] shadow-[0_0_7px_#e8bd6970]' },
});
