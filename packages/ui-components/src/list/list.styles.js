import { register } from 'registyle/collector';

register('rgi-list', {
  base: { tw: 'm-0 flex list-none flex-col p-2 text-[var(--text,#edf2fb)]' },
  modifiers: {
    dense: { tw: 'py-1' },
    'no-padding': { tw: 'p-0' },
  },
});

register('rgi-list-item', {
  base: { tw: 'flex min-h-12 items-center gap-3 px-4 py-2 text-sm' },
  modifiers: {
    divider: { tw: 'border-b border-[var(--border,#273142)] last:border-b-0' },
    'no-gutters': { tw: 'px-0' },
  },
});

register('rgi-list-item-text', {
  base: { tw: 'flex min-w-0 flex-col gap-1' },
});

register('rgi-list-primary', {
  base: { tw: 'font-medium' },
});

register('rgi-list-secondary', {
  base: { tw: 'text-xs text-[var(--muted,#9aa8bd)]' },
});
