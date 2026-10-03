import { register } from 'registyle/collector';

register('mui-chip', {
  base: { tw: 'inline-flex h-8 items-center gap-1.5 rounded-full border border-[var(--border)] px-3 text-xs text-[var(--text)]' },
  modifiers: {
    'filled': { tw: 'border-transparent bg-[var(--panel-raised)]' },
    'primary': { tw: 'border-transparent bg-[var(--mui-blue-dark)] text-white' },
    'success': { tw: 'border-transparent bg-[#1b5e20] text-[#c8e6c9]' },
  },
});

register('mui-chip button', {
  base: { tw: 'inline-flex cursor-pointer border-0 bg-transparent p-0 text-current' },
});
