import { Children, cloneElement, forwardRef, isValidElement } from 'react';
import { cx } from 'registyle';
import './bottom-navigation.styles.js';

const BottomNavigation = forwardRef(function BottomNavigation(
  { 'aria-label': ariaLabel = 'Bottom navigation', children, className, value, onChange, ...props },
  ref,
) {
  return (
    <nav
      {...props}
      ref={ref}
      aria-label={ariaLabel}
      className={cx('mui-bottom-navigation', className)}
    >
      {Children.map(children, (child) =>
        isValidElement(child) && child.props.value !== undefined
          ? cloneElement(child, {
              selected: child.props.selected ?? child.props.value === value,
              onSelect: child.props.onSelect ?? onChange,
            })
          : child,
      )}
    </nav>
  );
});

export default BottomNavigation;
