import { register } from 'registyle/collector';

register('card-demo', {
  base: { tw: 'w-full max-w-[360px]' },
});

register('mui-card', {
  base: { tw: 'w-full overflow-hidden rounded-xl border border-[var(--border)] bg-[#141b26] shadow-[0_12px_30px_rgba(0,0,0,.18)]' },
});

register('project-card', {
  base: { tw: 'max-w-[350px] p-4' },
});

register('card-project-top', {
  base: { tw: 'flex items-center justify-between' },
});

register('card-project-icon', {
  base: { tw: 'inline-flex size-8 items-center justify-center rounded-lg border border-[#344358] bg-[#202d40] text-[#a9c4ff]' },
});

register('card-more-button', {
  base: { tw: 'inline-flex size-7 cursor-pointer items-center justify-center rounded-md border-0 bg-transparent p-0 text-[#8995a7] hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff]' },
});

register('card-copy', {
  base: { tw: 'flex flex-col items-start gap-2' },
});

register('card-eyebrow', {
  base: { tw: 'text-[7px] font-semibold tracking-[.16em] text-[#8694a9]' },
});

register('card-copy h3', {
  base: { tw: 'm-0 text-[12px] font-semibold tracking-tight text-[var(--text)]' },
});

register('card-copy p', {
  base: { tw: 'm-0 text-[9px] leading-relaxed text-[var(--muted)]' },
});

register('card-project-top + .card-copy', {
  base: { tw: 'mt-4' },
});

register('card-project-meta', {
  base: { tw: 'mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-[var(--border)] pt-3 text-[8px] text-[var(--muted)]' },
});

register('card-status', {
  base: { tw: 'inline-flex items-center gap-1.5 rounded-full border border-[#5b4a2b] bg-[#2d281d] px-2 py-1 text-[#dfbd78]' },
});

register('card-status i', {
  base: { tw: 'size-1.5 rounded-full bg-[#e3b85f]' },
});

register('card-team', {
  base: { tw: 'inline-flex items-center gap-1.5' },
});

register('card-project-footer', {
  base: { tw: 'mt-3 flex items-center justify-between gap-3' },
});

register('card-avatar-stack', {
  base: { tw: 'flex items-center [&_span]:-ml-1.5 [&_span:first-child]:ml-0 [&_span]:inline-flex [&_span]:size-6 [&_span]:items-center [&_span]:justify-center [&_span]:rounded-full [&_span]:border-2 [&_span]:border-[#141b26] [&_span]:bg-[#344358] [&_span]:text-[6px] [&_span]:font-semibold [&_span]:text-[#e0e8f4] [&_i]:-ml-1.5 [&_i]:inline-flex [&_i]:size-6 [&_i]:items-center [&_i]:justify-center [&_i]:rounded-full [&_i]:border-2 [&_i]:border-[#141b26] [&_i]:bg-[#252e3c] [&_i]:text-[6px] [&_i]:not-italic [&_i]:text-[#aab4c3]' },
});

register('card-open-button', {
  base: { tw: 'inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-md border border-[#354358] bg-transparent px-2.5 text-[8px] font-medium text-[#c4d4f2] hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-[#8baeff]' },
});

register('action-card', {
  base: { tw: 'max-w-[390px] p-4' },
});

register('card-author', {
  base: { tw: 'flex items-center gap-2.5' },
});

register('card-author-avatar', {
  base: { tw: 'inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-[#49586c] bg-[#2a394e] text-[8px] font-semibold text-[#d8e4f7]' },
});

register('card-author > span:nth-child(2)', {
  base: { tw: 'flex min-w-0 flex-1 flex-col gap-0.5 [&_strong]:text-[9px] [&_strong]:font-semibold [&_strong]:text-[var(--text)] [&_small]:text-[7px] [&_small]:text-[var(--muted)]' },
});

register('action-card .card-copy', {
  base: { tw: 'mt-4' },
});

register('card-inline-tags', {
  base: { tw: 'mt-3 flex items-center gap-2 [&_span]:rounded-full [&_span]:border [&_span]:border-[#364151] [&_span]:px-2 [&_span]:py-1 [&_span]:text-[7px] [&_span]:text-[#aab5c5]' },
});

register('card-action-row', {
  base: { tw: 'mt-3 flex items-center gap-1 border-t border-[var(--border)] pt-2' },
});

register('card-inline-action', {
  base: { tw: 'inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-md border-0 bg-transparent px-2 text-[8px] font-medium text-[#aab5c5] hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff]' },
});

register('card-inline-action-active', {
  base: { tw: 'text-[#f28da0]' },
});

register('media-card', {
  base: { tw: 'max-w-[350px]' },
});

register('card-media-visual', {
  base: { tw: 'relative flex h-36 items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#1c2a3b_0%,#344768_52%,#273144_100%)]' },
});

register('card-media-orbit', {
  base: { tw: 'absolute rounded-full border border-[#b6cbff]/20' },
});

register('card-media-orbit-one', {
  base: { tw: 'size-44' },
});

register('card-media-orbit-two', {
  base: { tw: 'size-28' },
});

register('card-media-art', {
  base: { tw: 'relative inline-flex size-14 items-center justify-center rounded-2xl border border-[#b6cbff]/30 bg-[#d5e1f1]/10 text-[#cfddff] shadow-[0_10px_40px_rgba(0,0,0,.25)]' },
});

register('card-media-label', {
  base: { tw: 'absolute bottom-3 left-3 text-[7px] font-semibold tracking-[.16em] text-[#d9e4f6]/75' },
});

register('card-media-content', {
  base: { tw: 'p-4' },
});

register('card-media-heading', {
  base: { tw: 'flex items-center justify-between gap-2 [&_span]:text-[7px] [&_span]:font-semibold [&_span]:tracking-[.12em] [&_span:first-child]:text-[#a9c4ff] [&_span:last-child]:text-[var(--muted)]' },
});

register('card-media-content h3', {
  base: { tw: 'mt-2.5 text-[11px]' },
});

register('card-media-content p', {
  base: { tw: 'mt-2' },
});

register('card-media-footer', {
  base: { tw: 'mt-3 flex items-center justify-between border-t border-[var(--border)] pt-3' },
});

register('card-media-author', {
  base: { tw: 'inline-flex items-center gap-2 text-[8px] text-[#b8c2d0] [&_.card-author-avatar]:size-6 [&_.card-author-avatar]:text-[7px]' },
});
