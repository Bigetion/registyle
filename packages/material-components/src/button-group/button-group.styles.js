import { register } from 'registyle/collector';

register('mui-button-group', {
  base: { tw: 'inline-flex items-center gap-1 text-[var(--text,#edf2fb)]' },
  modifiers: {
    vertical: { tw: 'flex-col items-stretch' },
  },
});
