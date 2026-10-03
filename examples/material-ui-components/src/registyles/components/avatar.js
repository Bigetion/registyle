import { register } from 'registyle/collector';

register('mui-avatar', {
  base: { tw: 'inline-flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#334a72] text-[12px] font-semibold tracking-[.01em] text-[#e6eeff]' },
});

register('avatar-stack', {
  base: { tw: 'flex -space-x-2 [&_.mui-avatar]:border-2 [&_.mui-avatar]:border-[var(--panel)]' },
});

register('avatar-indigo', {
  base: { tw: 'bg-[#334a72] text-[#e6eeff]' },
});

register('avatar-teal', {
  base: { tw: 'bg-[#21594f] text-[#c9f2e7]' },
});

register('avatar-amber', {
  base: { tw: 'bg-[#65472d] text-[#ffe1bd]' },
});

register('avatar-violet', {
  base: { tw: 'bg-[#514276] text-[#e5dcff]' },
});

register('avatar-neutral', {
  base: { tw: 'bg-[#303844] text-[#c0cad8]' },
});

register('mui-avatar-xs', {
  base: { tw: '!size-6 text-[8px]' },
});

register('mui-avatar-sm', {
  base: { tw: '!size-8 text-[10px]' },
});

register('mui-avatar-lg', {
  base: { tw: 'size-12 text-sm [&_svg]:size-5' },
});

register('mui-avatar-xl', {
  base: { tw: 'size-14 text-base [&_svg]:size-6' },
});

register('avatar-examples', {
  base: { tw: 'flex flex-wrap items-center gap-3' },
});

register('avatar-size-examples', {
  base: { tw: 'flex flex-wrap items-end gap-4' },
});

register('avatar-size-item', {
  base: { tw: 'flex flex-col items-center gap-2' },
});

register('avatar-size-label', {
  base: { tw: 'font-mono text-[9px] text-[#8491a5]' },
});

register('avatar-group', {
  base: { tw: 'flex items-center -space-x-2 [&_.mui-avatar]:border-2 [&_.mui-avatar]:border-[#111720]' },
});

register('avatar-group-overflow', {
  base: { tw: 'relative z-0 inline-flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-[#111720] bg-[#252f40] text-[10px] font-semibold text-[#c0ccdf]' },
});
