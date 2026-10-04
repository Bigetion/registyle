import { register } from 'registyle/collector';

register('rgi-pagination', { base: { tw: 'flex justify-center text-[var(--text,#20242b)]' } });
register('rgi-pagination-list', { base: { tw: 'm-0 flex list-none items-center gap-1 p-0' } });
register('rgi-pagination-button', {
  base: {
    tw: 'flex size-9 cursor-pointer items-center justify-center rounded border border-[var(--border,#d5d9e0)] bg-[var(--surface,#fff)] text-sm text-[var(--text,#20242b)] hover:bg-[var(--surface-hover,#f0f2f5)] focus-visible:outline-2 focus-visible:outline-[var(--accent,#315fc4)] disabled:cursor-not-allowed disabled:opacity-45',
  },
});
register('rgi-pagination-current', {
  base: { tw: 'border-[var(--accent,#315fc4)] bg-[var(--accent,#315fc4)] text-white' },
});
register('rgi-pagination-ellipsis', {
  base: { tw: 'flex size-9 items-center justify-center text-[var(--muted,#626a75)]' },
});
