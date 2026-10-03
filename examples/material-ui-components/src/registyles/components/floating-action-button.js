import { register } from 'registyle/collector';

register.group('fab-control', {
  root: {
    tw: 'inline-flex size-14 shrink-0 cursor-pointer select-none items-center justify-center gap-2 rounded-full border border-transparent bg-[#547be8] p-0 text-white shadow-[0_5px_16px_rgba(0,0,0,.38),0_2px_5px_rgba(84,123,232,.28)] transition-[background-color,box-shadow,transform] duration-150 hover:bg-[#6689ed] hover:shadow-[0_8px_22px_rgba(0,0,0,.42),0_3px_8px_rgba(84,123,232,.32)] active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9bbcff] disabled:cursor-not-allowed disabled:opacity-45',
  },
  small: {
    tw: '!size-10',
  },
  large: {
    tw: '!size-16',
  },
  secondary: {
    tw: 'border-[#354158] bg-[#171e2a] text-[#b9ccff] shadow-[0_4px_12px_rgba(0,0,0,.28)] hover:!bg-[#222d40] hover:!shadow-[0_7px_18px_rgba(0,0,0,.36)]',
  },
  extended: {
    tw: '!h-12 !w-auto rounded-2xl px-5 text-xs font-semibold',
  },
  action: {
    tw: '!size-10 border-[#354158] bg-[#171e2a] text-[#b9ccff] shadow-[0_3px_10px_rgba(0,0,0,.3)] hover:!bg-[#222d40] hover:!shadow-[0_5px_14px_rgba(0,0,0,.34)]',
  },
});
