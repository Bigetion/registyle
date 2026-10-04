import { forwardRef } from 'react';
import { cx } from 'registyle';
import './menu.styles.js';

const MenuItem = forwardRef(function MenuItem(
  { children, className, disabled = false, onClick, onClose, ...props },
  ref,
) {
  return (
    <button
      {...props}
      ref={ref}
      type="button"
      role="menuitem"
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : 0}
      className={cx('rgi-menu-item', disabled && 'rgi-menu-item-disabled', className)}
      onClick={(event) => {
        if (disabled) {
          event.preventDefault();
          return;
        }
        onClick?.(event);
        if (!event.defaultPrevented) onClose?.(event);
      }}
    >
      {children}
    </button>
  );
});

export { MenuItem };
