import { register } from 'registyle/collector';

register('speed-dial-demo', {
  base: { tw: 'relative flex items-center gap-3' },
});

register('speed-dial-actions', {
  base: { tw: 'flex items-center gap-2 [&_button]:flex [&_button]:cursor-pointer [&_button]:items-center [&_button]:gap-2 [&_button]:border-0 [&_button]:bg-transparent [&_button]:text-[var(--muted)] [&_button_span]:text-[10px] [&_button_i]:inline-flex [&_button_i]:size-9 [&_button_i]:items-center [&_button_i]:justify-center [&_button_i]:rounded-full [&_button_i]:bg-[var(--panel-raised)]' },
});

register('speed-dial-actions button i', {
  base: { tw: 'text-[var(--mui-blue)]' },
});
