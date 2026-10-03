import { register } from 'registyle/collector';

register('selection-list', {
  base: { tw: 'flex flex-wrap items-center gap-x-6 gap-y-3' },
});

register('selection-option', {
  base: { tw: 'flex cursor-pointer items-center gap-2.5 text-xs text-[var(--text)]' },
});

register('is-disabled', {
  base: { tw: 'cursor-not-allowed opacity-40' },
});

register('mui-checkbox', {
  base: {
    tw: 'size-[18px] cursor-pointer accent-[#1976d2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--mui-blue)]',
  },
});
