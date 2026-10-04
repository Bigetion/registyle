import { forwardRef, useEffect, useRef, useState } from 'react';
import { cx } from 'registyle';
import './checkbox.styles.js';

const Checkbox = forwardRef(function Checkbox(
  {
    checked,
    className,
    defaultChecked,
    disabled = false,
    indeterminate = false,
    inputClassName,
    onChange,
    ...props
  },
  forwardedRef,
) {
  const inputRef = useRef(null);
  const [internalChecked, setInternalChecked] = useState(defaultChecked ?? false);
  const isChecked = checked ?? internalChecked;

  useEffect(() => {
    if (inputRef.current) inputRef.current.indeterminate = indeterminate;
  }, [indeterminate]);

  function setInputRef(node) {
    inputRef.current = node;
    if (typeof forwardedRef === 'function') forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  }

  function handleChange(event) {
    if (checked === undefined) setInternalChecked(event.currentTarget.checked);
    onChange?.(event);
  }

  return (
    <span className={cx('rgi-checkbox', disabled && 'rgi-checkbox-disabled', className)}>
      <input
        {...props}
        ref={setInputRef}
        className={cx('rgi-checkbox-input', inputClassName)}
        type="checkbox"
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        aria-checked={indeterminate ? 'mixed' : undefined}
        onChange={handleChange}
      />
      <span
        className={cx(
          'rgi-checkbox-indicator',
          isChecked && 'rgi-checkbox-checked',
          indeterminate && 'rgi-checkbox-indeterminate',
        )}
        aria-hidden="true"
      >
        {indeterminate ? (
          <span className="rgi-checkbox-dash" />
        ) : isChecked ? (
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="m3.5 8.2 3 3 6-6.2"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : null}
      </span>
    </span>
  );
});

export default Checkbox;
