import { register } from 'registyle/collector';

register('task-composer', { tw: ['mb-8 rounded-[12px] border border-[#e2e9e4] bg-white p-2 shadow-[0_2px_8px_rgba(31,56,44,.035)]', 'focus-within:border-[#a7cbbc]'] });
register('composer-main', { tw: 'flex items-center gap-3 px-3 py-2' });
register('composer-plus', { tw: 'grid size-7 shrink-0 place-items-center rounded-full bg-[#e8f3ed] text-[#34745f]' });
register('composer-input', { tw: 'min-w-0 flex-1 bg-transparent py-1 text-[13px] text-[#263b32] outline-none placeholder:text-[#9aa69f]' });
register('composer-options', { tw: ['flex items-center justify-end gap-2 border-t border-[#f0f2f0] px-2 pt-2', 'max-sm:flex-wrap'] });
register('composer-select', { tw: 'flex h-8 items-center gap-1.5 rounded-[7px] px-2 text-[11px] text-[#77847c] hover:bg-[#f5f7f5]' });
register('date-input', { tw: 'w-[104px] bg-transparent text-[11px] text-[#68766f] outline-none' });
register('priority-select', { tw: 'w-[82px] bg-transparent text-[11px] text-[#68766f] outline-none' });
register('add-button', { tw: ['ml-1 inline-flex h-8 items-center gap-1.5 rounded-[7px] bg-[#277562] px-3 text-[11px] font-semibold text-white transition-colors', 'hover:bg-[#1d5b4d] disabled:(cursor-not-allowed opacity-45)'] });