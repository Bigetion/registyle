import { register } from 'registyle/collector';

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

register('spin', {
  base: { tw: 'animate-spin' },
});

register.group('button-example', {
  section: { tw: 'flex w-full flex-col gap-3' },
  label: { tw: 'text-[9px] font-semibold uppercase tracking-[.14em] text-[var(--subtle)]' },
  row: { tw: 'flex flex-wrap items-center gap-3 [&_.mui-button]:normal-case [&_.mui-button]:tracking-normal' },
  'icon-button': {
    tw: 'inline-flex size-9 cursor-pointer items-center justify-center rounded-full border border-[var(--border)] bg-[var(--panel-raised)] text-[var(--muted)] transition-colors hover:border-[#566b92] hover:text-[var(--mui-blue)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--mui-blue)]',
  },
  status: { tw: 'text-[11px] text-[var(--muted)]' },
});
