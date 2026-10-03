import { register } from 'registyle/collector';

register('button-group', {
  base: { tw: 'inline-flex overflow-hidden rounded border border-[var(--border)] [&_button]:inline-flex [&_button]:cursor-pointer [&_button]:items-center [&_button]:gap-2 [&_button]:border-0 [&_button]:border-r [&_button]:border-[var(--border)] [&_button]:bg-transparent [&_button]:px-3 [&_button]:py-2 [&_button]:text-xs [&_button]:text-[var(--muted)] [&_button:last-child]:border-0' },
  modifiers: {
    'selected': { tw: 'bg-[var(--mui-blue-soft)] text-[var(--mui-blue)]' },
  },
});
