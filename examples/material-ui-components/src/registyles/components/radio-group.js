import { register } from 'registyle/collector';

register.group('mui-radio', {
  root: {
    tw: 'relative mt-0.5 flex size-[18px] shrink-0 items-center justify-center rounded-full focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#86a6ff]',
  },
  input: {
    tw: 'absolute inset-0 z-10 m-0 size-full cursor-pointer opacity-0 disabled:cursor-not-allowed',
  },
  indicator: {
    tw: 'flex size-[18px] items-center justify-center rounded-full border-2 border-[#65738a] bg-[#0e1420] transition-[border-color,box-shadow]',
  },
  checked: {
    tw: 'border-[#91adf4]',
  },
  dot: {
    tw: 'size-2 rounded-full bg-[#91adf4]',
  },
  disabled: {
    tw: 'cursor-not-allowed opacity-45',
  },
});
