import { register } from 'registyle/collector';

register('mui-slider', {
  base: {
    tw: 'h-2 w-full cursor-pointer appearance-none rounded-full bg-[var(--slider-track,#29364c)] accent-[var(--mui-blue,#91adf4)] outline-none transition-[filter] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--mui-blue,#86a6ff)] disabled:cursor-not-allowed disabled:opacity-40 [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[var(--slider-thumb-border,#d8e3ff)] [&::-webkit-slider-thumb]:bg-[var(--mui-blue,#7898e8)] [&::-webkit-slider-thumb]:shadow-[0_1px_7px_rgba(0,0,0,.3)] [&::-moz-range-thumb]:size-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[var(--slider-thumb-border,#d8e3ff)] [&::-moz-range-thumb]:bg-[var(--mui-blue,#7898e8)] [&::-moz-range-thumb]:shadow-[0_1px_7px_rgba(0,0,0,.3)]',
  },
});
