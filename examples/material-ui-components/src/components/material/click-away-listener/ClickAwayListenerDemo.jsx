import { useCallback, useRef, useState } from 'react';
import { Check, MousePointer2, MousePointerClick, Touchpad, X } from 'lucide-react';
import { cx } from 'registyle';
import { PopperSurface, useClickAway } from '../../Popper.jsx';

function ClickAwayExample({ demoId }) {
  const anchorRef = useRef(null);
  const surfaceRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [insideCount, setInsideCount] = useState(0);
  const [message, setMessage] = useState('');
  const isPortal = demoId === 'click-away-portal';
  const isTouch = demoId === 'click-away-touch';

  const dismiss = useCallback((event) => {
    setOpen(false);
    const interaction = event?.pointerType === 'touch' ? 'Touch' : event?.pointerType === 'pen' ? 'Pen' : 'Click';
    setMessage(`${interaction} outside detected. Panel dismissed.`);
  }, []);

  useClickAway(open, anchorRef, surfaceRef, dismiss);

  function toggle() {
    setOpen((value) => !value);
    setMessage('');
  }

  function interactInside() {
    setInsideCount((value) => value + 1);
    setMessage('Click inside detected. Panel stays open.');
  }

  return (
    <div className={cx('click-away-showcase', isPortal && 'click-away-portal-showcase')}>
      <div className="click-away-stage">
        <div className="click-away-stage-copy">
          <span className="click-away-eyebrow">{isPortal ? 'PORTALED SURFACE' : isTouch ? 'POINTER EVENTS' : 'OUTSIDE INTERACTION'}</span>
          <strong>{isPortal ? 'Portal-aware dismissal' : isTouch ? 'Touch-friendly dismissal' : 'Dismiss on outside click'}</strong>
          <span>
            {isPortal
              ? 'The panel is rendered in the document body; clicks inside it are still considered inside.'
              : isTouch
                ? 'Pointer events cover mouse, pen, and touch without separate listeners.'
                : 'Interact with the panel, then click or tap anywhere outside it.'}
          </span>
        </div>
        <button
          className="rgi-button rgi-button-outlined click-away-trigger"
          type="button"
          ref={anchorRef}
          aria-expanded={open}
          aria-haspopup={isPortal ? 'dialog' : undefined}
          onClick={toggle}
        >
          {open ? 'Close panel' : 'Open panel'}
          {open ? <X size={13} aria-hidden="true" /> : isTouch ? <Touchpad size={13} aria-hidden="true" /> : <MousePointerClick size={13} aria-hidden="true" />}
        </button>
        {open && !isPortal && (
          <div className="click-away-panel" role="region" aria-label="Click-away example panel" ref={surfaceRef}>
            <div className="click-away-panel-heading">
              <span className="click-away-panel-icon"><MousePointer2 size={14} aria-hidden="true" /></span>
              <span><strong>Inside the panel</strong><small>Clicks here do not dismiss it.</small></span>
            </div>
            <button className="click-away-inside-action" type="button" onClick={interactInside}>
              <Check size={13} aria-hidden="true" /> Interact inside <span>{insideCount}</span>
            </button>
          </div>
        )}
        {isPortal && (
          <PopperSurface
            open={open}
            anchorRef={anchorRef}
            surfaceRef={surfaceRef}
            placement="bottom-start"
            fallbackPlacements={['top-start', 'bottom-end', 'top-end']}
            className="click-away-portal-panel"
            role="dialog"
            ariaLabel="Portal click-away example"
            onEscape={dismiss}
          >
            <div className="click-away-panel-heading">
              <span className="click-away-panel-icon"><MousePointer2 size={14} aria-hidden="true" /></span>
              <span><strong>Portaled content</strong><small>Rendered under document.body.</small></span>
            </div>
            <button className="click-away-inside-action" type="button" onClick={interactInside}>
              <Check size={13} aria-hidden="true" /> Interact inside <span>{insideCount}</span>
            </button>
          </PopperSurface>
        )}
      </div>
      <div className="click-away-feedback" role="status">
        <span className={cx('click-away-status-dot', open && 'click-away-status-dot-open')} />
        <span>{message || (open ? 'Listener is active. Try clicking inside, then outside.' : 'Panel closed. Open it to test click-away behavior.')}</span>
      </div>
    </div>
  );
}

export default function ClickAwayListenerDemo({ demoId }) {
  return <ClickAwayExample demoId={demoId} />;
}
