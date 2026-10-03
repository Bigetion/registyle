import { register } from 'registyle/collector';

register(':root', {
  '--page': '#f7f8fa',
  '--surface': '#ffffff',
  '--ink': '#202534',
  '--muted': '#81889a',
  '--line': '#eaecf0',
  '--brand': '#6258e8',
  '--brand-dark': '#5147d1',
  '--brand-soft': '#f0efff',
  '--green': '#1f9d72',
  '--green-soft': '#e8f7f1',
  '--orange': '#df8d3b',
  '--orange-soft': '#fff4e8',
  '--red': '#d95b68',
  '--red-soft': '#fff0f1',
  '--sidebar': '#ffffff',
});

register('*', { boxSizing: 'border-box', margin: 0, padding: 0 });

register('body', {
  margin: 0,
  minWidth: '320px',
  backgroundColor: 'var(--page)',
  color: 'var(--ink)',
  fontFamily: "'DM Sans', sans-serif",
  fontSize: '14px',
  lineHeight: 1.5,
  '-webkit-font-smoothing': 'antialiased',
});

register('button', { font: 'inherit', cursor: 'pointer' });
register('input', { font: 'inherit' });
register('select', { font: 'inherit' });
