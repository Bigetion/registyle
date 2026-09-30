import { register } from 'registyle/collector';

register.group('pagination', {
  root: { tw: 'flex items-center gap-1 flex-wrap' },
  item: {
    tw: 'inline-flex min-w-9 h-9 items-center justify-center px-2 text-sm font-medium cursor-pointer border border-transparent transition-all rounded-lg text-[var(--c-text-muted)] bg-transparent hover:bg-[var(--c-bg)] hover:text-[var(--c-text)] hover:border-[var(--c-border)] disabled:opacity-40 disabled:cursor-not-allowed',
  },
  'item-active': {
    tw: 'inline-flex min-w-9 h-9 items-center justify-center text-sm font-semibold rounded-lg bg-[var(--c-brand)] text-white border border-[var(--c-brand)]',
  },
  ellipsis: { tw: 'inline-flex size-9 items-center justify-center text-sm text-[var(--c-text-light)]' },
});