import { register } from 'registyle/collector';

register('rgi-text-field', {
  base: { tw: 'flex min-w-0 flex-col gap-1.5' },
});

register('rgi-text-field-label', {
  base: { tw: 'text-xs font-medium text-[var(--text,#edf2fb)]' },
});

register('rgi-text-field-control', {
  base: {
    tw: 'h-10 w-full min-w-0 rounded-md border border-[var(--border,#354158)] bg-[var(--panel,#111722)] px-3 text-sm text-[var(--text,#edf2fb)] outline-none transition-[border-color,box-shadow] placeholder:text-[var(--text-subtle,#8996aa)] hover:border-[var(--text-muted,#71809a)] focus:border-[var(--rgi-blue,#86a6ff)] focus:ring-2 focus:ring-[var(--rgi-blue-soft,rgba(134,166,255,.2))] disabled:cursor-not-allowed disabled:opacity-50',
  },
});

register('rgi-text-field-error', {
  base: {
    tw: '!border-[var(--danger,#dc737b)] focus:!border-[var(--danger,#dc737b)] focus:!ring-[var(--danger-soft,rgba(220,115,123,.2))]',
  },
});

register('rgi-text-field-message', {
  base: { tw: 'text-[11px] text-[var(--text-subtle,#8996aa)]' },
});

register('rgi-text-field-message-error', {
  base: { tw: '!text-[var(--danger,#dc737b)]' },
});
