import { register } from 'registyle/collector';

register('speed-dial-showcase', {
  base: { tw: 'flex w-full max-w-[700px] flex-col gap-3' },
});

register('speed-dial-stage', {
  base: { tw: 'flex min-h-[220px] items-end justify-between gap-4 overflow-hidden rounded-xl border border-[#303a49] bg-[radial-gradient(ellipse_at_top_right,#20304a_0%,#111720_55%)] p-5' },
});

register('speed-dial-stage-copy', {
  base: { tw: 'mb-1 flex max-w-[250px] flex-col gap-1.5 [&_strong]:text-[11px] [&_strong]:font-semibold [&_span:last-child]:text-[8px] [&_span:last-child]:text-[var(--muted)]' },
});

register('speed-dial-kicker', {
  base: { tw: 'text-[7px] font-semibold tracking-[.14em] text-[#90a8cd]' },
});

register('mui-speed-dial', {
  base: { tw: 'relative z-10 flex shrink-0 items-center gap-2' },
});

register('mui-speed-dial-up', {
  base: { tw: 'flex-col' },
});

register('mui-speed-dial-down', {
  base: { tw: 'flex-col' },
});

register('mui-speed-dial-left', {
  base: { tw: 'flex-row-reverse' },
});

register('mui-speed-dial-actions', {
  base: { tw: 'flex items-center gap-2 transition-all duration-200' },
});

register('mui-speed-dial-actions-hidden', {
  base: { tw: 'pointer-events-none invisible scale-95 opacity-0' },
});

register('mui-speed-dial-up .mui-speed-dial-actions', {
  base: { tw: 'flex-col' },
});

register('mui-speed-dial-down .mui-speed-dial-actions', {
  base: { tw: 'flex-col' },
});

register('mui-speed-dial-action', {
  base: { tw: 'relative inline-flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#39485e] bg-[#1c2737] text-[#c4d5f2] shadow-[0_5px_14px_#0006] transition-transform hover:scale-105 hover:bg-[#273a54] focus-visible:outline-2 focus-visible:outline-[#8baeff]' },
});

register('speed-dial-action-tooltip', {
  base: { tw: 'pointer-events-none absolute right-[calc(100%+10px)] whitespace-nowrap rounded-md border border-[#354154] bg-[#171f2c] px-2 py-1.5 text-[8px] text-[#e0e8f5] opacity-0 shadow-lg transition-opacity' },
});

register('mui-speed-dial-action:hover .speed-dial-action-tooltip', {
  base: { tw: 'opacity-100' },
});

register('mui-speed-dial-action:focus-visible .speed-dial-action-tooltip', {
  base: { tw: 'opacity-100' },
});

register('mui-speed-dial-right .mui-speed-dial-action span', {
  base: { tw: 'left-[calc(100%+10px)] right-auto' },
});

register('mui-speed-dial-fab', {
  base: { tw: 'inline-flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#9ab8f2] bg-[#8baeff] text-[#101827] shadow-[0_8px_20px_#0008] transition-transform hover:scale-105 hover:bg-[#a3beff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c5d7ff]' },
});

register('speed-dial-direction-controls', {
  base: { tw: 'flex flex-wrap gap-1' },
});

register('speed-dial-direction-option', {
  base: { tw: 'inline-flex h-7 min-w-12 cursor-pointer items-center justify-center rounded-md border border-[#354154] bg-[#111720] px-2.5 text-[8px] capitalize text-[var(--muted)] hover:border-[#536985] hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff]' },
});

register('speed-dial-direction-option-active', {
  base: { tw: 'border-[#789fe8] bg-[#20304a] text-[#c5d7ff] hover:border-[#789fe8] hover:text-white' },
});

register('speed-dial-direction-stage', {
  base: { tw: 'flex min-h-[185px] items-center justify-center gap-4 overflow-hidden rounded-lg border border-dashed border-[#303a49] bg-[#0d121b] p-5' },
});

register('speed-dial-direction-stage .mui-speed-dial-actions', {
  base: { tw: 'gap-2' },
});

register('speed-dial-direction-stage .preview-note', {
  base: { tw: 'max-w-[155px] text-[8px]' },
});

register('speed-dial-open-stage', {
  base: { tw: 'flex min-h-[110px] flex-wrap items-center justify-between gap-4 rounded-lg border border-[#303a49] bg-[#111720] p-4' },
});

register('speed-dial-open-header', {
  base: { tw: 'flex min-w-[180px] flex-1 items-center gap-2.5 [&_span:last-child]:flex [&_span:last-child]:flex-col [&_span:last-child]:gap-1 [&_strong]:text-[9px] [&_strong]:font-semibold [&_small]:text-[8px] [&_small]:text-[var(--muted)]' },
});

register('speed-dial-open-icon', {
  base: { tw: 'inline-flex size-8 shrink-0 items-center justify-center rounded-lg border border-[#364760] bg-[#24344a] text-[#adc6fa]' },
});

register('speed-dial-open-stage .mui-speed-dial', {
  base: { tw: 'flex-row' },
});
