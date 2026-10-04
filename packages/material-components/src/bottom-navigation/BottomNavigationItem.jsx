import { forwardRef } from 'react';
import { cx } from 'registyle';
import './bottom-navigation.styles.js';

const BottomNavigationItem = forwardRef(function BottomNavigationItem(
  { children, className, icon, label, onSelect, selected = false, value, onClick, ...props },
  ref,
) {
  return (
    <button
      {...props}
      ref={ref}
      type="button"
      className={cx(
        'mui-bottom-navigation-item',
        selected && 'mui-bottom-navigation-item-selected',
        className,
      )}
      aria-current={selected ? 'page' : undefined}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) onSelect?.(event, value);
      }}
    >
      {icon && (
        <span className="mui-bottom-navigation-icon" aria-hidden="true">
          {icon}
        </span>
      )}
      <span className="mui-bottom-navigation-label">{label ?? children}</span>
    </button>
  );
});

export { BottomNavigationItem };
