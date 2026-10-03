import { register } from 'registyle/collector';

register('pagination-demo', {
  base: { tw: 'flex items-center gap-1 [&_button]:inline-flex [&_button]:size-8 [&_button]:cursor-pointer [&_button]:items-center [&_button]:justify-center [&_button]:rounded [&_button]:border [&_button]:border-transparent [&_button]:bg-transparent [&_button]:text-xs [&_button]:text-[var(--muted)]' },
});

register('pagination-active', {
  base: { tw: 'border-[var(--mui-blue)] bg-[var(--mui-blue-soft)] text-[var(--mui-blue)]' },
});
