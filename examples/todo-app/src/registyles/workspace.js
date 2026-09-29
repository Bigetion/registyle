import { register } from 'registyle/collector';

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