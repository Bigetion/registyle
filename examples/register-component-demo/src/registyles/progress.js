import { register } from 'registyle/collector';

register.group('progress', {
  root: { tw: 'w-full overflow-hidden rounded-full', height: '7px', 'background-color': '#e3e9e1' },
  bar: { height: '100%', 'border-radius': 'inherit', transition: 'width 400ms ease', 'background-color': 'var(--c-brand)' },
  'bar-success': { 'background-color': 'var(--c-success)' },
  'bar-warning': { 'background-color': 'var(--c-warning)' },
  'bar-danger': { 'background-color': 'var(--c-danger)' },
  'bar-striped': {
    'background-image': 'linear-gradient(45deg, rgba(255,255,255,.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,.15) 50%, rgba(255,255,255,.15) 75%, transparent 75%, transparent)',
    'background-size': '16px 16px',
    animation: 'shimmer 1s linear infinite',
  },
  label: { tw: 'flex items-center justify-between text-xs mb-1.5', color: 'var(--c-text-muted)' },
  value: { tw: 'font-semibold text-xs', color: 'var(--c-text)' },
});