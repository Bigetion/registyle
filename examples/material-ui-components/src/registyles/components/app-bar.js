import { register } from 'registyle/collector';

register('appbar-demo', {
  base: { tw: 'flex w-full max-w-[720px] flex-col gap-2' },
});

register('appbar-preview', {
  base: { tw: 'overflow-hidden rounded-lg border border-[var(--border)] bg-[#0e141e]' },
});

register('mui-appbar', {
  base: { tw: 'relative z-10 flex min-h-14 items-center gap-3 border-b border-[var(--border)] bg-[#151c27] px-4 py-2 max-sm:gap-2 max-sm:px-3' },
});

register('appbar-brand', {
  base: { tw: 'flex shrink-0 items-center gap-2' },
});

register('appbar-brand-mark', {
  base: { tw: 'inline-flex size-7 items-center justify-center rounded-lg bg-[#263650] text-xs font-bold text-[#b5ccff]' },
});

register('appbar-brand-copy', {
  base: { tw: 'flex flex-col gap-0.5' },
});

register('appbar-brand-copy strong', {
  base: { tw: 'whitespace-nowrap text-[9px] font-semibold text-[var(--text)]' },
});

register('appbar-brand-copy small', {
  base: { tw: 'whitespace-nowrap text-[7px] text-[var(--muted)]' },
});

register('appbar-nav', {
  base: { tw: 'ml-3 flex h-14 shrink-0 items-center gap-1 max-sm:hidden' },
});

register('appbar-nav-link', {
  base: { tw: 'inline-flex h-8 cursor-pointer items-center rounded-md border-0 bg-transparent px-2.5 text-[8px] font-medium text-[#9aa6b8] hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff]' },
});

register('appbar-nav-link-active', {
  base: { tw: 'bg-[#202c3d] text-[#d9e4f6] hover:bg-[#202c3d]' },
});

register('appbar-spacer', {
  base: { tw: 'min-w-0 flex-1' },
});

register('appbar-icon-button', {
  base: { tw: 'relative inline-flex size-8 shrink-0 cursor-pointer appearance-none items-center justify-center rounded-md border-0 bg-transparent p-0 text-[#b7c1cf] shadow-none hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#8baeff]' },
});

register('appbar-icon-button-muted', {
  base: { tw: 'text-[#737f91]' },
});

register('appbar-notification-dot', {
  base: { tw: 'absolute right-1.5 top-1.5 size-1.5 rounded-full bg-[#f08a75] ring-2 ring-[#151c27]' },
});

register('appbar-settings-button', {
  base: { tw: 'inline-flex h-8 shrink-0 cursor-pointer items-center gap-1.5 rounded-md border border-[#303a49] bg-transparent px-2.5 text-[8px] font-medium text-[#c2cad5] hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-[#8baeff] max-sm:px-2 [&_svg]:max-sm:hidden' },
});

register('appbar-account', {
  base: { tw: 'inline-flex shrink-0 cursor-pointer items-center gap-1.5 border-0 bg-transparent p-0 text-[#9ba7b7] hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff]' },
});

register('appbar-avatar', {
  base: { tw: 'inline-flex size-7 items-center justify-center rounded-full border border-[#45536a] bg-[#28374d] text-[8px] font-semibold text-[#d7e2f5]' },
});

register('appbar-content', {
  base: { tw: 'flex min-h-[145px] flex-col items-start justify-center gap-2 px-6 py-5 max-sm:min-h-[120px] max-sm:px-4' },
});

register('appbar-content-eyebrow', {
  base: { tw: 'text-[7px] font-semibold tracking-[.16em] text-[#8190a5]' },
});

register('appbar-content strong', {
  base: { tw: 'text-sm font-semibold tracking-tight text-[var(--text)]' },
});

register('appbar-content span:last-child', {
  base: { tw: 'text-[9px] text-[var(--muted)]' },
});

register('appbar-demo-footer', {
  base: { tw: 'flex flex-wrap items-center justify-between gap-2 px-1' },
});

register('appbar-search', {
  base: { tw: 'relative ml-1 flex h-8 min-w-0 w-[170px] items-center gap-2 rounded-md border border-[#303a49] bg-[#0d131d] px-2.5 text-[#8390a2] [&_input]:min-w-0 [&_input]:flex-1 [&_input]:border-0 [&_input]:bg-transparent [&_input]:text-[8px] [&_input]:text-[var(--text)] [&_input]:outline-none [&_input]:placeholder:text-[#778397] [&_kbd]:inline-flex [&_kbd]:items-center [&_kbd]:gap-0.5 [&_kbd]:rounded [&_kbd]:border [&_kbd]:border-[#303a49] [&_kbd]:px-1 [&_kbd]:py-0.5 [&_kbd]:text-[7px] max-sm:w-[120px]' },
});

register('appbar-search-open', {
  base: { tw: 'border-[#526e9b]' },
});

register('appbar-search-results', {
  base: { tw: 'absolute left-0 right-0 top-[calc(100%+6px)] z-20 flex flex-col overflow-hidden rounded-md border border-[#354154] bg-[#171f2c] p-1 shadow-xl [&_button]:flex [&_button]:cursor-pointer [&_button]:items-center [&_button]:gap-2 [&_button]:rounded [&_button]:border-0 [&_button]:bg-transparent [&_button]:px-2 [&_button]:py-2 [&_button]:text-left [&_button]:text-[8px] [&_button]:text-[#c3ccda] [&_button:hover]:bg-white/5 [&_span]:px-2 [&_span]:py-2 [&_span]:text-[8px] [&_span]:text-[var(--muted)]' },
});

register('appbar-demo-footer .preview-note', {
  base: { tw: 'text-[8px]' },
});

register('appbar-breakpoint-note', {
  base: { tw: 'text-[8px] text-[var(--muted)]' },
});

register('appbar-mobile-menu', {
  base: { tw: 'hidden max-sm:inline-flex' },
});

register('appbar-mobile-panel', {
  base: { tw: 'hidden max-sm:flex max-sm:flex-col max-sm:border-b max-sm:border-[var(--border)] max-sm:bg-[#151c27] max-sm:p-2 [&_button]:flex [&_button]:min-h-9 [&_button]:cursor-pointer [&_button]:items-center [&_button]:justify-between [&_button]:rounded [&_button]:border-0 [&_button]:bg-transparent [&_button]:px-3 [&_button]:text-left [&_button]:text-[9px] [&_button]:text-[#b7c1cf] [&_button:hover]:bg-white/5' },
});

register('appbar-mobile-link-active', {
  base: { tw: 'bg-[#202c3d] text-white' },
});
