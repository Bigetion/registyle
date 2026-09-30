import { register } from 'registyle/collector';

register('btn', {
  base: {
    tw: [
      'inline-flex items-center justify-center gap-2 font-semibold leading-none cursor-pointer border select-none whitespace-nowrap transition-all font-[inherit] rounded-[var(--radius-md)]',
      'focus-visible:(outline-2 outline-[var(--c-brand)] outline-offset-2) active:translate-y-px disabled:(opacity-[0.48] cursor-not-allowed pointer-events-none translate-y-0)',
    ],
  },
  modifiers: {
    primary: {
      tw: ['text-white bg-[var(--c-brand)] border-[var(--c-brand)] shadow-[0_2px_4px_rgba(150,55,39,.16)]', 'enabled:hover:(bg-[var(--c-brand-hover)] border-[var(--c-brand-hover)])'],
    },
    secondary: {
      tw: ['text-[var(--c-text)] bg-[#e9eee8] border-[#e9eee8]', 'enabled:hover:(bg-[#dfe7df] border-[#dfe7df])'],
    },
    danger: {
      tw: 'text-white bg-[var(--c-danger)] border-[var(--c-danger)] enabled:hover:brightness-[.92]',
    },
    success: {
      tw: 'text-white bg-[var(--c-success)] border-[var(--c-success)] enabled:hover:brightness-[.92]',
    },
    ghost: {
      tw: ['text-[var(--c-text-muted)] bg-transparent border-transparent', 'enabled:hover:(text-[var(--c-text)] bg-[#e9eee8])'],
    },
    outline: {
      tw: ['text-[var(--c-brand)] bg-transparent border-[var(--c-brand)]', 'enabled:hover:(text-white bg-[var(--c-brand)])'],
    },
    xs: { tw: 'px-2.5 py-1.5 text-xs rounded-[var(--radius-sm)]' },
    sm: { tw: 'px-3 py-2 text-sm' },
    md: { tw: 'px-4 py-2.5 text-sm' },
    lg: { tw: 'px-6 py-3 text-base' },
    xl: { tw: 'px-8 py-4 text-base' },
    pill: { tw: 'rounded-full' },
    'icon-sm': { tw: 'p-2 rounded-[var(--radius-sm)]' },
    'icon-md': { tw: 'p-2.5' },
    'icon-lg': { tw: 'p-3' },
    block: { tw: 'w-full' },
  },
});
