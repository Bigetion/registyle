import { register } from 'registyle/collector';

register(':root', {
  '--page': '#f3f1e9',
  '--surface': '#fffefa',
  '--surface-raised': '#e9e7dc',
  '--ink': '#1f3028',
  '--muted': '#64756b',
  '--line': '#d9ddd2',
  '--accent': '#bd5739',
  '--accent-hover': '#9d422c',
  '--accent-soft': '#f2dfd5',
  '--font-sans': "'DM Sans', sans-serif",
  '--font-display': "'Playfair Display', serif",
});

register(':root[data-theme="dark"]', {
  '--page': '#17211d',
  '--surface': '#202d27',
  '--surface-raised': '#2a3931',
  '--ink': '#f0f1e9',
  '--muted': '#a6b5aa',
  '--line': '#3b4b40',
  '--accent': '#f08a68',
  '--accent-hover': '#ffa184',
  '--accent-soft': '#49342d',
});

register('body', {
  margin: 0,
  minWidth: '320px',
  backgroundColor: 'var(--page)',
  color: 'var(--ink)',
  fontFamily: 'var(--font-sans)',
  fontSize: '14px',
  lineHeight: 1.5,
  '-webkit-font-smoothing': 'antialiased',
  transition: 'background-color 220ms ease, color 220ms ease',
});

register('*', { boxSizing: 'border-box' });