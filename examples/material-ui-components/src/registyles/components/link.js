import { register } from 'registyle/collector';

register('demo-link', {
  base: { tw: 'inline-flex items-center gap-1 text-sm text-[var(--mui-blue)] underline-offset-4 hover:underline' },
});

register('external-link', {
  base: { tw: 'text-[#90caf9]' },
});
