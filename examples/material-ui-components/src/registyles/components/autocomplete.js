import { register } from 'registyle/collector';

register('autocomplete-wrap', {
  base: { tw: 'relative flex w-[min(360px,100%)] flex-col gap-2' },
});

register('autocomplete-input-wrap', {
  base: { tw: 'relative' },
});

register('autocomplete-chevron', {
  base: { tw: 'pointer-events-none absolute right-3 top-3 text-[var(--muted)]' },
});

register('autocomplete-clear', {
  base: { tw: 'absolute right-2 top-2 inline-flex size-6 items-center justify-center rounded-full text-[var(--muted)] hover:bg-[#ffffff12] hover:text-white' },
});

register('autocomplete-options', {
  base: {
    tw: 'absolute left-0 right-0 top-[calc(100%+4px)] z-10 overflow-hidden rounded border border-[var(--border)] bg-[#25282d] py-1 shadow-[0_8px_24px_#0008]',
  },
});

register('autocomplete-options button', {
  base: {
    tw: 'flex w-full items-center justify-between px-3 py-2 text-left text-sm text-[var(--text)] hover:bg-[#ffffff12]',
  },
});

register('autocomplete-hint', {
  base: { tw: 'ml-auto flex max-w-[250px] items-center gap-2 text-xs text-[var(--subtle)] max-sm:ml-0' },
});

register('floating-autocomplete-input', {
  base: { tw: 'w-[260px] max-w-full' },
});
