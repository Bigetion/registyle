import { register } from 'registyle/collector';

register('mui-tooltip-root', {
  base: {
    tw: 'relative inline-flex w-fit align-middle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--mui-blue,#9bbcff)] [&:hover_.mui-tooltip-content]:visible [&:hover_.mui-tooltip-content]:opacity-100 [&:focus-within_.mui-tooltip-content]:visible [&:focus-within_.mui-tooltip-content]:opacity-100',
  },
  modifiers: {
    top: {
      tw: '[&_.mui-tooltip-content]:bottom-full [&_.mui-tooltip-content]:left-1/2 [&_.mui-tooltip-content]:mb-2 [&_.mui-tooltip-content]:-translate-x-1/2',
    },
    bottom: {
      tw: '[&_.mui-tooltip-content]:top-full [&_.mui-tooltip-content]:left-1/2 [&_.mui-tooltip-content]:mt-2 [&_.mui-tooltip-content]:-translate-x-1/2',
    },
    left: {
      tw: '[&_.mui-tooltip-content]:right-full [&_.mui-tooltip-content]:top-1/2 [&_.mui-tooltip-content]:mr-2 [&_.mui-tooltip-content]:-translate-y-1/2',
    },
    right: {
      tw: '[&_.mui-tooltip-content]:left-full [&_.mui-tooltip-content]:top-1/2 [&_.mui-tooltip-content]:ml-2 [&_.mui-tooltip-content]:-translate-y-1/2',
    },
    open: { tw: '[&_.mui-tooltip-content]:visible [&_.mui-tooltip-content]:opacity-100' },
    closed: { tw: '[&_.mui-tooltip-content]:!invisible [&_.mui-tooltip-content]:!opacity-0' },
  },
});

register('mui-tooltip-content', {
  base: {
    tw: 'invisible absolute z-50 w-max max-w-[min(20rem,calc(100vw-2rem))] rounded bg-[var(--mui-tooltip-bg,#263244)] px-2.5 py-1.5 text-xs font-medium leading-snug text-[var(--mui-tooltip-color,#fff)] opacity-0 shadow-lg transition-opacity',
  },
});
