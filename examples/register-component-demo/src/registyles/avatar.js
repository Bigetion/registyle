import { register } from 'registyle/collector';

register('avatar', {
  base: {
    tw: 'inline-flex items-center justify-center rounded-full font-semibold flex-shrink-0 overflow-hidden',
    'background-color': '#e8eee8',
    color: '#456558',
    border: '1px solid rgba(32,49,43,.08)',
  },
  modifiers: {
    xs: { width: '24px', height: '24px', 'font-size': '10px' },
    sm: { width: '32px', height: '32px', 'font-size': '12px' },
    md: { width: '40px', height: '40px', 'font-size': '14px' },
    lg: { width: '52px', height: '52px', 'font-size': '18px' },
    xl: { width: '64px', height: '64px', 'font-size': '22px' },
    square: { 'border-radius': 'var(--radius-md)' },
    online: { outline: '2px solid var(--c-success)', 'outline-offset': '2px' },
    offline: { outline: '2px solid var(--c-text-light)', 'outline-offset': '2px' },
  },
});

register.group('avatar', {
  group: { tw: 'flex items-center' },
  'group-item': { 'margin-left': '-8px', border: '2px solid var(--c-surface)', 'border-radius': '9999px' },
});