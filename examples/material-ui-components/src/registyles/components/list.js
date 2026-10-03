import { register } from 'registyle/collector';

register('demo-list', {
  base: { tw: 'w-full max-w-[500px] overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--panel)]' },
});

register('demo-list button', {
  base: { tw: 'flex w-full cursor-pointer items-center gap-3 border-0 border-b border-[var(--border)] bg-transparent px-3 py-3 text-left text-[var(--muted)] transition-colors hover:bg-[#ffffff08] last:border-b-0' },
});

register('demo-list-item', {
  base: { tw: 'flex items-center gap-3 border-b border-[var(--border)] px-3 py-3 last:border-b-0' },
});

register('demo-list-copy', {
  base: { tw: 'flex min-w-0 flex-1 flex-col gap-1' },
});

register('demo-list-copy strong', {
  base: { tw: 'truncate text-xs font-medium text-[var(--text)]' },
});

register('demo-list-copy small', {
  base: { tw: 'truncate text-[10px] text-[var(--subtle)]' },
});

register('demo-list-icon', {
  base: { tw: 'inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-[var(--panel-raised)] text-[var(--muted)]' },
});

register('demo-list-item-active', {
  base: { tw: 'bg-[#19253a] hover:bg-[#1d2b43] [&_.demo-list-icon]:bg-[#253c63] [&_.demo-list-icon]:text-[#b8cbff]' },
});

register('demo-list-trailing', {
  base: { tw: 'shrink-0 text-[var(--subtle)]' },
});

register('demo-list-messages', {
  base: { tw: 'max-w-[500px]' },
});

register('demo-list-message', {
  base: { tw: 'min-h-[70px]' },
});

register('demo-list-avatar', {
  base: { tw: 'inline-flex size-9 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold' },
});

register('avatar-blue', {
  base: { tw: 'bg-[#243e68] text-[#c7d8ff]' },
});

register('avatar-violet', {
  base: { tw: 'bg-[#3c315f] text-[#ddd2ff]' },
});

register('avatar-green', {
  base: { tw: 'bg-[#214b3f] text-[#c5f0dd]' },
});

register('demo-list-time', {
  base: { tw: 'shrink-0 self-start pt-0.5 text-[9px] tabular-nums text-[var(--subtle)]' },
});

register('demo-list-footer', {
  base: { tw: 'flex items-center gap-2 px-3 py-2.5 text-[9px] text-[var(--subtle)]' },
});

register('list-switch', {
  base: { tw: 'inline-flex h-[18px] w-8 shrink-0 items-center rounded-full bg-[#394557] p-0.5 transition-colors' },
});

register('list-switch i', {
  base: { tw: 'size-3.5 rounded-full bg-[#aab5c5] transition-transform' },
});

register('list-switch-on', {
  base: { tw: 'bg-[#456cc4] [&_i]:translate-x-3 [&_i]:bg-white' },
});

register('demo-list-setting', {
  base: { tw: 'min-h-[64px] hover:bg-[#ffffff08] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--mui-blue)]' },
});
