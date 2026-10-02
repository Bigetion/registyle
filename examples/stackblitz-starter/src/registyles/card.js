import { register } from 'registyle/collector';

// 3️⃣  register.group() → compiles to .card, .card-header, .card-body, .card-footer
register.group('card', {
  root:   { tw: 'bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden' },
  header: { tw: 'flex items-center justify-between px-5 py-4 border-b border-gray-100' },
  body:   { tw: 'px-5 py-4' },
  footer: { tw: 'flex items-center gap-2 px-5 py-3 bg-gray-50 border-t border-gray-100' },
});
