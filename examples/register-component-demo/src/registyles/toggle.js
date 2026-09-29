import { register } from 'registyle/collector';

register('toggle', {
  base: {
    tw: 'relative inline-flex items-center rounded-full cursor-pointer flex-shrink-0 transition-colors border-0 outline-none',
    width: '40px',
    height: '22px',
    'background-color': 'var(--c-border)',
    '&:focus-visible': { outline: '2px solid var(--c-brand)', 'outline-offset': '2px' },
  },
  modifiers: {
    on: { 'background-color': 'var(--c-brand)' },
    sm: { width: '32px', height: '18px' },
    lg: { width: '48px', height: '26px' },
  },
});

register('toggle-thumb', {
  base: {
    tw: 'absolute rounded-full bg-white shadow-sm transition-transform',
    width: '16px',
    height: '16px',
    top: '3px',
    left: '3px',
  },
  modifiers: {
    on: { transform: 'translateX(18px)' },
    sm: { width: '12px', height: '12px' },
    lg: { width: '20px', height: '20px' },
    'lg-on': { transform: 'translateX(22px)' },
    'sm-on': { transform: 'translateX(14px)' },
  },
});