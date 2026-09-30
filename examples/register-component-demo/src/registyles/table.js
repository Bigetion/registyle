import { register } from 'registyle/collector';

register.group('table', {
  root: {
    tw: 'w-full min-w-0 rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] [box-shadow:var(--shadow-sm)] overflow-x-auto overscroll-x-contain focus-visible:outline-2 focus-visible:outline-[var(--c-brand)] focus-visible:outline-offset-3',
  },
  thead: { tw: 'border-b border-b-[var(--c-border)] bg-[#f5f7f3]' },
  th: {
    tw: 'px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--c-text-muted)] whitespace-nowrap first:pl-5 last:pr-5 last:text-right',
  },
  tr: {
    tw: 'border-b border-b-[var(--c-border)] transition-[background-color] duration-[140ms] ease-[ease] hover:bg-[#f7f9f5] last:[border-bottom:0]',
  },
  'tr-last': { tw: '[border-bottom:none]' },
  td: {
    tw: 'px-4 py-3.5 text-sm text-[var(--c-text)] align-middle whitespace-nowrap first:pl-5 last:pr-5 last:text-right',
  },
  empty: { tw: 'text-center py-12 text-sm text-[var(--c-text-muted)]' },
});

register('table-table', {
  tw: 'w-full min-w-[700px] table-fixed border-collapse [font-size:14px]',
});

register('table-demo-toolbar', {
  tw: 'flex justify-between items-start gap-4 mb-5 max-[560px]:flex-col max-[560px]:items-stretch',
});

register('table-demo-title', { tw: '[font-size:16px] font-bold text-[var(--c-text)]' });

register('table-demo-copy', { tw: 'mt-0.5 text-[13px] text-[var(--c-text-muted)]' });

register('table-demo-controls', {
  tw: 'flex items-center justify-between gap-3 mb-3 max-[560px]:flex-col',
});

register('table-demo-search', { tw: 'w-[min(340px,100%)] max-[560px]:w-full' });

register('table-demo-filter', { tw: 'w-[180px] max-[560px]:w-full' });

register('table-demo-footer', {
  tw: 'flex items-center justify-between gap-3 pt-[.85rem] text-[12px] text-[var(--c-text-muted)] max-[480px]:flex-col',
});