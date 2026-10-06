import { register } from 'registyle/collector';

register('skeleton-demo', {
  base: { tw: 'flex w-full max-w-[620px] flex-col gap-3' },
});

register('skeleton-preview-surface', {
  base: { tw: 'w-full rounded-lg border border-[var(--border)] bg-[#111720] p-4' },
});

register('skeleton-profile-card', {
  base: { tw: 'relative flex min-h-[92px] w-full items-start gap-3' },
});

register('skeleton-block', {
  base: { tw: 'block shrink-0 rounded bg-[#ffffff12]' },
});

register('skeleton-profile-avatar', {
  base: { tw: 'size-10 shrink-0 overflow-hidden rounded-full' },
});

register('skeleton-avatar', {
  base: { tw: 'size-full rounded-full' },
});

register('skeleton-profile-copy', {
  base: { tw: 'flex min-w-0 flex-1 flex-col items-start gap-2 pt-1' },
});

register('skeleton-title', {
  base: { tw: 'h-3 w-32 rounded' },
});

register('skeleton-subtitle', {
  base: { tw: 'h-2 w-44 max-w-full rounded' },
});

register('skeleton-copy', {
  base: { tw: 'h-2 w-full max-w-[300px] rounded' },
});

register('skeleton-copy-short', {
  base: { tw: 'w-3/4' },
});

register('skeleton-profile-action', {
  base: { tw: 'mt-1 h-7 w-16 rounded-md' },
});

register('skeleton-profile-card-loaded', {
  base: { tw: 'min-h-0' },
});

register('skeleton-profile-avatar-loaded', {
  base: { tw: 'inline-flex items-center justify-center bg-[#263650] text-[#a9c4ff]' },
});

register('skeleton-profile-copy strong', {
  base: { tw: 'text-[11px] font-semibold text-[var(--text)]' },
});

register('skeleton-profile-copy span', {
  base: { tw: 'text-[9px] text-[var(--muted)]' },
});

register('skeleton-profile-copy p', {
  base: { tw: 'm-0 max-w-[390px] text-[9px] leading-relaxed text-[#aab4c3]' },
});

register('skeleton-loaded-badge', {
  base: { tw: 'inline-flex shrink-0 items-center gap-1 rounded-full border border-[#285b2b] bg-[#162d18] px-2 py-1 text-[8px] font-medium text-[#a5d6a7]' },
});

register('skeleton-controls', {
  base: { tw: 'flex flex-wrap items-center gap-3' },
});

register('skeleton-variant-grid', {
  base: { tw: 'grid w-full grid-cols-2 gap-3 max-sm:grid-cols-1' },
});

register('skeleton-variant-card', {
  base: { tw: 'flex min-w-0 flex-col gap-2 rounded-lg border border-[var(--border)] bg-[#111720] p-3' },
});

register('skeleton-variant-image', {
  base: { tw: 'flex h-20 items-center justify-center gap-2 rounded-md bg-[#ffffff0c] text-[9px] text-[#778397]' },
});

register('skeleton-variant-title', {
  base: { tw: 'h-2.5 w-28 max-w-full rounded' },
});

register('skeleton-variant-line', {
  base: { tw: 'h-2 w-full rounded' },
});

register('skeleton-variant-line-short', {
  base: { tw: 'w-2/3' },
});

register('skeleton-variant-horizontal', {
  base: { tw: 'flex-row items-center' },
});

register('skeleton-variant-circle', {
  base: { tw: 'size-10 rounded-full' },
});

register('skeleton-variant-copy', {
  base: { tw: 'flex min-w-0 flex-1 flex-col gap-2' },
});

register('skeleton-variant-list', {
  base: { tw: 'col-span-2 gap-0 max-sm:col-span-1' },
});

register('skeleton-variant-row', {
  base: { tw: 'flex items-center gap-3 border-b border-[var(--border)] py-2.5 last:border-0' },
});

register('skeleton-variant-list-icon', {
  base: { tw: 'size-7 rounded-md' },
});

register('skeleton-animation-controls', {
  base: { tw: 'flex w-fit flex-wrap gap-1 rounded-lg border border-[var(--border)] bg-[#111720] p-1' },
});

register('skeleton-animation-option', {
  base: { tw: 'inline-flex h-7 cursor-pointer appearance-none items-center justify-center rounded-md border-0 bg-transparent px-3 text-[9px] font-medium text-[var(--muted)] shadow-none hover:bg-white/5 hover:text-[var(--text)] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#8baeff]' },
});

register('skeleton-animation-option-active', {
  base: { tw: 'bg-[#20304a] text-[#c5d7ff] hover:bg-[#20304a]' },
});

register('skeleton-animation-pulse .skeleton-block', {
  base: { tw: 'animate-pulse' },
});

register('skeleton-animation-wave .skeleton-block', {
  base: { tw: 'bg-[linear-gradient(90deg,#ffffff0c_25%,#ffffff20_50%,#ffffff0c_75%)] [animation:registyle-skeleton-wave_1.6s_ease-in-out_infinite] [background-size:200%_100%]' },
});

register('skeleton-animation-none .skeleton-block', {
  base: { tw: 'animate-none' },
});
