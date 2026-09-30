import { register } from 'registyle/collector';

register.group('toast', {
  container: {
    tw: 'fixed right-5 bottom-5 flex flex-col gap-3 z-50 pointer-events-none max-[480px]:right-3 max-[480px]:bottom-3 max-[480px]:left-3',
  },
  item: {
    tw: 'flex items-start gap-3 rounded-lg border px-4 py-3 text-[13px] min-w-[min(300px,calc(100vw-24px))] max-w-[400px] bg-[var(--c-surface)] pointer-events-auto border-[var(--c-border)] [box-shadow:var(--shadow-lg)] animate-[toastIn_220ms_ease]',
  },
  icon: { tw: 'flex-shrink-0 mt-0.5' },
  body: { tw: 'flex-1 min-w-0' },
  title: { tw: 'font-semibold mb-0.5 text-[13px] text-[var(--c-text)]' },
  desc: { tw: 'text-[12px] text-[var(--c-text-muted)]' },
  close: { tw: 'flex-shrink-0 cursor-pointer border-0 bg-transparent p-0.5 rounded text-[var(--c-text-light)] hover:text-[var(--c-text)]' },
  'item-success': { tw: 'border-l-[3px] border-l-[var(--c-success)]' },
  'item-warning': { tw: 'border-l-[3px] border-l-[var(--c-warning)]' },
  'item-danger': { tw: 'border-l-[3px] border-l-[var(--c-danger)]' },
  'item-info': { tw: 'border-l-[3px] border-l-[var(--c-info)]' },
});