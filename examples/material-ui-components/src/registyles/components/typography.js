import { register } from 'registyle/collector';

register('typography-demo', {
  base: { tw: 'flex flex-col gap-3' },
});

register('typography-demo h3', {
  base: { tw: 'text-xl font-medium [&_small]:ml-3 [&_small]:text-[10px] [&_small]:font-normal [&_small]:text-[var(--subtle)]' },
});

register('typography-demo p', {
  base: { tw: 'text-sm text-[var(--muted)]' },
});
