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

register('text-field-demo', {
  base: { tw: 'max-w-[min(360px,100%)] gap-2' },
});

register('text-field-label', {
  base: { tw: 'text-[11px] font-medium text-[#c5cede]' },
});

register('text-field-control', {
  base: { tw: 'h-10 w-full min-w-0 rounded-lg border border-[#34425a] bg-[#111722] px-3 text-[12px] text-[#e5ebf6] outline-none placeholder:text-[#748198] transition-[border-color,box-shadow,background-color] hover:border-[#52678b] focus:border-[#7898e8] focus:ring-2 focus:ring-[#86a6ff]/20' },
});

register('text-field-control-error', {
  base: { tw: 'border-[#dc737b] hover:border-[#dc737b] focus:border-[#dc737b] focus:ring-[#dc737b]/20' },
});

register('text-field-helper', {
  base: { tw: 'min-h-4 text-[10px] leading-4 text-[#8390a5]' },
});

register('text-field-helper-error', {
  base: { tw: 'text-[#f0959c]' },
});

register('text-field-shell', {
  base: { tw: 'relative flex w-full min-w-0 items-center' },
});

register('text-field-control-adorned', {
  base: { tw: 'pl-9 pr-9' },
});

register('text-field-leading-icon', {
  base: { tw: 'pointer-events-none absolute left-3 z-[1] shrink-0 text-[#8492a8]' },
});

register('text-field-clear', {
  base: { tw: 'absolute right-2 inline-flex size-7 cursor-pointer items-center justify-center rounded-md border-0 bg-transparent p-0 text-[#8d9bb0] transition-colors hover:bg-[#ffffff0d] hover:text-white focus-visible:outline-2 focus-visible:outline-[#86a6ff]' },
});

register('text-field-actions', {
  base: { tw: 'flex flex-wrap items-center gap-3' },
});
