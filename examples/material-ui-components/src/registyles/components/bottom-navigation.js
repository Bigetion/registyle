import { register } from 'registyle/collector';

register('bottom-navigation-demo', {
  base: { tw: 'flex w-full max-w-[470px] flex-col gap-3' },
});

register('bottom-navigation-device', {
  base: { tw: 'w-full overflow-hidden rounded-[18px] border border-[#344050] bg-[#0e141e] shadow-[0_14px_40px_rgba(0,0,0,.25)]' },
});

register('bottom-navigation-device-top', {
  base: { tw: 'flex h-8 items-center justify-between border-b border-white/[.04] px-4 text-[7px] font-medium text-[#aeb8c7]' },
});

register('bottom-navigation-status', {
  base: { tw: 'inline-flex items-center gap-1.5' },
});

register('bottom-navigation-status i', {
  base: { tw: 'size-1.5 rounded-full bg-[#79c9a1]' },
});

register('bottom-navigation-time', {
  base: { tw: 'tabular-nums text-[#8d99ab]' },
});

register('bottom-navigation-content', {
  base: { tw: 'flex min-h-[150px] items-center gap-3 px-5 py-5 max-sm:min-h-[130px] max-sm:px-4' },
});

register('bottom-navigation-content-icon', {
  base: { tw: 'inline-flex size-9 shrink-0 items-center justify-center rounded-xl border border-[#34445c] bg-[#202d40] text-[#adc6fa]' },
});

register('bottom-navigation-content-copy', {
  base: { tw: 'flex min-w-0 flex-1 flex-col gap-1 [&_strong]:text-[10px] [&_strong]:font-semibold [&_strong]:text-[var(--text)] [&_small]:text-[8px] [&_small]:leading-relaxed [&_small]:text-[var(--muted)]' },
});

register('bottom-navigation-unread', {
  base: { tw: 'inline-flex shrink-0 items-center gap-1 rounded-full bg-[#24344a] px-2 py-1 text-[7px] font-medium text-[#c1d3f4]' },
});

register('mui-bottom-navigation', {
  base: { tw: 'flex min-h-[62px] w-full items-stretch justify-around border-t border-[#2b3543] bg-[#171f2b] px-2 py-1' },
});

register('bottom-navigation-item', {
  base: { tw: 'relative flex min-w-0 flex-1 cursor-pointer appearance-none flex-col items-center justify-center gap-1 rounded-md border-0 bg-transparent px-2 py-1 text-[#8491a4] shadow-none transition-colors hover:bg-white/[.035] focus-visible:outline-2 focus-visible:outline-[#8baeff]' },
});

register('bottom-navigation-item-active', {
  base: { tw: 'text-[#b8ceff]' },
});

register('bottom-navigation-icon-wrap', {
  base: { tw: 'relative inline-flex size-6 items-center justify-center' },
});

register('bottom-navigation-label', {
  base: { tw: 'text-[7px] font-medium leading-none' },
});

register('bottom-navigation-item-active .bottom-navigation-label', {
  base: { tw: 'font-semibold text-[#c9d9f8]' },
});

register('bottom-navigation-compact-labels .bottom-navigation-item:not(.bottom-navigation-item-active) .bottom-navigation-label', {
  base: { tw: 'hidden' },
});

register('bottom-navigation-compact-labels .bottom-navigation-item-active .bottom-navigation-label', {
  base: { tw: 'block' },
});

register('bottom-navigation-icons-only .bottom-navigation-label', {
  base: { tw: 'sr-only' },
});

register('bottom-navigation-icons-only .bottom-navigation-item-active .bottom-navigation-icon-wrap', {
  base: { tw: 'rounded-full bg-[#293952] text-[#c9d9f8]' },
});

register('bottom-navigation-badge', {
  base: { tw: 'absolute -right-1 -top-0.5 inline-flex min-w-3.5 items-center justify-center rounded-full border border-[#171f2b] bg-[#e5747d] px-1 py-0.5 text-[6px] font-semibold leading-none text-white' },
});

register('bottom-navigation-home-indicator', {
  base: { tw: 'flex h-4 items-center justify-center bg-[#171f2b]' },
});

register('bottom-navigation-home-indicator span', {
  base: { tw: 'h-1 w-12 rounded-full bg-[#697588]' },
});

register('bottom-navigation-demo-footer', {
  base: { tw: 'flex flex-wrap items-center justify-between gap-2' },
});

register('bottom-navigation-demo-footer .preview-note', {
  base: { tw: 'text-[8px]' },
});

register('bottom-navigation-badge-legend', {
  base: { tw: 'inline-flex items-center gap-1.5 text-[8px] text-[var(--muted)]' },
});
