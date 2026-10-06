import { forwardRef } from 'react';
import { cx } from 'registyle';
import './badge.styles.js';

const Badge = forwardRef(function Badge(
  {
    badgeContent,
    badgeLabel,
    children,
    className,
    color = 'primary',
    invisible = false,
    max = 99,
    overlap = 'circular',
    showZero = false,
    variant = 'standard',
    ...props
  },
  ref,
) {
  const isDot = variant === 'dot';
  const isEmpty = badgeContent == null || badgeContent === '' || (badgeContent === 0 && !showZero);
  const content =
    typeof badgeContent === 'number' && !isDot && badgeContent > max ? `${max}+` : badgeContent;

  return (
    <span {...props} ref={ref} className={cx('rgi-badge-root', className)}>
      {children}
      {!invisible && (isDot || !isEmpty) && (
        <span
          className={cx(
            'rgi-badge',
            `rgi-badge-${color}`,
            `rgi-badge-${variant}`,
            `rgi-badge-overlap-${overlap}`,
          )}
          role="img"
          aria-label={badgeLabel}
          aria-hidden={badgeLabel ? undefined : true}
        >
          {!isDot && content}
        </span>
      )}
    </span>
  );
});

export default Badge;
