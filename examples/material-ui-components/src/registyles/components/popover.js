import { register } from 'registyle/collector';

register('floating-card', {
  base: { tw: 'w-[min(310px,80vw)] p-4' },
  modifiers: {
    'heading': { tw: 'flex items-center gap-2.5' },
    'heading strong': { tw: 'block text-xs font-medium' },
    'heading span': { tw: 'mt-1 block text-[10px] text-[var(--subtle)]' },
    'actions': { tw: 'flex justify-end gap-2 border-t border-[var(--border)] pt-2' },
  },
});

register('floating-card p', {
  base: { tw: 'my-3 text-xs leading-5 text-[var(--muted)]' },
});

register('popover-demo', {
  base: { tw: 'flex w-full max-w-[650px] flex-col gap-3' },
});

register('popover-placement-picker', {
  base: { tw: 'flex flex-wrap gap-1 rounded-lg border border-[var(--border)] bg-[#111720] p-1' },
});

register('popover-placement-option', {
  base: { tw: 'inline-flex h-7 cursor-pointer appearance-none items-center justify-center rounded-md border-0 bg-transparent px-3 text-[9px] font-medium capitalize text-[var(--muted)] shadow-none hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff]' },
});

register('popover-placement-option-active', {
  base: { tw: 'bg-[#20304a] text-[#c5d7ff] hover:bg-[#20304a]' },
});

register('popover-stage', {
  base: { tw: 'flex min-h-[120px] w-full items-center justify-center rounded-lg border border-dashed border-[#303a49] bg-[#0d121b] p-5' },
});

register('popover-trigger', {
  base: { tw: 'gap-2' },
});

register('mui-popover', {
  base: { tw: 'z-50 w-[min(320px,calc(100vw-32px))] overflow-hidden rounded-lg border border-[#354154] bg-[#171f2c] text-[var(--text)] shadow-[0_16px_38px_rgba(0,0,0,.48)]' },
});

register('popover-content', {
  base: { tw: 'p-3.5' },
});

register('popover-heading', {
  base: { tw: 'flex items-center gap-2.5' },
});

register('popover-heading-icon', {
  base: { tw: 'inline-flex size-8 shrink-0 items-center justify-center rounded-lg border border-[#364760] bg-[#24344a] text-[#adc6fa]' },
});

register('popover-heading > span:nth-child(2)', {
  base: { tw: 'flex min-w-0 flex-1 flex-col gap-1 [&_strong]:text-[9px] [&_strong]:font-semibold [&_strong]:text-[var(--text)] [&_small]:text-[8px] [&_small]:text-[var(--muted)]' },
});

register('popover-close', {
  base: { tw: 'inline-flex size-7 shrink-0 cursor-pointer items-center justify-center rounded-md border-0 bg-transparent p-0 text-[#909daf] hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff]' },
});

register('popover-description', {
  base: { tw: 'mb-3 mt-3 text-[8px] leading-relaxed text-[var(--muted)]' },
});

register('popover-project-meta', {
  base: { tw: 'flex items-center justify-between border-y border-[#303a49] py-2 text-[8px] text-[#a6b1c0] [&_span:first-child]:inline-flex [&_span:first-child]:items-center [&_span:first-child]:gap-1.5 [&_i]:size-1.5 [&_i]:rounded-full [&_i]:bg-[#e3b85f]' },
});

register('popover-open-project', {
  base: { tw: 'mt-2.5 inline-flex cursor-pointer items-center gap-1.5 border-0 bg-transparent p-0 text-[8px] font-semibold text-[#b5ccff] hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff]' },
});

register('popover-color-list', {
  base: { tw: 'mt-3 flex flex-col gap-1' },
});

register('popover-color-option', {
  base: { tw: 'flex h-8 cursor-pointer items-center gap-2 rounded-md border-0 bg-transparent px-2 text-left text-[8px] text-[#c1cad7] hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-[#8baeff] [&_i]:size-2.5 [&_i]:rounded-full [&_svg]:ml-auto [&_svg]:text-[#9edab7]' },
});

register('popover-color-preview', {
  base: { tw: 'inline-flex items-center gap-1.5 text-[8px] capitalize text-[var(--muted)] [&_i]:size-2 [&_i]:rounded-full' },
});

register('popover-placement-note', {
  base: { tw: 'mt-3 block text-[8px] leading-relaxed text-[var(--muted)]' },
});

register('popover-demo-footer', {
  base: { tw: 'flex flex-wrap items-center justify-between gap-2' },
});

register('popover-demo-footer .preview-note', {
  base: { tw: 'text-[8px]' },
});
