import { register } from 'registyle/collector';

register('fab', {
  base: { tw: 'size-10 min-w-10 rounded-full p-0 text-xl shadow-lg' },
  modifiers: {
    'preview': { tw: 'inline-flex size-14 cursor-pointer items-center justify-center rounded-full border-0 bg-[var(--mui-blue-dark)] text-white shadow-[0_4px_12px_#0008] hover:bg-[#1565c0]' },
    'small': { tw: 'size-10 bg-[var(--panel-raised)] text-[var(--mui-blue)]' },
  },
});
