import { register } from 'registyle/collector';

register('floating-menu', {
  base: { tw: 'py-1' },
});

register('floating-menu button', {
  base: {
    tw: 'flex w-full cursor-pointer items-center gap-2.5 border-0 bg-transparent px-3 py-2.5 text-left text-xs text-[var(--text)] hover:bg-[#ffffff0d]',
  },
});

register('floating-menu button svg:last-child', {
  base: { tw: 'ml-auto text-[var(--mui-blue)]' },
});

register('menu-demo', {
  base: { tw: 'flex min-h-[150px] w-full max-w-[650px] flex-col justify-center gap-3' },
});

register('menu-preview-shell', {
  base: { tw: 'mx-auto w-full max-w-[440px] overflow-hidden rounded-lg border border-[#303a49] bg-[#111720]' },
});

register('menu-preview-card', {
  base: { tw: 'flex min-w-0 items-center gap-2.5 px-3 py-3' },
});

register('menu-preview-icon', {
  base: { tw: 'inline-flex size-8 shrink-0 items-center justify-center rounded-lg border border-[#364760] bg-[#24344a] text-[#adc6fa]' },
});

register('menu-selection-icon', {
  base: { tw: 'inline-flex size-8 shrink-0 items-center justify-center rounded-lg border border-[#364760] bg-[#24344a] text-[#adc6fa]' },
});

register('menu-preview-copy', {
  base: { tw: 'flex min-w-0 flex-1 flex-col gap-1 [&_strong]:truncate [&_strong]:text-[10px] [&_strong]:font-semibold [&_span]:truncate [&_span]:text-[8px] [&_span]:text-[var(--muted)]' },
});

register('menu-trigger', {
  base: { tw: 'inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-md border border-transparent bg-transparent text-[var(--muted)] hover:border-[var(--border)] hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff]' },
});

register('menu-preview-note', {
  base: { tw: 'min-h-8 border-t border-[#303a49] px-3 py-2 text-[8px] text-[var(--muted)]' },
});

register('rgi-menu-surface', {
  base: { tw: 'z-50 w-[min(220px,calc(100vw-24px))] overflow-hidden rounded-lg border border-[#354154] bg-[#171f2c] text-[var(--text)] shadow-[0_16px_38px_rgba(0,0,0,.48)]' },
});

register('rgi-menu-list', {
  base: { tw: 'flex flex-col p-1' },
});

register('rgi-menu-item-danger', {
  base: { tw: 'text-[#f09a9a] hover:bg-[#4a252c] hover:text-[#ffb4b4] focus-visible:bg-[#4a252c] [&_svg]:text-[#e78d96]' },
});

register('menu-item-hint', {
  base: { tw: 'ml-auto text-[8px] text-[#a16c75]' },
});

register('menu-placement-controls', {
  base: { tw: 'mx-auto flex w-full max-w-[440px] flex-wrap gap-1 rounded-lg border border-[var(--border)] bg-[#111720] p-1' },
});

register('menu-placement-option', {
  base: { tw: 'inline-flex h-7 cursor-pointer items-center justify-center rounded-md border-0 bg-transparent px-2.5 text-[8px] capitalize text-[var(--muted)] hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff]' },
});

register('menu-placement-option-active', {
  base: { tw: 'bg-[#20304a] text-[#c5d7ff] hover:bg-[#20304a]' },
});

register('menu-placement-stage', {
  base: { tw: 'flex min-h-[150px] flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-[#303a49] bg-[#0d121b] p-5 [&_.rgi-button]:gap-2' },
});

register('menu-placement-stage .preview-note', {
  base: { tw: 'text-center text-[8px]' },
});

register('menu-selection-card', {
  base: { tw: 'mx-auto flex w-full max-w-[500px] flex-wrap items-center gap-2.5 rounded-lg border border-[#303a49] bg-[#111720] p-3' },
});

register('menu-selection-copy', {
  base: { tw: 'flex min-w-[140px] flex-1 flex-col gap-1 [&_strong]:text-[9px] [&_strong]:font-semibold [&_small]:text-[8px] [&_small]:text-[var(--muted)]' },
});

register('menu-sort-trigger', {
  base: { tw: 'inline-flex min-h-8 cursor-pointer items-center justify-between gap-2 rounded-md border border-[#354154] bg-[#171f2c] px-2.5 text-[8px] text-[#d3dceb] hover:border-[#536985] focus-visible:outline-2 focus-visible:outline-[#8baeff]' },
});

register('menu-selection-card + .preview-note', {
  base: { tw: 'text-center text-[8px]' },
});

register('rgi-menu-item[aria-checked="true"]', {
  base: { tw: 'bg-[#20304a] text-[#d9e5ff] [&_svg]:ml-auto [&_svg]:text-[#9edab7]' },
});
