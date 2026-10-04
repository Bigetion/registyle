import { register } from 'registyle/collector';

register('mui-transfer-list', {
  base: {
    tw: 'grid w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 max-sm:gap-2',
  },
});

register('mui-transfer-panel', {
  base: {
    tw: 'flex h-56 min-w-0 flex-col overflow-hidden rounded-lg border border-[var(--border,#2c394e)] bg-[var(--panel,#0e141e)] p-2.5',
  },
});

register('mui-transfer-heading', {
  base: {
    tw: 'mb-2 flex shrink-0 items-center justify-between gap-2 border-b border-[var(--border,#252f40)] pb-2 text-[11px] font-semibold text-[var(--text,#c5cede)]',
  },
});

register('mui-transfer-count', {
  base: {
    tw: 'inline-flex min-w-5 items-center justify-center rounded-full bg-[var(--panel-raised,#1d293c)] px-1.5 py-0.5 text-[10px] font-medium tabular-nums',
  },
});

register('mui-transfer-items', {
  base: {
    tw: 'm-0 flex min-h-0 min-w-0 flex-1 flex-col gap-1 overflow-y-auto border-0 p-0 [scrollbar-width:thin]',
  },
});

register('mui-transfer-item', {
  base: {
    tw: 'flex min-w-0 cursor-pointer items-center gap-2 rounded-md border border-transparent px-2 py-2 text-xs text-[var(--text-muted,#aab6ca)] transition-colors hover:bg-[var(--hover,rgba(255,255,255,.04))] has-[:checked]:border-[var(--mui-blue-soft,rgba(134,166,255,.3))] has-[:checked]:bg-[var(--panel-raised,#19253a)] has-[:checked]:text-[var(--text,#edf2fb)]',
  },
});

register('mui-transfer-checkbox', {
  base: { tw: 'size-4 shrink-0 accent-[var(--mui-blue,#91aef5)]' },
});

register('mui-transfer-item-copy', {
  base: { tw: 'flex min-w-0 flex-col gap-0.5' },
});

register('mui-transfer-item-label', {
  base: { tw: 'truncate text-[11px] font-medium' },
});

register('mui-transfer-item-description', {
  base: { tw: 'truncate text-[10px] text-[var(--text-subtle,#8290a5)]' },
});

register('mui-transfer-list-empty', {
  base: { tw: 'm-auto py-4 text-center text-[11px] text-[var(--text-subtle,#8290a5)]' },
});

register('mui-transfer-actions', {
  base: { tw: 'm-0 flex flex-col gap-1.5 border-0 p-0' },
});

register('mui-transfer-action', {
  base: {
    tw: 'inline-flex size-8 cursor-pointer items-center justify-center rounded-md border border-[var(--border,#34425a)] bg-[var(--panel-raised,#151e2c)] p-0 text-[var(--mui-blue,#9eb5e8)] transition-colors hover:border-[var(--mui-blue,#5875ad)] hover:bg-[var(--panel-hover,#20304a)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--mui-blue,#86a6ff)] disabled:cursor-not-allowed disabled:opacity-35',
  },
});

register('mui-transfer-status', {
  base: { tw: 'sr-only' },
});
