import { register } from 'registyle/collector';

register('click-away-demo .floating-hint', {
  base: {
    tw: 'rounded-md border border-dashed border-[var(--border)] px-3 py-2',
  },
});
