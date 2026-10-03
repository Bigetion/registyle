import { register } from 'registyle/collector';

register.group('toggle-button-demo', {
  root: { tw: 'inline-flex overflow-hidden rounded-lg border border-[#354158] bg-[#101722] shadow-[0_2px_8px_rgba(0,0,0,.16)]' },
  button: { tw: 'inline-flex min-h-9 cursor-pointer items-center justify-center gap-2 border-0 border-r border-[#354158] bg-transparent px-3.5 text-[11px] font-medium text-[#aab6ca] transition-colors last:border-r-0 hover:bg-[#ffffff08] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#86a6ff]' },
  selected: { tw: 'bg-[#21304b] text-[#b9ccff] hover:!bg-[#21304b] hover:!text-[#b9ccff]' },
});
