import { register } from 'registyle/collector';

register('chip-examples', {
  base: { tw: 'flex flex-wrap items-center gap-2.5' },
});

register('chip-actions', {
  base: { tw: 'flex flex-wrap items-center justify-between gap-2' },
});

register('mui-chip-icon', {
  base: { tw: 'shrink-0' },
});

register('mui-chip-delete', {
  base: { tw: 'ml-0.5 inline-flex size-4 shrink-0 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent p-0 text-current opacity-70 hover:bg-white/10 hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-current' },
});
