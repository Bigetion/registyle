import { register } from 'registyle/collector';

register('portal-demo', {
  base: { tw: 'flex min-h-[175px] w-full max-w-[650px] flex-col justify-center gap-3' },
});

register('portal-demo-stage', {
  base: { tw: 'flex min-h-[140px] flex-wrap items-center justify-between gap-4 rounded-lg border border-dashed border-[#303a49] bg-[#0d121b] p-4 sm:p-5' },
});

register('portal-demo-copy', {
  base: { tw: 'flex min-w-[210px] flex-1 flex-col gap-1.5 [&_strong]:text-[10px] [&_strong]:font-semibold [&_span:last-child]:max-w-[360px] [&_span:last-child]:text-[8px] [&_span:last-child]:leading-relaxed [&_span:last-child]:text-[var(--muted)]' },
});

register('portal-demo-eyebrow', {
  base: { tw: 'text-[7px] font-semibold tracking-[.12em] text-[#8baeff]' },
});

register('portal-demo-feedback', {
  base: { tw: 'min-h-4 text-[8px] text-[var(--muted)]' },
});

register('portal-demo-icon', {
  base: { tw: 'inline-flex size-7 shrink-0 items-center justify-center rounded-md border border-[#364760] bg-[#24344a] text-[#adc6fa]' },
});

register('portal-body-notice', {
  base: { tw: 'fixed right-5 top-5 z-[90] flex w-[min(290px,calc(100vw-24px))] items-center gap-2.5 rounded-lg border border-[#354154] bg-[#171f2c] p-3 text-[var(--text)] shadow-[0_16px_38px_rgba(0,0,0,.48)] max-sm:right-3 max-sm:top-3' },
});

register('portal-body-notice > span:nth-child(2)', {
  base: { tw: 'flex min-w-0 flex-1 flex-col gap-1 [&_strong]:text-[9px] [&_strong]:font-semibold [&_small]:text-[8px] [&_small]:text-[var(--muted)]' },
});

register('portal-body-notice button', {
  base: { tw: 'inline-flex size-6 cursor-pointer items-center justify-center rounded border-0 bg-transparent p-0 text-[var(--muted)] hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff]' },
});

register('portal-custom-stage', {
  base: { tw: 'items-start' },
});

register('portal-custom-target', {
  base: { tw: 'flex min-h-[64px] w-full items-center justify-center gap-2 rounded-md border border-dashed border-[#536985] bg-[#111a27] p-2 sm:max-w-[255px]' },
});

register('portal-target-label', {
  base: { tw: 'text-[7px] font-medium uppercase tracking-[.1em] text-[#8092aa]' },
});

register('portal-target-content', {
  base: { tw: 'flex w-full items-center gap-2 rounded-md border border-[#354154] bg-[#192435] p-2 text-[#adc6fa] [&_span]:flex [&_span]:min-w-0 [&_span]:flex-1 [&_span]:flex-col [&_span]:gap-1 [&_strong]:text-[8px] [&_strong]:font-semibold [&_small]:text-[7px] [&_small]:text-[var(--muted)] [&_button]:inline-flex [&_button]:size-5 [&_button]:cursor-pointer [&_button]:items-center [&_button]:justify-center [&_button]:rounded [&_button]:border-0 [&_button]:bg-transparent [&_button]:text-[var(--muted)] [&_button:hover]:bg-white/5 [&_button:hover]:text-white' },
});

register('portal-clipping-frame', {
  base: { tw: 'flex min-h-[145px] flex-col items-start justify-center gap-2 overflow-hidden rounded-lg border border-dashed border-[#536985] bg-[#111a27] p-4' },
});

register('portal-clipping-frame p', {
  base: { tw: 'm-0 max-w-[340px] text-[8px] leading-relaxed text-[var(--muted)]' },
});

register('portal-escaped-layer', {
  base: { tw: 'fixed z-[90] flex w-[min(232px,calc(100vw-24px))] items-center gap-2 rounded-lg border border-[#455b82] bg-[#192435] p-2.5 text-[#adc6fa] shadow-[0_18px_48px_rgba(0,0,0,.55)]' },
});

register('portal-escaped-layer > span:nth-child(2)', {
  base: { tw: 'flex min-w-0 flex-1 flex-col gap-1 [&_strong]:text-[8px] [&_strong]:font-semibold [&_small]:text-[7px] [&_small]:text-[var(--muted)]' },
});

register('portal-escaped-layer button', {
  base: { tw: 'inline-flex size-5 cursor-pointer items-center justify-center rounded border-0 bg-transparent p-0 text-[var(--muted)] hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff]' },
});
