import { register } from 'registyle/collector';

register.group('breadcrumb', {
  root: { tw: 'flex items-center flex-wrap gap-1', 'font-size': '13px' },
  item: { tw: 'flex items-center gap-1' },
  link: { tw: 'font-medium transition-colors', color: 'var(--c-text-muted)', '&:hover': { color: 'var(--c-text)' } },
  separator: { color: 'var(--c-text-light)' },
  current: { tw: 'font-medium', color: 'var(--c-text)' },
});