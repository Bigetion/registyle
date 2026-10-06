import { register } from 'registyle/collector';

register('badge-anchor', {
  base: { tw: 'relative inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#141c28] text-[#aebbd0]' },
});

register('badge-anchor-rectangular', {
  base: { tw: 'rounded-lg' },
});

register('badge-count', {
  base: { tw: 'absolute -right-1 -top-1 z-[1] inline-flex h-[18px] min-w-[18px] items-center justify-center rounded-full border-2 border-[#10151e] bg-[#e56b78] px-1 text-[9px] font-bold leading-none tabular-nums text-white' },
});

register('badge-dot', {
  base: { tw: 'absolute right-0.5 top-0.5 size-3 rounded-full border-2 border-[#10151e] bg-[#61c59b] shadow-[0_0_8px_rgba(97,197,155,.25)]' },
});

register('badge-count-max', {
  base: { tw: 'min-w-[26px] rounded-full px-1.5' },
});

register('badge-count-zero', {
  base: { tw: 'border-[#10151e] bg-[#394557] text-[#c2ccdb]' },
});

register('badge-count-secondary', {
  base: { tw: 'bg-[#547be8]' },
});

register('badge-examples', {
  base: { tw: 'flex flex-wrap items-center gap-5' },
});

register('badge-actions', {
  base: { tw: 'flex flex-wrap items-center gap-2' },
});

register('badge-avatar', {
  base: { tw: 'inline-flex size-8 items-center justify-center rounded-full bg-[#31517a] text-[10px] font-semibold text-[#e3edff]' },
});

register('badge-task-anchor', {
  base: { tw: 'inline-flex h-7 items-center rounded-md bg-[#1b2638] px-2 text-[9px] font-medium text-[#bdc8db]' },
});
