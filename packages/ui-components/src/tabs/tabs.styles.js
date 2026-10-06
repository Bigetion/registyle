import { register } from 'registyle/collector';

register('rgi-tabs', {
  base: { tw: 'flex min-w-0 flex-col text-[var(--text,#20242b)]' },
  modifiers: { vertical: { tw: 'flex-row' } },
});
register('rgi-tabs-list', {
  base: { tw: 'flex min-w-0 overflow-x-auto border-b border-[var(--border,#d5d9e0)]' },
});
register('rgi-tabs-vertical .rgi-tabs-list', {
  base: { tw: 'flex-col overflow-y-auto overflow-x-hidden border-b-0 border-r' },
});
register('rgi-tab', {
  base: {
    tw: 'relative inline-flex min-h-12 shrink-0 cursor-pointer items-center justify-center gap-2 border-0 border-b-2 border-transparent bg-transparent px-4 text-sm font-medium text-[var(--muted,#626a75)] hover:bg-[var(--surface-hover,#f0f2f5)] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--accent,#315fc4)] disabled:cursor-not-allowed disabled:opacity-45',
  },
});
register('rgi-tab-selected', {
  base: { tw: 'border-b-[var(--accent,#315fc4)] text-[var(--accent,#315fc4)]' },
});
register('rgi-tabs-vertical .rgi-tab', { base: { tw: 'justify-start border-b-0 border-r-2' } });
register('rgi-tabs-vertical .rgi-tab-selected', {
  base: { tw: 'border-r-[var(--accent,#315fc4)]' },
});
register('rgi-tab-icon', { base: { tw: 'inline-flex' } });
register('rgi-tab-panel', {
  base: { tw: 'min-w-0 p-4 focus-visible:outline-2 focus-visible:outline-[var(--accent,#315fc4)]' },
});
register('rgi-tabs [hidden]', { base: { tw: 'hidden' } });
