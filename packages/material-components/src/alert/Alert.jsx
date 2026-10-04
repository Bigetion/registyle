import { forwardRef } from 'react';
import { cx } from 'registyle';
import './alert.styles.js';

const Alert = forwardRef(function Alert(
  {
    children,
    className,
    icon,
    onClose,
    severity = 'info',
    title,
    variant = 'standard',
    closeLabel = 'Dismiss alert',
    ...props
  },
  ref,
) {
  const defaultIcons = { info: 'i', success: '✓', warning: '!', error: '!' };

  return (
    <div
      {...props}
      ref={ref}
      className={cx('rgi-alert', `rgi-alert-${severity}`, `rgi-alert-${variant}`, className)}
      role={severity === 'error' ? 'alert' : 'status'}
    >
      {icon !== null && (
        <span className="rgi-alert-icon" aria-hidden="true">
          {icon === undefined ? defaultIcons[severity] : icon}
        </span>
      )}
      <div className="rgi-alert-content">
        {title != null && <strong className="rgi-alert-title">{title}</strong>}
        {children != null && <div className="rgi-alert-message">{children}</div>}
      </div>
      {onClose && (
        <button type="button" className="rgi-alert-close" aria-label={closeLabel} onClick={onClose}>
          <span aria-hidden="true">×</span>
        </button>
      )}
    </div>
  );
});

export default Alert;
