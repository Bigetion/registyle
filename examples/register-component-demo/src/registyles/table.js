import { register } from 'registyle/collector';

register.group('table', {
  root: {
    tw: 'w-full min-w-0 rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] shadow-[var(--shadow-sm)] overflow-x-auto overscroll-x-contain focus-visible:(outline-2 outline-[var(--c-brand)] outline-offset-3)',
  },
  thead: {
    tw: 'border-b border-b-[var(--c-border)] bg-[#f5f7f3]',
  },
  th: {
    tw: 'px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--c-text-muted)] whitespace-nowrap first:pl-5 last:pr-5 last:text-right',
  },
  tr: {
    tw: 'border-b border-b-[var(--c-border)] transition-colors duration-[140ms] hover:bg-[#f7f9f5] last:border-b-0',
  },
  'tr-last': { tw: 'border-0' },
  td: {
    tw: 'px-4 py-3.5 text-sm text-[var(--c-text)] align-middle whitespace-nowrap first:pl-5 last:pr-5 last:text-right',
  },
  empty: {
    tw: 'text-center py-12 text-sm text-[var(--c-text-muted)]',
  },
});

register('table-table', {
  tw: 'w-full min-w-[700px] border-collapse table-fixed text-sm',
});

register('table-demo-toolbar', {
  tw: ['flex justify-between gap-4 mb-5 items-start', 'max-sm:(flex-col items-stretch)'],
});

register('table-demo-title', {
  tw: 'text-base font-bold text-[var(--c-text)]',
});

register('table-demo-copy', {
  tw: 'mt-0.5 text-[13px] text-[var(--c-text-muted)]',
});

register('table-demo-controls', {
  tw: ['flex items-center justify-between gap-3 mb-3', 'max-sm:(items-stretch flex-col)'],
});

register('table-demo-search', {
  tw: 'w-[min(340px,100%)] max-sm:w-full',
});

register('table-demo-filter', {
  tw: 'w-[180px] max-sm:w-full',
});

register('table-demo-footer', {
  tw: ['flex items-center justify-between gap-3 pt-[0.85rem] text-xs text-[var(--c-text-muted)]', 'max-sm:(items-start flex-col)'],
});