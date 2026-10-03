import { register } from 'registyle/collector';

register('floating-menu', {
  base: { tw: 'py-1' },
});

register('floating-menu button', {
  base: {
    tw: 'flex w-full cursor-pointer items-center gap-2.5 border-0 bg-transparent px-3 py-2.5 text-left text-xs text-[var(--text)] hover:bg-[#ffffff0d]',
  },
});

register('floating-menu button svg:last-child', {
  base: { tw: 'ml-auto text-[var(--mui-blue)]' },
});
