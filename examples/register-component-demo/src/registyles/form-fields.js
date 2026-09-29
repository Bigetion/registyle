import { register } from 'registyle/collector';

register.group('form', {
  group:        { tw: 'flex flex-col gap-1.5 w-full' },
  label:        { tw: 'text-sm font-medium', color: 'var(--c-text)' },
  hint:         { tw: 'text-xs', color: 'var(--c-text-muted)' },
  error:        { tw: 'text-xs', color: 'var(--c-danger)' },
  addon:        { tw: 'flex items-center relative' },
  'addon-icon': { tw: 'absolute left-3 pointer-events-none', color: 'var(--c-text-light)' },
});