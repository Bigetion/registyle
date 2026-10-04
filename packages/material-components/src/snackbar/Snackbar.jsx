import { forwardRef, useEffect } from 'react';
import { cx } from 'registyle';
import './snackbar.styles.js';

const Snackbar = forwardRef(function Snackbar(
  {
    action,
    children,
    className,
    closeLabel = 'Dismiss notification',
    onClose,
    open = false,
    autoHideDuration = 6000,
    severity = 'info',
    ...props
  },
  ref,
) {
  useEffect(() => {
    if (!open || !onClose || autoHideDuration == null || autoHideDuration <= 0) return undefined;
    const timeout = setTimeout(() => onClose('timeout'), autoHideDuration);
    return () => clearTimeout(timeout);
  }, [open, onClose, autoHideDuration]);

  if (!open) return null;
  return (
    <div
      {...props}
      ref={ref}
      className={cx('rgi-snackbar', `rgi-snackbar-${severity}`, className)}
      role={severity === 'error' ? 'alert' : 'status'}
      aria-live={severity === 'error' ? 'assertive' : 'polite'}
    >
      <div className="rgi-snackbar-message">{children}</div>
      {action != null && <div className="rgi-snackbar-action">{action}</div>}
      {onClose && (
        <button
          type="button"
          className="rgi-snackbar-close"
          aria-label={closeLabel}
          onClick={() => onClose('closeButtonClick')}
        >
          <span aria-hidden="true">×</span>
        </button>
      )}
    </div>
  );
});

export default Snackbar;
