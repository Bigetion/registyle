import { register } from 'registyle/collector';

register('rgi-select-field', {
  base: { tw: 'flex min-w-0 flex-col gap-1.5' },
});

register('rgi-select-label', {
  base: { tw: 'text-xs font-medium text-[var(--text,#edf2fb)]' },
});

register('rgi-select', {
  base: {
    tw: 'h-10 min-w-0 cursor-pointer rounded-md border border-[var(--border,#354158)] bg-[var(--panel,#111722)] px-3 text-sm text-[var(--text,#edf2fb)] outline-none transition-[border-color,box-shadow] hover:border-[var(--text-muted,#71809a)] focus-visible:border-[var(--mui-blue,#86a6ff)] focus-visible:ring-2 focus-visible:ring-[var(--mui-blue-soft,rgba(134,166,255,.2))] disabled:cursor-not-allowed disabled:opacity-50',
  },
});

register('rgi-select-error', {
  base: {
    tw: '!border-[var(--danger,#dc737b)] focus-visible:!ring-[var(--danger-soft,rgba(220,115,123,.2))]',
  },
});

register('rgi-select-helper', {
  base: { tw: 'text-[11px] text-[var(--text-subtle,#8996aa)]' },
});

register('rgi-select-helper-error', {
  base: { tw: '!text-[var(--danger,#dc737b)]' },
});
