import { register } from 'registyle/collector';

register('app-shell', { tw: 'min-h-screen bg-[#f4f7f5]' });
register('app-frame', { tw: 'mx-auto grid min-h-screen w-full max-w-[1440px] grid-cols-[248px_minmax(0,1fr)] max-lg:grid-cols-1' });
register('sidebar', { tw: 'sticky top-0 flex h-screen flex-col border-r border-[#e7ece8] bg-[#fbfcfb] px-5 py-6 max-lg:hidden' });
register.group('brand', {
  root: { tw: 'mb-12 flex items-center gap-3 font-[Manrope] text-[19px] font-extrabold text-[#1d3029] no-underline' },
  icon: { tw: 'grid size-9 place-items-center rounded-[11px] bg-[#277562] text-white' },
});
register('sidebar-caption', { tw: 'mb-3 pl-3 text-[10px] font-bold tracking-[.12em] text-[#a0aaa4]' });
register('view-nav', { tw: 'flex flex-col gap-1' });
register('view-link', { base: { tw: ['flex h-10 items-center gap-3 rounded-[9px] px-3 text-left text-[13px] font-medium text-[#68766f] transition-colors', 'hover:(bg-[#f0f4f1] text-[#1d3029])'] } });
register('view-link-active', { tw: ['bg-[#e6f2ed] font-semibold text-[#1d6b59]', 'hover:(bg-[#e6f2ed] text-[#1d6b59])'] });
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
register.group('mobile-nav', {
  root: { tw: 'hidden gap-1 overflow-x-auto border-b border-[#e7ece8] bg-[#fbfcfb] px-4 py-2 max-lg:flex' },
  link: { tw: 'flex shrink-0 items-center gap-2 rounded-[8px] px-3 py-2 text-[11px] font-medium text-[#78857e]' },
});
register('mobile-nav-link-active', { tw: 'bg-[#e6f2ed] text-[#1d6b59]' });