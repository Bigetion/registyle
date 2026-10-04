import { forwardRef, useEffect, useRef } from 'react';
import { cx } from 'registyle';
import './drawer.styles.js';

const Drawer = forwardRef(function Drawer(
  {
    children,
    className,
    open = false,
    onClose,
    anchor = 'left',
    variant = 'temporary',
    closeOnEscape = true,
    closeOnBackdrop = true,
    'aria-label': ariaLabel = 'Navigation drawer',
    onKeyDown,
    ...props
  },
  ref,
) {
  const drawerRef = useRef(null);
  function setDrawerRef(node) {
    drawerRef.current = node;
    if (typeof ref === 'function') ref(node);
    else if (ref) ref.current = node;
  }

  useEffect(() => {
    if (!open || !closeOnEscape || typeof window === 'undefined') return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose?.(event);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, closeOnEscape, onClose]);

  useEffect(() => {
    if (!open || variant !== 'temporary' || typeof document === 'undefined') return undefined;
    const previouslyFocused = document.activeElement;
    drawerRef.current?.focus();
    return () => {
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [open, variant]);

  if (variant === 'temporary' && !open) return null;
  const DrawerSurface = variant === 'temporary' ? 'div' : 'aside';
  return (
    <div className={cx('mui-drawer-root', `mui-drawer-${variant}`, open && 'mui-drawer-open')}>
      {variant === 'temporary' && (
        <button
          type="button"
          className="mui-drawer-backdrop"
          aria-label="Close drawer"
          tabIndex={open ? 0 : -1}
          onClick={(event) => closeOnBackdrop && onClose?.(event)}
        />
      )}
      <DrawerSurface
        {...props}
        ref={setDrawerRef}
        className={cx('mui-drawer', `mui-drawer-anchor-${anchor}`, className)}
        role={variant === 'temporary' ? 'dialog' : undefined}
        aria-label={ariaLabel}
        aria-modal={variant === 'temporary' ? 'true' : undefined}
        hidden={variant === 'persistent' && !open}
        tabIndex={variant === 'temporary' ? -1 : props.tabIndex}
        onKeyDown={(event) => {
          onKeyDown?.(event);
          if (variant !== 'temporary' || event.defaultPrevented || event.key !== 'Tab') return;
          const focusable = [
            ...event.currentTarget.querySelectorAll(
              'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])',
            ),
          ].filter(
            (element) =>
              !element.closest('[hidden]') && element.getAttribute('aria-hidden') !== 'true',
          );
          if (!focusable.length) {
            event.preventDefault();
            event.currentTarget.focus();
            return;
          }
          if (
            event.shiftKey &&
            (document.activeElement === focusable[0] ||
              document.activeElement === event.currentTarget)
          ) {
            event.preventDefault();
            focusable[focusable.length - 1].focus();
          } else if (
            !event.shiftKey &&
            document.activeElement === focusable[focusable.length - 1]
          ) {
            event.preventDefault();
            focusable[0].focus();
          }
        }}
      >
        {children}
      </DrawerSurface>
    </div>
  );
});

export default Drawer;
