import { register } from 'registyle/collector';

register.all({
  'brand-mark span': { tw: 'font-[Manrope,sans-serif] text-[17px] font-extrabold tracking-[-.1em]' },
  'brand-lockup': { tw: 'flex flex-col gap-0.5' },
  'brand-subtitle': { tw: 'text-[9px] leading-none tracking-[.04em] text-[var(--subtle)]' },
  'version-indicator': { tw: 'size-1.5 rounded-full bg-[#76d5ad] shadow-[0_0_8px_rgba(118,213,173,.8)]' },
  'topbar-github': {
    tw: 'inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[#ffffff03] px-2.5 py-1.5 text-[10px] font-medium text-[var(--muted)] no-underline transition-colors hover:border-[#455675] hover:text-white max-sm:hidden',
  },
  'help-button': { tw: 'size-8 border border-transparent hover:border-[var(--border)]' },
  'sidebar-bottom-icon': { tw: 'flex size-7 items-center justify-center rounded-lg border border-[#2b3b37] bg-[#111e1c] text-[#80d6b1]' },
  'component-hero': {
    tw: 'relative mb-7 flex min-h-[220px] items-center justify-between gap-8 overflow-hidden rounded-2xl border border-[#29354a] bg-[linear-gradient(115deg,rgba(18,26,40,.98),rgba(14,19,30,.92)_58%,rgba(26,35,55,.76))] px-8 py-8 shadow-[0_18px_55px_rgba(0,0,0,.18)] max-sm:min-h-0 max-sm:flex-wrap max-sm:gap-5 max-sm:px-5 max-sm:py-6',
  },
  'component-hero-copy': { tw: 'relative z-[1] max-w-[670px]' },
  'eyebrow-glow': { tw: 'size-1.5 rounded-full bg-[#8baeff] shadow-[0_0_12px_rgba(139,174,255,.9)]' },
  'eyebrow-divider': { tw: 'text-[#4a5870]' },
  'hero-emblem': { tw: 'relative mr-6 flex size-[152px] shrink-0 items-center justify-center max-md:mr-2 max-sm:hidden' },
  'hero-emblem-halo': { tw: 'absolute inset-3 rounded-full border border-[#6078ae]/25 bg-[radial-gradient(circle,rgba(95,130,210,.18),rgba(67,90,144,.04)_62%,transparent_70%)] shadow-[0_0_65px_rgba(83,117,193,.12)]' },
  'hero-emblem-icon': { tw: 'relative z-[1] flex size-[70px] items-center justify-center rounded-[22px] border border-[#718ac2]/35 bg-[linear-gradient(145deg,rgba(112,145,225,.22),rgba(39,53,83,.45))] text-[#b5cbff] shadow-[0_12px_40px_rgba(53,82,151,.28)]' },
  'hero-emblem-orbit': { tw: 'absolute rounded-full border border-dashed border-[#7083aa]/25' },
  'orbit-one': { tw: 'inset-0' },
  'orbit-two': { tw: 'inset-[-9px] border-[#7083aa]/10' },
  'hero-emblem-spark': { tw: 'absolute right-1 top-5 flex size-8 items-center justify-center rounded-xl border border-[#6c83b5]/30 bg-[#18243a] text-[#b8cbff] shadow-lg' },
  'component-toc': { tw: 'mb-9 flex items-center gap-5 border-b border-[#202a39] pb-3 text-[10px] max-sm:gap-4' },
});
