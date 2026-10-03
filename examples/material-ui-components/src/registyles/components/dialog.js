import { register } from 'registyle/collector';

register('dialog-demo', {
  base: { tw: 'flex items-center gap-4' },
});

register('dialog-overlay', {
  base: { tw: 'fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4' },
});

register('dialog-box', {
  base: { tw: 'relative w-full max-w-[390px] rounded-lg border border-[var(--border)] bg-[var(--panel-raised)] p-6 shadow-2xl [&_h3]:mb-2 [&_h3]:text-lg [&_h3]:font-medium [&_p]:text-xs [&_p]:leading-5 [&_p]:text-[var(--muted)]' },
});

register('dialog-actions', {
  base: { tw: 'mt-6 flex justify-end gap-2' },
});
