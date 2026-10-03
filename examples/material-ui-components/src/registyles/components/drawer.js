import { register } from 'registyle/collector';

register('drawer-demo', {
  base: { tw: 'flex w-full max-w-[650px] flex-col gap-3' },
});

register('drawer-preview-shell', {
  base: { tw: 'min-h-[230px] overflow-hidden rounded-lg border border-[var(--border)] bg-[#0e141e]' },
});

register('drawer-preview-topbar', {
  base: { tw: 'flex h-10 items-center gap-2 border-b border-[#293342] bg-[#151c27] px-3' },
});

register('drawer-preview-mark', {
  base: { tw: 'inline-flex size-6 items-center justify-center rounded-md bg-[#293a53] text-[9px] font-bold text-[#bfd1f5]' },
});

register('drawer-preview-topbar strong', {
  base: { tw: 'text-[8px] font-semibold text-[#d3dce8]' },
});

register('drawer-preview-topbar-spacer', {
  base: { tw: 'flex-1' },
});

register('drawer-preview-crumb', {
  base: { tw: 'inline-flex items-center gap-1 rounded border border-[#303a49] px-2 py-1 text-[7px] text-[#9ba7b8]' },
});

register('drawer-preview-content', {
  base: { tw: 'flex min-h-[190px] flex-col items-start justify-center gap-2 px-5 py-4' },
});

register('drawer-preview-eyebrow', {
  base: { tw: 'text-[7px] font-semibold tracking-[.15em] text-[#8290a5]' },
});

register('drawer-preview-content > strong', {
  base: { tw: 'text-[13px] font-semibold text-[var(--text)]' },
});

register('drawer-preview-content > span:not(.drawer-preview-eyebrow)', {
  base: { tw: 'mb-1 text-[8px] text-[var(--muted)]' },
});

register('drawer-demo-footer', {
  base: { tw: 'flex flex-wrap items-center justify-between gap-2' },
});

register('drawer-demo-footer .preview-note', {
  base: { tw: 'text-[8px]' },
});

register('drawer-demo-footer .preview-note strong', {
  base: { tw: 'font-semibold text-[var(--text)]' },
});

register('drawer-overlay', {
  base: { tw: 'fixed inset-0 z-[60] flex bg-[rgba(3,6,10,.68)] backdrop-blur-[1px]' },
});

register('drawer-panel', {
  base: { tw: 'relative flex h-full w-[min(310px,86vw)] flex-col border-r border-[#303a49] bg-[#121925] p-4 shadow-[16px_0_48px_rgba(0,0,0,.4)]' },
});

register('drawer-panel-header', {
  base: { tw: 'flex items-center justify-between border-b border-[#293342] pb-4' },
});

register('drawer-brand', {
  base: { tw: 'flex min-w-0 items-center gap-2.5' },
});

register('drawer-brand-mark', {
  base: { tw: 'inline-flex size-8 shrink-0 items-center justify-center rounded-lg border border-[#34465f] bg-[#25354b] text-[#b6cdf7]' },
});

register('drawer-brand > span:last-child', {
  base: { tw: 'flex min-w-0 flex-col gap-1 [&_strong]:text-[10px] [&_strong]:font-semibold [&_strong]:text-[var(--text)] [&_small]:text-[8px] [&_small]:text-[var(--muted)]' },
});

register('drawer-close', {
  base: { tw: 'inline-flex size-7 shrink-0 cursor-pointer items-center justify-center rounded-md border-0 bg-transparent p-0 text-[#9ba7b8] hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff]' },
});

register('drawer-nav', {
  base: { tw: 'mt-5 flex flex-col gap-1' },
});

register('drawer-section-list', {
  base: { tw: 'mt-4 flex flex-col gap-5' },
});

register('drawer-section', {
  base: { tw: 'flex flex-col gap-1' },
});

register('drawer-section-heading', {
  base: { tw: 'mb-1 px-2 text-[7px] font-semibold tracking-[.14em] text-[#77869b]' },
});

register('drawer-nav-item', {
  base: { tw: 'flex min-h-9 w-full cursor-pointer items-center gap-2.5 rounded-md border-0 bg-transparent px-2.5 text-left text-[9px] text-[#a6b1c0] hover:bg-white/[.04] hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff]' },
});

register('drawer-nav-item-active', {
  base: { tw: 'bg-[#223149] text-[#c6d7f6] hover:bg-[#223149] hover:text-white' },
});

register('drawer-nav-item span', {
  base: { tw: 'min-w-0 flex-1' },
});

register('drawer-nav-item small', {
  base: { tw: 'rounded-full bg-[#29374a] px-1.5 py-0.5 text-[7px] text-[#b7c7e2]' },
});

register('drawer-account', {
  base: { tw: 'mt-auto flex items-center gap-2.5 border-t border-[#293342] pt-3' },
});

register('drawer-account-avatar', {
  base: { tw: 'inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-[#47566c] bg-[#29394f] text-[8px] font-semibold text-[#d7e3f5]' },
});

register('drawer-account > span:nth-child(2)', {
  base: { tw: 'flex min-w-0 flex-1 flex-col gap-1 [&_strong]:truncate [&_strong]:text-[8px] [&_strong]:font-medium [&_strong]:text-[var(--text)] [&_small]:truncate [&_small]:text-[7px] [&_small]:text-[var(--muted)]' },
});

register('drawer-account > svg', {
  base: { tw: 'shrink-0 text-[#8b97a8]' },
});

register('drawer-permanent-shell', {
  base: { tw: 'grid min-h-[250px] w-full grid-cols-[190px_minmax(0,1fr)] overflow-hidden rounded-lg border border-[var(--border)] bg-[#0e141e] max-sm:grid-cols-[145px_minmax(0,1fr)]' },
});

register('drawer-permanent-panel', {
  base: { tw: 'flex min-w-0 flex-col border-r border-[#303a49] bg-[#121925] p-3' },
});

register('drawer-brand-dense .drawer-brand-mark', {
  base: { tw: 'size-7' },
});

register('drawer-brand-dense > span:last-child small', {
  base: { tw: 'hidden' },
});

register('drawer-permanent-nav', {
  base: { tw: 'mt-5 flex flex-col gap-1' },
});

register('drawer-account-permanent', {
  base: { tw: 'gap-2 pt-3' },
});

register('drawer-permanent-content', {
  base: { tw: 'flex min-w-0 flex-col items-start justify-center gap-2 p-5 max-sm:p-3' },
});

register('drawer-permanent-topline', {
  base: { tw: 'mb-4 flex w-full items-center justify-between border-b border-[#293342] pb-2 text-[7px] text-[#98a5b6]' },
});

register('drawer-permanent-topline button', {
  base: { tw: 'inline-flex size-6 cursor-pointer items-center justify-center rounded border-0 bg-transparent p-0 text-[#9ba7b8] hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-[#8baeff]' },
});

register('drawer-permanent-content > strong', {
  base: { tw: 'text-[12px] font-semibold text-[var(--text)]' },
});

register('drawer-permanent-content p', {
  base: { tw: 'm-0 max-w-[300px] text-[8px] leading-relaxed text-[var(--muted)]' },
});

register('drawer-permanent-status', {
  base: { tw: 'mt-2 inline-flex items-center gap-1.5 rounded-full border border-[#285b43] bg-[#172b23] px-2 py-1 text-[7px] text-[#9edab7]' },
});

register('drawer-permanent-status i', {
  base: { tw: 'size-1.5 rounded-full bg-[#78c99e]' },
});
