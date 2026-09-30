import { register } from 'registyle/collector';

register('list-toolbar', { tw: 'mb-3 flex items-center justify-between' });
register('list-heading-group', { tw: 'flex min-w-0 items-center gap-5 max-sm:gap-2' });
register('list-heading', { tw: 'font-[Manrope] text-[14px] font-bold text-[#2b4037]' });
register('list-count', { tw: 'ml-2 text-[11px] text-[#98a39d]' });
register('row-style-control', { tw: 'flex items-center gap-2 max-sm:gap-1' });
register('row-style-label', { tw: 'text-[9px] font-bold tracking-[.08em] text-[#9aa59f] max-sm:hidden' });
register('row-style-toggle', { tw: 'inline-flex items-center gap-0.5 rounded-[8px] border border-[#e4eae5] bg-white p-1' });
register('row-style-option', { base: { tw: ['rounded-[6px] px-2 py-1 text-[10px] font-semibold text-[#87938c] transition-colors', 'hover:text-[#354a40]'] } });
register('row-style-option-active', { tw: 'bg-[#e6f2ed] text-[#1d6b59]' });
register('clear-button', { tw: 'inline-flex items-center gap-1.5 rounded-[7px] px-2 py-1.5 text-[11px] font-medium text-[#89958e] transition-colors hover:bg-[#fff0ed] hover:text-[#bb6655] disabled:cursor-not-allowed disabled:opacity-40' });
register('task-list', { tw: 'm-0 list-none overflow-hidden rounded-[12px] border border-[#e5ebe7] bg-white p-0' });

register.group('task', {
  row: {
    tw: ['flex items-center gap-3 border-b border-[#edf0ee] px-4 py-3', 'max-sm:(gap-2 px-3)', 'last:border-b-0 hover:bg-[#fcfdfc]'],
    'min-height': '68px',
  },
  check: {
    tw: ['grid size-[19px] shrink-0 place-items-center rounded-full border-[1.5px] border-[#cbd7d0] bg-white text-white transition-colors', 'hover:border-[#57917a] focus-visible:(outline-2 outline-offset-2 outline-[#57917a])'],
  },
  details: { tw: 'flex min-w-0 flex-1 flex-col gap-1' },
  title: { tw: 'overflow-hidden text-ellipsis whitespace-nowrap text-[12px] font-medium text-[#354a40]' },
  'title-completed': { tw: 'text-[#a2aca6] line-through' },
  meta: { tw: 'flex items-center gap-3' },
  'priority-tag': { tw: 'inline-flex items-center gap-1.5 text-[10px] capitalize text-[#87938c]' },
  'due-label': { tw: 'inline-flex items-center gap-1 text-[10px] text-[#929e97]' },
  'delete-button': { tw: ['grid size-8 shrink-0 place-items-center rounded-[7px] text-[#b4beb8] opacity-0 transition-colors', 'hover:(bg-[#fff0ed] text-[#bb6655] opacity-100) focus:opacity-100 max-sm:opacity-100'] },
});

register('task-row-completed', { tw: 'bg-[#fbfcfb]' });
register('task-check-checked', { tw: 'border-[#5b9b78] bg-[#5b9b78]' });
register('priority-dot', {
  base: { tw: 'size-2 rounded-full bg-[#7f9c8d]' },
  modifiers: {
    low: { tw: 'bg-[#77a589]' },
    medium: { tw: 'bg-[#c4954c]' },
    high: { tw: 'bg-[#cf735f]' },
  },
});

register('empty-state', { tw: 'flex min-h-[210px] flex-col items-center justify-center rounded-[12px] border border-dashed border-[#dce5df] bg-white/70 px-6 text-center' });
register('empty-icon', { tw: 'mb-3 grid size-10 place-items-center rounded-full bg-[#edf5f0] text-[#6f9985]' });
register('empty-title', { tw: 'text-[13px] font-semibold text-[#43594e]' });
register('empty-copy', { tw: 'mt-1 max-w-[260px] text-[11px] text-[#8a9790]' });
register('list-footer', { tw: ['mt-4 flex items-center justify-between gap-3 text-[10px] text-[#9aa59f]', 'max-sm:(flex-col items-start)'] });
register('footer-status', { tw: 'inline-flex items-center gap-1.5' });
register('saved-indicator', { tw: 'size-1.5 rounded-full bg-[#6ea484]' });