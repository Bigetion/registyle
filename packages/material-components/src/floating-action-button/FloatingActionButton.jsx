import { forwardRef } from 'react';
import { cx } from 'registyle';
import './floating-action-button.styles.js';

const FloatingActionButton = forwardRef(function FloatingActionButton(
  {
    children,
    className,
    label,
    size = 'medium',
    variant = 'primary',
    type = 'button',
    'aria-label': ariaLabel,
    ...props
  },
  ref,
) {
  return (
    <button
      {...props}
      ref={ref}
      type={type}
      aria-label={ariaLabel ?? label}
      className={cx(
        'rgi-floating-action-button',
        `rgi-floating-action-button-${variant}`,
        size !== 'medium' && `rgi-floating-action-button-${size}`,
        className,
      )}
    >
      {children}
    </button>
  );
});

export default FloatingActionButton;
