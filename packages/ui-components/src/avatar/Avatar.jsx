import { forwardRef } from 'react';
import { cx } from 'registyle';
import './avatar.styles.js';

const Avatar = forwardRef(function Avatar(
  {
    alt,
    children,
    className,
    color = 'default',
    size = 'medium',
    src,
    'aria-label': ariaLabel,
    ...props
  },
  ref,
) {
  const accessibleFallbackLabel = ariaLabel ?? alt;
  const accessibleProps =
    !src && accessibleFallbackLabel ? { role: 'img', 'aria-label': accessibleFallbackLabel } : {};
  const content = src ? (
    <img className="rgi-avatar-image" src={src} alt={alt ?? ''} />
  ) : (
    (children ??
    (alt
      ? alt
          .trim()
          .split(/\s+/)
          .slice(0, 2)
          .map((part) => part[0])
          .join('')
          .toUpperCase()
      : null))
  );

  return (
    <span
      {...props}
      ref={ref}
      className={cx(
        'rgi-avatar',
        `rgi-avatar-${size}`,
        color !== 'default' && `rgi-avatar-${color}`,
        className,
      )}
      {...accessibleProps}
    >
      {content}
    </span>
  );
});

export default Avatar;
