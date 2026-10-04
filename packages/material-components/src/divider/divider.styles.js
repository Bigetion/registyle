import { register } from 'registyle/collector';

register('mui-divider', {
  base: { tw: 'm-0 shrink-0 border-0 border-[var(--border,#273142)] text-[var(--muted,#9aa8bd)]' },
  modifiers: {
    horizontal: { tw: 'w-full border-t' },
    vertical: { tw: 'inline-block h-full w-0 self-stretch border-l align-middle' },
    inset: { tw: 'ml-14' },
    'flex-item': { tw: 'self-stretch' },
    'text-center': {
      tw: 'flex items-center gap-3 before:flex-1 after:flex-1 before:border-t after:border-t',
    },
    'text-left': { tw: 'flex items-center gap-3 after:flex-1 after:border-t' },
    'text-right': { tw: 'flex items-center gap-3 before:flex-1 before:border-t' },
  },
});

register('mui-divider-content', {
  base: { tw: 'shrink-0 px-1 text-xs' },
});
