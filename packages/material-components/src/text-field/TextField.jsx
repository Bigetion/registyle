import { forwardRef, useId } from 'react';
import { cx } from 'registyle';
import './text-field.styles.js';

const TextField = forwardRef(function TextField(
  {
    'aria-describedby': describedBy,
    'aria-invalid': ariaInvalid,
    className,
    error = false,
    errorText,
    helperText,
    inputClassName,
    label,
    ...props
  },
  ref,
) {
  const generatedId = useId();
  const id = props.id ?? generatedId;
  const message = errorText ?? helperText;
  const messageId = `${id}-message`;
  const description =
    [describedBy, message != null ? messageId : undefined].filter(Boolean).join(' ') || undefined;
  const hasError = error || errorText != null;

  return (
    <div className={cx('mui-text-field', className)}>
      {label != null && (
        <label className="mui-text-field-label" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        {...props}
        ref={ref}
        id={id}
        className={cx('mui-text-field-control', hasError && 'mui-text-field-error', inputClassName)}
        aria-describedby={description}
        aria-invalid={hasError || ariaInvalid || undefined}
      />
      {message != null && (
        <span
          className={cx('mui-text-field-message', hasError && 'mui-text-field-message-error')}
          id={messageId}
        >
          {message}
        </span>
      )}
    </div>
  );
});

export default TextField;
