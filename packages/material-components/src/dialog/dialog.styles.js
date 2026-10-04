import { register } from 'registyle/collector';

register('mui-dialog-backdrop', {
  base: {
    tw: 'fixed inset-0 z-[1000] flex items-center justify-center overflow-y-auto bg-[var(--mui-dialog-backdrop,rgba(0,0,0,.58))] p-4',
  },
});
register('mui-dialog', {
  base: {
    tw: 'my-auto flex max-h-[min(90vh,48rem)] w-full max-w-lg flex-col overflow-y-auto rounded-xl border border-[var(--border,#273142)] bg-[var(--panel,#111824)] p-5 text-[var(--text,#edf2fb)] shadow-[0_24px_80px_rgba(0,0,0,.4)] outline-none',
  },
});
register('mui-dialog-header', { base: { tw: 'flex items-start justify-between gap-4' } });
register('mui-dialog-title', { base: { tw: 'm-0 text-lg font-semibold' } });
register('mui-dialog-close', {
  base: {
    tw: 'inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded border-0 bg-transparent p-0 text-lg text-[var(--muted,#a4afbf)] hover:bg-white/10 hover:text-[var(--text,#edf2fb)] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--mui-blue,#9bbcff)]',
  },
});
register('mui-dialog-description', {
  base: { tw: 'mt-2 text-sm leading-relaxed text-[var(--muted,#a4afbf)]' },
});
register('mui-dialog-content', { base: { tw: 'mt-4 min-h-0 text-sm leading-relaxed' } });
register('mui-dialog-actions', { base: { tw: 'mt-5 flex flex-wrap justify-end gap-2' } });
