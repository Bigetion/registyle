import { register } from 'registyle/collector';

register.group('dialog', {
  overlay: {
    tw: 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-[rgba(22,34,29,.62)] backdrop-blur-[5px] animate-[overlayIn_180ms_ease]',
  },
  content: {
    tw: 'relative w-full max-w-[560px] overflow-hidden rounded-[var(--radius-lg)] bg-[var(--c-surface)] shadow-[var(--shadow-lg)] animate-[dialogIn_200ms_ease]',
  },
  header: { tw: 'flex items-start justify-between gap-4 px-6 py-5 border-b border-b-[var(--c-border)] bg-[#fbfcfa]' },
  title: { tw: 'font-semibold text-lg text-[var(--c-text)]' },
  body: { tw: 'px-6 py-5 text-sm text-[var(--c-text-muted)] leading-[1.7]' },
  footer: { tw: 'flex items-center justify-end gap-3 px-6 py-4 border-t border-t-[var(--c-border)] bg-[#f7f8f5]' },
  close: {
    tw: 'flex items-center justify-center size-8 rounded-lg cursor-pointer border-0 transition-colors bg-transparent text-[var(--c-text-muted)] hover:bg-[var(--c-bg)] hover:text-[var(--c-text)]',
  },
});