import { register } from 'registyle/collector';

register.group('pagination', {
  root: { tw: 'flex items-center gap-1 flex-wrap' },
  item: {
    tw: 'inline-flex items-center justify-center text-sm font-medium cursor-pointer border border-transparent transition-all rounded-lg min-w-9 h-9 px-2 text-[var(--c-text-muted)] bg-transparent hover:(bg-[var(--c-bg)] text-[var(--c-text)] border-[var(--c-border)]) disabled:(opacity-40 cursor-not-allowed)',
  },
  'item-active': {
    tw: 'inline-flex items-center justify-center text-sm font-semibold rounded-lg min-w-9 h-9 bg-[var(--c-brand)] text-white border border-[var(--c-brand)]',
  },
  ellipsis: { tw: 'inline-flex items-center justify-center text-sm size-9 text-[var(--c-text-light)]' },
});