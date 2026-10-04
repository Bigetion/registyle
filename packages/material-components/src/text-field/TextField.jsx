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
    <div className={cx('rgi-text-field', className)}>
      {label != null && (
        <label className="rgi-text-field-label" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        {...props}
        ref={ref}
        id={id}
        className={cx('rgi-text-field-control', hasError && 'rgi-text-field-error', inputClassName)}
        aria-describedby={description}
        aria-invalid={hasError || ariaInvalid || undefined}
      />
      {message != null && (
        <span
          className={cx('rgi-text-field-message', hasError && 'rgi-text-field-message-error')}
          id={messageId}
        >
          {message}
        </span>
      )}
    </div>
  );
});

export default TextField;
