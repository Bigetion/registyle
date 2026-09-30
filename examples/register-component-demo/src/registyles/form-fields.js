import { register } from 'registyle/collector';

register.group('form', {
  group:        { tw: 'flex flex-col gap-1.5 w-full' },
  label:        { tw: 'text-sm font-medium text-[var(--c-text)]' },
  hint:         { tw: 'text-xs text-[var(--c-text-muted)]' },
  error:        { tw: 'text-xs text-[var(--c-danger)]' },
  addon:        { tw: 'flex items-center relative' },
  'addon-icon': { tw: 'absolute left-3 pointer-events-none text-[var(--c-text-light)]' },
});