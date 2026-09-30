import { register } from 'registyle/collector';

register.group('progress', {
  root: { tw: 'w-full h-[7px] overflow-hidden rounded-full bg-[#e3e9e1]' },
  bar: { tw: 'h-full rounded-[inherit] transition-[width] duration-[400ms] bg-[var(--c-brand)]' },
  'bar-success': { tw: 'bg-[var(--c-success)]' },
  'bar-warning': { tw: 'bg-[var(--c-warning)]' },
  'bar-danger': { tw: 'bg-[var(--c-danger)]' },
  'bar-striped': {
    tw: 'bg-[linear-gradient(45deg,rgba(255,255,255,.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.15)_50%,rgba(255,255,255,.15)_75%,transparent_75%,transparent)] bg-[length:16px_16px] animate-[shimmer_1s_linear_infinite]',
  },
  label: { tw: 'flex items-center justify-between text-xs mb-1.5 text-[var(--c-text-muted)]' },
  value: { tw: 'font-semibold text-xs text-[var(--c-text)]' },
});