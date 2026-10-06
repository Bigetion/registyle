import { useEffect, useState } from 'react';
import { Check, RotateCcw, X } from 'lucide-react';
import { cx } from 'registyle';

function SnackbarMessage({ message, action, onAction, onDismiss }) {
  return (
    <div className="rgi-snackbar" role="status" aria-live="polite" aria-atomic="true">
      <span className="snackbar-icon" aria-hidden="true"><Check size={14} /></span>
      <span className="snackbar-message">{message}</span>
      {action && (
        <button className="snackbar-action" type="button" onClick={onAction}>
          {action}
        </button>
      )}
      <button className="snackbar-dismiss" type="button" aria-label="Dismiss notification" onClick={onDismiss}>
        <X size={15} aria-hidden="true" />
      </button>
    </div>
  );
}

function SnackbarDemoExample({ demoId }) {
  const isAction = demoId === 'snackbar-action';
  const isPosition = demoId === 'snackbar-position';
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(isAction ? 'Changes saved successfully' : 'Project settings saved');
  const [notice, setNotice] = useState('');
  const [position, setPosition] = useState('center');

  useEffect(() => {
    if (!open) return undefined;
    const timeout = window.setTimeout(() => setOpen(false), 5000);
    return () => window.clearTimeout(timeout);
  }, [open, message]);

  function showSnackbar() {
    setNotice('');
    setMessage(isAction ? 'Changes saved successfully' : 'Project settings saved');
    setOpen(true);
  }

  function undoSave() {
    setOpen(false);
    setMessage('Save undone');
    setNotice('The previous version has been restored.');
  }

  return (
    <div className={cx('snackbar-demo', isPosition && 'snackbar-position-demo')}>
      {isPosition && (
        <div className="snackbar-position-controls" role="group" aria-label="Snackbar position">
          {['start', 'center', 'end'].map((item) => (
            <button
              key={item}
              className={cx('snackbar-position-option', position === item && 'snackbar-position-option-active')}
              type="button"
              aria-pressed={position === item}
              onClick={() => { setPosition(item); setOpen(true); }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      )}
      <div className={cx('snackbar-stage', isPosition && `snackbar-stage-${position}`)}>
        {open && (
          <SnackbarMessage
            message={message}
            action={isAction && message === 'Changes saved successfully' ? 'UNDO' : undefined}
            onAction={undoSave}
            onDismiss={() => setOpen(false)}
          />
        )}
        {!open && notice && <span className="snackbar-feedback" role="status">{notice}</span>}
      </div>
      <div className="snackbar-controls">
        <button className="rgi-button rgi-button-contained" type="button" onClick={showSnackbar}>
          {isPosition ? 'Preview snackbar' : 'Show notification'}
        </button>
        <span className="preview-note">{open ? 'Automatically dismisses after 5 seconds.' : 'Notification is currently hidden.'}</span>
      </div>
      {isAction && !open && notice && (
        <button className="snackbar-restore" type="button" onClick={() => { setMessage('Changes saved successfully'); setNotice(''); setOpen(true); }}>
          <RotateCcw size={13} aria-hidden="true" /> Restore saved state
        </button>
      )}
    </div>
  );
}

export default function SnackbarDemo({ demoId }) {
  return <SnackbarDemoExample demoId={demoId} />;
}
