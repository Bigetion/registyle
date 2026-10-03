import { register } from 'registyle/collector';

register.group('select-control', {
  root: {
    tw: 'relative w-[240px] max-w-full',
  },
});

register('select-options', {
  base: { tw: 'z-50 max-h-64 w-[240px] overflow-y-auto overscroll-y-contain rounded-lg border border-[#34425a] bg-[#111722] p-1.5 shadow-[0_16px_40px_rgba(0,0,0,.48)] [scrollbar-width:thin] [scrollbar-color:#354156_transparent]' },
});

register('select-trigger', {
  base: { tw: 'flex min-h-10 w-full cursor-pointer items-center justify-between gap-3 rounded-lg border border-[#34425a] bg-[#111722] px-3 text-left text-[12px] text-[#e5ebf6] transition-[border-color,box-shadow,background-color] hover:border-[#52678b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#86a6ff] aria-expanded:border-[#718dca] aria-expanded:bg-[#141c2a]' },
});

register('select-trigger-open', {
  base: { tw: 'shadow-[0_0_0_3px_rgba(134,166,255,.1)]' },
});

register('select-trigger-value', {
  base: { tw: 'min-w-0 flex-1 truncate' },
});

register('select-trigger-icon', {
  base: { tw: 'shrink-0 text-[#8593aa] transition-transform' },
});

register('select-trigger-icon-open', {
  base: { tw: 'rotate-180 text-[#b8c9f1]' },
});

register('select-option', {
  base: { tw: 'flex min-h-11 cursor-pointer items-center justify-between gap-3 rounded-md px-2.5 py-2 text-[#c2ccdc] transition-colors hover:bg-[#ffffff08]' },
});

register('select-option-active', {
  base: { tw: 'bg-[#1b2639] text-white' },
});

register('select-option-disabled', {
  base: { tw: 'cursor-not-allowed opacity-40 hover:bg-transparent' },
});

register('select-option-copy', {
  base: { tw: 'flex min-w-0 flex-col gap-1' },
});

register('select-option-label', {
  base: { tw: 'text-[11px] font-medium' },
});

register('select-option-detail', {
  base: { tw: 'text-[9px] text-[#8290a5]' },
});

register('select-option-check', {
  base: { tw: 'shrink-0 text-[#9bbcff]' },
});

register('select-tags', {
  base: { tw: 'flex max-w-full flex-wrap gap-1.5 pt-2' },
});

register('select-tag', {
  base: { tw: 'inline-flex items-center gap-1 rounded-md border border-[#35445f] bg-[#172235] py-1 pl-2 text-[9px] text-[#cbd8f2]' },
});

register('select-tag-remove', {
  base: { tw: 'inline-flex size-5 cursor-pointer items-center justify-center rounded border-0 bg-transparent p-0 text-[#91a0b8] hover:bg-[#ffffff10] hover:text-white focus-visible:outline-2 focus-visible:outline-[#86a6ff]' },
});
