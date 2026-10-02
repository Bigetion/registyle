import { register } from 'registyle/collector';

register('input-field', {
  tw: [
    'block w-full rounded-md border border-gray-300 bg-white outline-none font-[inherit]',
    'px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400',
    'transition-[background-color,box-shadow] duration-150',
    'focus:(ring-2 ring-blue-500 ring-offset-1 border-blue-500)',
    'disabled:(bg-gray-50 cursor-not-allowed opacity-60)',
  ],
  modifiers: {
    error: { tw: 'border-red-400 focus:(ring-red-500 border-red-400)' },
  },
});
