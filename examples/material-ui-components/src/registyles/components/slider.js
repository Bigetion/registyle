import { register } from 'registyle/collector';

register('slider-block', {
  base: { tw: 'w-[min(280px,100%)]' },
});

register('slider-heading', {
  base: { tw: 'mb-2 flex items-center justify-between' },
});

register('slider-value', {
  base: { tw: 'text-xs text-[var(--muted)]' },
});

register('mui-slider', {
  base: { tw: 'h-1 w-full cursor-pointer accent-[var(--mui-blue)]' },
});

register('slider-example', {
  base: { tw: 'w-full max-w-[430px]' },
});

register('range-inputs', {
  base: { tw: 'flex gap-2 [&_input]:flex-1' },
});

register('slider-marks', {
  base: { tw: 'mt-2 flex justify-between text-[10px] text-[var(--subtle)]' },
});
