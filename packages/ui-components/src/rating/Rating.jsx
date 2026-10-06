import { forwardRef, useState } from 'react';
import { cx } from 'registyle';
import './rating.styles.js';

const Rating = forwardRef(function Rating(
  {
    className,
    value,
    defaultValue = 0,
    onChange,
    max = 5,
    name,
    label = 'Rating',
    disabled = false,
    readOnly = false,
    ...props
  },
  ref,
) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const safeMax = Number.isInteger(max) && max > 0 ? max : 5;
  const rating = Math.min(safeMax, Math.max(0, value ?? internalValue));

  function choose(nextValue) {
    if (disabled || readOnly) return;
    if (value === undefined) setInternalValue(nextValue);
    onChange?.(nextValue);
  }

  function handleKeyDown(event, currentValue) {
    let nextValue;
    if (event.key === 'ArrowRight' || event.key === 'ArrowUp')
      nextValue = Math.min(safeMax, currentValue + 1);
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowDown')
      nextValue = Math.max(1, currentValue - 1);
    else if (event.key === 'Home') nextValue = 1;
    else if (event.key === 'End') nextValue = safeMax;
    else return;
    event.preventDefault();
    choose(nextValue);
    event.currentTarget.parentElement?.querySelector(`[data-rating-value="${nextValue}"]`)?.focus();
  }

  if (readOnly) {
    return (
      <div
        {...props}
        ref={ref}
        className={cx('rgi-rating', 'rgi-rating-readonly', className)}
        role="img"
        aria-label={`${rating} out of ${safeMax} stars`}
      >
        {name && (
          <input className="rgi-rating-form-value" type="hidden" name={name} value={rating} />
        )}
        {Array.from({ length: safeMax }, (_, index) => index + 1).map((starValue) => (
          <span
            className={cx(
              'rgi-rating-choice-star',
              starValue <= rating && 'rgi-rating-choice-star-selected',
            )}
            aria-hidden="true"
            key={starValue}
          >
            {starValue <= rating ? '★' : '☆'}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div
      {...props}
      ref={ref}
      className={cx('rgi-rating', disabled && 'rgi-rating-disabled', className)}
      role="radiogroup"
      aria-label={label}
    >
      {Array.from({ length: safeMax }, (_, index) => {
        const starValue = index + 1;
        const checked = rating === starValue;
        return (
          // biome-ignore lint/a11y/useSemanticElements: Rating uses roving-focus buttons as the selectable stars in a radio group.
          <button
            className="rgi-rating-choice"
            type="button"
            role="radio"
            aria-checked={checked}
            aria-label={`${starValue} ${starValue === 1 ? 'star' : 'stars'}`}
            data-rating-value={starValue}
            tabIndex={rating === 0 ? (starValue === 1 ? 0 : -1) : checked ? 0 : -1}
            disabled={disabled}
            key={starValue}
            onClick={() => choose(starValue)}
            onKeyDown={(event) => handleKeyDown(event, starValue)}
          >
            <span
              className={cx(
                'rgi-rating-choice-star',
                starValue <= rating && 'rgi-rating-choice-star-selected',
              )}
              aria-hidden="true"
            >
              {starValue <= rating ? '★' : '☆'}
            </span>
          </button>
        );
      })}
      {name && <input className="rgi-rating-form-value" type="hidden" name={name} value={rating} />}
    </div>
  );
});

export default Rating;
