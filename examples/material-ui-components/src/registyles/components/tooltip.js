import { register } from 'registyle/collector';

register('tooltip-surface', {
  base: { tw: 'z-50 max-w-[240px] rounded-md border border-[#ffffff12] bg-[#252c38] px-2.5 py-1.5 text-[10px] leading-relaxed text-[#eef2fb] shadow-[0_8px_24px_#0009]' },
});

register('tooltip-anchor', {
  base: { tw: 'inline-flex' },
});

register('tooltip-demo', {
  base: { tw: 'flex min-h-[88px] w-full flex-wrap items-center justify-center gap-3' },
});

register('tooltip-trigger', {
  base: { tw: 'inline-flex cursor-pointer items-center justify-center rounded-md border border-[var(--border)] bg-[var(--panel)] text-[var(--text)] transition-colors hover:border-[#547be8] hover:bg-[var(--panel-raised)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#789df5]' },
});

register('tooltip-trigger-basic', {
  base: { tw: 'h-9 px-3 text-[10px] font-medium' },
});

register('tooltip-trigger-rich', {
  base: { tw: 'h-9 gap-2 px-3 text-[10px] font-medium' },
});

register('tooltip-placement-demo', {
  base: { tw: 'flex-col gap-3' },
});

register('tooltip-placement-picker', {
  base: { tw: 'flex flex-wrap items-center justify-center gap-1 rounded-md border border-[var(--border)] bg-[var(--panel)] p-1' },
});

register('tooltip-placement-button', {
  base: { tw: 'h-6 cursor-pointer rounded border-0 bg-transparent px-2 text-[9px] capitalize text-[var(--muted)] hover:bg-[var(--panel-raised)] hover:text-[var(--text)]' },
});

register('tooltip-placement-active', {
  base: { tw: 'bg-[#24385c] text-[#c7d8ff] hover:bg-[#24385c] hover:text-white' },
});

register('tooltip-surface-rich', {
  base: { tw: 'max-w-[260px] p-0' },
});

register('tooltip-rich-content', {
  base: { tw: 'flex items-start gap-2.5 p-3' },
});

register('tooltip-rich-content > span:nth-child(2)', {
  base: { tw: 'flex min-w-0 flex-1 flex-col gap-1.5' },
});

register('tooltip-rich-content strong', {
  base: { tw: 'text-[10px] font-semibold text-white' },
});

register('tooltip-rich-content small', {
  base: { tw: 'text-[9px] leading-relaxed text-[#b3bfd1]' },
});

register('tooltip-rich-icon', {
  base: { tw: 'inline-flex size-7 shrink-0 items-center justify-center rounded-md bg-[#26395b] text-[#a9c4ff]' },
});

register('tooltip-rich-check', {
  base: { tw: 'mt-0.5 shrink-0 text-[#7bd2a9]' },
});

register('tooltip-shortcut', {
  base: { tw: 'mt-1 inline-flex items-center gap-1 text-[8px] text-[#8795aa]' },
});

register('tooltip-shortcut kbd', {
  base: { tw: 'rounded border border-[#3c4655] bg-[#1a202a] px-1 py-0.5 font-mono text-[8px] text-[#d4dcec]' },
});
