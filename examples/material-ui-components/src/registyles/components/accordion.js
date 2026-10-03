import { register } from 'registyle/collector';

register('accordion-demo', {
  base: { tw: 'w-full max-w-[620px] divide-y divide-[var(--border)] rounded-md border border-[var(--border)]' },
});

register('accordion-demo section button', {
  base: { tw: 'flex w-full cursor-pointer items-center justify-between border-0 bg-transparent px-4 py-3.5 text-left text-xs text-[var(--text)]' },
});

register('accordion-demo section p', {
  base: { tw: 'px-4 pb-4 text-xs leading-5 text-[var(--muted)]' },
});
