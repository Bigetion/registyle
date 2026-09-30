import { register } from 'registyle/collector';

register.group('tabs', {
  root: { tw: 'w-full' },
  list: { tw: 'flex items-center gap-1 border-b border-b-[var(--c-border)] mb-5 overflow-x-auto [scrollbar-width:none]' },
  tab: {
    tw: 'px-4 py-2.5 text-sm font-medium cursor-pointer border-0 border-b-2 border-b-transparent transition-colors -mb-px whitespace-nowrap text-[var(--c-text-muted)] bg-transparent outline-none hover:text-[var(--c-text)] hover:bg-[#f1f4ef] focus-visible:(outline-2 outline-[var(--c-brand)] outline-offset-[-2px])',
  },
  'tab-active': {
    tw: 'px-4 py-2.5 text-sm font-semibold cursor-pointer border-0 border-b-2 border-b-[var(--c-brand)] -mb-px whitespace-nowrap text-[var(--c-brand)] bg-[#fff9f6] outline-none focus-visible:(outline-2 outline-[var(--c-brand)] outline-offset-[-2px])',
  },
  panel: { tw: 'animate-[fadeIn_200ms_ease]' },
});