import { register } from 'registyle/collector';

register(':root', {
  '--ink': '#1d3029', '--muted': '#78857e', '--line': '#e7ece8', '--canvas': '#f4f7f5',
  '--surface': '#ffffff', '--green': '#277562', '--green-dark': '#1d5b4d',
  '--green-soft': '#e6f2ed', '--coral': '#cc705d', '--amber': '#b88945',
});
register('body', {
  margin: 0, minWidth: '320px', backgroundColor: 'var(--canvas)', color: 'var(--ink)',
  fontFamily: "'DM Sans', sans-serif", fontSize: '14px', lineHeight: 1.5,
  '-webkit-font-smoothing': 'antialiased',
});
register('sr-only', { tw: 'sr-only' });

register('app-shell', { tw: 'min-h-screen bg-[#f4f7f5]' });
register('app-frame', { tw: 'mx-auto grid min-h-screen w-full max-w-[1440px] grid-cols-[248px_minmax(0,1fr)] max-lg:grid-cols-1' });
register('sidebar', { tw: 'sticky top-0 flex h-screen flex-col border-r border-[#e7ece8] bg-[#fbfcfb] px-5 py-6 max-lg:hidden' });
register('brand', { tw: 'mb-12 flex items-center gap-3 font-[Manrope] text-[19px] font-extrabold text-[#1d3029] no-underline' });
register('brand-icon', { tw: 'grid size-9 place-items-center rounded-[11px] bg-[#277562] text-white' });
register('sidebar-caption', { tw: 'mb-3 pl-3 text-[10px] font-bold tracking-[.12em] text-[#a0aaa4]' });
register('view-nav', { tw: 'flex flex-col gap-1' });
register('view-link', {
  base: { tw: 'flex h-10 items-center gap-3 rounded-[9px] px-3 text-left text-[13px] font-medium text-[#68766f] transition-colors hover:bg-[#f0f4f1] hover:text-[#1d3029]' },
  modifiers: { active: { tw: 'bg-[#e6f2ed] font-semibold text-[#1d6b59] hover:bg-[#e6f2ed] hover:text-[#1d6b59]' } },
});
register('view-count', { tw: 'ml-auto text-[11px] font-medium text-[#9aa69f]' });
register('sidebar-note', { tw: 'mt-auto rounded-[12px] border border-[#e5ece7] bg-[#f3f7f4] px-4 py-4' });
register('note-icon', { tw: 'mb-3 grid size-7 place-items-center rounded-[9px] bg-white text-[#277562] shadow-sm' });
register('sidebar-note-copy', { tw: 'text-[12px] font-semibold text-[#34483f]' });
register('sidebar-note-detail', { tw: 'mt-1 text-[11px] text-[#849189]' });
register('sidebar-footer', { tw: 'mt-5 flex items-center gap-3 border-t border-[#e7ece8] pt-5' });
register('avatar', { tw: 'grid size-9 place-items-center rounded-full bg-[#dcebe4] font-[Manrope] text-[13px] font-bold text-[#276b58]' });
register('profile-copy', { tw: 'flex min-w-0 flex-1 flex-col' });
register('profile-name', { tw: 'text-[12px] font-semibold text-[#34483f]' });
register('profile-detail', { tw: 'text-[11px] text-[#8c9991]' });
register('online-dot', { tw: 'size-2 rounded-full bg-[#5b9b78]' });

register('main-panel', { tw: 'min-w-0' });
register('mobile-header', { tw: 'hidden items-center justify-between border-b border-[#e7ece8] bg-[#fbfcfb] px-5 py-3 max-lg:flex' });
register('mobile-date', { tw: 'text-[11px] text-[#87938c]' });
register('mobile-nav', { tw: 'hidden gap-1 overflow-x-auto border-b border-[#e7ece8] bg-[#fbfcfb] px-4 py-2 max-lg:flex' });
register('mobile-nav-link', {
  base: { tw: 'flex shrink-0 items-center gap-2 rounded-[8px] px-3 py-2 text-[11px] font-medium text-[#78857e]' },
  modifiers: { active: { tw: 'bg-[#e6f2ed] text-[#1d6b59]' } },
});
register('content-wrap', { tw: 'mx-auto max-w-[1020px] px-10 py-10 max-md:px-5 max-md:py-6' });
register('page-heading', { tw: 'mb-7 flex items-end justify-between gap-6 max-sm:flex-col max-sm:items-stretch' });
register('eyebrow', { tw: 'mb-2 flex items-center gap-2 text-[12px] font-medium text-[#89958e]' });
register('page-title', { tw: 'font-[Manrope] text-[30px] font-bold leading-tight tracking-[-.025em] text-[#1d3029] max-sm:text-[26px]' });
register('heading-copy', { tw: 'mt-2 text-[13px] text-[#7f8b84]' });
register('search-box', { tw: 'flex h-10 w-[230px] items-center gap-2 rounded-[9px] border border-[#e3e9e5] bg-white px-3 text-[#88958e] focus-within:border-[#9ac0b2] focus-within:ring-2 focus-within:ring-[#e3f0ea] max-sm:w-full' });
register('search-input', { tw: 'min-w-0 flex-1 bg-transparent text-[12px] text-[#263b32] outline-none placeholder:text-[#a2aca6]' });
register('search-shortcut', { tw: 'rounded border border-[#e8ece9] px-1.5 py-0.5 text-[10px] text-[#9aa59f]' });

register('focus-strip', { tw: 'mb-6 flex items-center gap-4 rounded-[12px] border border-[#dceae2] bg-[#edf5f0] px-5 py-4 max-sm:gap-3 max-sm:px-3' });
register('focus-mark', { tw: 'grid size-9 shrink-0 place-items-center rounded-full bg-white' });
register('focus-mark-inner', { tw: 'size-2.5 rounded-full bg-[#4a9273]' });
register('focus-copy', { tw: 'flex min-w-0 flex-1 flex-col' });
register('focus-title', { tw: 'text-[12px] font-semibold text-[#315849]' });
register('focus-detail', { tw: 'mt-0.5 text-[11px] text-[#728b7d] max-sm:hidden' });
register('focus-progress', { tw: 'flex w-[150px] flex-col gap-1.5 text-right text-[10px] font-medium text-[#668574] max-sm:w-[72px]' });
register('progress-track', { tw: 'h-1 overflow-hidden rounded-full bg-[#d6e7dc]' });
register('progress-value', { tw: 'h-full rounded-full bg-[#5b9b78] transition-[width]' });

register('task-composer', { tw: 'mb-8 rounded-[12px] border border-[#e2e9e4] bg-white p-2 shadow-[0_2px_8px_rgba(31,56,44,.035)] focus-within:border-[#a7cbbc]' });
register('composer-main', { tw: 'flex items-center gap-3 px-3 py-2' });
register('composer-plus', { tw: 'grid size-7 shrink-0 place-items-center rounded-full bg-[#e8f3ed] text-[#34745f]' });
register('composer-input', { tw: 'min-w-0 flex-1 bg-transparent py-1 text-[13px] text-[#263b32] outline-none placeholder:text-[#9aa69f]' });
register('composer-options', { tw: 'flex items-center justify-end gap-2 border-t border-[#f0f2f0] px-2 pt-2 max-sm:flex-wrap' });
register('composer-select', { tw: 'flex h-8 items-center gap-1.5 rounded-[7px] px-2 text-[11px] text-[#77847c] hover:bg-[#f5f7f5]' });
register('date-input', { tw: 'w-[104px] bg-transparent text-[11px] text-[#68766f] outline-none' });
register('priority-select', { tw: 'w-[82px] bg-transparent text-[11px] text-[#68766f] outline-none' });
register('priority-dot', {
  base: { tw: 'size-2 rounded-full bg-[#7f9c8d]' },
  modifiers: { low: { tw: 'bg-[#77a589]' }, medium: { tw: 'bg-[#c4954c]' }, high: { tw: 'bg-[#cf735f]' } },
});
register('add-button', { tw: 'ml-1 inline-flex h-8 items-center gap-1.5 rounded-[7px] bg-[#277562] px-3 text-[11px] font-semibold text-white transition-colors hover:bg-[#1d5b4d] disabled:cursor-not-allowed disabled:opacity-45' });

register('list-toolbar', { tw: 'mb-3 flex items-center justify-between' });
register('list-heading-group', { tw: 'flex min-w-0 items-center gap-5 max-sm:gap-2' });
register('list-heading', { tw: 'font-[Manrope] text-[14px] font-bold text-[#2b4037]' });
register('list-count', { tw: 'ml-2 text-[11px] text-[#98a39d]' });
register('row-style-control', { tw: 'flex items-center gap-2 max-sm:gap-1' });
register('row-style-label', { tw: 'text-[9px] font-bold tracking-[.08em] text-[#9aa59f] max-sm:hidden' });
register('row-style-toggle', { tw: 'inline-flex items-center gap-0.5 rounded-[8px] border border-[#e4eae5] bg-white p-1' });
register('row-style-option', {
  base: { tw: 'rounded-[6px] px-2 py-1 text-[10px] font-semibold text-[#87938c] transition-colors hover:text-[#354a40]' },
  modifiers: { active: { tw: 'bg-[#e6f2ed] text-[#1d6b59]' } },
});
register('clear-button', { tw: 'inline-flex items-center gap-1.5 rounded-[7px] px-2 py-1.5 text-[11px] font-medium text-[#89958e] transition-colors hover:bg-[#fff0ed] hover:text-[#bb6655] disabled:cursor-not-allowed disabled:opacity-40' });
register('task-list', { tw: 'm-0 list-none overflow-hidden rounded-[12px] border border-[#e5ebe7] bg-white p-0' });
register('task-row', {
  base: { tw: 'flex min-h-[68px] items-center gap-3 border-b border-[#edf0ee] px-4 py-3 last:border-b-0 hover:bg-[#fcfdfc] max-sm:gap-2 max-sm:px-3' },
  modifiers: { completed: { tw: 'bg-[#fbfcfb]' } },
});
register('task-check', {
  base: { tw: 'grid size-[19px] shrink-0 place-items-center rounded-full border-[1.5px] border-[#cbd7d0] bg-white text-white transition-colors hover:border-[#57917a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#57917a]' },
  modifiers: { checked: { tw: 'border-[#5b9b78] bg-[#5b9b78]' } },
});
register('task-details', { tw: 'flex min-w-0 flex-1 flex-col gap-1' });
register('task-title', { tw: 'overflow-hidden text-ellipsis whitespace-nowrap text-[12px] font-medium text-[#354a40]' });
register('task-title-completed', { tw: 'text-[#a2aca6] line-through' });
register('task-meta', { tw: 'flex items-center gap-3' });
register('priority-tag', { tw: 'inline-flex items-center gap-1.5 text-[10px] capitalize text-[#87938c]' });
register('due-label', { tw: 'inline-flex items-center gap-1 text-[10px] text-[#929e97]' });
register('delete-button', { tw: 'grid size-8 shrink-0 place-items-center rounded-[7px] text-[#b4beb8] opacity-0 transition-colors hover:bg-[#fff0ed] hover:text-[#bb6655] hover:opacity-100 focus:opacity-100 max-sm:opacity-100' });
register('empty-state', { tw: 'flex min-h-[210px] flex-col items-center justify-center rounded-[12px] border border-dashed border-[#dce5df] bg-white/70 px-6 text-center' });
register('empty-icon', { tw: 'mb-3 grid size-10 place-items-center rounded-full bg-[#edf5f0] text-[#6f9985]' });
register('empty-title', { tw: 'text-[13px] font-semibold text-[#43594e]' });
register('empty-copy', { tw: 'mt-1 max-w-[260px] text-[11px] text-[#8a9790]' });
register('list-footer', { tw: 'mt-4 flex items-center justify-between gap-3 text-[10px] text-[#9aa59f] max-sm:flex-col max-sm:items-start' });
register('footer-status', { tw: 'inline-flex items-center gap-1.5' });
register('saved-indicator', { tw: 'size-1.5 rounded-full bg-[#6ea484]' });