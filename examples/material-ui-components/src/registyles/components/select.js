import { register } from 'registyle/collector';

register('select-trigger', {
  base: { tw: 'w-[220px] justify-between text-left normal-case tracking-normal' },
});

register('select-options', {
  base: { tw: 'max-h-64 overflow-y-auto' },
});
