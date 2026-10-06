import { register } from 'registyle/collector';

register.group('rgi-autocomplete', {
  root: { tw: 'relative block w-full text-[var(--text,#edf2fb)]' },
  input: {
    tw: 'h-10 w-full rounded-md border border-[var(--border,#64748b)] bg-[var(--surface,#111827)] px-3 text-sm text-[var(--text,#edf2fb)] placeholder:text-[var(--muted,#94a3b8)] focus:border-[var(--rgi-blue,#547be8)] focus:outline-none focus:ring-2 focus:ring-[var(--rgi-blue-soft,rgba(84,123,232,.25))] disabled:cursor-not-allowed disabled:opacity-50',
  },
  listbox: {
    tw: 'absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border border-[var(--border,#64748b)] bg-[var(--surface-raised,#1f2937)] p-1 shadow-lg',
  },
  option: { tw: 'cursor-pointer rounded px-3 py-2 text-sm text-[var(--text,#edf2fb)]' },
  'option-active': { tw: 'bg-[var(--rgi-blue-soft,rgba(84,123,232,.2))]' },
  description: { tw: 'ml-2 text-xs text-[var(--muted,#94a3b8)]' },
  empty: { tw: 'px-3 py-2 text-sm text-[var(--muted,#94a3b8)]' },
});
