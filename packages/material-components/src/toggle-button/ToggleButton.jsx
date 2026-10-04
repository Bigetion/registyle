import { forwardRef } from 'react';
import { cx } from 'registyle';
import './toggle-button.styles.js';

const ToggleButton = forwardRef(function ToggleButton(
  { className, selected = false, size = 'medium', type = 'button', ...props },
  ref,
) {
  return (
    <button
      {...props}
      ref={ref}
      className={cx(
        'mui-toggle-button',
        size === 'small' && 'mui-toggle-button-small',
        selected && 'mui-toggle-button-selected',
        className,
      )}
      type={type}
      aria-pressed={selected}
    />
  );
});

export default ToggleButton;
