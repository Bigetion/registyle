import { register } from 'registyle/collector';

register('mui-button', {
  base: {
    tw: 'inline-flex h-9 cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap rounded border border-transparent px-4 text-[13px] font-medium uppercase tracking-[.02em] transition-[background-color,border-color,color,box-shadow,transform] duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--mui-blue)] enabled:active:translate-y-px disabled:cursor-not-allowed disabled:opacity-40',
  },
  modifiers: {
    contained: { tw: 'bg-[var(--mui-blue-dark)] text-white shadow-[0_2px_4px_rgba(72,111,216,.24)] enabled:hover:bg-[#6689ed] enabled:hover:shadow-[0_4px_12px_rgba(72,111,216,.3)]' },
    outlined: { tw: 'border border-[#607db9] bg-transparent text-[var(--mui-blue)] enabled:hover:border-[var(--mui-blue)] enabled:hover:bg-[var(--mui-blue-soft)]' },
    text: { tw: 'bg-transparent text-[var(--mui-blue)] enabled:hover:bg-[var(--mui-blue-soft)]' },
    small: { tw: '!h-8 gap-1.5 !px-3 !text-[11px]' },
    large: { tw: 'h-11 gap-2.5 px-5 text-sm' },
    'color-success': { tw: 'bg-[#276b53] text-white shadow-[0_2px_4px_rgba(39,107,83,.22)] enabled:hover:bg-[#328468]' },
    'color-warning': { tw: 'bg-[#a75c1b] text-white shadow-[0_2px_4px_rgba(167,92,27,.2)] enabled:hover:bg-[#c5752a]' },
    'color-danger': { tw: 'bg-[#a94650] text-white shadow-[0_2px_4px_rgba(169,70,80,.2)] enabled:hover:bg-[#c45b66]' },
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
