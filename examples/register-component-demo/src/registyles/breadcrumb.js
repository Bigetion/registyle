import { register } from 'registyle/collector';

register.group('breadcrumb', {
  root: { tw: 'flex items-center flex-wrap gap-1 text-[13px]' },
  item: { tw: 'flex items-center gap-1' },
  link: { tw: 'font-medium transition-colors text-[var(--c-text-muted)] hover:text-[var(--c-text)]' },
  separator: { tw: 'text-[var(--c-text-light)]' },
  current: { tw: 'font-medium text-[var(--c-text)]' },
});