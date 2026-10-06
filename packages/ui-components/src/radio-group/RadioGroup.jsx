import { forwardRef, useId, useState } from 'react';
import { cx } from 'registyle';
import './radio-group.styles.js';

const RadioGroup = forwardRef(function RadioGroup(
  {
    className,
    options = [],
    value,
    defaultValue,
    onChange,
    name,
    id,
    legend,
    orientation = 'vertical',
    disabled = false,
    required = false,
    ...fieldsetProps
  },
  ref,
) {
  const generatedId = useId();
  const groupName = name ?? `${generatedId}-radio`;
  const [internalValue, setInternalValue] = useState(defaultValue ?? '');
  const selectedValue = value ?? internalValue;

  return (
    <fieldset
      {...fieldsetProps}
      ref={ref}
      id={id}
      disabled={disabled}
      className={cx('rgi-radio-group', `rgi-radio-group-${orientation}`, className)}
    >
      {legend != null && <legend className="rgi-radio-group-legend">{legend}</legend>}
      {options.map((option, index) => {
        const optionId = `${generatedId}-option-${index}`;
        const optionDisabled = disabled || option.disabled;
        return (
          <label
            className={cx('rgi-radio-option', optionDisabled && 'rgi-radio-option-disabled')}
            htmlFor={optionId}
            key={option.value}
          >
            <input
              id={optionId}
              className="rgi-radio-option-input peer"
              type="radio"
              name={groupName}
              value={option.value}
              checked={selectedValue === option.value}
              disabled={optionDisabled}
              required={required}
              onChange={(event) => {
                if (value === undefined) setInternalValue(option.value);
                onChange?.(event);
              }}
            />
            <span
              className={cx(
                'rgi-radio-option-indicator',
                selectedValue === option.value && 'rgi-radio-option-indicator-checked',
              )}
              aria-hidden="true"
            >
              <span
                className={cx(
                  'rgi-radio-option-dot',
                  selectedValue === option.value && 'rgi-radio-option-dot-visible',
                )}
              />
            </span>
            <span className="rgi-radio-option-copy">
              <span className="rgi-radio-option-label">{option.label}</span>
              {option.description && (
                <span className="rgi-radio-option-description">{option.description}</span>
              )}
            </span>
          </label>
        );
      })}
    </fieldset>
  );
});

export default RadioGroup;
