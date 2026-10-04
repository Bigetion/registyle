import { register } from 'registyle/collector';

register('tabs-showcase', {
  base: { tw: 'flex w-full max-w-[680px] flex-col gap-3 rounded-lg border border-[#303a49] bg-[#111720] p-3 sm:p-4' },
});

register('rgi-tabs-list-centered', {
  base: { tw: 'justify-center' },
});

register('rgi-tabs-list-scrollable', {
  base: { tw: 'justify-start' },
});

register('rgi-tab-active', {
  base: { tw: 'font-semibold text-[#e0eaff] hover:text-[#e0eaff]' },
});

register('rgi-tab[aria-selected="true"]', {
  base: { tw: 'font-semibold text-[#e0eaff] hover:text-[#e0eaff]' },
});

register('rgi-tab[aria-selected="true"]:hover', {
  base: { tw: 'bg-[#1b2431]' },
});

register('rgi-tab-indicator', {
  base: { tw: 'absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-[#8baeff]' },
});

register('rgi-tab-with-icon', {
  base: { tw: 'gap-1.5' },
});

register('rgi-tab-badge', {
  base: { tw: 'inline-flex min-w-4 items-center justify-center rounded-full bg-[#263954] px-1 py-0.5 text-[7px] text-[#bfd2f6]' },
});

register('tabs-overview-card', {
  base: { tw: 'flex min-h-[76px] flex-wrap items-center gap-2.5 rounded-md border border-[#2c3746] bg-[#151d28] p-3' },
});

register('tabs-overview-icon', {
  base: { tw: 'inline-flex size-8 shrink-0 items-center justify-center rounded-lg' },
});

register('tabs-overview-icon-blue', {
  base: { tw: 'border border-[#364760] bg-[#24344a] text-[#adc6fa]' },
});

register('tabs-overview-icon-green', {
  base: { tw: 'border border-[#315244] bg-[#1d382e] text-[#a6e2c0]' },
});

register('tabs-overview-icon-purple', {
  base: { tw: 'border border-[#463d61] bg-[#302944] text-[#c8b8f2]' },
});

register('tabs-overview-copy', {
  base: { tw: 'flex min-w-[150px] flex-1 flex-col gap-1 [&_strong]:text-[9px] [&_strong]:font-semibold [&_span]:text-[8px] [&_span]:leading-relaxed [&_span]:text-[var(--muted)]' },
});

register('tabs-overview-metric', {
  base: { tw: 'ml-auto flex flex-col items-end gap-1 [&_strong]:text-[8px] [&_strong]:font-medium [&_strong]:text-[#d0d9e7] [&_span]:text-[8px] [&_span]:text-[#9edab7]' },
});

register('tabs-filter-panel', {
  base: { tw: 'flex min-h-[68px] items-center gap-2.5 rounded-md border border-[#2c3746] bg-[#151d28] px-3 py-2 [&>span:nth-child(2)]:flex [&>span:nth-child(2)]:min-w-0 [&>span:nth-child(2)]:flex-1 [&>span:nth-child(2)]:flex-col [&>span:nth-child(2)]:gap-1 [&_strong]:text-[9px] [&_strong]:font-semibold [&_small]:text-[8px] [&_small]:text-[var(--muted)]' },
});

register('tabs-filter-icon', {
  base: { tw: 'inline-flex size-8 shrink-0 items-center justify-center rounded-lg border border-[#364760] bg-[#24344a] text-[#adc6fa]' },
});

register('tabs-filter-count', {
  base: { tw: 'inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-[#263954] text-[8px] font-semibold text-[#bfd2f6]' },
});

register('tabs-centered-showcase', {
  base: { tw: 'gap-3' },
});

register('tabs-centered-panel', {
  base: { tw: 'flex min-h-[115px] flex-col items-center justify-center gap-1.5 rounded-md border border-[#2c3746] bg-[#151d28] px-4 py-3 text-center [&_strong]:text-[9px] [&_strong]:font-semibold [&_p]:m-0 [&_p]:max-w-[300px] [&_p]:text-[8px] [&_p]:leading-relaxed [&_p]:text-[var(--muted)]' },
});

register('tabs-centered-icon', {
  base: { tw: 'mb-1 inline-flex size-7 items-center justify-center rounded-lg border border-[#364760] bg-[#24344a] text-[#adc6fa]' },
});

register('tabs-showcase > .preview-note', {
  base: { tw: 'text-[8px]' },
});
