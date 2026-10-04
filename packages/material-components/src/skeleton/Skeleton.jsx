import { forwardRef } from 'react';
import { cx } from 'registyle';
import './skeleton.styles.js';

const Skeleton = forwardRef(function Skeleton(
  { animation = 'pulse', className, height, variant = 'text', width, style, ...props },
  ref,
) {
  return (
    <span
      {...props}
      ref={ref}
      aria-hidden={props['aria-hidden'] ?? true}
      className={cx(
        'mui-skeleton',
        `mui-skeleton-${variant}`,
        animation !== 'none' && `mui-skeleton-${animation}`,
        className,
      )}
      style={{ width, height, ...style }}
    />
  );
});

export default Skeleton;
