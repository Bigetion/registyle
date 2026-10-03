import { register } from 'registyle/collector';

register('mui-switch', {
  base: {
    tw: 'relative inline-flex h-[22px] w-[38px] shrink-0 cursor-pointer appearance-none items-center rounded-full border-0 bg-[#465164] p-0 transition-colors checked:bg-[#547be8] after:absolute after:left-0.5 after:size-[18px] after:rounded-full after:bg-[#d2d9e5] after:shadow-[0_1px_4px_rgba(0,0,0,.32)] after:transition-transform checked:after:translate-x-4 checked:after:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#86a6ff] disabled:cursor-not-allowed disabled:opacity-40',
  },
});

register('mui-switch-success', {
  base: { tw: 'checked:!bg-[#2d9b72]' },
});

register('mui-switch-warning', {
  base: { tw: 'checked:!bg-[#d08b42]' },
});
