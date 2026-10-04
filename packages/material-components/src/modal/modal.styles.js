import { register } from 'registyle/collector';

register('rgi-modal-backdrop', {
  base: {
    tw: 'fixed inset-0 z-[1000] flex items-center justify-center overflow-y-auto bg-black/50 p-4',
  },
});
register('rgi-modal', {
  base: {
    tw: 'max-h-[calc(100dvh-2rem)] w-full max-w-lg overflow-auto rounded-lg bg-[var(--surface,#fff)] p-6 text-[var(--text,#20242b)] shadow-[0_16px_48px_rgba(0,0,0,.25)] focus:outline-none',
  },
});
