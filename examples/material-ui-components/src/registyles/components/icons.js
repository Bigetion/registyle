import { register } from 'registyle/collector';

register('icon-gallery', {
  base: { tw: 'grid w-full grid-cols-[repeat(auto-fit,minmax(74px,1fr))] gap-2' },
});

register('icon-gallery button', {
  base: { tw: 'flex cursor-pointer flex-col items-center gap-2 rounded-md border border-[var(--border)] bg-transparent py-3 text-[var(--muted)] hover:bg-[var(--panel-raised)] hover:text-[var(--mui-blue)] [&_span]:text-[10px]' },
});
