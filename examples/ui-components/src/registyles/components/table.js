import { register } from 'registyle/collector';

register('table-wrap', {
  base: { tw: 'w-full overflow-x-auto rounded-lg border border-[var(--border)]' },
});

register('mini-table', {
  base: { tw: 'w-full min-w-[760px] border-collapse text-left text-[10px] [&_th]:border-b [&_th]:border-[var(--border)] [&_th]:bg-[var(--panel)] [&_th]:px-3 [&_th]:py-2.5 [&_th]:font-medium [&_th]:text-[var(--subtle)] [&_td]:border-b [&_td]:border-[var(--border)] [&_td]:px-3 [&_td]:py-3 [&_td]:text-[var(--muted)] [&_tbody_tr:last-child_td]:border-b-0' },
});

register('status-pill', {
  base: { tw: 'rounded-full bg-[#1b5e20]/30 px-2 py-1 text-[10px] text-[#81c784]' },
});

register('status-idle', {
  base: { tw: 'bg-[#ff9800]/15 text-[#ffcc80]' },
});

register('table-toolbar', {
  base: { tw: 'flex flex-wrap items-center justify-between gap-2' },
});

register('table-result-count', {
  base: { tw: 'text-[11px] font-medium text-[var(--text)]' },
});

register('table-toolbar-button', {
  base: { tw: 'inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--panel)] px-2 text-[9px] font-medium text-[var(--muted)] hover:bg-[var(--panel-raised)] hover:text-[var(--text)] disabled:cursor-not-allowed disabled:opacity-50' },
});

register('table-sort-button', {
  base: { tw: 'inline-flex cursor-pointer items-center gap-1.5 border-0 bg-transparent p-0 text-[9px] font-medium text-[var(--subtle)] hover:text-[var(--text)] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-[var(--rgi-blue)]' },
});

register('table-sort-button-active', {
  base: { tw: 'text-[#b8cbff]' },
});

register('table-check-cell', {
  base: { tw: 'w-9 !px-3' },
});

register('table-checkbox', {
  base: { tw: 'size-3.5 cursor-pointer accent-[#789df5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#789df5]' },
});

register('table-project', {
  base: { tw: 'flex min-w-[150px] flex-col gap-1' },
});

register('table-project strong', {
  base: { tw: 'text-[10px] font-medium text-[var(--text)]' },
});

register('table-project small', {
  base: { tw: 'font-mono text-[8px] text-[var(--subtle)]' },
});

register('table-owner', {
  base: { tw: 'inline-flex min-w-[125px] items-center gap-2 whitespace-nowrap text-[9px]' },
});

register('table-avatar', {
  base: { tw: 'inline-flex size-6 shrink-0 items-center justify-center rounded-full text-[8px] font-semibold' },
});

register('table-avatar-blue', {
  base: { tw: 'bg-[#243e68] text-[#c7d8ff]' },
});

register('table-avatar-violet', {
  base: { tw: 'bg-[#3c315f] text-[#ddd2ff]' },
});

register('table-avatar-green', {
  base: { tw: 'bg-[#214b3f] text-[#c5f0dd]' },
});

register('table-avatar-amber', {
  base: { tw: 'bg-[#594126] text-[#ffe0ae]' },
});

register('table-status', {
  base: { tw: 'inline-flex whitespace-nowrap rounded-full bg-[#1b5e20]/30 px-2 py-1 text-[8px] font-medium text-[#81c784]' },
});

register('table-status-review', {
  base: { tw: 'bg-[#463461] text-[#d6b8ff]' },
});

register('table-status-in-progress', {
  base: { tw: 'bg-[#203b68] text-[#a9c4ff]' },
});

register('table-status-planned', {
  base: { tw: 'bg-[#394557] text-[#c0cad8]' },
});

register('table-progress-heading', {
  base: { tw: 'w-[100px]' },
});

register('table-progress-cell', {
  base: { tw: 'min-w-[100px]' },
});

register('table-progress-value', {
  base: { tw: 'mb-1 block font-mono text-[8px] text-[var(--subtle)]' },
});

register('table-progress-track', {
  base: { tw: 'block h-1 w-full overflow-hidden rounded-full bg-[#283244]' },
});

register('table-progress-track i', {
  base: { tw: 'block h-full rounded-full bg-[#668bef]' },
});

register('table-row-selected', {
  base: { tw: 'bg-[#19253a] [&_td]:border-[#293955]' },
});

register('mini-table-dense td', {
  base: { tw: '!py-2' },
});

register('table-footer', {
  base: { tw: 'flex items-center justify-between gap-2 text-[9px] text-[var(--subtle)]' },
});

register('table-export-button', {
  base: { tw: 'inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-md border border-[var(--border)] bg-transparent px-2 text-[9px] font-medium text-[var(--muted)] hover:bg-[var(--panel-raised)] hover:text-[var(--text)]' },
});
