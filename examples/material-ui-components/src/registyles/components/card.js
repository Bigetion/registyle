import { register } from 'registyle/collector';

register('sample-card', {
  base: { tw: 'w-[min(300px,100%)] overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--panel-raised)]' },
  modifiers: {
    'media': { tw: 'flex h-24 items-center justify-center gap-2 bg-[#283646] text-[var(--mui-blue)] [&_span]:text-[10px] [&_span]:tracking-widest' },
    'copy': { tw: 'p-4 [&_strong]:text-sm [&_p]:my-2 [&_p]:text-xs [&_p]:leading-5 [&_p]:text-[var(--muted)]' },
  },
});
