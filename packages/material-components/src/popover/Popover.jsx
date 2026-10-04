import { forwardRef, useEffect, useId, useRef } from 'react';
import { cx } from 'registyle';
import Popper from '../popper/Popper.jsx';
import './popover.styles.js';

const Popover = forwardRef(function Popover(
  {
    anchorEl,
    children,
    className,
    id,
    label,
    labelledBy,
    offset = 8,
    onClose,
    open = false,
    placement = 'bottom-start',
    role = 'dialog',
    ...props
  },
  forwardedRef,
) {
  const internalRef = useRef(null);
  const generatedId = useId();
  const popoverId = id ?? generatedId;

  function setRef(node) {
    internalRef.current = node;
    if (typeof forwardedRef === 'function') forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  }

  useEffect(() => {
    if (!open || !anchorEl) return undefined;

    const onPointerDown = (event) => {
      if (!internalRef.current?.contains(event.target) && !anchorEl.contains(event.target)) {
        onClose?.(event, 'backdropClick');
      }
    };
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose?.(event, 'escapeKeyDown');
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, anchorEl, onClose]);

  if (!open || !anchorEl || typeof document === 'undefined') return null;

  return (
    <Popper
      {...props}
      ref={setRef}
      anchorEl={anchorEl}
      open={open}
      placement={placement}
      offset={offset}
      id={popoverId}
      className={cx('rgi-popover', className)}
      role={role}
      aria-label={label}
      aria-labelledby={labelledBy}
      style={props.style}
    >
      {children}
    </Popper>
  );
});

export default Popover;
