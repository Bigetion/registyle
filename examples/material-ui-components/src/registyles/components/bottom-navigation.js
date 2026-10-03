import { register } from 'registyle/collector';

register('bottom-navigation-demo', {
  base: {
    tw: 'min-h-[58px] items-stretch justify-around rounded-lg border border-[var(--border)] bg-[var(--panel-raised)] [&_button]:flex-col [&_button]:justify-center [&_button]:gap-1 [&_button]:border-b-0 [&_button]:px-6 [&_button]:py-2',
  },
});
