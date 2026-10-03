import { register } from 'registyle/collector';

register('snackbar', {
  base: { tw: 'fixed bottom-5 left-1/2 z-40 flex min-w-[320px] -translate-x-1/2 items-center gap-5 rounded-md bg-[#32363c] px-4 py-3 text-xs text-white shadow-xl [&_button]:cursor-pointer [&_button]:border-0 [&_button]:bg-transparent [&_button]:text-[var(--mui-blue)] [&_button:last-child]:ml-auto [&_button:last-child]:text-white' },
  modifiers: {
    'demo': { tw: 'relative flex min-h-14 items-center' },
  },
});
