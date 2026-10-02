import { register } from 'registyle/collector';

// 1️⃣  Register base + modifiers → compiles to .btn, .btn-primary, .btn-secondary, etc.
//
// Note: each variant explicitly sets its own border-color so there's no
// cascade conflict with the base `border` declaration.
register('btn', {
  base: {
    tw: [
      'inline-flex items-center justify-center gap-2',
      'font-medium rounded-md border font-[inherit]',
      'transition-colors duration-150 cursor-pointer',
      'focus:outline-2 focus:outline-offset-2',
      'disabled:(opacity-50 cursor-not-allowed)',
    ],
  },
  modifiers: {
    // variants — each sets its own border-color explicitly
    primary:   { tw: 'border-blue-600 bg-blue-600 text-white hover:(bg-blue-700 border-blue-700) focus:outline-blue-600' },
    secondary: { tw: 'border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-gray-400' },
    danger:    { tw: 'border-transparent bg-red-500 text-white hover:bg-red-600 focus:outline-red-500' },
    ghost:     { tw: 'border-transparent bg-transparent text-gray-700 hover:bg-gray-100 focus:outline-gray-400' },
    outline:   { tw: 'border-gray-300 bg-white text-gray-700 hover:(bg-gray-50 border-gray-400) focus:outline-gray-400' },
    // sizes
    sm:  { tw: 'px-3 py-1.5 text-sm' },
    md:  { tw: 'px-4 py-2 text-sm' },
    lg:  { tw: 'px-5 py-2.5 text-base' },
  },
});
