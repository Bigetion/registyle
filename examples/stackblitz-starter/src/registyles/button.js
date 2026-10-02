import { register } from 'registyle/collector';

// 1️⃣  Register base + modifiers → compiles to .btn, .btn-primary, .btn-secondary, etc.
register('btn', {
  base: {
    tw: [
      'inline-flex items-center justify-center gap-2',
      'font-medium rounded-md border border-transparent',
      'transition-colors duration-150 cursor-pointer',
      'focus-visible:outline-2 focus-visible:outline-offset-2',
      'disabled:(opacity-50 cursor-not-allowed)',
    ],
  },
  modifiers: {
    // variants
    primary:   { tw: 'bg-blue-600 text-white hover:bg-blue-700 focus-visible:outline-blue-600' },
    secondary: { tw: 'bg-gray-100 text-gray-800 hover:bg-gray-200 focus-visible:outline-gray-400' },
    danger:    { tw: 'bg-red-500 text-white hover:bg-red-600 focus-visible:outline-red-500' },
    ghost:     { tw: 'bg-transparent text-gray-700 hover:bg-gray-100' },
    outline:   { tw: 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50' },
    // sizes
    sm:  { tw: 'px-3 py-1.5 text-sm' },
    md:  { tw: 'px-4 py-2 text-sm' },
    lg:  { tw: 'px-5 py-2.5 text-base' },
  },
});
