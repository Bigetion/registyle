import { register } from 'registyle/collector';

register('badge-anchor', {
  base: { tw: 'relative inline-flex p-2 text-[var(--muted)]' },
});

register('badge-count', {
  base: { tw: 'absolute -right-0.5 -top-0.5 flex size-[18px] items-center justify-center rounded-full bg-[var(--red)] text-[10px] font-bold text-white' },
});

register('badge-dot', {
  base: { tw: 'absolute right-1 top-1 size-2.5 rounded-full border-2 border-[var(--panel)] bg-[var(--mui-blue)]' },
});
