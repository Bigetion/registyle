import { register } from 'registyle/collector';

register('rgi-drawer-root', { base: { tw: 'contents' } });
register('rgi-drawer-backdrop', {
  base: { tw: 'fixed inset-0 z-40 cursor-default border-0 bg-black/40 p-0' },
});
register('rgi-drawer', {
  base: {
    tw: 'fixed z-50 flex h-dvh w-[min(20rem,85vw)] flex-col overflow-auto bg-[var(--surface,#fff)] p-4 text-[var(--text,#20242b)] shadow-[0_8px_32px_rgba(0,0,0,.2)]',
  },
  modifiers: {
    'anchor-left': { tw: 'inset-y-0 left-0' },
    'anchor-right': { tw: 'inset-y-0 right-0' },
    'anchor-top': { tw: 'inset-x-0 top-0 h-auto w-full' },
    'anchor-bottom': { tw: 'inset-x-0 bottom-0 h-auto w-full' },
  },
});
register('rgi-drawer-permanent', { base: { tw: 'contents' } });
register('rgi-drawer-persistent', { base: { tw: 'contents' } });
register('rgi-drawer-temporary', { base: { tw: 'contents' } });
register('rgi-drawer-open', { base: { tw: 'visible' } });
register('rgi-drawer [hidden]', { base: { tw: 'hidden' } });
