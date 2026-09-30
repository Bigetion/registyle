import { register } from 'registyle/collector';

register('spinner', {
  base: {
    tw: 'inline-block rounded-full border-2 border-[color-mix(in_srgb,currentColor_24%,transparent)] border-t-current border-r-current animate-[spin_.7s_linear_infinite]',
  },
  modifiers: {
    xs: { tw: 'size-3.5' },
    sm: { tw: 'size-[18px]' },
    md: { tw: 'size-6' },
    lg: { tw: 'size-8' },
    xl: { tw: 'size-12' },
    primary: { tw: 'text-[var(--c-brand)]' },
    white: { tw: 'text-white' },
    gray: { tw: 'text-[var(--c-text-muted)]' },
  },
});