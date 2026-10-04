import { forwardRef } from 'react';
import { cx } from 'registyle';
import './divider.styles.js';

const Divider = forwardRef(function Divider(
  {
    children,
    className,
    flexItem = false,
    inset = false,
    orientation = 'horizontal',
    textAlign = 'center',
    ...props
  },
  ref,
) {
  const vertical = orientation === 'vertical';
  const Tag = children ? 'div' : 'hr';

  return (
    <Tag
      {...props}
      ref={ref}
      className={cx(
        'mui-divider',
        `mui-divider-${orientation}`,
        children && `mui-divider-text-${textAlign}`,
        inset && 'mui-divider-inset',
        flexItem && 'mui-divider-flex-item',
        className,
      )}
      role={children ? 'separator' : undefined}
      aria-orientation={vertical ? 'vertical' : undefined}
    >
      {children && <span className="mui-divider-content">{children}</span>}
    </Tag>
  );
});

export default Divider;
