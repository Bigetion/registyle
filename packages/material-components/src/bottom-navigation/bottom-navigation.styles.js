import { register } from 'registyle/collector';

register('mui-bottom-navigation', {
  base: {
    tw: 'fixed inset-x-0 bottom-0 z-40 flex min-h-14 items-stretch justify-around border-t border-[var(--border,#d5d9e0)] bg-[var(--surface,#fff)] px-2 pb-[env(safe-area-inset-bottom)] text-[var(--text,#20242b)] shadow-[0_-2px_8px_rgba(0,0,0,.08)]',
  },
});
register('mui-bottom-navigation-item', {
  base: {
    tw: 'flex min-w-0 flex-1 cursor-pointer flex-col items-center justify-center gap-1 border-0 bg-transparent px-2 py-2 text-xs text-[var(--muted,#626a75)] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--accent,#315fc4)]',
  },
  modifiers: { selected: { tw: 'font-semibold text-[var(--accent,#315fc4)]' } },
});
register('mui-bottom-navigation-icon', {
  base: { tw: 'flex h-6 items-center justify-center text-lg leading-none' },
});
register('mui-bottom-navigation-label', { base: { tw: 'truncate' } });
