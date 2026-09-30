import { register } from 'registyle/collector';

register('toggle', {
  base: {
    tw: 'relative inline-flex items-center rounded-full cursor-pointer shrink-0 transition-colors border-0 outline-none w-10 h-[22px] bg-[var(--c-border)] focus-visible:(outline-2 outline-[var(--c-brand)] outline-offset-2)',
  },
  modifiers: {
    on: { tw: 'bg-[var(--c-brand)]' },
    sm: { tw: 'w-8 h-[18px]' },
    lg: { tw: 'w-12 h-[26px]' },
  },
});

register('toggle-thumb', {
  base: {
    tw: 'absolute rounded-full bg-white shadow-sm transition-transform size-4 top-[3px] left-[3px]',
  },
  modifiers: {
    on: { tw: 'translate-x-[18px]' },
    sm: { tw: 'size-3' },
    lg: { tw: 'size-5' },
    'lg-on': { tw: 'translate-x-[22px]' },
    'sm-on': { tw: 'translate-x-[14px]' },
  },
});