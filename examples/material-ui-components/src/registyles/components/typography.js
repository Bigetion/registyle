import { register } from 'registyle/collector';

register('typography-demo', {
  base: { tw: 'flex flex-col gap-3' },
});

register('typography-demo h3', {
  base: { tw: 'text-xl font-medium [&_small]:ml-3 [&_small]:text-[10px] [&_small]:font-normal [&_small]:text-[var(--subtle)]' },
});

register('typography-demo p', {
  base: { tw: 'text-sm text-[var(--muted)]' },
});

register('typography-scale', {
  base: { tw: 'flex w-full max-w-[660px] flex-col divide-y divide-[var(--border)]' },
});

register('typography-scale-row', {
  base: { tw: 'grid grid-cols-[58px_minmax(0,1fr)_76px] items-center gap-2 py-3 first:pt-1 last:pb-1' },
});

register('typography-scale-label', {
  base: { tw: 'text-[9px] font-medium uppercase tracking-[.08em] text-[var(--subtle)]' },
});

register('typography-sample', {
  base: { tw: 'min-w-0 text-[var(--text)]' },
});

register('typography-display', {
  base: { tw: 'truncate text-[20px] font-bold leading-tight tracking-[-.04em]' },
});

register('typography-heading-one', {
  base: { tw: 'truncate text-[17px] font-semibold leading-tight tracking-[-.025em]' },
});

register('typography-heading-two', {
  base: { tw: 'truncate text-[14px] font-semibold leading-snug' },
});

register('typography-body', {
  base: { tw: 'truncate text-[11px] leading-relaxed text-[var(--muted)]' },
});

register('typography-caption', {
  base: { tw: 'truncate text-[9px] leading-relaxed text-[var(--subtle)]' },
});

register('typography-spec', {
  base: { tw: 'text-right font-mono text-[8px] tabular-nums text-[var(--subtle)]' },
});

register('typography-weight-picker', {
  base: { tw: 'flex flex-wrap gap-1.5' },
});

register('typography-weight-button', {
  base: { tw: 'inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--panel)] px-2 text-[9px] text-[var(--muted)] hover:bg-[var(--panel-raised)] hover:text-[var(--text)]' },
});

register('typography-weight-button span', {
  base: { tw: 'font-mono text-[8px] text-[var(--subtle)]' },
});

register('typography-weight-active', {
  base: { tw: 'border-[#547be8] bg-[#19253a] text-[#d8e3ff]' },
});

register('typography-weight-preview', {
  base: { tw: 'flex w-full max-w-[520px] flex-col gap-2 rounded-lg border border-[var(--border)] bg-[var(--panel)] p-4' },
});

register('typography-weight-meta', {
  base: { tw: 'text-[8px] font-semibold tracking-[.12em] text-[#93a8ce]' },
});

register('typography-weight-preview strong', {
  base: { tw: 'text-[18px] leading-snug tracking-[-.02em] text-[var(--text)]' },
});

register('typography-weight-preview p', {
  base: { tw: 'max-w-[440px] text-[11px] leading-relaxed text-[var(--muted)]' },
});

register('typography-controls', {
  base: { tw: 'flex flex-wrap items-center justify-between gap-2' },
});

register('typography-tone-picker', {
  base: { tw: 'flex flex-wrap gap-1.5' },
});

register('typography-tone-button', {
  base: { tw: 'inline-flex h-7 cursor-pointer items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--panel)] px-2 text-[8px] font-medium hover:bg-[var(--panel-raised)]' },
});

register('typography-tone-primary', {
  base: { tw: 'text-[#d9e4ff]' },
});

register('typography-tone-secondary', {
  base: { tw: 'text-[#acbad0]' },
});

register('typography-tone-muted', {
  base: { tw: 'text-[#77849a]' },
});

register('typography-tone-success', {
  base: { tw: 'text-[#7bd2a9]' },
});

register('typography-tone-warning', {
  base: { tw: 'text-[#f2c27b]' },
});

register('typography-tone-active', {
  base: { tw: 'border-[#547be8] bg-[#19253a]' },
});

register('typography-alignment-picker', {
  base: { tw: 'inline-flex items-center gap-0.5 rounded-md border border-[var(--border)] bg-[var(--panel)] p-0.5' },
});

register('typography-alignment-button', {
  base: { tw: 'inline-flex size-6 cursor-pointer items-center justify-center rounded border-0 bg-transparent text-[var(--subtle)] hover:text-[var(--text)]' },
});

register('typography-alignment-active', {
  base: { tw: 'bg-[#24334b] text-[#c7d8ff]' },
});

register('typography-color-preview', {
  base: { tw: 'flex w-full max-w-[520px] flex-col gap-2 rounded-lg border border-[var(--border)] bg-[var(--panel)] p-4 text-left' },
});

register('typography-color-eyebrow', {
  base: { tw: 'text-[8px] font-semibold tracking-[.12em]' },
});

register('typography-color-preview strong', {
  base: { tw: 'text-[16px] font-semibold leading-snug tracking-[-.015em]' },
});

register('typography-color-preview p', {
  base: { tw: 'max-w-[440px] text-[10px] leading-relaxed text-[var(--muted)]' },
});

register('typography-text-primary', {
  base: { tw: '[&_.typography-color-eyebrow]:text-[#91adf4] [&_strong]:text-[var(--text)]' },
});

register('typography-text-secondary', {
  base: { tw: '[&_.typography-color-eyebrow]:text-[#aab6ca] [&_strong]:text-[#c6d0df]' },
});

register('typography-text-muted', {
  base: { tw: '[&_.typography-color-eyebrow]:text-[#8a96a9] [&_strong]:text-[#9aa6b8]' },
});

register('typography-text-success', {
  base: { tw: '[&_.typography-color-eyebrow]:text-[#7bd2a9] [&_strong]:text-[#c6f0dd]' },
});

register('typography-text-warning', {
  base: { tw: '[&_.typography-color-eyebrow]:text-[#f2c27b] [&_strong]:text-[#ffe0ae]' },
});

register('typography-align-left', {
  base: { tw: 'text-left' },
});

register('typography-align-center', {
  base: { tw: 'items-center text-center [&_p]:mx-auto' },
});

register('typography-align-right', {
  base: { tw: 'items-end text-right [&_p]:ml-auto' },
});
