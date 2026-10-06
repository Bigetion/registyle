import { register } from 'registyle/collector';

register('rgi-table', {
  base: { tw: 'w-full border-collapse text-left text-sm text-[var(--text,#edf2fb)]' },
  modifiers: {
    standard: { tw: '[&_th]:px-4 [&_th]:py-3 [&_td]:px-4 [&_td]:py-3' },
    dense: { tw: '[&_th]:px-3 [&_th]:py-2 [&_td]:px-3 [&_td]:py-2 text-xs' },
    hoverable: { tw: '[&_tbody_tr:hover]:bg-[var(--rgi-table-hover,var(--panel-raised,#171e2a))]' },
    'sticky-header': { tw: '[&_thead_th]:sticky [&_thead_th]:top-0 [&_thead_th]:z-[1]' },
    striped: {
      tw: '[&_tbody_tr:nth-child(even)]:bg-[var(--rgi-table-stripe,rgba(127,145,170,.06))]',
    },
  },
});

register('rgi-table th', {
  base: {
    tw: 'border-b border-[var(--border,#273142)] bg-[var(--rgi-table-head,var(--surface,#101722))] font-semibold text-[var(--muted,#9aa8bd)]',
  },
});

register('rgi-table td', {
  base: { tw: 'border-b border-[var(--border,#273142)] align-middle' },
});

register('rgi-table caption', {
  base: { tw: 'pb-3 text-left font-medium text-[var(--text,#edf2fb)]' },
});
