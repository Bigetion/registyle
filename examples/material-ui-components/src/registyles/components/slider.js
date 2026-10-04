import { register } from 'registyle/collector';

register('slider-block', {
  base: { tw: 'w-[min(280px,100%)]' },
});

register('slider-heading', {
  base: { tw: 'mb-2 flex items-center justify-between' },
});

register('slider-value', {
  base: { tw: 'text-xs font-medium tabular-nums text-[#b8c9f1]' },
});

register('slider-example', {
  base: { tw: 'w-full max-w-[430px]' },
});

register('range-inputs', {
  base: { tw: 'flex flex-col gap-2 [&_input]:flex-1' },
});

register('slider-marks', {
  base: { tw: 'mt-2 flex justify-between text-[10px] text-[var(--subtle)]' },
});

register('slider-mark-active', {
  base: { tw: 'font-semibold text-[#b8c9f1]' },
});

register('slider-range-labels', {
  base: { tw: 'mt-1 flex justify-between text-[9px] text-[var(--subtle)]' },
});
