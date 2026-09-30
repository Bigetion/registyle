import { register } from 'registyle/collector';

register('tag', {
  base: {
    tw: 'inline-flex items-center gap-1.5 font-medium rounded-full transition-all text-[12px] px-2.5 py-[3px] bg-[var(--c-bg)] border border-[var(--c-border)] text-[var(--c-text-muted)]',
  },
  modifiers: {
    primary: { tw: 'bg-[var(--c-brand-light)] !text-[var(--c-brand)] !border-[rgba(214,83,61,.22)]' },
    success: { tw: 'bg-[var(--c-success-bg)] !text-[var(--c-success)] !border-[rgba(22,163,74,.2)]' },
    warning: { tw: 'bg-[var(--c-warning-bg)] !text-[var(--c-warning)] !border-[rgba(217,119,6,.2)]' },
    danger: { tw: 'bg-[var(--c-danger-bg)] !text-[var(--c-danger)] !border-[rgba(220,38,38,.2)]' },
    removable: { tw: 'pr-1' },
    'remove-btn': {
      tw: 'inline-flex items-center justify-center rounded-full cursor-pointer border-0 bg-transparent transition-colors p-0.5 text-inherit opacity-60 hover:opacity-100 hover:bg-[rgba(0,0,0,.1)]',
    },
  },
});