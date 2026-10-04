import { register } from 'registyle/collector';

register.all({
  'app-shell': {
    tw: 'min-h-screen bg-[radial-gradient(ellipse_at_75%_-15%,rgba(74,102,166,.16),transparent_42%),radial-gradient(ellipse_at_0%_60%,rgba(40,69,112,.08),transparent_34%)]',
  },
  'topbar': {
    tw: 'fixed inset-x-0 top-0 z-20 flex h-14 items-center gap-3 border-b border-[var(--border)] bg-[#090c12]/90 px-5 backdrop-blur-xl max-md:gap-2.5 max-md:px-4 max-sm:gap-2 max-sm:px-3',
  },
  'brand-mark': {
    tw: 'flex size-8 shrink-0 items-center justify-center rounded-[10px] bg-[linear-gradient(145deg,#91b5ff,#4568d9)] text-base font-bold text-white shadow-[0_4px_16px_rgba(84,123,232,.32)]',
  },
  'brand-name': { tw: 'text-[13px] font-semibold tracking-[-.02em] text-[var(--text)]' },
  'version-badge': {
    tw: 'inline-flex shrink-0 items-center gap-1 rounded-full border border-[var(--border)] bg-[#ffffff04] px-2.5 py-1.5 text-[10px] text-[var(--muted)] max-sm:hidden',
  },
  'topbar-spacer': { tw: 'min-w-0 flex-1 max-sm:hidden' },
  'search-box': {
    tw: 'relative flex h-9 w-[min(310px,30vw)] min-w-0 shrink items-center gap-2 rounded-xl border border-[#273142] bg-[#ffffff04] px-3 text-[11px] text-[var(--subtle)] transition-[border-color,background-color] focus-within:border-[#718bbd] focus-within:bg-[#ffffff08] max-sm:w-auto max-sm:flex-1 max-sm:px-2.5',
  },
  'app-layout': { tw: 'flex min-h-screen pt-14' },
  'sidebar': {
    tw: 'fixed bottom-0 left-0 top-14 z-10 flex w-[276px] flex-col overflow-hidden border-r border-[#202938] bg-[linear-gradient(180deg,#0b0f17,#0a0e15)] px-3.5 py-5 max-lg:w-[246px] max-md:hidden',
  },
  'sidebar-scroll': {
    tw: 'min-h-0 flex-1 overflow-y-auto pb-2 [scrollbar-width:thin] [scrollbar-color:#354156_transparent]',
  },
  'sidebar-intro': {
    tw: 'mb-7 flex items-center justify-between px-2',
  },
  'sidebar-label': { tw: 'text-[10px] font-semibold uppercase tracking-[.16em] text-[#7e8ba0]' },
  'nav-section': { tw: 'mb-5' },
  'nav-heading': {
    tw: 'mb-2 mt-6 flex items-center justify-between px-2 text-[10px] font-semibold uppercase tracking-[.14em] text-[var(--subtle)]',
  },
  'nav-group-count': { tw: 'rounded border border-[#232d3e] bg-[#ffffff03] px-1.5 py-0.5 font-mono text-[9px] tracking-normal text-[#73819a]' },
  'nav-link': {
    tw: 'mb-0.5 flex h-[33px] w-full cursor-pointer items-center rounded-lg border-0 border-l-0 border-transparent bg-transparent px-3 text-left text-[11px] tracking-[.005em] text-[#aab5c8] no-underline transition-colors hover:bg-[#ffffff08] hover:text-white',
  },
  'nav-link-active': {
    tw: 'relative mb-0.5 flex h-[33px] w-full cursor-pointer items-center rounded-lg border-0 border-l-0 border-[var(--mui-blue)] bg-[linear-gradient(90deg,rgba(125,159,255,.13),rgba(125,159,255,.035))] px-3 text-left text-[11px] font-semibold tracking-[.005em] text-[var(--mui-blue)] no-underline shadow-[inset_0_0_0_1px_rgba(155,188,255,.08)]',
  },
  'new-chip': {
    tw: 'ml-auto rounded-full border border-[#385143] bg-[#14271f] px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wide text-[#8de0b5]',
  },
  'main-content': {
    tw: 'ml-[276px] min-w-0 flex-1 px-[clamp(28px,5vw,76px)] py-12 max-lg:ml-[246px] max-lg:px-8 max-md:ml-0 max-md:px-7 max-md:py-8 max-sm:px-4 max-sm:py-6',
  },
  'content-width': { tw: 'mx-auto max-w-[1050px]' },
  'breadcrumbs': { tw: 'mb-7 flex items-center gap-2.5 text-[10px] tracking-[.02em] text-[var(--subtle)] [&_a]:text-[var(--subtle)] [&_a]:no-underline [&_a:hover]:text-[var(--mui-blue)]' },
  'breadcrumb-current': { tw: 'text-[var(--mui-blue)]' },
  'page-heading': {
    tw: 'mb-2 font-[Manrope,sans-serif] text-[42px] font-semibold tracking-[-.045em] text-[#f2f5fb] max-sm:text-[32px]',
  },
  'page-intro': { tw: 'mb-0 max-w-[650px] text-[13px] leading-[1.8] text-[#9aa8bd]' },
  'component-count': {
    tw: 'mb-3 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[.18em] text-[#8b9dbb]',
  },
  'component-count-dot': { tw: 'size-1 rounded-full bg-[#9bbcff] shadow-[0_0_8px_rgba(155,188,255,.8)]' },
  'demo-card': {
    tw: 'mb-4 overflow-hidden rounded-xl border border-[#293448] bg-[linear-gradient(145deg,rgba(17,23,34,.98),rgba(13,18,27,.98))] shadow-[0_8px_32px_rgba(0,0,0,.12)] transition-[border-color,box-shadow] duration-200 hover:border-[#394967] hover:shadow-[0_14px_44px_rgba(0,0,0,.22)]',
  },
  'demo-card-header': {
    tw: 'flex items-center justify-between border-b border-[#242e3e] px-5 py-4 max-sm:px-4',
  },
  'demo-title': { tw: 'text-[12px] font-semibold tracking-[-.015em] text-[#e5ebf6]' },
  'demo-caption': { tw: 'mt-1.5 text-[10px] text-[#8592a6]' },
  'demo-content': { tw: 'relative flex min-h-[164px] flex-wrap items-center gap-3 overflow-hidden bg-[radial-gradient(ellipse_at_0%_0%,rgba(112,145,225,.07),transparent_58%),linear-gradient(rgba(255,255,255,.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.018)_1px,transparent_1px)] bg-[length:auto,24px_24px,24px_24px] px-5 py-7 max-sm:px-4' },
  'demo-content-column': { tw: 'flex min-h-[140px] flex-col items-start justify-center gap-4 px-5 py-6' },
  'code-toggle': {
    tw: 'inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-[var(--border)] bg-[#ffffff03] px-2.5 py-1.5 text-[10px] font-medium text-[var(--muted)] transition-colors hover:border-[#455675] hover:bg-[var(--panel-raised)] hover:text-white',
  },
  'demo-footer': {
    tw: 'flex items-center justify-between border-t border-[#242e3e] px-5 py-3 text-[10px] text-[var(--subtle)] max-sm:px-4',
  },
  'source-link': { tw: 'font-medium text-[var(--mui-blue)] hover:underline' },
  'mobile-menu': { tw: 'hidden shrink-0 max-md:inline-flex max-sm:size-8' },
  'sidebar-bottom': {
    tw: 'mt-3 flex shrink-0 items-center gap-2.5 border-t border-[#222b3a] bg-[#0a0e15] px-1 py-3 text-[10px] text-[var(--subtle)] [&_svg:last-child]:ml-auto',
  },
  'sidebar-bottom span': { tw: 'flex flex-1 flex-col gap-1 [&_strong]:text-[10px] [&_strong]:font-medium [&_strong]:text-[#c2cddd] [&_small]:text-[9px] [&_small]:text-[var(--subtle)]' },
  'empty-search': { tw: 'px-2 py-4 text-xs text-[var(--subtle)]' },
  'search-box input': {
    tw: 'block h-full min-w-0 flex-1 appearance-none border-0 bg-transparent p-0 text-[11px] text-[var(--text)] shadow-none outline-none ring-0 placeholder:text-[var(--subtle)] focus:border-0 focus:outline-none focus:ring-0',
  },
  'search-box > svg': { tw: 'shrink-0' },
  'search-box kbd': {
    tw: 'shrink-0 rounded border border-[var(--border)] px-1 py-0.5 text-[10px] text-[var(--subtle)] max-sm:hidden',
  },
  'search-box:focus-within kbd': { tw: 'border-[#536985] text-[#c4d4f5]' },
  'page-topline': {
    tw: 'mb-7 flex items-start justify-between gap-6 max-sm:flex-col',
  },
  'docs-button': { tw: 'absolute bottom-6 right-7 z-[2] mt-0 h-8 rounded-lg border-[#40557c] bg-[#111a2b]/80 px-3 text-[9px] tracking-[.06em] text-[#bdcefa] hover:border-[#7895d3] hover:bg-[#192640] max-sm:static max-sm:ml-auto' },
  'count-divider': { tw: 'text-[var(--border)]' },
  'code-block': {
    tw: 'relative overflow-x-auto border-t border-[var(--border)] bg-[#111316] px-5 py-4',
  },
  'code-block pre': { tw: 'font-mono text-xs leading-5 text-[#b9c3d0]' },
  'copy-button': {
    tw: 'absolute right-4 top-3 inline-flex items-center gap-1.5 rounded border border-[var(--border)] bg-[var(--panel)] px-2 py-1 text-[10px] text-[var(--muted)] hover:text-white',
  },
  'page-footer': {
    tw: 'mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[var(--border)] py-5 text-[11px] text-[var(--subtle)]',
  },
  'footer-brand': { tw: 'flex items-center gap-2 text-xs font-medium text-[var(--muted)]' },
  'brand-mark-small': { tw: 'size-5 text-xs' },
  'footer-links': { tw: 'ml-auto flex items-center gap-3 [&_a]:text-[var(--subtle)] [&_a:hover]:text-[var(--mui-blue)]' },
  'brand-link': { tw: 'flex items-center gap-3 no-underline' },
  'search-results': {
    tw: 'absolute left-0 right-0 top-[calc(100%+8px)] z-30 overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--panel-raised)] py-1 shadow-[0_12px_32px_#0009]',
  },
  'search-results button': {
    tw: 'flex w-full items-center justify-between px-3 py-2 text-left text-xs text-[var(--text)] hover:bg-[#ffffff0d]',
  },
  'search-results p': { tw: 'px-3 py-3 text-xs text-[var(--subtle)]' },
  'search-result-group': { tw: 'text-[10px] text-[var(--subtle)]' },
  'search-clear': { tw: 'inline-flex cursor-pointer border-0 bg-transparent text-[var(--muted)] hover:text-white' },
  'component-eyebrow': { tw: 'mb-4 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[.18em] text-[#a4b8e9]' },
  'component-showcase': { tw: 'block w-full min-w-0' },
  'component-navigation': { tw: 'mb-5 flex items-center justify-between border-y border-[#242e3e] py-3.5' },
  'component-navigation a': { tw: 'flex items-center gap-2 text-xs text-[var(--muted)] transition-colors hover:text-[var(--mui-blue)]' },
  'component-navigation a span': { tw: 'flex flex-col gap-0.5' },
  'component-navigation small': { tw: 'font-mono text-[8px] tracking-[.14em] text-[var(--subtle)]' },
  'component-toc a': { tw: 'text-[#95a3b9] no-underline transition-colors hover:text-[var(--mui-blue)]' },
  'toc-label': { tw: 'font-medium text-[#66758d]' },
  'toc-version': { tw: 'ml-auto font-mono text-[9px] text-[#74839b]' },
  'hero-meta': { tw: 'mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 [&_span]:flex [&_span]:items-center [&_span]:gap-1.5 [&_span]:text-[10px] [&_span]:text-[#a5b2c5] [&_svg]:text-[#87d9b5]' },
  'demo-title-row': { tw: 'flex items-center gap-2.5' },
  'demo-live-pill': { tw: 'inline-flex items-center gap-1 rounded-full border border-[#29443c] bg-[#102019] px-1.5 py-0.5 font-mono text-[7px] font-medium tracking-[.1em] text-[#81d4ad]' },
  'demo-live-pill span': { tw: 'size-1 rounded-full bg-[#7bd6b0] shadow-[0_0_5px_rgba(123,214,176,.7)]' },
  'demo-canvas': { tw: 'relative z-[1] flex w-full flex-wrap items-center gap-3' },
  'canvas-watermark': { tw: 'pointer-events-none absolute bottom-3 right-4 text-[#45516a]/60' },
  'page-section': { tw: 'mb-10 scroll-mt-20' },
  'section-heading': { tw: 'mb-4 flex items-end justify-between border-b border-[var(--border)] pb-3' },
  'section-heading h2': { tw: 'mt-1 text-xl font-medium text-[var(--text)]' },
  'example-count': { tw: 'mb-1 text-xs text-[var(--subtle)]' },
  'api-table-wrap': { tw: 'overflow-x-auto rounded-lg border border-[var(--border)]' },
  'api-table': { tw: 'w-full border-collapse text-left text-xs' },
  'api-table th': { tw: 'border-b border-[var(--border)] bg-[var(--panel)] px-4 py-3 font-medium text-[var(--muted)]' },
  'api-table td': { tw: 'border-b border-[var(--border)] px-4 py-3 text-[var(--muted)] last:border-0' },
  'api-table code': { tw: 'rounded bg-[var(--panel-raised)] px-1.5 py-1 font-mono text-[11px] text-[var(--mui-blue)]' },
  'usage-preview': { tw: 'flex items-center gap-3 text-sm' },
  'usage-preview-icon': { tw: 'rounded-md bg-[var(--mui-blue-soft)] px-3 py-2 font-mono text-sm text-[var(--mui-blue)]' },
  'usage-preview p': { tw: 'mt-1 text-xs text-[var(--subtle)]' },
  'not-found': { tw: 'py-12' },
  'preview-stack': { tw: 'flex w-full flex-col items-start gap-4' },
  'preview-row': { tw: 'flex flex-wrap items-center gap-3' },
  'preview-note': { tw: 'text-xs text-[var(--subtle)]' },
  'selection-list': { tw: 'm-0 flex flex-wrap items-center gap-x-6 gap-y-3 border-0 p-0' },
  'selection-list-vertical': { tw: 'm-0 flex flex-col items-start gap-y-3 border-0 p-0' },
  'selection-option': { tw: 'flex cursor-pointer items-center gap-2.5 text-xs text-[var(--text)]' },
  'selection-copy': { tw: 'flex min-w-0 flex-col gap-1' },
  'is-disabled': { tw: 'cursor-not-allowed opacity-40' },
  'breadcrumbs a': { tw: 'text-[var(--subtle)] no-underline hover:text-[var(--mui-blue)]' },
});
