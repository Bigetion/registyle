import { register } from 'registyle/collector';

register.group('rating-control', {
  root: {
    tw: 'inline-flex items-center gap-1',
  },
  precision: {
    tw: 'cursor-pointer touch-none gap-0.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#86a6ff]',
  },
});

register('rating-star', {
  base: {
    tw: 'inline-flex cursor-pointer items-center justify-center border-0 bg-transparent p-0.5 text-[#f4bd7a] transition-[color,transform] hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#86a6ff] disabled:cursor-default disabled:hover:scale-100',
  },
});

register('rating-star-filled', {
  base: { tw: 'text-[#f4bd7a]' },
});

register('rating-star-muted', {
  base: { tw: 'text-[#515d70]' },
});

register('rating-precision-star', {
  base: { tw: 'relative inline-flex' },
});

register('rating-precision-fill', {
  base: { tw: 'absolute inset-y-0 left-0 overflow-hidden' },
});
