import { register } from 'registyle/collector';

register('mui-button', {
  base: {
    tw: 'inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded border border-transparent px-4 text-[13px] font-medium uppercase tracking-[.02em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--mui-blue)] disabled:cursor-not-allowed disabled:opacity-40',
  },
  modifiers: {
    contained: { tw: 'bg-[var(--mui-blue-dark)] text-white shadow-[0_2px_4px_#0005] hover:bg-[#1565c0]' },
    outlined: { tw: 'border border-[var(--mui-blue)] bg-transparent text-[var(--mui-blue)] hover:bg-[var(--mui-blue-soft)]' },
    text: { tw: 'bg-transparent text-[var(--mui-blue)] hover:bg-[var(--mui-blue-soft)]' },
  },
});

register('mui-icon-button', {
  base: {
    tw: 'inline-flex size-9 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent text-[var(--muted)] hover:bg-[#ffffff12] hover:text-white',
  },
});

register.group('favorite-button', {
  root: {
    tw: 'inline-flex size-9 items-center justify-center rounded-full text-[var(--muted)] transition-colors hover:bg-[#ffffff12] hover:text-[#ef5350]',
  },
  active: { tw: 'text-[#ef5350]' },
});

register('icon-button-bordered', {
  base: { tw: 'border border-[var(--border)]' },
});

register('control-item', {
  base: { tw: 'flex cursor-pointer items-center gap-2.5 text-[13px] text-[var(--text)]' },
});

register('control-separator', {
  base: { tw: 'mx-2 h-9 w-px bg-[var(--border)]' },
});

register('vertical-divider', {
  base: { tw: 'mx-1 h-9 w-px' },
});

register('color-success', {
  base: { tw: 'bg-[#2e7d32] text-white hover:bg-[#1b5e20]' },
});

register('color-warning', {
  base: { tw: 'bg-[#ed6c02] text-white hover:bg-[#e65100]' },
});

register('color-danger', {
  base: { tw: 'bg-[#d32f2f] text-white hover:bg-[#c62828]' },
});

register('spin', {
  base: { tw: 'animate-spin' },
});
