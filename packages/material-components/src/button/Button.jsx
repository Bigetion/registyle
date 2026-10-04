import { forwardRef } from 'react';
import { cx } from 'registyle';
import './button.styles.js';

const Button = forwardRef(function Button(
  { children, className, color = 'primary', size = 'medium', variant = 'contained', ...props },
  ref,
) {
  return (
    <button
      {...props}
      className={cx(
        'mui-button',
        `mui-button-${variant}`,
        size !== 'medium' && `mui-button-${size}`,
        color !== 'primary' && `mui-button-color-${color}`,
        className,
      )}
      ref={ref}
    >
      {children}
    </button>
  );
});

export default Button;
