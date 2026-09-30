import { register } from 'registyle/collector';

register('skeleton', {
  base: {
    tw: 'rounded-[var(--radius-md)] bg-[linear-gradient(90deg,_#edf1eb_25%,_#dfe7dd_50%,_#edf1eb_75%)] bg-[length:200%_100%] animate-[shimmer_1.6s_ease-in-out_infinite]',
  },
  modifiers: {
    text: { tw: 'h-[14px] mb-2' },
    title: { tw: 'h-5 mb-3' },
    avatar: { tw: 'size-10 rounded-full shrink-0' },
    btn: { tw: 'h-9 w-20' },
    card: { tw: 'h-[120px] rounded-[var(--radius-xl)]' },
    circle: { tw: 'rounded-full' },
  },
});