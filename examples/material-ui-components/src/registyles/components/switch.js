import { register } from 'registyle/collector';

register('switch-option', {
  base: { tw: 'mt-2' },
});

register('mui-switch', {
  base: {
    tw: 'relative inline-flex h-[22px] w-[38px] cursor-pointer appearance-none items-center rounded-full bg-[#72777f] transition-colors after:absolute after:left-0.5 after:size-[18px] after:rounded-full after:bg-[#e0e0e0] after:shadow after:transition-transform checked:bg-[#1976d2] checked:after:translate-x-4 checked:after:bg-[#90caf9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--mui-blue)]',
  },
});
