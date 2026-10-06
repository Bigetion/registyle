import { register } from 'registyle/collector';

register.group('rgi-number-field', {
  root: {
    tw: 'inline-flex min-h-10 items-stretch overflow-hidden rounded-md border border-[var(--border,#64748b)] bg-[var(--surface,#111827)] text-[var(--text,#edf2fb)] focus-within:border-[var(--rgi-blue,#547be8)] focus-within:ring-2 focus-within:ring-[var(--rgi-blue-soft,rgba(84,123,232,.25))]',
  },
  input: {
    tw: 'w-20 min-w-0 border-0 bg-transparent px-2 text-center text-sm text-[var(--text,#edf2fb)] outline-none disabled:cursor-not-allowed disabled:opacity-50',
  },
  button: {
    tw: 'min-w-9 cursor-pointer border-0 bg-transparent px-2 text-lg text-[var(--muted,#94a3b8)] hover:bg-[var(--surface-raised,#1f2937)] hover:text-[var(--text,#edf2fb)] focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-[var(--rgi-blue,#547be8)] disabled:cursor-not-allowed disabled:opacity-40',
  },
  unit: { tw: 'flex items-center px-2 text-sm text-[var(--muted,#94a3b8)]' },
});
