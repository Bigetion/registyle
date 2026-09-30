import { register } from 'registyle/collector';

register('avatar', {
  base: {
    tw: 'inline-flex items-center justify-center rounded-full font-semibold flex-shrink-0 overflow-hidden bg-[#e8eee8] text-[#456558] border border-[rgba(32,49,43,.08)]',
  },
  modifiers: {
    xs: { tw: 'size-6 text-[10px]' },
    sm: { tw: 'size-8 text-[12px]' },
    md: { tw: 'size-10 text-[14px]' },
    lg: { tw: 'size-[52px] text-[18px]' },
    xl: { tw: 'size-16 text-[22px]' },
    square: { tw: 'rounded-[var(--radius-md)]' },
    online: { tw: 'outline-2 outline-[var(--c-success)] outline-offset-2' },
    offline: { tw: 'outline-2 outline-[var(--c-text-light)] outline-offset-2' },
  },
});

register.group('avatar', {
  group: { tw: 'flex items-center' },
  'group-item': { tw: 'ml-[-8px] border-2 border-[var(--c-surface)] [border-radius:9999px]' },
});