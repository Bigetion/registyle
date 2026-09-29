import { register } from 'registyle/collector';

register(':root', {
  '--ink': '#1d3029', '--muted': '#78857e', '--line': '#e7ece8', '--canvas': '#f4f7f5',
  '--surface': '#ffffff', '--green': '#277562', '--green-dark': '#1d5b4d',
  '--green-soft': '#e6f2ed', '--coral': '#cc705d', '--amber': '#b88945',
});

register('body', {
  margin: 0, minWidth: '320px', backgroundColor: 'var(--canvas)', color: 'var(--ink)',
  fontFamily: "'DM Sans', sans-serif", fontSize: '14px', lineHeight: 1.5,
  '-webkit-font-smoothing': 'antialiased',
});

register('sr-only', { tw: 'sr-only' });