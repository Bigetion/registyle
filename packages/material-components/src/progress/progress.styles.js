import { register } from 'registyle/collector';

register('rgi-progress', { base: { tw: 'text-[var(--mui-blue,#8eacff)]' } });
register('rgi-progress-linear', { base: { tw: 'block w-full' } });
register('rgi-progress-linear .rgi-progress-track', {
  base: {
    tw: 'relative block h-1.5 w-full overflow-hidden rounded-full bg-[var(--mui-progress-track,#293447)]',
  },
});
register('rgi-progress-linear .rgi-progress-indicator', {
  base: { tw: 'block h-full rounded-full bg-current transition-[width] duration-200' },
});
register('rgi-progress-linear .rgi-progress-indeterminate', {
  base: {
    tw: '!absolute left-0 w-2/5 animate-[rgi-progress-linear-indeterminate_1.6s_ease-in-out_infinite]',
  },
});
register('rgi-progress-circular', { base: { tw: 'inline-flex' } });
register('rgi-progress-circle', { base: { tw: '-rotate-90' } });
register('rgi-progress-track', {
  base: { tw: 'fill-none stroke-[var(--mui-progress-track,#293447)] [stroke-width:3]' },
});
register('rgi-progress-indicator', {
  base: {
    tw: 'fill-none stroke-current [stroke-linecap:round] [stroke-width:3] transition-[stroke-dasharray] duration-200',
  },
});
register('rgi-progress-indeterminate', {
  base: { tw: 'animate-[rgi-progress-indeterminate_1.4s_ease-in-out_infinite]' },
});
register('@keyframes rgi-progress-indeterminate', {
  '0%': { 'stroke-dasharray': '8 99', 'stroke-dashoffset': '0' },
  '50%': { 'stroke-dasharray': '65 99', 'stroke-dashoffset': '-24' },
  '100%': { 'stroke-dasharray': '8 99', 'stroke-dashoffset': '-107' },
});
register('@keyframes rgi-progress-linear-indeterminate', {
  '0%': { transform: 'translateX(-110%) scaleX(.5)' },
  '50%': { transform: 'translateX(80%) scaleX(.9)' },
  '100%': { transform: 'translateX(260%) scaleX(.5)' },
});
