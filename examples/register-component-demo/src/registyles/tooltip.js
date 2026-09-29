import { register } from 'registyle/collector';

register.group('tooltip', {
  root: { tw: 'relative inline-flex items-center' },
  content: {
    tw: 'absolute z-50 whitespace-nowrap pointer-events-none',
    'font-size': '12px',
    'font-weight': '500',
    'line-height': '1.4',
    padding: '6px 10px',
    'border-radius': 'var(--radius-sm)',
    'background-color': 'var(--c-sidebar)',
    color: '#f5f7f4',
    'box-shadow': 'var(--shadow-md)',
    animation: 'tooltipIn 120ms ease-out both',
  },
  'content-top': { bottom: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)' },
  'content-bottom': { top: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)' },
  'content-left': { right: 'calc(100% + 8px)', top: '50%', transform: 'translateY(-50%)' },
  'content-right': { left: 'calc(100% + 8px)', top: '50%', transform: 'translateY(-50%)' },
});