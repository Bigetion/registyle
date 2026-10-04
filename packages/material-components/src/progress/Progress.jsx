import { forwardRef } from 'react';
import { cx } from 'registyle';
import './progress.styles.js';

const Progress = forwardRef(function Progress(
  {
    className,
    label = 'Loading',
    max = 100,
    size = 40,
    value = null,
    variant = 'linear',
    ...props
  },
  ref,
) {
  const safeMax = Number.isFinite(max) && max > 0 ? max : 100;
  const determinate = value != null && Number.isFinite(value);
  const percentage = determinate ? Math.min(100, Math.max(0, (value / safeMax) * 100)) : null;

  return (
    <div
      {...props}
      ref={ref}
      className={cx('mui-progress', `mui-progress-${variant}`, className)}
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={safeMax}
      aria-valuenow={determinate ? Math.min(safeMax, Math.max(0, value)) : undefined}
    >
      {variant === 'circular' ? (
        <svg
          className="mui-progress-circle"
          width={size}
          height={size}
          viewBox="0 0 40 40"
          aria-hidden="true"
        >
          <circle className="mui-progress-track" cx="20" cy="20" r="17" />
          <circle
            className={cx('mui-progress-indicator', !determinate && 'mui-progress-indeterminate')}
            cx="20"
            cy="20"
            r="17"
            style={
              determinate
                ? { strokeDasharray: `${(percentage / 100) * 106.81}px 106.81px` }
                : undefined
            }
          />
        </svg>
      ) : (
        <span className="mui-progress-track">
          <span
            className={cx('mui-progress-indicator', !determinate && 'mui-progress-indeterminate')}
            style={determinate ? { width: `${percentage}%` } : undefined}
          />
        </span>
      )}
    </div>
  );
});

export default Progress;
