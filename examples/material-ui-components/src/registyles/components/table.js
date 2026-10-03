import { register } from 'registyle/collector';

register('table-wrap', {
  base: { tw: 'w-full overflow-x-auto' },
});

register('mini-table', {
  base: { tw: 'w-full border-collapse text-left text-xs [&_th]:border-b [&_th]:border-[var(--border)] [&_th]:px-3 [&_th]:py-2 [&_th]:font-medium [&_th]:text-[var(--subtle)] [&_td]:border-b [&_td]:border-[var(--border)] [&_td]:px-3 [&_td]:py-3 [&_td]:text-[var(--muted)]' },
});

register('status-pill', {
  base: { tw: 'rounded-full bg-[#1b5e20]/30 px-2 py-1 text-[10px] text-[#81c784]' },
});

register('status-idle', {
  base: { tw: 'bg-[#ff9800]/15 text-[#ffcc80]' },
});
