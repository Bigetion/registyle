import { register } from 'registyle/collector';

register('mui-breadcrumbs', { base: { tw: 'text-sm text-[var(--muted,#626a75)]' } });
register('mui-breadcrumbs-list', {
  base: { tw: 'm-0 flex list-none flex-wrap items-center gap-2 p-0' },
});
register('mui-breadcrumbs-item', { base: { tw: 'inline-flex min-w-0 items-center gap-2' } });
register('mui-breadcrumbs-separator', { base: { tw: 'select-none text-[var(--muted,#626a75)]' } });
register('mui-breadcrumbs-ellipsis', { base: { tw: 'select-none' } });
register('mui-breadcrumbs a', {
  base: {
    tw: 'truncate text-[var(--accent,#315fc4)] underline-offset-2 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-[var(--accent,#315fc4)]',
  },
});
register('mui-breadcrumbs [aria-current="page"]', {
  base: { tw: 'font-medium text-[var(--text,#20242b)] no-underline' },
});
