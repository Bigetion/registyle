import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { AlertTriangle, Check, FileText, X } from 'lucide-react';
import { cx } from 'registyle';

function DialogShell({ open, onClose, title, description, children, fullscreen = false, tone }) {
  const dialogRef = useRef(null);
  const titleId = `dialog-title-${useId()}`;
  const descriptionId = `${titleId}-description`;

  useEffect(() => {
    if (!open) return undefined;

    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.querySelector('button, input, textarea, [tabindex]:not([tabindex="-1"])')?.focus();

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;

      const focusable = [...dialogRef.current.querySelectorAll('button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [href], [tabindex]:not([tabindex="-1"])')];
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement) previousFocus.focus();
    };
  }, [onClose, open]);

  if (!open) return null;

  return (
    <div className="dialog-overlay" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section
        className={cx('dialog-box', fullscreen && 'dialog-box-fullscreen', tone && `dialog-box-${tone}`)}
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={description ? descriptionId : undefined}
        tabIndex={-1}
      >
        <div className="dialog-heading">
          <div className={cx('dialog-heading-icon', tone && `dialog-heading-icon-${tone}`)}>
            {tone === 'danger' ? <AlertTriangle size={17} aria-hidden="true" /> : fullscreen ? <FileText size={17} aria-hidden="true" /> : <Check size={17} aria-hidden="true" />}
          </div>
          <div className="dialog-heading-copy">
            <h3 id={titleId}>{title}</h3>
            {description && <p id={descriptionId}>{description}</p>}
          </div>
          <button className="dialog-close" type="button" aria-label="Close dialog" onClick={onClose}>
            <X size={15} aria-hidden="true" />
          </button>
        </div>
        {children}
      </section>
    </div>
  );
}

function DialogExample({ demoId }) {
  const [open, setOpen] = useState(false);
  const [notice, setNotice] = useState('');
  const triggerRef = useRef(null);
  const isFullscreen = demoId === 'dialog-fullscreen';
  const isConfirmation = demoId === 'dialog-confirmation';
  const close = useCallback(() => setOpen(false), []);

  const title = isFullscreen
    ? 'Create announcement'
    : isConfirmation
      ? 'Delete project?'
      : 'Save your changes?';
  const description = isFullscreen
    ? 'Write a short update to share with your workspace.'
    : isConfirmation
      ? 'This will permanently delete the project and its contents. This action cannot be undone.'
      : 'You have unsaved changes. Save them before leaving this page.';

  return (
    <div className="dialog-demo">
      {notice && <span className="preview-note" role="status" aria-live="polite">{notice}</span>}
      <button
        className="mui-button mui-button-contained"
        type="button"
        ref={triggerRef}
        onClick={() => { setNotice(''); setOpen(true); }}
      >
        {isFullscreen ? 'Compose announcement' : isConfirmation ? 'Delete project' : 'Open dialog'}
      </button>
      <DialogShell
        open={open}
        onClose={close}
        title={title}
        description={description}
        fullscreen={isFullscreen}
        tone={isConfirmation ? 'danger' : undefined}
      >
        {isFullscreen ? (
          <div className="dialog-editor">
            <label className="dialog-field">
              <span>Announcement title</span>
              <input placeholder="What should your team know?" />
            </label>
            <label className="dialog-field">
              <span>Message</span>
              <textarea rows={5} placeholder="Share a quick update..." />
            </label>
            <div className="dialog-audience"><span className="dialog-audience-dot" /> Visible to <strong>All workspace members</strong></div>
            <div className="dialog-actions">
              <button className="mui-button mui-button-text" type="button" onClick={close}>Cancel</button>
              <button className="mui-button mui-button-contained" type="button" onClick={() => { close(); setNotice('Announcement published to your workspace.'); }}>Publish announcement</button>
            </div>
          </div>
        ) : (
          <div className="dialog-actions">
            <button className="mui-button mui-button-text" type="button" onClick={() => { close(); setNotice(isConfirmation ? 'Project kept.' : 'Changes discarded.'); }}>
              {isConfirmation ? 'Keep project' : 'Discard'}
            </button>
            <button
              className={cx('mui-button', isConfirmation ? 'mui-button-color-danger' : 'mui-button-contained')}
              type="button"
              onClick={() => { close(); setNotice(isConfirmation ? 'Project deleted.' : 'Changes saved.'); }}
            >
              {isConfirmation ? 'Delete project' : 'Save changes'}
            </button>
          </div>
        )}
      </DialogShell>
      <span className="preview-note">{isFullscreen ? 'Escape or close to dismiss. Tab stays within the dialog.' : 'Press Escape or click the backdrop to close.'}</span>
    </div>
  );
}

export default function DialogDemo({ demoId }) {
  return <DialogExample demoId={demoId} />;
}
