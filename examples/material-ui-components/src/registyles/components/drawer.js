import { register } from 'registyle/collector';

register('drawer-demo', {
  base: { tw: 'flex items-center gap-3' },
});

register('drawer-overlay', {
  base: { tw: 'fixed inset-0 z-[60] bg-black/55' },
});

register('drawer-panel', {
  base: { tw: 'flex h-full w-[min(290px,80vw)] flex-col gap-2 border-r border-[var(--border)] bg-[var(--panel)] p-5 shadow-2xl [&_strong]:mb-3 [&_strong]:text-sm [&_button:not(.floating-close)]:flex [&_button:not(.floating-close)]:cursor-pointer [&_button:not(.floating-close)]:items-center [&_button:not(.floating-close)]:gap-3 [&_button:not(.floating-close)]:border-0 [&_button:not(.floating-close)]:bg-transparent [&_button:not(.floating-close)]:px-3 [&_button:not(.floating-close)]:py-3 [&_button:not(.floating-close)]:text-left [&_button:not(.floating-close)]:text-xs [&_button:not(.floating-close)]:text-[var(--muted)] [&_button:not(.floating-close):hover]:bg-[var(--panel-raised)]' },
});
