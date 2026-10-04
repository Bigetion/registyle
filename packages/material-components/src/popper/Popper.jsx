import { createPopper } from '@popperjs/core';
import { forwardRef, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { cx } from 'registyle';
import Portal from '../portal/Portal.jsx';
import './popper.styles.js';

const DEFAULT_FALLBACK_PLACEMENTS = ['top', 'right', 'left'];
const NO_MODIFIERS = [];
const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

const Popper = forwardRef(function Popper(
  {
    children,
    className,
    style,
    anchorEl,
    anchorRef,
    open = true,
    placement = 'bottom',
    offset = 8,
    strategy = 'fixed',
    container,
    disablePortal = false,
    fallbackPlacements = DEFAULT_FALLBACK_PLACEMENTS,
    preventOverflow = true,
    modifiers = NO_MODIFIERS,
    ...props
  },
  forwardedRef,
) {
  const popperRef = useRef(null);
  const [positioned, setPositioned] = useState(false);
  const resolvedAnchor = anchorEl ?? anchorRef?.current ?? null;

  function setRef(node) {
    popperRef.current = node;
    if (typeof forwardedRef === 'function') forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  }

  useIsomorphicLayoutEffect(() => {
    const element = popperRef.current;
    const reference = anchorEl ?? anchorRef?.current ?? null;
    if (!open || !reference || !element) {
      setPositioned(false);
      return undefined;
    }

    setPositioned(false);
    const instance = createPopper(reference, element, {
      placement,
      strategy,
      modifiers: [
        { name: 'offset', options: { offset: [0, Number(offset) || 0] } },
        { name: 'flip', options: { fallbackPlacements } },
        { name: 'preventOverflow', enabled: preventOverflow, options: { padding: 8 } },
        ...modifiers,
      ],
      onFirstUpdate: () => setPositioned(true),
    });

    return () => instance.destroy();
  }, [
    anchorEl,
    anchorRef,
    fallbackPlacements,
    modifiers,
    offset,
    open,
    placement,
    preventOverflow,
    strategy,
  ]);

  if (!open || (!resolvedAnchor && !anchorRef) || typeof document === 'undefined') return null;
  const popper = (
    <div
      {...props}
      ref={setRef}
      className={cx('mui-popper', className)}
      data-placement={placement}
      style={{ ...style, visibility: positioned ? style?.visibility : 'hidden' }}
    >
      {children}
    </div>
  );
  return disablePortal ? popper : <Portal container={container}>{popper}</Portal>;
});

export default Popper;
