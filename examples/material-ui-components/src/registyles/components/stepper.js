import { register } from 'registyle/collector';

register('stepper-showcase', {
  base: { tw: 'flex w-full max-w-[680px] flex-col gap-3 rounded-lg border border-[#303a49] bg-[#111720] p-3 sm:gap-4 sm:p-5' },
});

register('stepper-indicator', {
  base: { tw: 'flex w-full items-center' },
});

register('stepper-icon', {
  base: { tw: 'relative z-10 inline-flex size-6 shrink-0 items-center justify-center rounded-full border border-[#3a4657] bg-[#202a38] text-[8px] font-semibold text-[#9eacbf] transition-colors sm:size-7 sm:text-[9px]' },
});

register('stepper-icon-active', {
  base: { tw: 'border-[#8baeff] bg-[#263954] text-[#d2e0ff] shadow-[0_0_0_3px_#8baeff20]' },
});

register('stepper-icon-complete', {
  base: { tw: 'border-[#4c9b78] bg-[#203b32] text-[#a6e2c0]' },
});

register('stepper-connector', {
  base: { tw: 'h-px min-w-2 flex-1 bg-[#354154] transition-colors' },
});

register('stepper-connector-complete', {
  base: { tw: 'bg-[#4c9b78]' },
});

register('stepper-label', {
  base: { tw: 'text-center text-[7px] text-[#8794a6] sm:text-[8px]' },
});

register('stepper-label-active', {
  base: { tw: 'font-semibold text-[#c5d7ff]' },
});

register('stepper-label-complete', {
  base: { tw: 'text-[#a6e2c0]' },
});

register('stepper-content', {
  base: { tw: 'flex min-h-[74px] flex-col justify-center gap-1 rounded-md border border-[#2c3746] bg-[#151d28] px-3 py-2.5 [&_strong]:text-[10px] [&_strong]:font-semibold [&_span:last-child]:text-[8px] [&_span:last-child]:text-[var(--muted)]' },
});

register('stepper-content-eyebrow', {
  base: { tw: 'text-[7px] font-semibold tracking-[.1em] text-[#90a8cd]' },
});

register('stepper-actions', {
  base: { tw: 'flex items-center justify-between gap-2' },
});

register('stepper-text-button', {
  base: { tw: 'inline-flex h-8 cursor-pointer items-center justify-center rounded-md border border-transparent bg-transparent px-3 text-[8px] font-medium text-[#acb8c8] hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff] disabled:cursor-not-allowed disabled:opacity-40' },
});

register('stepper-primary-button', {
  base: { tw: 'inline-flex h-8 cursor-pointer items-center justify-center rounded-md border border-[#789fe8] bg-[#263954] px-3.5 text-[8px] font-semibold text-[#d2e0ff] hover:bg-[#304768] focus-visible:outline-2 focus-visible:outline-[#8baeff]' },
});

register('stepper-complete-message', {
  base: { tw: 'flex min-h-[60px] flex-col items-center justify-center gap-1 [&_span]:inline-flex [&_span]:size-6 [&_span]:items-center [&_span]:justify-center [&_span]:rounded-full [&_span]:bg-[#203b32] [&_span]:text-[#a6e2c0] [&_strong]:text-[10px] [&_strong]:font-semibold [&_small]:text-[8px] [&_small]:text-[var(--muted)]' },
});

register('stepper-vertical-heading', {
  base: { tw: 'relative z-10 inline-flex min-h-7 w-full cursor-pointer items-center gap-2.5 border-0 bg-transparent p-0 text-left text-[9px] text-[#8997aa] hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff] [&_.stepper-icon]:size-6' },
});

register('stepper-vertical-heading-active', {
  base: { tw: 'font-semibold text-[#c5d7ff]' },
});

register('stepper-vertical-heading-complete', {
  base: { tw: 'text-[#a6e2c0]' },
});

register('stepper-vertical-connector', {
  base: { tw: 'absolute left-[11px] top-6 h-[calc(100%-8px)] min-h-4 w-px bg-[#354154]' },
});

register('stepper-vertical-connector-complete', {
  base: { tw: 'bg-[#4c9b78]' },
});

register('stepper-vertical-content', {
  base: { tw: 'ml-[34px] flex w-[calc(100%-34px)] flex-col gap-2 pb-3 [&_p]:m-0 [&_p]:text-[8px] [&_p]:text-[var(--muted)]' },
});

register('stepper-vertical-success', {
  base: { tw: 'ml-[34px] inline-flex items-center gap-1.5 py-2 text-[8px] text-[#a6e2c0]' },
});

register('stepper-alternative-showcase', {
  base: { tw: 'gap-3' },
});

register('mui-stepper-alternative', {
  base: { tw: 'm-0 flex w-full list-none items-start p-0' },
});

register('mui-step-alternative', {
  base: { tw: 'flex min-w-0 flex-1 items-start' },
});

register('stepper-alternative-button', {
  base: { tw: 'flex min-w-8 cursor-pointer flex-col items-center gap-1.5 border-0 bg-transparent p-0 text-[7px] focus-visible:outline-2 focus-visible:outline-[#8baeff] [&_.stepper-icon]:size-6 sm:min-w-10 sm:text-[8px] sm:[&_.stepper-icon]:size-7' },
});

register('stepper-icon-alternative', {
  base: { tw: 'bg-[#202a38]' },
});

register('stepper-alternative-button .stepper-label', {
  base: { tw: 'max-w-12 leading-tight sm:max-w-14' },
});

register('stepper-alternative-showcase .stepper-connector', {
  base: { tw: 'mt-3 sm:mt-3.5' },
});

register('stepper-alternative-summary', {
  base: { tw: 'flex min-h-[65px] flex-col justify-center gap-1 rounded-md border border-[#2c3746] bg-[#151d28] px-3 py-2 [&_strong]:text-[10px] [&_strong]:font-semibold [&_span:last-child]:text-[8px] [&_span:last-child]:text-[var(--muted)]' },
});

register('stepper-vertical-showcase', {
  base: { tw: 'items-center' },
});

register('stepper-vertical-showcase .mui-stepper-vertical', {
  base: { tw: 'max-w-full' },
});
