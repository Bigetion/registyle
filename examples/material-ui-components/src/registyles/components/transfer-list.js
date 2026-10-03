import { register } from 'registyle/collector';

register('transfer-demo', {
  base: { tw: 'relative flex flex-wrap items-center gap-3' },
});

register('transfer-list', {
  base: { tw: 'flex min-h-[150px] w-[min(210px,38vw)] flex-col gap-2 rounded-md border border-[var(--border)] p-3 [&_strong]:mb-1 [&_strong]:text-xs [&_strong]:font-medium [&_label]:flex [&_label]:cursor-pointer [&_label]:items-center [&_label]:gap-2 [&_label]:text-xs [&_label]:text-[var(--muted)] [&_input]:accent-[var(--mui-blue)]' },
});

register('transfer-actions', {
  base: { tw: 'flex flex-col gap-2 [&_button]:min-w-9 [&_button]:px-2' },
});
