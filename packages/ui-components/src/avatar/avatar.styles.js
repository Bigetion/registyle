import { register } from 'registyle/collector';

register('rgi-avatar', {
  base: {
    tw: 'inline-flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[var(--rgi-avatar-bg,var(--panel-raised,#273142))] text-sm font-medium text-[var(--rgi-avatar-color,var(--text,#edf2fb))] align-middle',
  },
  modifiers: {
    small: { tw: 'size-8 text-xs' },
    large: { tw: 'size-14 text-lg' },
    primary: { tw: '[--rgi-avatar-bg:var(--rgi-blue-dark,#547be8)] [--rgi-avatar-color:white]' },
    success: { tw: '[--rgi-avatar-bg:#276b53] [--rgi-avatar-color:white]' },
    warning: { tw: '[--rgi-avatar-bg:#a75c1b] [--rgi-avatar-color:white]' },
  },
});

register('rgi-avatar img', {
  base: { tw: 'size-full object-cover' },
});
