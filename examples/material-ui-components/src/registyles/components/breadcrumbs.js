import { register } from 'registyle/collector';

register('breadcrumbs-demo', {
  base: { tw: 'flex items-center gap-2 text-xs text-[var(--subtle)] [&_a]:text-[var(--mui-blue)] [&_span:last-child]:text-[var(--text)]' },
});
