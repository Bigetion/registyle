import { register } from 'registyle/collector';

register('transfer-demo', {
  base: { tw: 'grid w-full max-w-[650px] grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 max-sm:gap-2' },
});

register('transfer-list', {
  base: { tw: 'flex h-[220px] min-w-0 flex-col overflow-hidden rounded-lg border border-[#2c394e] bg-[#0e141e]/75 p-2.5' },
});

register('transfer-list-header', {
  base: { tw: 'mb-2 flex shrink-0 items-center justify-between gap-2 border-b border-[#252f40] pb-2' },
});

register('transfer-list-title', {
  base: { tw: 'm-0 text-[10px] font-semibold uppercase tracking-[.08em] text-[#c5cede]' },
});

register('transfer-list-count', {
  base: { tw: 'inline-flex min-w-5 items-center justify-center rounded-full bg-[#1d293c] px-1.5 py-0.5 text-[9px] font-medium tabular-nums text-[#aebfe2]' },
});

register('transfer-list-items', {
  base: { tw: 'flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto [scrollbar-width:thin] [scrollbar-color:#354156_transparent]' },
});

register('transfer-item', {
  base: { tw: 'flex min-w-0 cursor-pointer items-center gap-2 rounded-md border border-transparent px-2 py-2 text-[10px] text-[#aab6ca] transition-colors hover:bg-[#ffffff07]' },
});

register('transfer-item-selected', {
  base: { tw: 'border-[#3a4d70] bg-[#19253a] text-[#d8e3f7] hover:bg-[#202e46]' },
});

register('transfer-item-copy', {
  base: { tw: 'flex min-w-0 flex-col gap-1' },
});

register('transfer-item-label', {
  base: { tw: 'truncate text-[10px] font-medium' },
});

register('transfer-item-detail', {
  base: { tw: 'truncate text-[8px] text-[#7e8ba0]' },
});

register('transfer-list-empty', {
  base: { tw: 'm-auto py-4 text-center text-[9px] text-[#76849a]' },
});

register('transfer-select-all', {
  base: { tw: 'mb-1 flex shrink-0 cursor-pointer items-center gap-2 border-b border-[#252f40] px-2 pb-2 text-[9px] text-[#8997ad]' },
});

register('transfer-checkbox', {
  base: { tw: 'relative flex size-4 shrink-0 items-center justify-center rounded-[3px] focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#86a6ff]' },
});

register('transfer-checkbox-input', {
  base: { tw: 'absolute inset-0 z-10 m-0 size-full cursor-pointer opacity-0 disabled:cursor-not-allowed' },
});

register('transfer-checkbox-indicator', {
  base: { tw: 'flex size-3.5 items-center justify-center rounded-[3px] border border-[#53627a] bg-[#101722] text-[#0d1522] transition-[background-color,border-color]' },
});

register('transfer-checkbox-checked', {
  base: { tw: '!border-[#91aef5] !bg-[#91aef5]' },
});

register('transfer-checkbox-indeterminate', {
  base: { tw: '!border-[#91aef5] !bg-[#91aef5]' },
});

register('transfer-checkbox-dash', {
  base: { tw: 'h-0.5 w-1.5 rounded-full bg-[#101722]' },
});

register('transfer-checkbox-disabled', {
  base: { tw: 'cursor-not-allowed opacity-40' },
});

register('transfer-actions', {
  base: { tw: 'flex flex-col gap-1.5' },
});

register('transfer-action', {
  base: { tw: 'inline-flex size-8 cursor-pointer items-center justify-center rounded-md border border-[#34425a] bg-[#151e2c] p-0 text-[#9eb5e8] transition-[background-color,border-color,color,opacity] hover:border-[#5875ad] hover:bg-[#20304a] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#86a6ff] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-[#34425a] disabled:hover:bg-[#151e2c]' },
});

register('transfer-action-all', {
  base: { tw: 'text-[#bdc8dc]' },
});

register('transfer-status', {
  base: { tw: 'col-span-full min-h-4 text-[9px] text-[#8190a6]' },
});
