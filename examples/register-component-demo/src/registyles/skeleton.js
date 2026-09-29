import { register } from 'registyle/collector';

register('skeleton', {
  base: {
    'border-radius': 'var(--radius-md)',
    background: 'linear-gradient(90deg, #edf1eb 25%, #dfe7dd 50%, #edf1eb 75%)',
    'background-size': '200% 100%',
    animation: 'shimmer 1.6s ease-in-out infinite',
  },
  modifiers: {
    text: { height: '14px', 'margin-bottom': '8px' },
    title: { height: '20px', 'margin-bottom': '12px' },
    avatar: { width: '40px', height: '40px', 'border-radius': '9999px', 'flex-shrink': '0' },
    btn: { height: '36px', width: '80px' },
    card: { height: '120px', 'border-radius': 'var(--radius-xl)' },
    circle: { 'border-radius': '9999px' },
  },
});