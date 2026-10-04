import { forwardRef, useId, useState } from 'react';
import { cx } from 'registyle';
import './switch.styles.js';

const Switch = forwardRef(function Switch(
  { className, inputClassName, label, id, checked, defaultChecked, onChange, ...props },
  ref,
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const isControlled = checked !== undefined;
  const [internalChecked, setInternalChecked] = useState(defaultChecked ?? false);
  const isChecked = checked ?? internalChecked;
  const input = (
    <input
      {...props}
      ref={ref}
      id={inputId}
      className={cx('rgi-switch', label == null && className, inputClassName)}
      type="checkbox"
      role="switch"
      checked={isChecked}
      aria-checked={isChecked}
      onChange={(event) => {
        if (!isControlled) setInternalChecked(event.currentTarget.checked);
        onChange?.(event);
      }}
    />
  );

  if (label == null) return input;

  return (
    <label className={cx('rgi-switch-field', className)} htmlFor={inputId}>
      {input}
      <span className="rgi-switch-label">{label}</span>
    </label>
  );
});

export default Switch;
