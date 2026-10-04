import { forwardRef, useEffect, useRef } from 'react';
import { cx } from 'registyle';
import Portal from '../portal/Portal.jsx';
import './modal.styles.js';

const Modal = forwardRef(function Modal(
  {
    children,
    className,
    open = false,
    onClose,
    closeOnEscape = true,
    closeOnBackdrop = true,
    container,
    onMouseDown,
    'aria-label': ariaLabel,
    'aria-labelledby': labelledBy,
    ...props
  },
  forwardedRef,
) {
  const dialogRef = useRef(null);

  function setRef(node) {
    dialogRef.current = node;
    if (typeof forwardedRef === 'function') forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  }

  useEffect(() => {
    if (!open) return undefined;
    const previouslyFocused = typeof document !== 'undefined' ? document.activeElement : null;
    const originalOverflow = typeof document !== 'undefined' ? document.body.style.overflow : '';
    if (typeof document !== 'undefined') document.body.style.overflow = 'hidden';
    dialogRef.current?.focus();
    return () => {
      if (typeof document !== 'undefined') document.body.style.overflow = originalOverflow;
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const handleKeyDown = (event) => {
      if (closeOnEscape && event.key === 'Escape') onClose?.(event, 'escapeKeyDown');
    };
    if (typeof window !== 'undefined') window.addEventListener('keydown', handleKeyDown);
    return () => {
      if (typeof window !== 'undefined') window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, closeOnEscape, onClose]);

  if (!open) return null;
  return (
    <Portal container={container}>
      {/* biome-ignore lint/a11y/noStaticElementInteractions: The backdrop closes only when the pointer lands outside the modal. */}
      <div
        className="rgi-modal-backdrop"
        onMouseDown={(event) => {
          onMouseDown?.(event);
          if (!event.defaultPrevented && closeOnBackdrop && event.target === event.currentTarget)
            onClose?.(event, 'backdropClick');
        }}
      >
        <div
          {...props}
          ref={setRef}
          role="dialog"
          aria-modal="true"
          aria-label={ariaLabel}
          aria-labelledby={labelledBy}
          tabIndex={-1}
          className={cx('rgi-modal', className)}
          onKeyDown={(event) => {
            props.onKeyDown?.(event);
            if (event.defaultPrevented || event.key !== 'Tab') return;
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
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (
              event.shiftKey &&
              (document.activeElement === first || document.activeElement === event.currentTarget)
            ) {
              event.preventDefault();
              last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
              event.preventDefault();
              first.focus();
            }
          }}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
});

export default Modal;
