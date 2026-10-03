import { register } from 'registyle/collector';

register('breadcrumbs-demo', {
  base: { tw: 'flex w-full max-w-[620px] flex-col gap-4 rounded-lg border border-[var(--border)] bg-[#111720] p-4' },
});

register('mui-breadcrumbs', {
  base: { tw: 'min-w-0 overflow-x-auto' },
});

register('mui-breadcrumbs ol', {
  base: { tw: 'm-0 flex min-w-0 list-none flex-wrap items-center gap-1.5 p-0 text-[9px]' },
});

register('mui-breadcrumbs li', {
  base: { tw: 'flex min-w-0 shrink-0 items-center gap-1.5' },
});

register('mui-breadcrumbs a', {
  base: { tw: 'inline-flex max-w-[180px] items-center truncate rounded-sm text-[#a9c4ff] no-underline hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff]' },
});

register('breadcrumbs-current-item', {
  base: { tw: 'max-w-[200px] truncate font-medium text-[var(--text)]' },
});

register('breadcrumbs-separator', {
  base: { tw: 'inline-flex shrink-0 items-center text-[#687589]' },
});

register('breadcrumbs-collapsed-item button', {
  base: { tw: 'inline-flex size-6 cursor-pointer items-center justify-center rounded border border-[#354154] bg-[#1b2431] p-0 text-[#aab6c7] hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff]' },
});

register('breadcrumbs-separator-key', {
  base: { tw: 'flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[var(--border)] pt-3 text-[8px] text-[var(--muted)] [&_span]:inline-flex [&_span]:items-center [&_span]:gap-1 [&_svg]:text-[#a9c4ff]' },
});

register('breadcrumbs-collapsed-footer', {
  base: { tw: 'flex flex-wrap items-center justify-between gap-2' },
});

register('breadcrumbs-collapsed-footer button', {
  base: { tw: 'cursor-pointer border-0 bg-transparent p-0 text-[8px] font-medium text-[#a9c4ff] hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff]' },
});

register('breadcrumbs-preview', {
  base: { tw: 'flex flex-col gap-1 rounded-md border border-[#2d3747] bg-[#0d131d] px-3 py-2.5' },
});

register('breadcrumbs-preview-label', {
  base: { tw: 'text-[7px] font-semibold tracking-[.14em] text-[#77869b]' },
});

register('breadcrumbs-preview strong', {
  base: { tw: 'text-[9px] font-medium text-[#d1dae7]' },
});
