import { register } from 'registyle/collector';

register('rgi-badge-root', {
  base: { tw: 'relative inline-flex align-middle' },
});

register('rgi-badge', {
  base: {
    tw: 'absolute z-[1] inline-flex min-w-[18px] h-[18px] items-center justify-center rounded-full border-2 border-[var(--rgi-badge-outline,var(--surface,#101722))] px-1 text-[10px] leading-none font-semibold text-white',
  },
  modifiers: {
    primary: { tw: 'bg-[var(--rgi-blue-dark,#547be8)]' },
    success: { tw: 'bg-[#276b53]' },
    warning: { tw: 'bg-[#a75c1b]' },
    danger: { tw: 'bg-[#a94650]' },
    default: { tw: 'bg-[var(--muted,#53627a)]' },
    standard: { tw: 'top-0 right-0 translate-x-1/2 -translate-y-1/2' },
    dot: { tw: 'size-2 min-w-0 border-0 p-0 top-0 right-0 translate-x-1/2 -translate-y-1/2' },
    'overlap-circular': { tw: 'right-[12%]' },
    'overlap-rectangular': { tw: 'right-0' },
  },
});
