import { register } from 'registyle/collector';

register('mui-link', {
  base: {
    tw: 'cursor-pointer text-[var(--accent,#315fc4)] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent,#315fc4)]',
  },
  modifiers: {
    'underline-always': { tw: 'underline' },
    'underline-hover': { tw: 'no-underline hover:underline' },
    'underline-none': { tw: 'no-underline' },
    'color-inherit': { tw: 'text-inherit' },
    'color-secondary': { tw: 'text-[var(--muted,#626a75)]' },
  },
});
