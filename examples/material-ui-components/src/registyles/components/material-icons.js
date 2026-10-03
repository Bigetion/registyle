import { register } from 'registyle/collector';

register('material-icons-gallery button', {
  base: {
    tw: 'bg-[linear-gradient(145deg,#182235,#111824)] text-[#b8cbff] shadow-[inset_0_0_0_1px_rgba(155,188,255,.08)] hover:border-[#526b9a]',
  },
});

register('material-icon-grid', {
  base: { tw: 'grid w-full grid-cols-[repeat(auto-fit,minmax(82px,1fr))] gap-2' },
});

register('material-icon-tile', {
  base: { tw: 'flex min-h-[82px] cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-[#29364c] bg-[linear-gradient(145deg,#182235,#111824)] px-1 py-3 text-[#aebcda] shadow-[inset_0_0_0_1px_rgba(155,188,255,.04)] hover:border-[#526b9a] hover:text-[#d3dfff] [&_span]:text-[9px]' },
});

register('material-icon-glyph', {
  base: { tw: 'inline-flex size-9 items-center justify-center rounded-full text-[#b8cbff]' },
});

register('material-icon-tile-selected', {
  base: { tw: 'border-[#547be8] bg-[linear-gradient(145deg,#24395d,#18253b)] text-[#e0e9ff] shadow-[inset_0_0_0_1px_rgba(155,188,255,.12)]' },
});

register('material-icon-tile-selected .material-icon-glyph', {
  base: { tw: 'bg-[#304d7e] text-white' },
});

register('material-icon-selection', {
  base: { tw: 'inline-flex w-fit items-center gap-2 rounded-md border border-[#29364c] bg-[#141e2d] px-2.5 py-1.5 text-[10px] font-medium text-[#c7d5f5]' },
});

register('material-icon-size-list', {
  base: { tw: 'flex w-full max-w-[460px] flex-col divide-y divide-[var(--border)] rounded-lg border border-[var(--border)] bg-[var(--panel)] px-3' },
});

register('material-icon-size-item', {
  base: { tw: 'flex min-h-[62px] items-center gap-3 py-2' },
});

register('material-icon-size-glyph', {
  base: { tw: 'inline-flex size-10 shrink-0 items-center justify-center rounded-md bg-[#1a2639] text-[#b8cbff]' },
});

register('material-icon-size-item span', {
  base: { tw: 'flex min-w-0 flex-1 flex-col gap-1' },
});

register('material-icon-size-item strong', {
  base: { tw: 'text-[11px] font-medium text-[var(--text)]' },
});

register('material-icon-size-item small', {
  base: { tw: 'text-[9px] text-[var(--muted)]' },
});

register('material-icon-size-item code', {
  base: { tw: 'font-mono text-[10px] text-[#9eb6e9]' },
});

register('material-icon-toolbar', {
  base: { tw: 'flex flex-wrap items-center gap-1 rounded-lg border border-[#29364c] bg-[#141e2d] p-1.5' },
});

register('material-icon-toolbar button', {
  base: { tw: 'relative inline-flex size-9 cursor-pointer items-center justify-center rounded-md border-0 bg-transparent text-[#aebcda] hover:bg-[#24334b] hover:text-[#e0e9ff] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#789df5]' },
});

register('material-icon-toolbar .material-icon-cart', {
  base: { tw: 'mr-1' },
});

register('material-icon-cart span', {
  base: { tw: 'absolute -right-0.5 -top-0.5 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-[#547be8] px-1 text-[8px] font-bold leading-none text-white' },
});

register('material-icon-action-active', {
  base: { tw: 'bg-[#3c2027] text-[#f08b98] hover:bg-[#49262f] hover:text-[#ffb4be]' },
});
