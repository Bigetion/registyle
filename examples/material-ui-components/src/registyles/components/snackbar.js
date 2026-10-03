import { register } from 'registyle/collector';

register('snackbar-demo', {
  base: { tw: 'flex w-full max-w-[620px] flex-col gap-3' },
});

register('snackbar-stage', {
  base: { tw: 'flex min-h-[76px] w-full items-end justify-center rounded-lg border border-[var(--border)] bg-[#0d121b] p-3' },
});

register('snackbar-position-demo', {
  base: { tw: 'gap-3' },
});

register('snackbar-position-controls', {
  base: { tw: 'flex flex-wrap gap-1 rounded-lg border border-[var(--border)] bg-[#111720] p-1' },
});

register('snackbar-position-option', {
  base: { tw: 'inline-flex h-7 cursor-pointer appearance-none items-center justify-center rounded-md border-0 bg-transparent px-3 text-[9px] font-medium text-[var(--muted)] shadow-none hover:bg-white/5 hover:text-[var(--text)] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#8baeff]' },
});

register('snackbar-position-option-active', {
  base: { tw: 'bg-[#20304a] text-[#c5d7ff] hover:bg-[#20304a]' },
});

register('snackbar-stage-start', {
  base: { tw: 'justify-start' },
});

register('snackbar-stage-center', {
  base: { tw: 'justify-center' },
});

register('snackbar-stage-end', {
  base: { tw: 'justify-end' },
});

register('mui-snackbar', {
  base: { tw: 'flex w-full max-w-[440px] items-center gap-2.5 rounded-lg border border-[#3a424e] bg-[#252a32] px-3 py-2.5 text-[10px] text-white shadow-[0_10px_30px_rgba(0,0,0,.35)]' },
});

register('snackbar-icon', {
  base: { tw: 'inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-[#244336] text-[#8cddb3]' },
});

register('snackbar-message', {
  base: { tw: 'min-w-0 flex-1 leading-relaxed' },
});

register('snackbar-action', {
  base: { tw: 'inline-flex h-7 shrink-0 cursor-pointer appearance-none items-center justify-center rounded border-0 bg-transparent px-2 text-[9px] font-semibold tracking-wide text-[#a9c4ff] shadow-none hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#8baeff]' },
});

register('snackbar-dismiss', {
  base: { tw: 'inline-flex size-7 shrink-0 cursor-pointer appearance-none items-center justify-center rounded border-0 bg-transparent p-0 text-[#aab3c0] shadow-none hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#8baeff]' },
});

register('snackbar-controls', {
  base: { tw: 'flex flex-wrap items-center gap-3' },
});

register('snackbar-feedback', {
  base: { tw: 'text-[9px] leading-relaxed text-[#9edab7]' },
});

register('snackbar-restore', {
  base: { tw: 'inline-flex w-fit cursor-pointer appearance-none items-center gap-1.5 rounded border-0 bg-transparent p-0 text-[9px] font-medium text-[#a9c4ff] shadow-none hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8baeff]' },
});
