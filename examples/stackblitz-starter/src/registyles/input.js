import { register } from 'registyle/collector';

// 4️⃣  extend pattern → .input-field inherits .btn base styles, adds field-specific overrides
register('input-field', {
  tw: [
    'block w-full rounded-md border border-gray-300 bg-white',
    'px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400',
    'transition-[background-color,box-shadow] duration-150',
    'focus:border-blue-500',
    'focus-visible:(ring-2 ring-blue-500 ring-offset-1)',
    'disabled:(bg-gray-50 cursor-not-allowed opacity-60)',
  ],
  modifiers: {
    error: { tw: 'border-red-400 focus:border-red-400 focus-visible:(ring-red-500)' },
  },
});
