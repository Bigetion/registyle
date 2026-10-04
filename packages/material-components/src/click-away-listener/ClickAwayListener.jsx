import { forwardRef, useEffect, useRef } from 'react';
import { cx } from 'registyle';
import './click-away-listener.styles.js';

const ClickAwayListener = forwardRef(function ClickAwayListener(
  { children, className, onClickAway, mouseEvent = 'click', touchEvent = 'touchend', ...props },
  forwardedRef,
) {
  const rootRef = useRef(null);
  const lastTouchTime = useRef(0);

  function setRef(node) {
    rootRef.current = node;
    if (typeof forwardedRef === 'function') forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  }

  useEffect(() => {
    if (typeof document === 'undefined') return undefined;
    const isOutside = (event) => {
      const root = rootRef.current;
      if (!root) return false;
      const path = event.composedPath?.();
      return path ? !path.includes(root) : !root.contains(event.target);
    };
    const handleMouse = (event) => {
      if (Date.now() - lastTouchTime.current < 800) return;
      if (isOutside(event)) onClickAway?.(event);
    };
    const handleTouch = (event) => {
      lastTouchTime.current = Date.now();
      if (isOutside(event)) onClickAway?.(event);
    };
    if (mouseEvent !== 'none') document.addEventListener(mouseEvent, handleMouse);
    if (touchEvent !== 'none')
      document.addEventListener(touchEvent, handleTouch, { passive: true });
    return () => {
      if (mouseEvent !== 'none') document.removeEventListener(mouseEvent, handleMouse);
      if (touchEvent !== 'none') document.removeEventListener(touchEvent, handleTouch);
    };
  }, [onClickAway, mouseEvent, touchEvent]);

  return (
    <div {...props} ref={setRef} className={cx('mui-click-away-listener', className)}>
      {children}
    </div>
  );
});

export default ClickAwayListener;
