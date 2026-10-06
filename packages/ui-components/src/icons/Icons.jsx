import { forwardRef } from 'react';
import { cx } from 'registyle';
import './icons.styles.js';

const Icons = forwardRef(function Icons(
  {
    children,
    className,
    color = 'currentColor',
    size = 24,
    title,
    viewBox = '0 0 24 24',
    ...props
  },
  ref,
) {
  const accessibleLabel = title ?? props['aria-label'];

  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: Unnamed icons are decorative and hidden from assistive technology.
    <svg
      {...props}
      ref={ref}
      className={cx('rgi-icons', className)}
      width={size}
      height={size}
      viewBox={viewBox}
      fill={props.fill ?? 'none'}
      stroke={color}
      strokeWidth={props.strokeWidth ?? 2}
      strokeLinecap={props.strokeLinecap ?? 'round'}
      strokeLinejoin={props.strokeLinejoin ?? 'round'}
      role={accessibleLabel ? 'img' : undefined}
      aria-hidden={accessibleLabel ? undefined : true}
    >
      {accessibleLabel && <title>{accessibleLabel}</title>}
      {children}
    </svg>
  );
});

export default Icons;
