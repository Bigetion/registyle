import { register } from 'registyle/collector';

register('toggle', {
  base: {
    tw: 'relative inline-flex w-10 h-[22px] items-center rounded-full cursor-pointer flex-shrink-0 transition-colors border-0 outline-none bg-[var(--c-border)] focus-visible:outline-2 focus-visible:outline-[var(--c-brand)] focus-visible:outline-offset-2',
  },
  modifiers: {
    on: { tw: 'bg-[var(--c-brand)]' },
    sm: { tw: '!w-8 !h-[18px]' },
    lg: { tw: '!w-12 !h-[26px]' },
  },
});

register('toggle-thumb', {
  base: {
    tw: 'absolute left-[3px] top-[3px] size-4 rounded-full bg-white shadow-sm transition-transform',
  },
  modifiers: {
    on: { tw: '[transform:translateX(18px)]' },
    sm: { tw: '!size-3' },
    lg: { tw: '!size-5' },
    'lg-on': { tw: '[transform:translateX(22px)]' },
    'sm-on': { tw: '[transform:translateX(14px)]' },
  },
});