import { register } from 'registyle/collector';

register(':root', {
  '--ink': '#1d3029', '--muted': '#78857e', '--line': '#e7ece8', '--canvas': '#f4f7f5',
  '--surface': '#ffffff', '--green': '#277562', '--green-dark': '#1d5b4d',
  '--green-soft': '#e6f2ed', '--coral': '#cc705d', '--amber': '#b88945',
});

register('body', {
  tw: 'm-0 min-w-[320px] bg-[var(--canvas)] text-[var(--ink)] [font-family:DM_Sans,sans-serif] text-sm leading-[1.5] antialiased',
});

register('sr-only', { tw: 'sr-only' });