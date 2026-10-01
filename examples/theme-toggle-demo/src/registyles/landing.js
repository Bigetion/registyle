import { register } from 'registyle/collector';

register('site-shell', {
  tw: 'min-h-screen bg-[var(--page)] text-[var(--ink)] transition-colors duration-200',
});

register('topbar', {
  tw: 'w-full bg-[var(--page)] transition-[box-shadow,background-color] duration-200',
});

register('topbar-slot', {
  tw: 'relative min-h-20',
});

register('topbar-floating', {
  tw: 'fixed inset-x-0 top-0 z-50 border-b border-[var(--line)] shadow-md',
});

register('topbar-inner', {
  tw: 'mx-auto flex w-full max-w-[1320px] items-center justify-between px-6 py-5 max-sm:px-4',
});

register('brand', {
  tw: 'flex items-center gap-2.5 text-[var(--ink)] no-underline',
});

register('brand-mark', {
  tw: 'grid size-9 place-items-center rounded-full bg-[var(--accent)] text-white',
});

register('brand-name', {
  tw: 'font-[var(--font-display)] text-[22px] font-semibold leading-none',
});

register('topbar-actions', {
  tw: 'flex items-center gap-8 max-sm:gap-3',
});

register('topbar-nav', {
  tw: 'flex items-center gap-7 max-sm:hidden',
});

register('nav-link', {
  tw: 'text-[13px] font-medium text-[var(--muted)] no-underline transition-colors hover:text-[var(--ink)]',
});

register('theme-toggle', {
  tw: 'grid size-10 place-items-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] transition-colors hover:bg-[var(--surface-raised)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]',
});

register('hero', {
  tw: 'relative mx-auto flex min-h-[590px] max-w-[1320px] items-end overflow-hidden rounded-[5px] bg-[#3d5146] max-lg:min-h-[540px] max-sm:min-h-[560px] max-sm:rounded-none',
});

register('hero-image', {
  tw: 'absolute inset-0 size-full object-cover object-center',
});

register('hero-overlay', {
  tw: 'absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent max-sm:bg-gradient-to-t max-sm:from-black/65 max-sm:via-black/20',
});

register('hero-content', {
  tw: 'relative z-10 max-w-[650px] px-16 pb-16 pt-24 text-white max-md:px-9 max-md:pb-12 max-sm:px-6',
});

register('hero-eyebrow', {
  tw: 'mb-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/85',
});

register('hero-title', {
  tw: 'mb-5 max-w-[610px] font-[var(--font-display)] text-[clamp(3.5rem,7vw,6rem)] font-medium leading-[0.98] max-sm:text-[54px]',
});

register('hero-copy', {
  tw: 'mb-8 max-w-[410px] text-[15px] leading-7 text-white/85',
});

register('scroll-cue', {
  tw: 'absolute bottom-7 right-8 z-10 inline-flex items-center gap-2 text-[11px] font-medium text-white/85 no-underline max-sm:hidden',
});

register('action-button', {
  base: {
    tw: 'inline-flex min-h-11 items-center justify-center gap-2 rounded-[3px] px-5 text-[13px] font-semibold no-underline transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]',
  },
  modifiers: {
    primary: { tw: 'bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]' },
    quiet: { tw: 'border border-[var(--line)] bg-transparent text-[var(--ink)] hover:bg-[var(--surface-raised)]' },
  },
});

register('intro', {
  tw: 'mx-auto grid max-w-[1320px] grid-cols-[1fr_1fr] gap-12 px-12 py-24 max-md:grid-cols-1 max-md:gap-5 max-md:px-8 max-md:py-16 max-sm:px-6',
});

register('intro-kicker', {
  tw: 'font-[var(--font-display)] text-[18px] italic text-[var(--accent)]',
});

register('intro-title', {
  tw: 'max-w-[620px] font-[var(--font-display)] text-[42px] font-medium leading-[1.12] max-sm:text-[34px]',
});

register('intro-copy', {
  tw: 'mt-5 max-w-[440px] text-[14px] leading-7 text-[var(--muted)]',
});

register('destination-section', {
  tw: 'border-t border-[var(--line)] bg-[var(--surface)]',
});

register('destination-inner', {
  tw: 'mx-auto max-w-[1320px] px-12 py-20 max-sm:px-6 max-sm:py-14',
});

register('section-heading', {
  tw: 'mb-9 flex items-end justify-between gap-5 max-sm:items-start',
});

register('section-title', {
  tw: 'font-[var(--font-display)] text-[34px] font-medium leading-tight max-sm:text-[29px]',
});

register('eyebrow', {
  tw: 'mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--accent)]',
});

register('destination-grid', {
  tw: 'grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1',
});

register('destination-card', {
  tw: 'overflow-hidden border border-[var(--line)] bg-[var(--page)] text-[var(--ink)] no-underline transition-colors hover:border-[var(--accent)]',
});

register('destination-image', {
  tw: 'block aspect-[1.35] w-full object-cover',
});

register('destination-body', {
  tw: 'flex items-start justify-between gap-4 px-5 py-4',
});

register('destination-name', {
  tw: 'font-[var(--font-display)] text-[19px] font-semibold',
});

register('destination-meta', {
  tw: 'mt-1 text-[12px] text-[var(--muted)]',
});

register('destination-arrow', {
  tw: 'mt-1 shrink-0 text-[var(--accent)]',
});

register('desktop-only', {
  tw: 'max-sm:hidden',
});

register('site-footer', {
  tw: 'mx-auto flex max-w-[1320px] items-center justify-between gap-4 px-12 py-7 text-[12px] text-[var(--muted)] max-sm:px-6',
});