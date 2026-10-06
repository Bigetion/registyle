import { register } from 'registyle/collector';

register('rgi-skeleton', {
  base: { tw: 'block max-w-full bg-[var(--rgi-skeleton,#303b4c)]' },
  modifiers: {
    text: { tw: 'h-[1em] origin-left scale-y-75 rounded-sm' },
    rectangular: { tw: 'rounded-md' },
    circular: { tw: 'aspect-square rounded-full' },
    pulse: { tw: 'animate-pulse' },
    wave: {
      tw: 'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[rgi-skeleton-wave_1.6s_ease-in-out_infinite] before:bg-[linear-gradient(90deg,transparent,var(--rgi-skeleton-highlight,rgba(255,255,255,.12)),transparent)]',
    },
  },
});
register('@keyframes rgi-skeleton-wave', { '100%': { transform: 'translateX(100%)' } });
