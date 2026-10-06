import { register } from 'registyle/collector';

register('rgi-breadcrumbs', { base: { tw: 'text-sm text-[var(--muted,#626a75)]' } });
register('rgi-breadcrumbs-list', {
  base: { tw: 'm-0 flex list-none flex-wrap items-center gap-2 p-0' },
});
register('rgi-breadcrumbs-item', { base: { tw: 'inline-flex min-w-0 items-center gap-2' } });
register('rgi-breadcrumbs-separator', { base: { tw: 'select-none text-[var(--muted,#626a75)]' } });
register('rgi-breadcrumbs-ellipsis', { base: { tw: 'select-none' } });
register('rgi-breadcrumbs a', {
  base: {
    tw: 'truncate text-[var(--accent,#315fc4)] underline-offset-2 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-[var(--accent,#315fc4)]',
  },
});
register('rgi-breadcrumbs [aria-current="page"]', {
  base: { tw: 'font-medium text-[var(--text,#20242b)] no-underline' },
});
