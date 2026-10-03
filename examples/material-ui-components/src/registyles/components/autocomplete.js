import { register } from 'registyle/collector';

register.group('autocomplete', {
  root: { tw: 'relative flex w-[min(380px,100%)] flex-col gap-2.5' },
  label: { tw: 'text-[10px] font-semibold uppercase tracking-[.12em] text-[#aab7cd]' },
  field: {
    tw: 'flex min-h-11 w-full items-center gap-2.5 rounded-xl border border-[#354158] bg-[#0e1420] px-3.5 text-[var(--text)] shadow-[inset_0_1px_0_rgba(255,255,255,.025)] transition-[border-color,box-shadow,background-color] duration-150 focus-within:border-[#718ecb] focus-within:bg-[#111927] focus-within:shadow-[0_0_0_3px_rgba(125,159,255,.1)]',
  },
  'field-open': { tw: 'border-[#718ecb]' },
  input: {
    tw: 'min-w-0 flex-1 border-0 bg-transparent py-2.5 text-xs text-[var(--text)] outline-none placeholder:text-[#748198] focus:border-0 focus:outline-none focus:ring-0',
  },
  'leading-icon': { tw: 'shrink-0 text-[#7f8ba2]' },
  actions: { tw: 'flex shrink-0 items-center gap-1 text-[#8b98af]' },
  action: {
    tw: 'inline-flex size-6 cursor-pointer items-center justify-center rounded-md border-0 bg-transparent text-current transition-colors hover:bg-[#ffffff10] hover:text-white focus-visible:outline-2 focus-visible:outline-[var(--mui-blue)]',
  },
  tags: { tw: 'flex min-w-0 flex-wrap items-center gap-1.5 py-1' },
  tag: {
    tw: 'inline-flex max-w-full items-center gap-1.5 rounded-md border border-[#34425b] bg-[#192337] py-1 pl-2.5 pr-1.5 text-[10px] font-medium text-[#c8d6f5]',
  },
  'tag-remove': {
    tw: 'inline-flex size-4 cursor-pointer items-center justify-center rounded border-0 bg-transparent text-[#8795af] hover:bg-[#ffffff12] hover:text-white',
  },
  hint: { tw: 'flex items-center justify-between gap-3 px-1 text-[10px] text-[var(--subtle)]' },
  shortcut: { tw: 'inline-flex items-center gap-1 rounded border border-[var(--border)] bg-[#ffffff04] px-1.5 py-0.5 font-mono text-[9px]' },
});

register('autocomplete-popover', {
  base: {
    tw: 'z-50 w-[min(380px,calc(100vw-32px))] overflow-hidden rounded-xl border border-[#303c52] bg-[#111824] py-1.5 text-[var(--text)] shadow-[0_18px_48px_rgba(0,0,0,.52)]',
  },
});

register('autocomplete-option', {
  base: {
    tw: 'flex w-full cursor-pointer items-center gap-3 border-0 bg-transparent px-3 py-2.5 text-left text-xs text-[#c6cede] transition-colors hover:bg-[#ffffff08] focus:outline-none',
  },
  modifiers: {
    active: { tw: 'bg-[#1a263a] text-white' },
    selected: { tw: 'text-[#a9c2ff]' },
  },
});

register('autocomplete-option-icon', {
  base: { tw: 'flex size-7 shrink-0 items-center justify-center rounded-lg border border-[#29364c] bg-[#192337] text-[10px] font-semibold text-[#a9c2ff]' },
});

register('autocomplete-option-copy', {
  base: { tw: 'flex min-w-0 flex-1 flex-col gap-0.5' },
});

register('autocomplete-option-title', {
  base: { tw: 'truncate font-medium text-inherit' },
});

register('autocomplete-option-description', {
  base: { tw: 'truncate text-[10px] text-[#78859b]' },
});

register('autocomplete-empty', {
  base: { tw: 'flex flex-col gap-1 px-4 py-5 text-center' },
});

register('autocomplete-create', {
  base: { tw: 'border-t border-[#273246] pt-1.5' },
});

register('autocomplete-count', {
  base: { tw: 'ml-auto rounded-full bg-[#ffffff08] px-1.5 py-0.5 text-[9px] text-[#9aa7bd]' },
});
