import { register } from 'registyle/collector';

register('rgi-accordion', {
  base: {
    tw: 'overflow-hidden rounded-lg border border-[var(--border,#273142)] bg-[var(--panel,#111824)] text-[var(--text,#edf2fb)]',
  },
});
register('rgi-accordion-heading', { base: { tw: 'm-0' } });
register('rgi-accordion-trigger', {
  base: {
    tw: 'flex min-h-12 w-full cursor-pointer items-center justify-between gap-4 border-0 bg-transparent px-4 py-3 text-left text-sm font-medium text-current hover:bg-white/[.03] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--mui-blue,#9bbcff)] disabled:cursor-not-allowed disabled:opacity-50',
  },
});
register('rgi-accordion-title', { base: { tw: 'min-w-0 flex-1' } });
register('rgi-accordion-icon', {
  base: { tw: 'shrink-0 text-[var(--muted,#a4afbf)] transition-transform duration-150' },
});
register('rgi-accordion-expanded .rgi-accordion-icon', { base: { tw: 'rotate-180' } });
register('rgi-accordion-panel', { base: { tw: 'border-t border-[var(--border,#273142)]' } });
register('rgi-accordion-panel[hidden]', { base: { tw: 'hidden' } });
register('rgi-accordion-content', {
  base: { tw: 'px-4 py-3 text-sm leading-relaxed text-[var(--muted,#c0cad8)]' },
});
