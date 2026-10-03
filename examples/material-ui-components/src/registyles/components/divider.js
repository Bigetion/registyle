import { register } from 'registyle/collector';

register('divider-demo', {
  base: { tw: 'flex w-full max-w-[420px] flex-col gap-3 text-xs text-[var(--muted)]' },
});

register('mui-divider', {
  base: { tw: 'h-px w-full bg-[var(--border)]' },
});
