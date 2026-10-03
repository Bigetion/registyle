import { register } from 'registyle/collector';

register.all({
  'app-shell': {
    tw: 'min-h-screen bg-[var(--page)]',
  },
  sidebar: {
    tw: 'fixed inset-y-0 left-0 z-20 flex w-[248px] flex-col border-r border-[var(--line)] bg-[var(--sidebar)] px-4 py-5 max-lg:w-[220px] max-md:static max-md:w-full max-md:border-r-0 max-md:border-b max-md:px-4 max-md:py-3',
  },
  'brand-row': {
    tw: 'mb-7 flex items-center gap-2.5 px-2 max-md:mb-3',
  },
  'brand-mark': {
    tw: 'grid size-9 place-items-center rounded-xl bg-[var(--brand)] text-white shadow-[0_5px_12px_rgba(98,88,232,.24)]',
  },
  'brand-name': {
    tw: 'font-[Manrope,sans-serif] text-[17px] font-extrabold tracking-[-.04em]',
  },
  'workspace-select': {
    tw: 'relative mb-6 flex w-full items-center gap-3 rounded-xl border border-[var(--line)] bg-white p-2 text-left transition-colors hover:border-[#d5d7e2] focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[var(--brand)] max-md:mb-3',
  },
  'workspace-native-select': {
    tw: 'absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0',
  },
  'workspace-logo': {
    tw: 'grid size-9 shrink-0 place-items-center rounded-lg bg-[#e9e7ff] font-[Manrope,sans-serif] text-xs font-extrabold text-[var(--brand)]',
  },
  'workspace-copy': {
    tw: 'flex min-w-0 flex-1 flex-col text-left',
  },
  'workspace-name': {
    tw: 'overflow-hidden text-ellipsis whitespace-nowrap text-[12px] font-bold text-[var(--ink)]',
  },
  'workspace-plan': {
    tw: 'text-[10px] text-[var(--muted)]',
  },
  'section-label': {
    tw: 'mb-2 px-3 text-[10px] font-bold uppercase tracking-[.11em] text-[#a0a5b3] max-md:hidden',
  },
  'section-label-spaced': {
    tw: 'mb-2 mt-7 px-3 text-[10px] font-bold uppercase tracking-[.11em] text-[#a0a5b3] max-md:hidden',
  },
  'nav-list': {
    tw: 'flex flex-col gap-1 max-md:flex-row max-md:overflow-x-auto max-md:pb-1',
  },
  'nav-item': {
    tw: 'flex min-h-10 w-full items-center gap-3 rounded-lg border-0 bg-transparent px-3 text-left text-[13px] font-medium text-[#747b8c] transition-colors hover:bg-[#f5f5f9] hover:text-[var(--ink)] focus-visible:outline-2 focus-visible:outline-[var(--brand)] max-md:w-auto max-md:shrink-0',
  },
  'nav-item-active': {
    tw: 'flex min-h-10 w-full items-center gap-3 rounded-lg border-0 bg-[var(--brand-soft)] px-3 text-left text-[13px] font-semibold text-[var(--brand)] focus-visible:outline-2 focus-visible:outline-[var(--brand)] max-md:w-auto max-md:shrink-0',
  },
  'nav-count': {
    tw: 'ml-auto rounded-md bg-[#f0f1f5] px-1.5 py-0.5 text-[10px] font-semibold text-[#7b8191]',
  },
  'sidebar-bottom': {
    tw: 'mt-auto border-t border-[var(--line)] pt-4 max-md:hidden',
  },
  'help-card': {
    tw: 'rounded-xl bg-[#f7f7fb] p-3.5',
  },
  'help-title': {
    tw: 'mb-1 flex items-center gap-2 text-xs font-bold',
  },
  'help-copy': {
    tw: 'mb-3 text-[11px] leading-[1.55] text-[var(--muted)]',
  },
  'help-link': {
    tw: 'inline-flex items-center gap-1 border-0 bg-transparent p-0 text-[11px] font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]',
  },
  'account-row': {
    tw: 'mt-4 flex items-center gap-2.5 px-1',
  },
  avatar: {
    tw: 'grid size-8 shrink-0 place-items-center rounded-full bg-[#e7e9ff] text-[10px] font-bold text-[#554bc9]',
  },
  'account-copy': {
    tw: 'flex min-w-0 flex-1 flex-col',
  },
  'account-name': {
    tw: 'text-[11px] font-bold',
  },
  'account-email': {
    tw: 'overflow-hidden text-ellipsis whitespace-nowrap text-[10px] text-[var(--muted)]',
  },
  'main-area': {
    tw: 'ml-[248px] min-h-screen px-8 pb-10 max-lg:ml-[220px] max-lg:px-6 max-md:ml-0 max-md:px-4 max-md:pb-7',
  },
  topbar: {
    tw: 'flex h-[76px] items-center justify-between border-b border-[var(--line)] max-md:h-[62px]',
  },
  breadcrumb: {
    tw: 'flex items-center gap-2 text-xs text-[var(--muted)]',
  },
  'breadcrumb-current': {
    tw: 'font-semibold text-[var(--ink)]',
  },
  'topbar-actions': {
    tw: 'flex items-center gap-2.5',
  },
  'icon-button': {
    tw: 'relative grid size-9 place-items-center rounded-lg border border-[var(--line)] bg-white text-[#73798a] transition-colors hover:bg-[#f7f7fa] hover:text-[var(--ink)] focus-visible:outline-2 focus-visible:outline-[var(--brand)]',
  },
  'icon-button-compact': {
    tw: 'relative grid size-8 place-items-center rounded-lg border border-[var(--line)] bg-white text-[#73798a] transition-colors hover:bg-[#f7f7fa] hover:text-[var(--ink)] focus-visible:outline-2 focus-visible:outline-[var(--brand)]',
  },
  'icon-muted': {
    tw: 'text-[#9298a7]',
  },
  'profile-chevron': {
    tw: 'text-[#8b91a0] max-sm:hidden',
  },
  'account-menu-icon': {
    tw: 'text-[#8b91a0]',
  },
  'notification-wrap': {
    tw: 'relative',
  },
  'table-progress-row': {
    tw: 'flex items-center gap-2',
  },
  'table-progress-track': {
    tw: 'w-[75px]',
  },
  'table-percent': {
    tw: 'text-[9px]',
  },
  'modal-toprow': {
    tw: 'flex items-start justify-between',
  },
  'toast-icon': {
    tw: 'text-[#6de0ad]',
  },
  'search-input': {
    tw: 'h-9 w-[175px] rounded-lg border border-[var(--line)] bg-white px-3 text-xs font-semibold text-[#555c6c] outline-none placeholder:text-[#a5aab6] focus:border-[var(--brand)] focus:ring-2 focus:ring-[#6258e822] max-sm:w-[118px]',
  },
  'notification-dot': {
    tw: 'absolute right-[8px] top-[7px] size-1.5 rounded-full bg-[var(--red)] ring-2 ring-white',
  },
  'profile-button': {
    tw: 'flex items-center gap-2 border-0 bg-transparent p-0 pl-1 text-left',
  },
  'profile-avatar': {
    tw: 'grid size-8 place-items-center rounded-full bg-[#f8e7dc] text-[10px] font-bold text-[#a65e37]',
  },
  'content-wrap': {
    tw: 'mx-auto max-w-[1370px]',
  },
  'page-heading': {
    tw: 'mb-6 flex items-end justify-between gap-4 pt-7 max-sm:flex-col max-sm:items-start max-sm:pt-5',
  },
  eyebrow: {
    tw: 'mb-1 text-[11px] font-semibold text-[var(--muted)]',
  },
  'page-title': {
    tw: 'font-[Manrope,sans-serif] text-[25px] font-extrabold tracking-[-.045em] text-[var(--ink)] max-sm:text-[22px]',
  },
  'page-subtitle': {
    tw: 'mt-1 text-xs text-[var(--muted)]',
  },
  'heading-actions': {
    tw: 'flex items-center gap-2',
  },
  'select-control': {
    tw: 'h-9 rounded-lg border border-[var(--line)] bg-white px-3 text-xs font-semibold text-[#555c6c] outline-none focus:border-[var(--brand)] focus:ring-2 focus:ring-[#6258e822]',
  },
  'primary-button': {
    tw: 'inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-[var(--brand)] bg-[var(--brand)] px-3.5 text-xs font-semibold text-white shadow-[0_2px_5px_rgba(98,88,232,.2)] transition-colors hover:border-[var(--brand-dark)] hover:bg-[var(--brand-dark)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]',
  },
  'metric-grid': {
    tw: 'mb-5 grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1',
  },
  'metric-card': {
    tw: 'rounded-xl border border-[var(--line)] bg-white p-4 shadow-[0_1px_2px_rgba(18,25,38,.025)]',
  },
  'metric-top': {
    tw: 'mb-3 flex items-center justify-between',
  },
  'metric-label': {
    tw: 'text-[11px] font-semibold text-[#777e8e]',
  },
  'metric-icon': {
    tw: 'grid size-8 place-items-center rounded-lg bg-[#f1f0ff] text-[var(--brand)]',
  },
  'metric-value': {
    tw: 'font-[Manrope,sans-serif] text-[23px] font-extrabold tracking-[-.045em] text-[var(--ink)]',
  },
  'metric-foot': {
    tw: 'mt-1.5 flex items-center gap-1.5 text-[10px] text-[var(--muted)]',
  },
  'trend-up': {
    tw: 'inline-flex items-center gap-0.5 font-bold text-[var(--green)]',
  },
  'trend-down': {
    tw: 'inline-flex items-center gap-0.5 font-bold text-[var(--red)]',
  },
  'dashboard-grid': {
    tw: 'mb-5 grid grid-cols-[minmax(0,1.7fr)_minmax(265px,1fr)] gap-4 max-lg:grid-cols-1',
  },
  panel: {
    tw: 'min-w-0 rounded-xl border border-[var(--line)] bg-white shadow-[0_1px_2px_rgba(18,25,38,.025)]',
  },
  'panel-header': {
    tw: 'flex items-center justify-between gap-3 border-b border-[var(--line)] px-5 py-4 max-sm:px-4',
  },
  'panel-title': {
    tw: 'text-[13px] font-bold text-[var(--ink)]',
  },
  'panel-description': {
    tw: 'mt-0.5 text-[10px] text-[var(--muted)]',
  },
  'chart-key': {
    tw: 'flex items-center gap-1.5 text-[10px] text-[#747b8c]',
  },
  'chart-dot': {
    tw: 'size-2 rounded-full bg-[var(--brand)]',
  },
  'chart-wrap': {
    tw: 'px-4 pt-5 max-sm:px-2',
  },
  chart: {
    tw: 'h-[210px] w-full overflow-visible',
  },
  'chart-labels': {
    tw: 'flex justify-between px-1 pb-4 text-[9px] text-[#9ba1af]',
  },
  'usage-body': {
    tw: 'p-5',
  },
  'usage-plan': {
    tw: 'mb-4 flex items-center justify-between rounded-lg bg-[#f7f7fb] p-3',
  },
  'plan-label': {
    tw: 'text-[10px] text-[var(--muted)]',
  },
  'plan-name': {
    tw: 'mt-0.5 text-xs font-bold',
  },
  'plan-badge': {
    tw: 'rounded-md bg-[var(--brand-soft)] px-2 py-1 text-[9px] font-bold text-[var(--brand)]',
  },
  'usage-item': {
    tw: 'mb-4 last:mb-0',
  },
  'usage-row': {
    tw: 'mb-1.5 flex items-center justify-between text-[10px]',
  },
  'usage-name': {
    tw: 'font-semibold text-[#555c6c]',
  },
  'usage-value': {
    tw: 'text-[var(--muted)]',
  },
  'progress-track': {
    tw: 'h-1.5 overflow-hidden rounded-full bg-[#eff0f4]',
  },
  'progress-fill': {
    tw: 'h-full rounded-full bg-[var(--brand)]',
  },
  'usage-note': {
    tw: 'mt-4 rounded-lg border border-[#f0e6d9] bg-[#fffaf4] p-3 text-[10px] leading-[1.55] text-[#836b4e] [&_svg]:mr-1 [&_svg]:inline [&_svg]:text-[#c18542]',
  },
  'usage-fill-storage': {
    tw: 'w-[68%]',
  },
  'usage-fill-automations': {
    tw: 'w-[72%]',
  },
  'usage-link': {
    tw: 'mt-3 inline-flex items-center gap-1 border-0 bg-transparent p-0 text-[10px] font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]',
  },
  'projects-panel': {
    tw: 'overflow-hidden',
  },
  'table-scroll': {
    tw: 'overflow-x-auto',
  },
  'project-table': {
    tw: 'w-full min-w-[620px] border-collapse text-left',
  },
  'table-heading': {
    tw: 'border-b border-[var(--line)] bg-[#fafbfc] px-5 py-2.5 text-[9px] font-bold uppercase tracking-[.08em] text-[#9298a7]',
  },
  'table-cell': {
    tw: 'border-b border-[var(--line)] px-5 py-3 text-[11px] text-[#62697a] last:border-b-0',
  },
  'project-name': {
    tw: 'font-semibold text-[var(--ink)]',
  },
  'project-subtitle': {
    tw: 'mt-0.5 text-[9px] text-[var(--muted)]',
  },
  'status-badge': {
    tw: 'inline-flex items-center gap-1 rounded-full bg-[var(--green-soft)] px-2 py-1 text-[9px] font-bold text-[#218260]',
  },
  'status-dot': {
    tw: 'size-1.5 rounded-full bg-[var(--green)]',
  },
  'status-dot-review': {
    tw: 'size-1.5 rounded-full bg-[var(--orange)]',
  },
  'status-review': {
    tw: 'inline-flex items-center gap-1 rounded-full bg-[var(--orange-soft)] px-2 py-1 text-[9px] font-bold text-[#a86a25]',
  },
  'member-stack': {
    tw: 'flex items-center',
  },
  'member-avatar': {
    tw: '-ml-1.5 grid size-6 place-items-center rounded-full border-2 border-white bg-[#ecebff] text-[8px] font-bold text-[#5e55ca] first:ml-0',
  },
  'table-footer': {
    tw: 'flex items-center justify-between border-t border-[var(--line)] px-5 py-3 text-[10px] text-[var(--muted)]',
  },
  'text-button': {
    tw: 'inline-flex items-center gap-1 border-0 bg-transparent p-0 text-[10px] font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]',
  },
  popover: {
    tw: 'absolute right-0 top-11 z-30 w-[285px] rounded-xl border border-[var(--line)] bg-white p-3 shadow-[0_12px_36px_rgba(31,35,51,.14)]',
  },
  'popover-title': {
    tw: 'mb-2 px-1 text-xs font-bold',
  },
  'notification-item': {
    tw: 'flex gap-2.5 rounded-lg p-2 text-[10px] leading-[1.45] hover:bg-[#f7f7fa]',
  },
  'notification-avatar': {
    tw: 'grid size-7 shrink-0 place-items-center rounded-full bg-[#f0efff] text-[var(--brand)]',
  },
  'notification-time': {
    tw: 'mt-0.5 text-[9px] text-[var(--muted)]',
  },
  'modal-backdrop': {
    tw: 'fixed inset-0 z-40 grid place-items-center bg-[#1a1b2a66] p-4',
  },
  modal: {
    tw: 'relative m-0 block w-full max-w-[420px] rounded-2xl border border-[var(--line)] bg-white p-6 shadow-[0_24px_80px_rgba(20,24,40,.24)]',
  },
  'modal-title': {
    tw: 'font-[Manrope,sans-serif] text-lg font-extrabold tracking-[-.03em]',
  },
  'modal-copy': {
    tw: 'mb-5 mt-1 text-xs leading-relaxed text-[var(--muted)]',
  },
  'form-label': {
    tw: 'mb-1.5 block text-[11px] font-semibold text-[#555c6c]',
  },
  'form-input': {
    tw: 'mb-4 h-10 w-full rounded-lg border border-[var(--line)] px-3 text-xs outline-none placeholder:text-[#a5aab6] focus:border-[var(--brand)] focus:ring-2 focus:ring-[#6258e822]',
  },
  'modal-actions': {
    tw: 'flex justify-end gap-2 pt-1',
  },
  'secondary-button': {
    tw: 'inline-flex h-9 items-center justify-center rounded-lg border border-[var(--line)] bg-white px-3.5 text-xs font-semibold text-[#656b7b] hover:bg-[#f8f8fb] focus-visible:outline-2 focus-visible:outline-[var(--brand)]',
  },
  toast: {
    tw: 'fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-xl bg-[#242738] px-4 py-3 text-xs font-medium text-white shadow-[0_8px_28px_rgba(22,25,40,.2)]',
  },
  'empty-state': {
    tw: 'px-5 py-10 text-center text-xs text-[var(--muted)]',
  },
  'footer-row': {
    tw: 'mt-5 flex items-center justify-between text-[10px] text-[#9ba1af] max-sm:items-start',
  },
  'footer-status': {
    tw: 'inline-flex items-center gap-1 max-sm:hidden',
  },
  'sr-only': {
    tw: 'sr-only',
  },
});
