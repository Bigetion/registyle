import { register } from 'registyle/collector';

register.all({
  ':root': {
    '--rgi-blue': '#9bbcff',
    '--rgi-blue-dark': '#547be8',
    '--rgi-blue-soft': 'rgba(125,159,255,.12)',
    '--page': '#090c12',
    '--panel': '#10151e',
    '--panel-raised': '#171e2a',
    '--border': '#273142',
    '--text': '#edf2fb',
    '--muted': '#a3aec0',
    '--subtle': '#717f95',
    '--green': '#7bd6b0',
    '--orange': '#f4bd7a',
    '--red': '#ff858e',
    '--radius': '12px',
  },
  '*': {
    'box-sizing': 'border-box',
    margin: '0',
    padding: '0',
  },
  body: {
    tw: 'min-h-screen bg-[var(--page)] font-[DM_Sans,sans-serif] text-sm text-[var(--text)] antialiased',
  },
  '::selection': {
    color: '#fff',
    'background-color': 'var(--rgi-blue-dark)',
  },
});
