import { register } from 'registyle/collector';

register('alert', {
  base: {
    tw: 'flex items-start gap-3 rounded-md px-4 py-3',
    'font-size': '14px',
    'line-height': '1.5',
    border: '1px solid transparent',
  },
  modifiers: {
    info: { 'background-color': 'var(--c-info-bg)', color: 'var(--c-info)', 'border-color': 'rgba(37,99,123,.2)' },
    success: { 'background-color': 'var(--c-success-bg)', color: 'var(--c-success)', 'border-color': 'rgba(40,116,81,.2)' },
    warning: { 'background-color': 'var(--c-warning-bg)', color: 'var(--c-warning)', 'border-color': 'rgba(169,107,22,.2)' },
    danger: { 'background-color': 'var(--c-danger-bg)', color: 'var(--c-danger)', 'border-color': 'rgba(189,69,61,.2)' },
  },
});

register.group('alert', {
  icon: { tw: 'flex-shrink-0 mt-0.5' },
  body: { tw: 'flex-1 min-w-0' },
  title: { tw: 'font-semibold mb-0.5', 'font-size': '14px' },
  desc: { 'font-size': '13px', opacity: '0.85' },
});