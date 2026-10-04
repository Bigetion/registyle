import { register } from 'registyle/collector';

register('rgi-card', {
  base: { tw: 'overflow-hidden rounded-xl bg-[var(--panel,#111824)] text-[var(--text,#edf2fb)]' },
  modifiers: {
    elevated: { tw: 'border border-[var(--border,#273142)]' },
    outlined: { tw: 'border border-[var(--border,#354257)] shadow-none' },
    flat: { tw: 'border border-transparent shadow-none' },
    'elevation-0': { tw: 'shadow-none' },
    'elevation-1': { tw: 'shadow-[0_2px_8px_rgba(0,0,0,.16)]' },
    'elevation-2': { tw: 'shadow-[0_5px_16px_rgba(0,0,0,.2)]' },
    'elevation-3': { tw: 'shadow-[0_10px_28px_rgba(0,0,0,.25)]' },
    interactive: {
      tw: 'transition-[border-color,box-shadow,transform] duration-150 hover:-translate-y-px hover:border-[var(--mui-blue,#9bbcff)] focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[var(--mui-blue,#9bbcff)]',
    },
  },
});
