import { register } from 'registyle/collector';

register('mini-appbar', {
  base: { tw: 'flex w-full items-center gap-3 rounded-md border border-[var(--border)] bg-[var(--panel-raised)] px-4 py-2 [&_strong]:text-xs [&_strong]:font-medium' },
});
