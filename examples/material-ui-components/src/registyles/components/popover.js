import { register } from 'registyle/collector';

register('floating-card', {
  base: { tw: 'w-[min(310px,80vw)] p-4' },
  modifiers: {
    'heading': { tw: 'flex items-center gap-2.5' },
    'heading strong': { tw: 'block text-xs font-medium' },
    'heading span': { tw: 'mt-1 block text-[10px] text-[var(--subtle)]' },
    'actions': { tw: 'flex justify-end gap-2 border-t border-[var(--border)] pt-2' },
  },
});

register('floating-card p', {
  base: { tw: 'my-3 text-xs leading-5 text-[var(--muted)]' },
});
