import { register } from 'registyle/collector';

register('mui-avatar', {
  base: { tw: 'flex size-10 items-center justify-center rounded-full bg-[#3949ab] text-sm font-medium text-white' },
  modifiers: {
    'green': { tw: 'bg-[#00897b]' },
    'orange': { tw: 'bg-[#ef6c00]' },
  },
});

register('avatar-stack', {
  base: { tw: 'flex -space-x-2 [&_.mui-avatar]:border-2 [&_.mui-avatar]:border-[var(--panel)]' },
});
