import { register } from 'registyle/collector';

register.all({
  'app-shell': {
    tw: ['flex min-h-screen bg-[var(--c-bg)]', 'max-md:flex-col'],
  },
  'sidebar': {
    tw: [
      'flex flex-col shrink-0 overflow-y-auto w-[252px] bg-[var(--c-sidebar)] border-r border-r-[var(--c-sidebar-border)] px-0 pt-5 pb-4 sticky top-0 h-screen [scrollbar-width:thin] [scrollbar-color:#52645a_transparent]',
      'max-md:(w-full h-auto px-4 pt-3 pb-0 border-r-0 border-b border-b-[var(--c-sidebar-border)] overflow-y-hidden z-20)',
    ],
  },
  'sidebar-logo': {
    tw: ['flex items-center gap-2.5 font-bold mb-6 px-5 text-base text-[#f5f7f4] font-[Fraunces,Georgia,serif]', 'max-md:(mb-[0.65rem] px-1)'],
  },
  'brand-mark': {
    tw: 'inline-flex items-center justify-center rounded size-[23px] text-white bg-[var(--c-brand)] font-[DM_Sans,sans-serif] text-[13px]',
  },
  'sidebar-nav': {
    tw: ['flex flex-col gap-1', 'max-md:(flex-row overflow-x-auto [scrollbar-width:none] gap-2 pb-2)'],
  },
  'sidebar-group': {
    tw: 'flex flex-col max-md:(flex-row shrink-0)',
  },
  'sidebar-group-label': {
    tw: 'block px-5 font-bold tracking-widest uppercase mb-1 mt-4 text-[9px] text-[var(--c-sidebar-muted)] max-md:hidden',
  },
  'sidebar-item': {
    tw: [
      'flex items-center gap-2.5 text-sm font-medium transition-colors cursor-pointer border-0 bg-transparent text-left w-full px-5 py-2 text-[var(--c-sidebar-muted)] rounded-none border-l-2 border-l-transparent hover:text-white hover:bg-[rgba(255,255,255,.055)] focus-visible:outline-2 focus-visible:outline-[var(--c-brand)] focus-visible:outline-offset-[-2px]',
      'max-md:(w-auto shrink-0 px-[0.7rem] py-[0.55rem] border-l-0 border-b-2 border-b-transparent rounded-t-[5px] text-xs)',
    ],
  },
  'sidebar-item-active': {
    tw: [
      'flex items-center gap-2.5 text-sm font-semibold cursor-pointer border-0 text-left w-full px-5 py-2 text-white bg-[#31473e] border-l-2 border-l-[var(--c-brand)] focus-visible:outline-2 focus-visible:outline-[var(--c-brand)] focus-visible:outline-offset-[-2px]',
      'max-md:(w-auto shrink-0 px-[0.7rem] py-[0.55rem] border-l-0 border-b-2 border-b-[var(--c-brand)] rounded-t-[5px] text-xs)',
    ],
  },
  'main-content': {
    tw: [
      'flex-1 min-w-0 overflow-y-auto py-[2.25rem] px-[clamp(1.5rem,4vw,4.5rem)]',
      'max-md:(py-6 px-5) max-sm:(py-[1.1rem] px-4)',
    ],
  },
  'content-frame': { tw: 'w-full max-w-[1280px] mx-auto' },
  'demo-topline': {
    tw: ['flex items-center justify-between mb-6 min-h-6', 'max-sm:mb-4'],
  },
  'demo-location': {
    tw: 'font-bold uppercase text-[10px] tracking-[0.12em] text-[var(--c-text-muted)]',
  },
  'demo-count': {
    tw: 'inline-flex items-center rounded-full px-2.5 py-1 font-semibold text-[11px] text-[var(--c-info)] bg-[var(--c-info-bg)]',
  },
  'demo-header': {
    tw: ['flex justify-between gap-6 items-end mb-8 border-b border-b-[var(--c-border)] pb-6 animate-[fadeIn_240ms_ease_both]', 'max-sm:(items-start mb-6 pb-4)'],
  },
  'demo-heading-copy': { tw: 'max-w-[760px]' },
  'demo-eyebrow': {
    tw: 'block font-bold uppercase mb-2 text-[10px] tracking-[0.14em] text-[var(--c-brand)]',
  },
  'demo-title': {
    tw: ['font-medium mb-1 font-[Fraunces,Georgia,serif] text-[3.25rem] leading-[1.08] text-[var(--c-text)]', 'max-sm:text-[2.5rem]'],
  },
  'demo-desc': {
    tw: ['text-[15px] text-[var(--c-text-muted)] leading-[1.6]', 'max-sm:text-sm'],
  },
  'demo-index': {
    tw: ['flex items-baseline gap-1 shrink-0 font-[Fraunces,Georgia,serif] text-[30px] text-[var(--c-brand)] [&_span]:font-[DM_Sans,sans-serif] [&_span]:text-xs [&_span]:text-[var(--c-text-light)]', 'max-sm:hidden'],
  },
  'demo-stage': { tw: 'min-h-[360px] pb-8' },
  'demo-section': {
    tw: 'mb-9 pb-[1.65rem] border-b border-b-[var(--c-border)] last:border-b-0 last:pb-0',
  },
  'demo-section-title': {
    tw: 'font-semibold mb-4 text-xs text-[var(--c-text-muted)]',
  },
  'demo-row': { tw: ['flex flex-wrap items-center', 'gap-3'] },
  'demo-col': { tw: ['flex flex-col', 'gap-3'] },
  'demo-grid': { tw: ['grid gap-4', 'grid-cols-[repeat(auto-fit,minmax(min(100%,_250px),_1fr))]'] },
  'code-badge': {
    tw: 'inline-flex items-center px-2 py-0.5 rounded font-mono text-xs bg-[var(--c-brand-light)] text-[var(--c-brand)]',
  },
});
