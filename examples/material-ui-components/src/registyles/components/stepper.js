import { register } from 'registyle/collector';

register('stepper-demo', {
  base: { tw: 'flex w-full max-w-[540px] items-center [&_button]:flex [&_button]:flex-1 [&_button]:cursor-pointer [&_button]:items-center [&_button]:gap-2 [&_button]:border-0 [&_button]:bg-transparent [&_button]:text-xs [&_button]:text-[var(--subtle)] [&_button_i]:h-px [&_button_i]:flex-1 [&_button_i]:bg-[var(--border)]' },
});

register('step-number', {
  base: { tw: 'flex size-6 shrink-0 items-center justify-center rounded-full bg-[var(--panel-raised)] text-[10px]' },
});

register('step-complete', {
  base: { tw: 'bg-[#1b5e20] text-[#a5d6a7]' },
});

register('step-current', {
  base: { tw: 'text-[var(--mui-blue)]' },
});
