import { register } from 'registyle/collector';

register('tabs', {
  base: { tw: 'flex border-b border-[var(--border)]' },
  modifiers: {
    'block': { tw: 'ml-8 min-w-[240px] max-sm:ml-0 max-sm:w-full' },
  },
});

register('tab', {
  base: { tw: 'border-b-2 border-transparent px-4 py-2 text-xs text-[var(--muted)] hover:text-white' },
  modifiers: {
    'active': { tw: 'border-b-2 border-[var(--mui-blue)] px-4 py-2 text-xs font-medium text-[var(--mui-blue)]' },
    'content': { tw: 'flex items-center gap-2 py-4 text-xs text-[var(--muted)]' },
    'demo': { tw: 'flex w-full border-b border-[var(--border)] [&_button]:flex [&_button]:cursor-pointer [&_button]:items-center [&_button]:gap-2 [&_button]:border-0 [&_button]:border-b-2 [&_button]:border-transparent [&_button]:bg-transparent [&_button]:px-5 [&_button]:py-3 [&_button]:text-xs [&_button]:text-[var(--muted)]' },
    'demo .tab-active': { tw: 'border-[var(--mui-blue)] text-[var(--mui-blue)]' },
  },
});
