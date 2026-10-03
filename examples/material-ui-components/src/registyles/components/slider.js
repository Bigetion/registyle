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

register('mui-slider', {
  base: { tw: 'h-2 w-full cursor-pointer appearance-none rounded-full bg-[#29364c] accent-[#91adf4] outline-none transition-[filter] hover:brightness-125 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#86a6ff] disabled:cursor-not-allowed disabled:opacity-40 [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#d8e3ff] [&::-webkit-slider-thumb]:bg-[#7898e8] [&::-webkit-slider-thumb]:shadow-[0_1px_7px_rgba(0,0,0,.4)] [&::-moz-range-thumb]:size-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#d8e3ff] [&::-moz-range-thumb]:bg-[#7898e8] [&::-moz-range-thumb]:shadow-[0_1px_7px_rgba(0,0,0,.4)]' },
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
