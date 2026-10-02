import { register } from 'registyle/collector';

// 2️⃣  Group pattern → compiles to .badge (base) + .badge-dot, .badge-primary, etc.
register('badge', {
  tw: 'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium',
  modifiers: {
    default:  { tw: 'bg-gray-100 text-gray-700' },
    primary:  { tw: 'bg-blue-100 text-blue-700' },
    success:  { tw: 'bg-green-100 text-green-700' },
    warning:  { tw: 'bg-yellow-100 text-yellow-800' },
    danger:   { tw: 'bg-red-100 text-red-700' },
  },
});
