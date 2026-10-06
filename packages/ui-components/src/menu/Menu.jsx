import { Children, cloneElement, forwardRef, isValidElement, useEffect, useRef } from 'react';
import { cx } from 'registyle';
import ClickAwayListener from '../click-away-listener/ClickAwayListener.jsx';
import Popper from '../popper/Popper.jsx';
import './menu.styles.js';

const Menu = forwardRef(function Menu(
  {
    anchorEl,
    children,
    className,
    open = false,
    onClose,
    placement = 'bottom-start',
    'aria-label': ariaLabel = 'Menu',
    ...props
  },
  ref,
) {
  const menuRef = useRef(null);
  function setRef(node) {
    menuRef.current = node;
    if (typeof ref === 'function') ref(node);
    else if (ref) ref.current = node;
  }

  useEffect(() => {
    if (!open || typeof window === 'undefined') return undefined;
    menuRef.current?.querySelector('[role="menuitem"]:not([aria-disabled="true"])')?.focus();
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose?.(event);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <Popper anchorEl={anchorEl} open={open} placement={placement} className="rgi-menu-positioner">
      <div
        {...props}
        ref={setRef}
        role="menu"
        aria-label={ariaLabel}
        className={cx('rgi-menu', className)}
        onKeyDown={(event) => {
          props.onKeyDown?.(event);
          if (event.defaultPrevented) return;
          const items = [
            ...event.currentTarget.querySelectorAll(
              '[role="menuitem"]:not([aria-disabled="true"])',
            ),
          ];
          const current = items.indexOf(document.activeElement);
          if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault();
            const nextIndex =
              current < 0
                ? event.key === 'ArrowDown'
                  ? 0
                  : items.length - 1
                : (current + (event.key === 'ArrowDown' ? 1 : items.length - 1)) % items.length;
            items[nextIndex]?.focus();
          } else if (event.key === 'Home') {
            event.preventDefault();
            items[0]?.focus();
          } else if (event.key === 'End') {
            event.preventDefault();
            items[items.length - 1]?.focus();
          }
        }}
      >
        <ClickAwayListener onClickAway={(event) => onClose?.(event)}>
          {Children.map(children, (child) =>
            isValidElement(child)
              ? cloneElement(child, { onClose: child.props.onClose ?? onClose })
              : child,
          )}
        </ClickAwayListener>
      </div>
    </Popper>
  );
});

export default Menu;
