import { forwardRef, useId, useState } from 'react';
import { cx } from 'registyle';
import './number-field.styles.js';

function decimalPlaces(value) {
  const part = String(value).split('.')[1];
  return part?.length ?? 0;
}

const NumberField = forwardRef(function NumberField(
  {
    className,
    inputClassName,
    value,
    defaultValue = '',
    onChange,
    onValueChange,
    id,
    min,
    max,
    step = 1,
    disabled = false,
    readOnly = false,
    unit,
    unitPosition = 'end',
    decrementLabel = 'Decrease value',
    incrementLabel = 'Increase value',
    ...inputProps
  },
  forwardedRef,
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const [internalValue, setInternalValue] = useState(defaultValue);
  const currentValue = value ?? internalValue;
  const numericValue = currentValue === '' ? NaN : Number(currentValue);
  const atMin = Number.isFinite(numericValue) && min !== undefined && numericValue <= min;
  const atMax = Number.isFinite(numericValue) && max !== undefined && numericValue >= max;

  function changeBy(direction) {
    if (readOnly || disabled) return;
    const increment = step === 'any' ? 1 : Number(step);
    const current = Number.isFinite(numericValue) ? numericValue : (min ?? 0);
    const next = Math.min(
      max ?? Infinity,
      Math.max(min ?? -Infinity, current + increment * direction),
    );
    const precision = Math.min(8, decimalPlaces(increment));
    const nextValue = Number(next.toFixed(precision));
    if (value === undefined) setInternalValue(String(nextValue));
    onValueChange?.(String(nextValue));
  }

  function setRef(node) {
    if (typeof forwardedRef === 'function') forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  }

  return (
    <span className={cx('rgi-number-field', className)}>
      {unit && unitPosition === 'start' && (
        <span className="rgi-number-field-unit" aria-hidden="true">
          {unit}
        </span>
      )}
      <button
        className="rgi-number-field-button"
        type="button"
        aria-label={decrementLabel}
        aria-controls={inputId}
        disabled={disabled || readOnly || atMin}
        onClick={() => changeBy(-1)}
      >
        <span aria-hidden="true">−</span>
      </button>
      <input
        {...inputProps}
        ref={setRef}
        id={inputId}
        className={cx('rgi-number-field-input', inputClassName)}
        type="number"
        value={currentValue}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        readOnly={readOnly}
        onChange={(event) => {
          if (value === undefined) setInternalValue(event.currentTarget.value);
          onChange?.(event);
          onValueChange?.(event.currentTarget.value);
        }}
      />
      <button
        className="rgi-number-field-button"
        type="button"
        aria-label={incrementLabel}
        aria-controls={inputId}
        disabled={disabled || readOnly || atMax}
        onClick={() => changeBy(1)}
      >
        <span aria-hidden="true">+</span>
      </button>
      {unit && unitPosition === 'end' && (
        <span className="rgi-number-field-unit" aria-hidden="true">
          {unit}
        </span>
      )}
    </span>
  );
});

export default NumberField;
