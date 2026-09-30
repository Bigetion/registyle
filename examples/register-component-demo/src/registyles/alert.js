import { register } from 'registyle/collector';

register('alert', {
  base: {
    tw: 'flex items-start gap-3 rounded-md px-4 py-3 text-sm leading-[1.5] border border-transparent',
  },
  modifiers: {
    info: { tw: 'bg-[var(--c-info-bg)] text-[var(--c-info)] border-[rgba(37,99,123,.2)]' },
    success: { tw: 'bg-[var(--c-success-bg)] text-[var(--c-success)] border-[rgba(40,116,81,.2)]' },
    warning: { tw: 'bg-[var(--c-warning-bg)] text-[var(--c-warning)] border-[rgba(169,107,22,.2)]' },
    danger: { tw: 'bg-[var(--c-danger-bg)] text-[var(--c-danger)] border-[rgba(189,69,61,.2)]' },
  },
});

register.group('alert', {
  icon: { tw: 'flex-shrink-0 mt-0.5' },
  body: { tw: 'flex-1 min-w-0' },
  title: { tw: 'font-semibold mb-0.5 text-sm' },
  desc: { tw: 'text-[13px] opacity-[0.85]' },
});