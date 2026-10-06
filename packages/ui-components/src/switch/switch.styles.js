import { register } from 'registyle/collector';

register('rgi-switch-field', {
  base: {
    tw: 'inline-flex cursor-pointer items-center gap-2.5 text-sm text-[var(--text,#edf2fb)] has-[:disabled]:cursor-not-allowed',
  },
});

register('rgi-switch', {
  base: {
    tw: 'relative inline-flex h-[22px] w-[38px] shrink-0 cursor-pointer appearance-none items-center rounded-full border-0 bg-[var(--switch-track,#465164)] p-0 transition-colors checked:bg-[var(--rgi-blue-dark,#547be8)] after:absolute after:left-0.5 after:size-[18px] after:rounded-full after:bg-[var(--switch-thumb,#e1e7f0)] after:shadow-[0_1px_4px_rgba(0,0,0,.28)] after:transition-transform checked:after:translate-x-4 checked:after:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--rgi-blue,#86a6ff)] disabled:cursor-not-allowed disabled:opacity-45',
  },
});

register('rgi-switch-label', {
  base: { tw: 'min-w-0' },
});
