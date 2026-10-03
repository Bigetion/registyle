import { register } from 'registyle/collector';

register('dialog-demo', {
  base: { tw: 'flex min-h-[100px] w-full flex-wrap items-center justify-center gap-3' },
});

register('dialog-overlay', {
  base: { tw: 'fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-[#05070be8] p-4 backdrop-blur-[3px] max-sm:items-end max-sm:p-0' },
});

register('dialog-box', {
  base: { tw: 'relative max-h-[90vh] w-full max-w-[420px] overflow-y-auto rounded-xl border border-[#303b50] bg-[#121925] p-5 shadow-[0_24px_80px_rgba(0,0,0,.65)] max-sm:rounded-b-none max-sm:rounded-t-2xl max-sm:p-4 [&_h3]:text-sm [&_h3]:font-semibold [&_p]:text-[10px] [&_p]:leading-relaxed [&_p]:text-[var(--muted)]' },
});

register('dialog-actions', {
  base: { tw: 'mt-5 flex flex-wrap justify-end gap-2' },
});

register('dialog-heading', {
  base: { tw: 'flex items-start gap-3' },
});

register('dialog-heading-icon', {
  base: { tw: 'inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#243653] text-[#a9c4ff]' },
});

register('dialog-heading-icon-danger', {
  base: { tw: 'bg-[#48252b] text-[#ff9aa5]' },
});

register('dialog-heading-copy', {
  base: { tw: 'flex min-w-0 flex-1 flex-col gap-1.5 pt-0.5' },
});

register('dialog-close', {
  base: { tw: 'inline-flex size-7 shrink-0 cursor-pointer appearance-none items-center justify-center rounded-md border-0 bg-transparent p-0 text-[#8c98aa] hover:bg-[#ffffff10] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#8baeff]' },
});

register('dialog-box-danger', {
  base: { tw: 'border-[#51363c]' },
});

register('dialog-box-fullscreen', {
  base: { tw: 'max-w-[620px]' },
});

register('dialog-editor', {
  base: { tw: 'mt-5 flex flex-col gap-4' },
});

register('dialog-field', {
  base: { tw: 'flex flex-col gap-1.5 text-[9px] font-medium text-[#c4cede]' },
});

register('dialog-field input', {
  base: { tw: 'h-9 rounded-md border border-[#303b50] bg-[#0d131d] px-3 text-[10px] text-[var(--text)] outline-none placeholder:text-[#66748a] focus:border-[#6c8fe1] focus:ring-2 focus:ring-[#547be8]/15' },
});

register('dialog-field textarea', {
  base: { tw: 'min-h-[110px] resize-y rounded-md border border-[#303b50] bg-[#0d131d] px-3 py-2.5 text-[10px] leading-relaxed text-[var(--text)] outline-none placeholder:text-[#66748a] focus:border-[#6c8fe1] focus:ring-2 focus:ring-[#547be8]/15' },
});

register('dialog-audience', {
  base: { tw: 'flex flex-wrap items-center gap-1.5 text-[9px] text-[var(--muted)]' },
});

register('dialog-audience-dot', {
  base: { tw: 'size-1.5 rounded-full bg-[#7bd6b0]' },
});

register('dialog-audience strong', {
  base: { tw: 'font-medium text-[var(--text)]' },
});
