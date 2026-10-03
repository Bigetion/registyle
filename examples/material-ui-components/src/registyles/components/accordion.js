import { register } from 'registyle/collector';

register('accordion-demo', {
  base: { tw: 'w-full max-w-[620px] overflow-hidden rounded-lg border border-[var(--border)] bg-[#111720]' },
});

register('accordion-item', {
  base: { tw: 'border-b border-[var(--border)] last:border-b-0' },
});

register('accordion-heading', {
  base: { tw: 'm-0' },
});

register('accordion-trigger', {
  base: { tw: 'flex min-h-12 w-full cursor-pointer appearance-none items-center gap-3 border-0 bg-transparent px-4 py-3 text-left text-[10px] text-[var(--text)] shadow-none transition-colors hover:bg-white/[0.025] focus-visible:outline-2 focus-visible:outline-[#8baeff] disabled:cursor-not-allowed' },
});

register('accordion-index', {
  base: { tw: 'w-5 shrink-0 font-mono text-[8px] text-[#78869a]' },
});

register('accordion-title', {
  base: { tw: 'min-w-0 flex-1 font-medium' },
});

register('accordion-chevron', {
  base: { tw: 'shrink-0 text-[#8592a5] transition-transform duration-200' },
});

register('accordion-item-expanded .accordion-chevron', {
  base: { tw: 'rotate-180 text-[#a9c4ff]' },
});

register('accordion-panel', {
  base: { tw: 'px-12 pb-4 pr-8 text-[9px] leading-relaxed text-[var(--muted)]' },
});

register('accordion-panel[hidden]', {
  base: { tw: 'hidden' },
});

register('accordion-panel p', {
  base: { tw: 'm-0 max-w-[500px]' },
});

register('accordion-item-expanded', {
  base: { tw: 'bg-[#ffffff04]' },
});

register('accordion-item-disabled .accordion-trigger', {
  base: { tw: 'text-[#707b8b] hover:bg-transparent' },
});

register('accordion-unavailable', {
  base: { tw: 'rounded-full border border-[#38404c] px-2 py-1 text-[7px] font-medium text-[#8893a2]' },
});

register('accordion-toolbar', {
  base: { tw: 'flex items-center justify-between border-b border-[var(--border)] bg-[#151c27] px-4 py-2.5 text-[9px] font-semibold text-[var(--text)]' },
});

register('accordion-toolbar button', {
  base: { tw: 'cursor-pointer border-0 bg-transparent p-0 text-[8px] font-medium text-[#a9c4ff] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8baeff]' },
});

register('accordion-helper', {
  base: { tw: 'block px-4 py-2.5 text-[8px] text-[var(--muted)]' },
});
