import { register } from 'registyle/collector';

register('rgi-menu-positioner', { base: { tw: 'z-50' } });
register('rgi-menu', {
  base: {
    tw: 'max-h-[min(24rem,80vh)] min-w-48 overflow-auto rounded-md border border-[var(--border,#d5d9e0)] bg-[var(--surface,#fff)] p-1 text-[var(--text,#20242b)] shadow-[0_8px_24px_rgba(0,0,0,.16)]',
  },
});
register('rgi-menu-item', {
  base: {
    tw: 'flex w-full cursor-pointer items-center rounded px-3 py-2 text-left text-sm focus-visible:outline-2 focus-visible:outline-[var(--accent,#315fc4)] hover:bg-[var(--surface-hover,#f0f2f5)]',
  },
});
register('rgi-menu-item-disabled', { base: { tw: 'cursor-not-allowed opacity-45' } });
