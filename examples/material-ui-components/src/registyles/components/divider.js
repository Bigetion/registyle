import { register } from 'registyle/collector';

register('divider-demo', {
  base: { tw: 'flex w-full max-w-[520px] flex-col gap-3 text-xs text-[var(--muted)]' },
});

register('divider-label', {
  base: { tw: 'text-xs font-medium text-[var(--text)]' },
});

register('divider-toolbar', {
  base: { tw: 'flex flex-nowrap items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--panel)] p-2' },
});

register('divider-toolbar button', {
  base: { tw: 'inline-flex h-8 cursor-pointer items-center gap-1.5 rounded-md border-0 bg-transparent px-1 text-xs font-medium text-[var(--text)] hover:bg-[var(--panel-raised)] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--mui-blue)]' },
});

register('mui-divider-vertical', {
  base: { tw: 'h-6 w-px shrink-0 bg-[var(--border)]' },
});

register('divider-list', {
  base: { tw: 'flex w-full max-w-[520px] flex-col rounded-lg border border-[var(--border)] bg-[var(--panel)]' },
});

register('divider-list-item', {
  base: { tw: 'flex min-h-[68px] items-center gap-3 px-4 py-3' },
});

register('divider-list-copy', {
  base: { tw: 'flex min-w-0 flex-col gap-1' },
});

register('divider-list-item strong', {
  base: { tw: 'text-xs font-medium text-[var(--text)]' },
});

register('divider-list-item small', {
  base: { tw: 'text-[10px] text-[var(--muted)]' },
});

register('divider-list-icon', {
  base: { tw: 'inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-[var(--panel-raised)] text-[var(--muted)]' },
});

register('mui-divider-inset', {
  base: { tw: '!ml-[60px] !w-[calc(100%_-_60px)]' },
});
