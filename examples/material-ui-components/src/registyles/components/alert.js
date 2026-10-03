import { register } from 'registyle/collector';

register('mui-alert', {
  base: { tw: 'flex w-full items-start gap-3 rounded border px-4 py-3 text-[13px]' },
  modifiers: {
    'info': { tw: 'border-[#164e78] bg-[#102a3c] text-[#90caf9]' },
    'success': { tw: 'border-[#285b2b] bg-[#162d18] text-[#a5d6a7]' },
    'warning': { tw: 'border-[#715013] bg-[#33270e] text-[#ffcc80]' },
    'error': { tw: 'border-[#742d28] bg-[#351816] text-[#ef9a9a]' },
  },
});

register('alert-stack', {
  base: { tw: 'flex w-full flex-col gap-2' },
});

register('mui-alert span', {
  base: { tw: 'flex flex-1 flex-col gap-1 [&_strong]:text-xs [&_strong]:font-semibold [&_small]:text-[11px]' },
});

register('mui-alert button', {
  base: { tw: 'cursor-pointer border-0 bg-transparent text-current' },
});
