import { forwardRef } from 'react';
import { cx } from 'registyle';
import './paper.styles.js';

const Paper = forwardRef(function Paper(
  { children, className, elevation = 1, square = false, ...props },
  ref,
) {
  return (
    <div
      {...props}
      ref={ref}
      className={cx(
        'rgi-paper',
        `rgi-paper-elevation-${elevation}`,
        square && 'rgi-paper-square',
        className,
      )}
    >
      {children}
    </div>
  );
});

export default Paper;
