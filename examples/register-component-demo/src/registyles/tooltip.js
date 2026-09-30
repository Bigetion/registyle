import { register } from 'registyle/collector';

register.group('tooltip', {
  root: { tw: 'relative inline-flex items-center' },
  content: {
    tw: 'absolute z-50 whitespace-nowrap pointer-events-none text-xs font-medium leading-[1.4] px-2.5 py-1.5 rounded-[var(--radius-sm)] bg-[var(--c-sidebar)] text-[#f5f7f4] [box-shadow:var(--shadow-md)] animate-[tooltipIn_120ms_ease-out_both]',
  },
  'content-top': { tw: 'bottom-[calc(100%+8px)] left-1/2 [transform:translateX(-50%)]' },
  'content-bottom': { tw: 'top-[calc(100%+8px)] left-1/2 [transform:translateX(-50%)]' },
  'content-left': { tw: 'right-[calc(100%+8px)] top-1/2 [transform:translateY(-50%)]' },
  'content-right': { tw: 'left-[calc(100%+8px)] top-1/2 [transform:translateY(-50%)]' },
});