import { forwardRef } from 'react';
import { cx } from 'registyle';
import './link.styles.js';

const Link = forwardRef(function Link(
  { children, className, underline = 'hover', color = 'primary', ...props },
  ref,
) {
  return (
    <a
      {...props}
      ref={ref}
      className={cx(
        'mui-link',
        `mui-link-underline-${underline}`,
        color !== 'primary' && `mui-link-color-${color}`,
        className,
      )}
    >
      {children}
    </a>
  );
});

export default Link;
