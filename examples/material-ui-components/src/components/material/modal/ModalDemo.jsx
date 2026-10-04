import { useCallback, useId, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Check, FolderKanban, ShieldCheck, X } from 'lucide-react';
import { cx } from 'registyle';

function ModalSurface({ open, onClose, title, description, children, closeOnBackdrop = true, closeOnEscape = true }) {
  const modalRef = useRef(null);
  const titleId = useId();
  const descriptionId = useId();

  useLayoutEffect(() => {
    if (!open) return undefined;

    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusableElements = () => [...modalRef.current.querySelectorAll(
      'button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
    )].filter((element) => element.getAttribute('aria-hidden') !== 'true');
    const initialFocus = focusableElements()[0] ?? modalRef.current;
    initialFocus.focus();

    function handleKeyDown(event) {
      if (event.key === 'Escape' && closeOnEscape) {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;

      const focusable = focusableElements();
      if (!focusable.length) {
        event.preventDefault();
        modalRef.current.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && (document.activeElement === first || !modalRef.current.contains(document.activeElement))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || !modalRef.current.contains(document.activeElement))) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) previousFocus.focus();
    };
  }, [closeOnEscape, onClose, open]);

  if (!open || typeof document === 'undefined') return null;

  return createPortal(
    <div
      className="modal-demo-overlay"
      role="presentation"
      onPointerDown={(event) => {
        if (closeOnBackdrop && event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="modal-demo-surface"
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={description ? descriptionId : undefined}
        tabIndex={-1}
      >
        <header className="modal-demo-heading">
          <span className="modal-demo-icon"><FolderKanban size={15} aria-hidden="true" /></span>
          <span className="modal-demo-heading-copy">
            <strong id={titleId}>{title}</strong>
            {description && <small id={descriptionId}>{description}</small>}
          </span>
          <button className="modal-demo-close" type="button" aria-label="Close modal" onClick={onClose}>
            <X size={14} aria-hidden="true" />
          </button>
        </header>
        {children}
      </section>
    </div>,
    document.body,
  );
}

function BasicModalDemo() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const close = useCallback(() => setOpen(false), []);

  return (
    <div className="modal-demo">
      <div className="modal-demo-stage">
        <div className="modal-demo-stage-copy">
          <span className="modal-demo-eyebrow">PORTAL MODAL</span>
          <strong>Keep important details in focus</strong>
          <span>Open a centered surface above the current page.</span>
        </div>
        <button className="mui-button mui-button-contained" type="button" onClick={() => { setMessage(''); setOpen(true); }}>
          Preview project
        </button>
      </div>
      <span className="preview-note" role="status">{message || 'The modal is rendered in a portal and locks background scrolling.'}</span>
      <ModalSurface
        open={open}
        onClose={close}
        title="Website refresh"
        description="A shared project for the new customer workspace experience."
      >
        <div className="modal-demo-project">
          <span className="modal-demo-project-status"><i /> In progress</span>
          <span>Updated 12 minutes ago</span>
        </div>
        <div className="modal-demo-actions">
          <button className="modal-demo-text-button" type="button" onClick={() => { close(); setMessage('Project preview dismissed.'); }}>Close</button>
          <button className="mui-button mui-button-contained" type="button" onClick={() => { close(); setMessage('Website refresh opened.'); }}>Open project</button>
        </div>
      </ModalSurface>
    </div>
  );
}

function BackdropModalDemo() {
  const [open, setOpen] = useState(false);
  const [closeOnBackdrop, setCloseOnBackdrop] = useState(true);
  const [message, setMessage] = useState('');
  const close = useCallback(() => setOpen(false), []);

  return (
    <div className="modal-demo">
      <div className="modal-backdrop-controls">
        <label className="modal-backdrop-toggle">
          <input type="checkbox" checked={closeOnBackdrop} onChange={(event) => setCloseOnBackdrop(event.target.checked)} />
          <span className="modal-toggle-track"><i /></span>
          Close on backdrop click
        </label>
        <button className="mui-button mui-button-outlined" type="button" onClick={() => { setMessage(''); setOpen(true); }}>Open modal</button>
      </div>
      <span className="preview-note" role="status">{message || `Backdrop dismissal is ${closeOnBackdrop ? 'enabled' : 'disabled'}.`}</span>
      <ModalSurface
        open={open}
        onClose={close}
        title="Backdrop behavior"
        description="Click inside this surface to keep it open."
        closeOnBackdrop={closeOnBackdrop}
      >
        <div className="modal-demo-callout">
          <span className="modal-demo-callout-icon"><Check size={13} aria-hidden="true" /></span>
          <span>Clicks inside the modal never count as backdrop clicks.</span>
        </div>
        <div className="modal-demo-actions">
          <button className="modal-demo-text-button" type="button" onClick={() => { close(); setMessage('Closed from the modal action.'); }}>Close modal</button>
        </div>
      </ModalSurface>
    </div>
  );
}

function AccessibleModalDemo() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const close = useCallback(() => setOpen(false), []);

  return (
    <div className="modal-demo">
      <div className="modal-accessibility-stage">
        <span className="modal-accessibility-icon"><ShieldCheck size={15} aria-hidden="true" /></span>
        <span><strong>Keyboard-ready modal</strong><small>Focus moves in, stays inside, and returns to the trigger.</small></span>
        <button className="mui-button mui-button-outlined" type="button" onClick={() => { setMessage(''); setOpen(true); }}>Open accessible modal</button>
      </div>
      <span className="preview-note" role="status">{message || 'Try Tab, Shift + Tab, and Escape.'}</span>
      <ModalSurface
        open={open}
        onClose={close}
        title="Accessibility settings"
        description="Update these preferences for your workspace."
      >
        <div className="modal-accessibility-options">
          <label><input type="checkbox" defaultChecked /> Reduce motion <small>Use fewer animated transitions.</small></label>
          <label><input type="checkbox" /> High contrast <small>Increase contrast for text and controls.</small></label>
        </div>
        <div className="modal-demo-actions">
          <button className="modal-demo-text-button" type="button" onClick={close}>Cancel</button>
          <button className="mui-button mui-button-contained" type="button" onClick={() => { close(); setMessage('Accessibility preferences saved.'); }}>Save preferences</button>
        </div>
      </ModalSurface>
    </div>
  );
}

export default function ModalDemo({ demoId }) {
  if (demoId === 'modal-basic') return <BackdropModalDemo />;
  if (demoId === 'modal-accessibility') return <AccessibleModalDemo />;
  return <BasicModalDemo />;
}
