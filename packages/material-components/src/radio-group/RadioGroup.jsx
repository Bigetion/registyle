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
      className={cx('mui-radio-group', `mui-radio-group-${orientation}`, className)}
    >
      {legend != null && <legend className="mui-radio-group-legend">{legend}</legend>}
      {options.map((option, index) => {
        const optionId = `${generatedId}-option-${index}`;
        const optionDisabled = disabled || option.disabled;
        return (
          <label
            className={cx('mui-radio-option', optionDisabled && 'mui-radio-option-disabled')}
            htmlFor={optionId}
            key={option.value}
          >
            <input
              id={optionId}
              className="mui-radio-option-input"
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
                'mui-radio-option-indicator',
                selectedValue === option.value && 'mui-radio-option-indicator-checked',
              )}
              aria-hidden="true"
            >
              <span
                className={cx(
                  'mui-radio-option-dot',
                  selectedValue === option.value && 'mui-radio-option-dot-visible',
                )}
              />
            </span>
            <span className="mui-radio-option-copy">
              <span className="mui-radio-option-label">{option.label}</span>
              {option.description && (
                <span className="mui-radio-option-description">{option.description}</span>
              )}
            </span>
          </label>
        );
      })}
    </fieldset>
  );
});

export default RadioGroup;
