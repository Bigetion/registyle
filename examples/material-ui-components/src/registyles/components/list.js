import { register } from 'registyle/collector';

register('demo-list', {
  base: { tw: 'w-full max-w-[470px] divide-y divide-[var(--border)]' },
});

register('demo-list button', {
  base: { tw: 'flex w-full cursor-pointer items-center gap-3 border-0 bg-transparent py-3 text-left text-[var(--muted)] hover:bg-[#ffffff08]' },
});

register('demo-list button span', {
  base: { tw: 'flex flex-1 flex-col gap-1 [&_strong]:text-xs [&_strong]:font-medium [&_strong]:text-[var(--text)] [&_small]:text-[10px] [&_small]:text-[var(--subtle)]' },
});
