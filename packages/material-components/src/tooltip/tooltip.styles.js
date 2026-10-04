import { register } from 'registyle/collector';

register('rgi-tooltip-root', {
  base: {
    tw: 'relative inline-flex w-fit align-middle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--mui-blue,#9bbcff)] [&:hover_.rgi-tooltip-content]:visible [&:hover_.rgi-tooltip-content]:opacity-100 [&:focus-within_.rgi-tooltip-content]:visible [&:focus-within_.rgi-tooltip-content]:opacity-100',
  },
  modifiers: {
    top: {
      tw: '[&_.rgi-tooltip-content]:bottom-full [&_.rgi-tooltip-content]:left-1/2 [&_.rgi-tooltip-content]:mb-2 [&_.rgi-tooltip-content]:-translate-x-1/2',
    },
    bottom: {
      tw: '[&_.rgi-tooltip-content]:top-full [&_.rgi-tooltip-content]:left-1/2 [&_.rgi-tooltip-content]:mt-2 [&_.rgi-tooltip-content]:-translate-x-1/2',
    },
    left: {
      tw: '[&_.rgi-tooltip-content]:right-full [&_.rgi-tooltip-content]:top-1/2 [&_.rgi-tooltip-content]:mr-2 [&_.rgi-tooltip-content]:-translate-y-1/2',
    },
    right: {
      tw: '[&_.rgi-tooltip-content]:left-full [&_.rgi-tooltip-content]:top-1/2 [&_.rgi-tooltip-content]:ml-2 [&_.rgi-tooltip-content]:-translate-y-1/2',
    },
    open: { tw: '[&_.rgi-tooltip-content]:visible [&_.rgi-tooltip-content]:opacity-100' },
    closed: { tw: '[&_.rgi-tooltip-content]:!invisible [&_.rgi-tooltip-content]:!opacity-0' },
  },
});

register('rgi-tooltip-content', {
  base: {
    tw: 'invisible absolute z-50 w-max max-w-[min(20rem,calc(100vw-2rem))] rounded bg-[var(--mui-tooltip-bg,#263244)] px-2.5 py-1.5 text-xs font-medium leading-snug text-[var(--mui-tooltip-color,#fff)] opacity-0 shadow-lg transition-opacity',
  },
});
