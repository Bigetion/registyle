import { register } from 'registyle/collector';

register('rgi-rating', {
  base: { tw: 'inline-flex items-center gap-0.5 text-[var(--rating-color,#e3a927)]' },
  modifiers: {
    readonly: { tw: 'cursor-default' },
    disabled: { tw: 'opacity-50' },
  },
});

register.group('rgi-rating-choice', {
  root: {
    tw: 'inline-flex cursor-pointer items-center justify-center border-0 bg-transparent p-0.5 text-2xl leading-none text-[var(--rating-color,#e3a927)] focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--rgi-blue,#547be8)] disabled:cursor-not-allowed',
  },
  star: { tw: 'text-[var(--muted,#94a3b8)]' },
  'star-selected': { tw: 'text-[var(--rating-color,#e3a927)]' },
});

register('rgi-rating-form-value', {
  base: { tw: 'sr-only' },
});
