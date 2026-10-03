import { register } from 'registyle/collector';

register.group('toggle-button-demo', {
  root: { tw: 'inline-flex max-w-full overflow-hidden rounded-lg border border-[#354158] bg-[#101722] shadow-[0_2px_8px_rgba(0,0,0,.16)]' },
  button: { tw: 'inline-flex min-h-9 cursor-pointer items-center justify-center gap-2 border-0 border-r border-[#354158] bg-transparent px-3.5 text-[11px] font-medium text-[#aab6ca] transition-colors last:border-r-0 hover:bg-[#ffffff08] hover:text-white focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#86a6ff] aria-pressed:bg-[#21304b] aria-pressed:text-[#b9ccff] aria-pressed:hover:!bg-[#21304b] aria-pressed:hover:!text-[#b9ccff] disabled:cursor-not-allowed disabled:opacity-40' },
  selected: { tw: 'bg-[#21304b] text-[#b9ccff] hover:!bg-[#21304b] hover:!text-[#b9ccff]' },
  small: { tw: 'min-h-7 gap-1.5 px-2.5 text-[10px]' },
});

register('toggle-button-demo-button-icon', {
  base: { tw: 'size-9 min-h-9 shrink-0 px-0 [&_svg]:shrink-0' },
});
