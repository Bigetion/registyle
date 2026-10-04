import { register } from 'registyle/collector';

register('link-demo', {
  base: { tw: 'flex w-full max-w-[620px] flex-col gap-3' },
});

register('link-content-card', {
  base: { tw: 'flex w-full items-start gap-3 rounded-lg border border-[var(--border)] bg-[#111720] p-4' },
});

register('link-content-icon', {
  base: { tw: 'inline-flex size-8 shrink-0 items-center justify-center rounded-lg border border-[#34465f] bg-[#25354b] text-[#b6cdf7]' },
});

register('link-copy', {
  base: { tw: 'flex min-w-0 flex-1 flex-col gap-2' },
});

register('link-copy strong', {
  base: { tw: 'text-[10px] font-semibold text-[var(--text)]' },
});

register('link-copy p', {
  base: { tw: 'm-0 max-w-[470px] text-[8px] leading-relaxed text-[var(--muted)]' },
});

register('link-inline-row', {
  base: { tw: 'mt-1 flex flex-wrap items-center gap-2.5' },
});

register('mui-link-underlined', {
  base: { tw: 'underline' },
});

register('mui-link-subtle', {
  base: { tw: 'text-[#bac5d4] hover:text-white' },
});

register('mui-link-external', {
  base: { tw: 'text-[#87d4c2]' },
});

register('link-inline-divider', {
  base: { tw: 'h-3 w-px bg-[#394557]' },
});

register('link-variant-list', {
  base: { tw: 'flex w-full flex-col rounded-lg border border-[var(--border)] bg-[#111720]' },
});

register('link-variant-row', {
  base: { tw: 'flex min-h-11 flex-wrap items-center justify-between gap-3 border-b border-[#293342] px-3.5 py-2 last:border-b-0 [&>span]:text-[8px] [&>span]:text-[var(--muted)]' },
});

register('link-variant-row .mui-link', {
  base: { tw: 'text-[8px]' },
});

register('link-accessibility-card', {
  base: { tw: 'flex w-full items-start gap-3 rounded-lg border border-[var(--border)] bg-[#111720] p-4' },
});

register('link-accessibility-row', {
  base: { tw: 'flex flex-wrap items-center gap-4' },
});

register('mui-link-disabled', {
  base: { tw: 'cursor-not-allowed text-[#6f7b8d] no-underline hover:text-[#6f7b8d] hover:no-underline' },
});

register('link-demo-footer', {
  base: { tw: 'flex flex-wrap items-center justify-between gap-2' },
});

register('link-demo-footer .preview-note', {
  base: { tw: 'max-w-[440px] text-[8px]' },
});

register('link-toggle-button', {
  base: { tw: 'cursor-pointer rounded border border-[#354154] bg-transparent px-2.5 py-1.5 text-[8px] font-medium text-[#b9c9e3] hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-[#8baeff]' },
});
