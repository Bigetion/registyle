import { useState } from 'react';
import { Activity, Check, Info, RotateCcw, X } from 'lucide-react';
import { cx } from 'registyle';

const ALERTS = [
  ['info', Info, 'New update available', 'A refreshed workspace is ready to explore.'],
  ['success', Check, 'Changes saved', 'Your project settings have been updated.'],
  ['warning', Activity, 'Storage almost full', 'You have used 85% of your available storage.'],
  ['error', X, 'Sync paused', 'Check your connection, then try syncing again.'],
];

function Alert({ variant, Icon, title, description, outlined = false, children, onDismiss }) {
  const role = variant === 'error' ? 'alert' : 'status';

  return (
    <div className={cx('rgi-alert', `rgi-alert-${variant}`, outlined && 'rgi-alert-outlined')} role={role}>
      <Icon className="alert-icon" size={17} aria-hidden="true" />
      <span className="alert-copy">
        <strong>{title}</strong>
        <small>{description}</small>
      </span>
      {children}
      {onDismiss && (
        <button className="alert-dismiss" type="button" aria-label={`Dismiss ${title}`} onClick={onDismiss}>
          <X size={14} aria-hidden="true" />
        </button>
      )}
    </div>
  );
}

function AlertVariants({ outlined = false }) {
  return (
    <div className="alert-stack">
      {ALERTS.map(([variant, Icon, title, description]) => (
        <Alert
          key={variant}
          variant={variant}
          Icon={Icon}
          title={title}
          description={description}
          outlined={outlined}
        />
      ))}
    </div>
  );
}

function AlertActions() {
  const [visible, setVisible] = useState(true);
  const [message, setMessage] = useState('');

  return (
    <div className="preview-stack">
      {visible ? (
        <Alert
          variant="success"
          Icon={Check}
          title="Draft published"
          description="Your announcement is now visible to workspace members."
          onDismiss={() => {
            setVisible(false);
            setMessage('Announcement dismissed.');
          }}
        >
          <div className="alert-actions">
            <button className="alert-action-link" type="button" onClick={() => setMessage('Publication reverted.')}>
              Undo
            </button>
            <button className="alert-action-link alert-action-icon" type="button" aria-label="Restore default message" onClick={() => setMessage('')}>
              <RotateCcw size={13} aria-hidden="true" />
            </button>
          </div>
        </Alert>
      ) : (
        <div className="alert-empty">
          <span>{message || 'Alert dismissed.'}</span>
          <button className="rgi-button rgi-button-text" type="button" onClick={() => { setVisible(true); setMessage(''); }}>
            Restore alert
          </button>
        </div>
      )}
      {message && visible && <span className="preview-note" role="status" aria-live="polite">{message}</span>}
      {!visible && <span className="preview-note" role="status" aria-live="polite">{message}</span>}
    </div>
  );
}

export default function AlertDemo({ demoId }) {
  if (demoId === 'alert-outlined') return <AlertVariants outlined />;
  if (demoId === 'alert-actions') return <AlertActions />;
  return <AlertVariants />;
}
