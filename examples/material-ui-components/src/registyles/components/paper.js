import { register } from 'registyle/collector';

register('paper-row', {
  base: { tw: 'flex flex-wrap gap-4' },
});

register('paper-sample', {
  base: { tw: 'flex h-20 w-32 items-center justify-center rounded bg-[var(--panel-raised)] text-xs text-[var(--muted)]' },
});

register('paper-raised', {
  base: { tw: 'shadow-[0_4px_14px_#0008]' },
});

register('paper-outlined', {
  base: { tw: 'border border-[var(--border)] bg-transparent' },
});
