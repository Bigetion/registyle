import { register } from 'registyle/collector';

register('mui-chip', {
  base: { tw: 'inline-flex h-8 shrink-0 items-center gap-1.5 rounded-full border border-[var(--border)] px-3 text-xs font-medium text-[var(--text)] transition-colors' },
  modifiers: {
    'outlined': { tw: 'bg-transparent' },
    'filled': { tw: 'border-transparent bg-[var(--panel-raised)]' },
    'primary': { tw: 'border-transparent bg-[var(--mui-blue-dark)] text-white' },
    'success': { tw: 'border-transparent !bg-[#1b5e20] text-[#c8e6c9]' },
    'warning': { tw: 'border-transparent bg-[#684b28] text-[#ffe0ae]' },
    'small': { tw: '!h-6 px-2 text-[10px]' },
    'interactive': { tw: 'cursor-pointer hover:border-[var(--mui-blue)] hover:bg-[var(--panel-raised)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--mui-blue)]' },
    'selected': { tw: 'border-transparent bg-[var(--mui-blue-dark)] text-white' },
  },
});

register('mui-chip button', {
  base: { tw: 'inline-flex cursor-pointer items-center justify-center rounded-full border-0 bg-transparent p-0 text-current opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-current' },
});

register('chip-examples', {
  base: { tw: 'flex flex-wrap items-center gap-2.5' },
});

register('chip-actions', {
  base: { tw: 'flex flex-wrap items-center justify-between gap-2' },
});

register('mui-chip-icon', {
  base: { tw: 'shrink-0' },
});

register('mui-chip-selected', {
  base: { tw: 'border-transparent bg-[var(--mui-blue-dark)] text-white' },
});

register('mui-chip-delete', {
  base: { tw: 'ml-0.5 inline-flex size-4 shrink-0 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent p-0 text-current opacity-70 hover:bg-white/10 hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-current' },
});
