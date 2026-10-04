import { register } from 'registyle/collector';

register('mui-avatar', {
  base: {
    tw: 'inline-flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[var(--mui-avatar-bg,var(--panel-raised,#273142))] text-sm font-medium text-[var(--mui-avatar-color,var(--text,#edf2fb))] align-middle',
  },
  modifiers: {
    small: { tw: 'size-8 text-xs' },
    large: { tw: 'size-14 text-lg' },
    primary: { tw: '[--mui-avatar-bg:var(--mui-blue-dark,#547be8)] [--mui-avatar-color:white]' },
    success: { tw: '[--mui-avatar-bg:#276b53] [--mui-avatar-color:white]' },
    warning: { tw: '[--mui-avatar-bg:#a75c1b] [--mui-avatar-color:white]' },
  },
});

register('mui-avatar img', {
  base: { tw: 'size-full object-cover' },
});
