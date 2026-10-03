import { register } from 'registyle/collector';

register('rating', {
  base: { tw: 'flex items-center gap-0.5' },
  modifiers: {
    'label': { tw: 'ml-3' },
    'demo': { tw: 'flex items-center gap-3' },
  },
});

register('mui-rating-star', {
  base: { tw: 'text-xl leading-none text-[var(--orange)]' },
  modifiers: {
    'muted': { tw: 'text-xl leading-none text-[#51565e]' },
  },
});

register('rating button', {
  base: { tw: 'inline-flex p-0.5' },
});
