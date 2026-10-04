import { register } from 'registyle/collector';

register('paper-demo', {
  base: { tw: 'flex w-full max-w-[650px] flex-col gap-3' },
});

register('paper-elevation-grid', {
  base: { tw: 'grid w-full grid-cols-3 gap-4 px-2 py-4 max-sm:grid-cols-1' },
});

register('paper-elevation-example', {
  base: { tw: 'flex flex-col items-center gap-2 [&>span]:text-[8px] [&>span]:text-[var(--muted)]' },
});

register('paper-content', {
  base: { tw: 'flex min-w-0 items-center gap-2.5' },
});

register('paper-content-icon', {
  base: { tw: 'inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-[#24344a] text-[#a9c4ff]' },
});

register('paper-content > span:last-child', {
  base: { tw: 'flex min-w-0 flex-col gap-1 [&_strong]:text-[9px] [&_strong]:font-semibold [&_strong]:text-[var(--text)] [&_small]:text-[7px] [&_small]:text-[var(--muted)]' },
});

register('paper-elevation-0', {
  base: { tw: 'w-full max-w-[180px] border border-[#303a49] p-3' },
});

register('paper-elevation-1', {
  base: { tw: 'shadow-[0_2px_5px_rgba(0,0,0,.25)]' },
});

register('paper-elevation-2', {
  base: { tw: 'shadow-[0_3px_8px_rgba(0,0,0,.3)]' },
});

register('paper-elevation-3', {
  base: { tw: 'shadow-[0_5px_12px_rgba(0,0,0,.36)]' },
});

register('paper-elevation-4', {
  base: { tw: 'shadow-[0_7px_16px_rgba(0,0,0,.4)]' },
});

register('paper-elevation-6', {
  base: { tw: 'shadow-[0_9px_20px_rgba(0,0,0,.43)]' },
});

register('paper-elevation-8', {
  base: { tw: 'shadow-[0_12px_24px_rgba(0,0,0,.46)]' },
});

register('paper-elevation-12', {
  base: { tw: 'shadow-[0_16px_28px_rgba(0,0,0,.48)]' },
});

register('paper-elevation-16', {
  base: { tw: 'shadow-[0_20px_32px_rgba(0,0,0,.5)]' },
});

register('paper-elevation-24', {
  base: { tw: 'shadow-[0_24px_38px_rgba(0,0,0,.52)]' },
});

register('paper-scale-controls', {
  base: { tw: 'flex flex-wrap gap-1 rounded-lg border border-[var(--border)] bg-[#111720] p-1' },
});

register('paper-level-button', {
  base: { tw: 'inline-flex size-7 cursor-pointer appearance-none items-center justify-center rounded-md border-0 bg-transparent p-0 text-[8px] font-medium tabular-nums text-[var(--muted)] shadow-none hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#8baeff]' },
});

register('paper-level-button-active', {
  base: { tw: 'bg-[#20304a] text-[#c5d7ff] hover:bg-[#20304a]' },
});

register('paper-scale-stage', {
  base: { tw: 'flex min-h-[130px] w-full items-center justify-center rounded-lg border border-dashed border-[#303a49] bg-[#0d121b] p-5' },
});

register('paper-selected-elevation', {
  base: { tw: 'w-full max-w-[300px] border border-[#303a49] p-4 [box-shadow:0_calc(var(--paper-level)*.7px)_calc(var(--paper-level)*1.8px)_rgba(0,0,0,.48)]' },
});

register('paper-variants-grid', {
  base: { tw: 'grid w-full grid-cols-2 gap-3 max-sm:grid-cols-1' },
});

register('paper-variant-label', {
  base: { tw: 'text-[7px] font-semibold tracking-[.14em] text-[#8492a7]' },
});

register('paper-contained', {
  base: { tw: 'flex flex-col gap-3 border border-[#2d3747] p-3' },
});

register('paper-outlined', {
  base: { tw: 'flex flex-col gap-3 border border-[#52627a] bg-transparent p-3' },
});

register('paper-nested', {
  base: { tw: 'col-span-2 flex flex-col gap-2 border border-[#2d3747] p-3 max-sm:col-span-1' },
});

register('paper-nested p', {
  base: { tw: 'm-0 text-[8px] text-[var(--muted)]' },
});

register('paper-nested-inner', {
  base: { tw: 'rounded-md border border-[#3b4c65] bg-[#1a2432] p-2.5' },
});

register('paper-add-button', {
  base: { tw: 'mt-1 inline-flex w-fit cursor-pointer items-center gap-1.5 rounded border-0 bg-transparent p-0 text-[8px] font-medium text-[#adc5fa] hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff] [&_span]:rounded-full [&_span]:bg-[#26354a] [&_span]:px-1.5 [&_span]:py-0.5 [&_span]:text-[7px]' },
});
