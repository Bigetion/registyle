import { register } from 'registyle/collector';

register('badge', {
  base: {
    tw: 'inline-flex items-center gap-1 font-semibold rounded-full text-[11px] px-2 py-0.5',
  },
  modifiers: {
    default:     { tw: 'text-[var(--c-text-muted)] bg-[#edf0eb]' },
    primary:     { tw: 'bg-[var(--c-brand-light)] text-[var(--c-brand)]' },
    success:     { tw: 'bg-[var(--c-success-bg)] text-[var(--c-success)]' },
    warning:     { tw: 'bg-[var(--c-warning-bg)] text-[var(--c-warning)]' },
    danger:      { tw: 'bg-[var(--c-danger-bg)] text-[var(--c-danger)]' },
    info:        { tw: 'bg-[var(--c-info-bg)] text-[var(--c-info)]' },
    outline:     { tw: 'border border-current text-[var(--c-text-muted)] bg-transparent' },
    dot:         { tw: 'size-2 rounded-full p-0 shrink-0' },
    'dot-primary': { tw: 'bg-[var(--c-brand)]' },
    'dot-success': { tw: 'bg-[var(--c-success)]' },
    'dot-warning': { tw: 'bg-[var(--c-warning)]' },
    'dot-danger':  { tw: 'bg-[var(--c-danger)]' },
    sm: { tw: 'text-[10px] px-1.5 py-px' },
    lg: { tw: 'text-xs px-2.5 py-[3px]' },
  },
});
