import { useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { createPopper } from '@popperjs/core';

const NO_MODIFIERS = [];

export function PopperSurface({
  open,
  anchorRef,
  placement = 'bottom-start',
  children,
  className = 'popper-surface',
  role = 'dialog',
  onEscape,
  modifiers = NO_MODIFIERS,
  surfaceRef,
}) {
  const localPopperRef = useRef(null);
  const [positioned, setPositioned] = useState(false);

  useLayoutEffect(() => {
    const anchor = anchorRef.current;
    const popper = localPopperRef.current;
    if (!open || !anchor || !popper) return undefined;

    setPositioned(false);
    const instance = createPopper(anchor, popper, {
      placement,
      strategy: 'fixed',
      modifiers: [
        { name: 'offset', options: { offset: [0, 8] } },
        { name: 'flip', options: { fallbackPlacements: ['top', 'right', 'left'] } },
        { name: 'preventOverflow', options: { padding: 8 } },
        ...modifiers,
      ],
      onFirstUpdate: () => setPositioned(true),
    });

    return () => instance.destroy();
  }, [anchorRef, modifiers, open, placement]);

  useLayoutEffect(() => {
    if (!open || !onEscape) return undefined;
    function handleKeyDown(event) {
      if (event.key === 'Escape') onEscape();
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onEscape, open]);

  if (!open || typeof document === 'undefined') return null;

  return createPortal(
    <div
      className={className}
      ref={(node) => {
        localPopperRef.current = node;
        if (typeof surfaceRef === 'function') surfaceRef(node);
        else if (surfaceRef) surfaceRef.current = node;
      }}
      role={role}
      style={{ visibility: positioned ? 'visible' : 'hidden' }}
    >
      {children}
    </div>,
    document.body,
  );
}

export function useClickAway(open, anchorRef, popperRef, onDismiss) {
  useLayoutEffect(() => {
    if (!open) return undefined;

    function handlePointerDown(event) {
      if (anchorRef.current?.contains(event.target)) return;
      if (popperRef.current?.contains(event.target)) return;
      onDismiss();
    }

    document.addEventListener('pointerdown', handlePointerDown, true);
    return () => document.removeEventListener('pointerdown', handlePointerDown, true);
  }, [anchorRef, onDismiss, open, popperRef]);
}
