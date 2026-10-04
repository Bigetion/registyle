import { register } from 'registyle/collector';

register('pagination-demo', {
  base: { tw: 'flex w-full max-w-[700px] flex-col gap-3' },
});

register('pagination-demo-heading', {
  base: { tw: 'flex flex-wrap items-center justify-between gap-2 [&_strong]:text-[10px] [&_strong]:font-semibold [&_span]:text-[8px] [&_span]:text-[var(--muted)]' },
});

register('pagination-button', {
  base: { tw: 'inline-flex min-h-8 min-w-8 cursor-pointer items-center justify-center gap-1 rounded-md border border-transparent bg-transparent px-2 text-[9px] font-medium text-[#aeb9c9] hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff] disabled:cursor-not-allowed disabled:opacity-40' },
});

register('pagination-button-active', {
  base: { tw: 'bg-[#263954] text-[#c5d7ff] hover:bg-[#263954] hover:text-white' },
});

register('pagination-edge-button', {
  base: { tw: 'min-w-7 px-1.5 text-[#8494aa]' },
});

register('pagination-direction-button', {
  base: { tw: 'px-1.5 text-[#aeb9c9] sm:px-2 [&_span]:hidden sm:[&_span]:inline' },
});

register('pagination-ellipsis', {
  base: { tw: 'inline-flex h-8 min-w-6 items-center justify-center text-[10px] text-[var(--muted)]' },
});

register('pagination-outlined-demo', {
  base: { tw: 'rounded-lg border border-[#303a49] bg-[#111720] px-2 py-3 sm:p-4' },
});

register('mui-pagination-outlined .pagination-button', {
  base: { tw: 'border border-[#354154] bg-[#171f2c] hover:border-[#536985] hover:bg-[#202b3a]' },
});

register('mui-pagination-outlined .pagination-button-active', {
  base: { tw: 'border-[#789fe8] bg-[#263954] text-[#d2e0ff] hover:border-[#789fe8] hover:bg-[#263954]' },
});

register('mui-pagination-outlined .pagination-button:disabled', {
  base: { tw: 'border-[#2d3643] bg-[#141a23]' },
});

register('pagination-table-header', {
  base: { tw: 'flex flex-wrap items-end justify-between gap-3' },
});

register('pagination-size-control', {
  base: { tw: 'inline-flex items-center gap-2 text-[8px] text-[var(--muted)]' },
});

register('pagination-size-control select', {
  base: { tw: 'h-7 cursor-pointer rounded-md border border-[#354154] bg-[#171f2c] px-2 text-[8px] text-[#d3dceb] focus-visible:outline-2 focus-visible:outline-[#8baeff]' },
});

register('pagination-table-wrap', {
  base: { tw: 'w-full overflow-x-auto rounded-lg border border-[#303a49] bg-[#111720]' },
});

register('pagination-table', {
  base: { tw: 'w-full border-collapse text-left text-[8px] [&_th]:whitespace-nowrap [&_th]:border-b [&_th]:border-[#303a49] [&_th]:px-3 [&_th]:py-2 [&_th]:font-medium [&_th]:text-[var(--muted)] [&_td]:whitespace-nowrap [&_td]:border-b [&_td]:border-[#28313f] [&_td]:px-3 [&_td]:py-2 [&_tbody_tr:last-child_td]:border-0' },
});

register('pagination-table td:first-child', {
  base: { tw: '[&_strong]:block [&_strong]:text-[8px] [&_strong]:font-medium [&_strong]:text-[#d2dbe8] [&_small]:mt-0.5 [&_small]:block [&_small]:text-[7px] [&_small]:text-[var(--muted)]' },
});

register('pagination-status', {
  base: { tw: 'inline-flex rounded-full bg-[#2d3540] px-2 py-1 text-[7px] text-[#c0cad8]' },
});

register('pagination-status-in-progress', {
  base: { tw: 'bg-[#4a3a24] text-[#e8c47d]' },
});

register('pagination-status-in-review', {
  base: { tw: 'bg-[#263954] text-[#b8d0ff]' },
});

register('pagination-status-complete', {
  base: { tw: 'bg-[#203b32] text-[#9edab7]' },
});

register('pagination-table-footer', {
  base: { tw: 'flex flex-wrap items-center justify-between gap-2' },
});

register('pagination-table-footer .mui-pagination', {
  base: { tw: 'justify-start sm:justify-end' },
});
