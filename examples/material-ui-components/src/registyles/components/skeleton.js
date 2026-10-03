import { register } from 'registyle/collector';

register('skeleton-card', {
  base: { tw: 'flex w-full max-w-[370px] items-start gap-3' },
});

register('skeleton-block', {
  base: { tw: 'block animate-pulse rounded bg-[#ffffff14]' },
});

register('skeleton-avatar', {
  base: { tw: 'size-10 shrink-0 rounded-full' },
});

register('skeleton-title', {
  base: { tw: 'mb-3 h-3 w-40' },
});

register('skeleton-copy', {
  base: { tw: 'mb-2 h-2.5 w-[260px] max-w-[65vw]' },
});

register('short', {
  base: { tw: 'w-[190px]' },
});
