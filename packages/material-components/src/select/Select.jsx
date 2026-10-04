import { forwardRef, useId } from 'react';
import { cx } from 'registyle';
import './select.styles.js';

const Select = forwardRef(function Select(
  {
    'aria-describedby': describedBy,
    'aria-invalid': ariaInvalid,
    children,
    className,
    error = false,
    helperText,
    inputClassName,
    label,
    ...props
  },
  ref,
) {
  const generatedId = useId();
  const id = props.id ?? generatedId;
  const helperId = `${id}-helper`;
  const description =
    [describedBy, helperText ? helperId : undefined].filter(Boolean).join(' ') || undefined;

  return (
    <div className={cx('mui-select-field', className)}>
      {label != null && (
        <label className="mui-select-label" htmlFor={id}>
          {label}
        </label>
      )}
      <select
        {...props}
        ref={ref}
        id={id}
        className={cx('mui-select', error && 'mui-select-error', inputClassName)}
        aria-describedby={description}
        aria-invalid={error || ariaInvalid || undefined}
      >
        {children}
      </select>
      {helperText != null && (
        <span className={cx('mui-select-helper', error && 'mui-select-helper-error')} id={helperId}>
          {helperText}
        </span>
      )}
    </div>
  );
});

export default Select;
