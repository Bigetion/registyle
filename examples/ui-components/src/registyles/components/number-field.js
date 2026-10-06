import { register } from 'registyle/collector';

register.group('number-field', {
  root: {
    tw: 'flex h-10 w-[min(260px,100%)] items-center overflow-hidden rounded-lg border border-[#354158] bg-[#0e1420] text-[#d9e2f2] transition-[border-color,box-shadow] focus-within:border-[#718ecb] focus-within:shadow-[0_0_0_3px_rgba(125,159,255,.1)]',
  },
  input: {
    tw: 'h-full min-w-0 flex-1 border-0 bg-transparent px-2 text-center text-xs text-[#e2e9f5] outline-none [appearance:textfield] focus:outline-none focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
  },
  button: {
    tw: 'inline-flex h-full w-10 shrink-0 cursor-pointer items-center justify-center border-0 bg-[#171e2a] text-[#aebbd0] transition-colors hover:bg-[#222d40] hover:text-white focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#86a6ff] disabled:cursor-not-allowed disabled:text-[#58657a] disabled:hover:bg-[#171e2a]',
  },
  decrement: {
    tw: 'border-r border-[#354158]',
  },
  increment: {
    tw: 'border-l border-[#354158]',
  },
  unit: {
    tw: 'shrink-0 px-3 text-[10px] text-[#8f9db4]',
  },
  invalid: {
    tw: 'border-[#c45b66] focus-within:border-[#e07882] focus-within:shadow-[0_0_0_3px_rgba(196,91,102,.12)]',
  },
  error: {
    tw: 'text-[10px] text-[#e07882]',
  },
});
