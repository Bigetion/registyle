import { register } from 'registyle/collector';

register('icon-gallery', {
  base: { tw: 'grid w-full grid-cols-[repeat(auto-fit,minmax(74px,1fr))] gap-2' },
});

register('icon-gallery button', {
  base: { tw: 'flex cursor-pointer flex-col items-center gap-2 rounded-md border border-[var(--border)] bg-transparent py-3 text-[var(--muted)] hover:bg-[var(--panel-raised)] hover:text-[var(--mui-blue)] [&_span]:text-[10px]' },
});

register('icon-search', {
  base: { tw: 'flex h-9 w-full max-w-[360px] items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 text-[var(--muted)] focus-within:border-[var(--mui-blue)]' },
});

register('icon-search input', {
  base: { tw: 'min-w-0 flex-1 border-0 bg-transparent text-xs text-[var(--text)] outline-none placeholder:text-[var(--muted)]' },
});

register('icon-search button', {
  base: { tw: 'inline-flex size-5 cursor-pointer items-center justify-center rounded border-0 bg-transparent p-0 text-[var(--muted)] hover:text-[var(--text)]' },
});

register('icon-category-list', {
  base: { tw: 'flex flex-wrap gap-1.5' },
});

register('icon-category', {
  base: { tw: 'h-7 cursor-pointer rounded-full border border-[var(--border)] bg-transparent px-2.5 text-[10px] font-medium text-[var(--muted)] hover:bg-[var(--panel-raised)] hover:text-[var(--text)]' },
});

register('icon-category-active', {
  base: { tw: 'border-transparent bg-[var(--mui-blue-dark)] text-white hover:bg-[var(--mui-blue-dark)] hover:text-white' },
});

register('icon-library-grid', {
  base: { tw: 'grid w-full grid-cols-[repeat(auto-fit,minmax(76px,1fr))] gap-2' },
});

register('icon-library-item', {
  base: { tw: 'flex min-h-[68px] cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-[var(--border)] bg-transparent px-1 py-2 text-[var(--muted)] hover:border-[var(--mui-blue)] hover:bg-[var(--panel-raised)] hover:text-[var(--mui-blue)] [&_span]:text-[9px]' },
});

register('icon-library-item-selected', {
  base: { tw: 'border-[#547be8] bg-[#19253a] text-[#b8cbff]' },
});

register('icon-empty-state', {
  base: { tw: 'col-span-full py-5 text-center text-xs text-[var(--muted)]' },
});

register('icon-color-grid', {
  base: { tw: 'flex flex-wrap items-center gap-3' },
});

register('icon-color-item', {
  base: { tw: 'flex min-w-[68px] flex-col items-center gap-2 text-[10px] text-[var(--muted)]' },
});

register('icon-color-swatch', {
  base: { tw: 'inline-flex size-11 items-center justify-center rounded-lg bg-[var(--panel-raised)] text-[var(--text)]' },
});

register('icon-tone-primary', {
  base: { tw: 'bg-[#1b2d52] text-[#a9c4ff]' },
});

register('icon-tone-success', {
  base: { tw: 'bg-[#18352c] text-[#7bd2a9]' },
});

register('icon-tone-warning', {
  base: { tw: 'bg-[#3a2d1d] text-[#f2c27b]' },
});

register('icon-tone-danger', {
  base: { tw: 'bg-[#3c2027] text-[#f08b98]' },
});

register('icon-tone-default', {
  base: { tw: 'bg-[var(--panel-raised)] text-[var(--muted)]' },
});

register('icon-action-row', {
  base: { tw: 'flex items-center gap-2' },
});

register('icon-action-button', {
  base: { tw: 'inline-flex size-9 cursor-pointer items-center justify-center rounded-md border border-[var(--border)] bg-[var(--panel)] text-[var(--muted)] hover:border-[var(--mui-blue)] hover:bg-[var(--panel-raised)] hover:text-[var(--text)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--mui-blue)]' },
});

register('icon-action-button-active', {
  base: { tw: 'border-[#75404d] bg-[#3c2027] text-[#f08b98]' },
});
