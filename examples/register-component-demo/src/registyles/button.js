import { register } from 'registyle/collector';

register('btn', {
  base: {
    tw: 'inline-flex items-center justify-center gap-2 font-semibold leading-none cursor-pointer border select-none whitespace-nowrap transition-all [font-family:inherit] rounded-[var(--radius-md)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--c-brand)] active:[transform:translateY(1px)] disabled:opacity-[.48] disabled:cursor-not-allowed disabled:pointer-events-none disabled:[transform:none]',
  },
  modifiers: {
    primary: {
      tw: 'text-white bg-[var(--c-brand)] border-[var(--c-brand)] [box-shadow:0_2px_4px_rgba(150,55,39,.16)] [&:hover:not(:disabled)]:bg-[var(--c-brand-hover)] [&:hover:not(:disabled)]:border-[var(--c-brand-hover)]',
    },
    secondary: {
      tw: 'text-[var(--c-text)] bg-[#e9eee8] border-[#e9eee8] [&:hover:not(:disabled)]:bg-[#dfe7df] [&:hover:not(:disabled)]:border-[#dfe7df]',
    },
    danger: {
      tw: 'text-white bg-[var(--c-danger)] border-[var(--c-danger)] [&:hover:not(:disabled)]:brightness-[.92]',
    },
    success: {
      tw: 'text-white bg-[var(--c-success)] border-[var(--c-success)] [&:hover:not(:disabled)]:brightness-[.92]',
    },
    ghost: {
      tw: 'text-[var(--c-text-muted)] bg-transparent border-transparent [&:hover:not(:disabled)]:text-[var(--c-text)] [&:hover:not(:disabled)]:bg-[#e9eee8]',
    },
    outline: {
      tw: 'text-[var(--c-brand)] bg-transparent border-[var(--c-brand)] [&:hover:not(:disabled)]:text-white [&:hover:not(:disabled)]:bg-[var(--c-brand)]',
    },
    xs: { tw: 'px-2.5 py-1.5 text-xs rounded-[var(--radius-sm)]' },
    sm: { tw: 'px-3 py-2 text-sm' },
    md: { tw: 'px-4 py-2.5 text-sm' },
    lg: { tw: 'px-6 py-3 text-base' },
    xl: { tw: 'px-8 py-4 text-base' },
    pill: { tw: '!rounded-[var(--radius-full)]' },
    'icon-sm': { tw: 'p-2 !rounded-[var(--radius-sm)]' },
    'icon-md': { tw: 'p-2.5' },
    'icon-lg': { tw: 'p-3' },
    block: { tw: 'w-full' },
  },
});
