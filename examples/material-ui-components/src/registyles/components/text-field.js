import { register } from 'registyle/collector';

register('input-helper', {
  base: { tw: 'text-[11px] text-[#ef9a9a]' },
  modifiers: {
    'success': { tw: 'text-[#81c784]' },
  },
});

register('mui-input', {
  base: {
    tw: 'h-10 w-full rounded border border-[#626a75] bg-transparent px-3 text-sm text-[var(--text)] outline-none placeholder:text-[var(--subtle)] hover:border-[var(--text)] focus:border-2 focus:border-[var(--mui-blue)]',
  },
  modifiers: {
    'wrap': { tw: 'flex w-[260px] flex-col gap-1.5' },
    'filled': { tw: 'rounded-t border-0 border-b-2 border-[#626a75] bg-[#25282d] focus:border-[var(--mui-blue)]' },
  },
});

register('input-preview', {
  base: { tw: 'max-w-[620px] flex-row flex-wrap' },
});

register('mui-label', {
  base: { tw: 'text-xs text-[var(--muted)]' },
});
