import { useState } from 'react';
import { Star } from 'lucide-react';
import { cx } from 'registyle';

const MAX_RATING = 5;

function formatRating(value) {
  return Number.isInteger(value) ? `${value}.0` : value.toFixed(1);
}

function StarDisplay({ value, rating, hover = rating, onHover, onLeave, onSelect, disabled = false }) {
  const activeRating = hover || rating;

  return (
    <button
      className="rating-star"
      type="button"
      role="radio"
      aria-checked={rating === value}
      aria-label={`${value} ${value === 1 ? 'star' : 'stars'}`}
      tabIndex={rating === value ? 0 : -1}
      data-rating-value={value}
      disabled={disabled}
      onMouseEnter={() => onHover(value)}
      onMouseLeave={onLeave}
      onClick={() => onSelect(value)}
      onKeyDown={(event) => {
        if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
          event.preventDefault();
          const nextValue = Math.min(MAX_RATING, value + 1);
          onSelect(nextValue);
          event.currentTarget.parentElement?.querySelector(`[data-rating-value="${nextValue}"]`)?.focus();
        } else if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
          event.preventDefault();
          const nextValue = Math.max(1, value - 1);
          onSelect(nextValue);
          event.currentTarget.parentElement?.querySelector(`[data-rating-value="${nextValue}"]`)?.focus();
        } else if (event.key === 'Home') {
          event.preventDefault();
          onSelect(1);
          event.currentTarget.parentElement?.querySelector('[data-rating-value="1"]')?.focus();
        } else if (event.key === 'End') {
          event.preventDefault();
          onSelect(MAX_RATING);
          event.currentTarget.parentElement?.querySelector(`[data-rating-value="${MAX_RATING}"]`)?.focus();
        }
      }}
    >
      <Star
        className={cx(value <= activeRating ? 'rating-star-filled' : 'rating-star-muted')}
        size={22}
        fill="currentColor"
        strokeWidth={1.5}
      />
    </button>
  );
}

function RatingChoices() {
  const [rating, setRating] = useState(4);
  const [hover, setHover] = useState(0);

  return (
    <div className="preview-stack">
      <div className="rating-control" role="radiogroup" aria-label="Rate your experience">
        {Array.from({ length: MAX_RATING }, (_, index) => index + 1).map((value) => (
          <StarDisplay
            key={value}
            value={value}
            rating={rating}
            hover={hover}
            onHover={setHover}
            onLeave={() => setHover(0)}
            onSelect={setRating}
          />
        ))}
      </div>
      <span className="preview-note" role="status" aria-live="polite">
        {formatRating(hover || rating)} / {MAX_RATING} — choose a rating
      </span>
    </div>
  );
}

function PrecisionRating() {
  const [rating, setRating] = useState(3.5);
  const [hover, setHover] = useState(0);
  const activeRating = hover || rating;

  function setFromPointer(event) {
    const star = event.target.closest('[data-rating-star]');
    if (!star) return;
    const bounds = star.getBoundingClientRect();
    const fraction = event.clientX < bounds.left + bounds.width / 2 ? 0.5 : 1;
    const nextRating = Number(star.dataset.ratingStar) - 1 + fraction;
    setHover(nextRating);
    return nextRating;
  }

  function handleKeyDown(event) {
    let nextRating = rating;
    if (event.key === 'ArrowRight' || event.key === 'ArrowUp') nextRating += 0.5;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') nextRating -= 0.5;
    else if (event.key === 'Home') nextRating = 0;
    else if (event.key === 'End') nextRating = MAX_RATING;
    else return;
    event.preventDefault();
    setRating(Math.min(MAX_RATING, Math.max(0, nextRating)));
    setHover(0);
  }

  return (
    <div className="preview-stack">
      <div
        className="rating-control rating-control-precision"
        role="slider"
        aria-label="Rating"
        aria-valuemin={0}
        aria-valuemax={MAX_RATING}
        aria-valuenow={activeRating}
        aria-valuetext={`${formatRating(activeRating)} out of ${MAX_RATING} stars`}
        tabIndex={0}
        onPointerMove={setFromPointer}
        onPointerLeave={() => setHover(0)}
        onPointerDown={(event) => {
          const nextRating = setFromPointer(event);
          if (nextRating !== undefined) setRating(nextRating);
        }}
        onKeyDown={handleKeyDown}
      >
        {Array.from({ length: MAX_RATING }, (_, index) => {
          const value = index + 1;
          const fill = Math.max(0, Math.min(100, (activeRating - index) * 100));
          return (
            <span className="rating-precision-star" data-rating-star={value} key={value}>
              <Star className="rating-star-muted" size={24} fill="currentColor" strokeWidth={1.5} />
              <span className="rating-precision-fill" style={{ width: `${fill}%` }}>
                <Star className="rating-star-filled" size={24} fill="currentColor" strokeWidth={1.5} />
              </span>
            </span>
          );
        })}
      </div>
      <span className="preview-note" role="status" aria-live="polite">
        {formatRating(hover || rating)} / {MAX_RATING} — adjust in half-star steps
      </span>
    </div>
  );
}

function ReadOnlyRating() {
  const rating = 4;

  return (
    <div className="preview-stack">
      <div
        className="rating-control"
        role="img"
        aria-label={`${formatRating(rating)} out of ${MAX_RATING} stars`}
      >
        {Array.from({ length: MAX_RATING }, (_, index) => (
          <Star
            className={cx(index < rating ? 'rating-star-filled' : 'rating-star-muted')}
            key={index}
            size={22}
            fill="currentColor"
            strokeWidth={1.5}
          />
        ))}
      </div>
      <span className="preview-note">{formatRating(rating)} / {MAX_RATING} — read only</span>
    </div>
  );
}

export default function RatingDemo({ demoId }) {
  if (demoId === 'rating-precision') return <PrecisionRating />;
  if (demoId === 'rating-readonly') return <ReadOnlyRating />;
  return <RatingChoices />;
}
