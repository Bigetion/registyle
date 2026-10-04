import { register } from 'registyle/collector';

register('mui-progress', { base: { tw: 'text-[var(--mui-blue,#8eacff)]' } });
register('mui-progress-linear', { base: { tw: 'block w-full' } });
register('mui-progress-linear .mui-progress-track', {
  base: {
    tw: 'relative block h-1.5 w-full overflow-hidden rounded-full bg-[var(--mui-progress-track,#293447)]',
  },
});
register('mui-progress-linear .mui-progress-indicator', {
  base: { tw: 'block h-full rounded-full bg-current transition-[width] duration-200' },
});
register('mui-progress-linear .mui-progress-indeterminate', {
  base: {
    tw: '!absolute left-0 w-2/5 animate-[mui-progress-linear-indeterminate_1.6s_ease-in-out_infinite]',
  },
});
register('mui-progress-circular', { base: { tw: 'inline-flex' } });
register('mui-progress-circle', { base: { tw: '-rotate-90' } });
register('mui-progress-track', {
  base: { tw: 'fill-none stroke-[var(--mui-progress-track,#293447)] [stroke-width:3]' },
});
register('mui-progress-indicator', {
  base: {
    tw: 'fill-none stroke-current [stroke-linecap:round] [stroke-width:3] transition-[stroke-dasharray] duration-200',
  },
});
register('mui-progress-indeterminate', {
  base: { tw: 'animate-[mui-progress-indeterminate_1.4s_ease-in-out_infinite]' },
});
register('@keyframes mui-progress-indeterminate', {
  '0%': { 'stroke-dasharray': '8 99', 'stroke-dashoffset': '0' },
  '50%': { 'stroke-dasharray': '65 99', 'stroke-dashoffset': '-24' },
  '100%': { 'stroke-dasharray': '8 99', 'stroke-dashoffset': '-107' },
});
register('@keyframes mui-progress-linear-indeterminate', {
  '0%': { transform: 'translateX(-110%) scaleX(.5)' },
  '50%': { transform: 'translateX(80%) scaleX(.9)' },
  '100%': { transform: 'translateX(260%) scaleX(.5)' },
});
