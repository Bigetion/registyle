import { register } from 'registyle/collector';

register.group('tabs', {
  root: { tw: 'w-full' },
  list: { tw: 'flex items-center gap-1 border-b border-[var(--c-border)] mb-5 overflow-x-auto [scrollbar-width:none]' },
  tab: {
    tw: 'px-4 py-2.5 text-sm font-medium cursor-pointer border-b-2 border-transparent transition-colors -mb-px whitespace-nowrap text-[var(--c-text-muted)] bg-transparent outline-none hover:text-[var(--c-text)] hover:bg-[#f1f4ef] focus-visible:outline-2 focus-visible:outline-[var(--c-brand)] focus-visible:outline-offset-[-2px]',
    border: 'none',
  },
  'tab-active': {
    tw: 'px-4 py-2.5 text-sm font-semibold cursor-pointer -mb-px whitespace-nowrap text-[var(--c-brand)] bg-[#fff9f6] outline-none focus-visible:outline-2 focus-visible:outline-[var(--c-brand)] focus-visible:outline-offset-[-2px]',
    border: 'none',
    'border-bottom': '2px solid var(--c-brand)',
  },
  panel: { tw: 'animate-[fadeIn_200ms_ease]' },
});