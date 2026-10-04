import { forwardRef } from 'react';
import { cx } from 'registyle';
import './button-group.styles.js';

const ButtonGroup = forwardRef(function ButtonGroup(
  { children, className, orientation = 'horizontal', ...props },
  ref,
) {
  return (
    <div
      {...props}
      ref={ref}
      role={props.role ?? 'group'}
      className={cx(
        'mui-button-group',
        orientation === 'vertical' && 'mui-button-group-vertical',
        className,
      )}
    >
      {children}
    </div>
  );
});

export default ButtonGroup;
