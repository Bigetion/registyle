import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowUpRight, Layers, MousePointer2, X } from 'lucide-react';
import { cx } from 'registyle';

function BodyPortalDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="portal-demo">
      <div className="portal-demo-stage">
        <div className="portal-demo-copy">
          <span className="portal-demo-eyebrow">RENDER OUTSIDE THE PARENT</span>
          <strong>Move content to document.body</strong>
          <span>The React component stays here while its notification is mounted elsewhere in the DOM.</span>
        </div>
        <button className="rgi-button rgi-button-outlined" type="button" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          {open ? 'Hide notification' : 'Show notification'}
          <ArrowUpRight size={13} aria-hidden="true" />
        </button>
      </div>
      <div className="portal-demo-feedback" role="status">
        {open ? 'Notification is rendered directly inside document.body.' : 'Show the notification to inspect its portal destination.'}
      </div>
      {open && typeof document !== 'undefined' && createPortal(
        <aside className="portal-body-notice" role="status">
          <span className="portal-demo-icon"><Layers size={14} aria-hidden="true" /></span>
          <span><strong>Portal notification</strong><small>Rendered into document.body</small></span>
          <button type="button" aria-label="Dismiss notification" onClick={() => setOpen(false)}><X size={13} aria-hidden="true" /></button>
        </aside>,
        document.body,
      )}
    </div>
  );
}

function CustomTargetDemo() {
  const targetRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [bubbledClicks, setBubbledClicks] = useState(0);

  return (
    <div className="portal-demo portal-custom-demo" onClick={() => setBubbledClicks((count) => count + 1)}>
      <div className="portal-demo-stage portal-custom-stage">
        <div className="portal-demo-copy">
          <span className="portal-demo-eyebrow">CUSTOM MOUNT NODE</span>
          <strong>Choose where portal content mounts</strong>
          <span>Send the surface into a specific target while React events still follow the component tree.</span>
        </div>
        <button className="rgi-button rgi-button-outlined" type="button" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          {open ? 'Unmount content' : 'Mount content'}
        </button>
        <div className="portal-custom-target" ref={targetRef}>
          <span className="portal-target-label">Custom portal target</span>
          {open && targetRef.current && createPortal(
            <div className="portal-target-content">
              <MousePointer2 size={14} aria-hidden="true" />
              <span><strong>Mounted here</strong><small>Clicks bubble through React.</small></span>
              <button type="button" aria-label="Close custom portal" onClick={() => setOpen(false)}><X size={12} aria-hidden="true" /></button>
            </div>,
            targetRef.current,
          )}
        </div>
      </div>
      <div className="portal-demo-feedback" role="status">
        {`React parent received ${bubbledClicks} ${bubbledClicks === 1 ? 'click' : 'clicks'}${open ? ' · portal mounted in the custom target' : ''}.`}
      </div>
    </div>
  );
}

function ClippingDemo() {
  const anchorRef = useRef(null);
  const frameRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const dismiss = useCallback(() => setOpen(false), []);

  useLayoutEffect(() => {
    if (!open || !anchorRef.current) return undefined;

    function updatePosition() {
      const rect = anchorRef.current?.getBoundingClientRect();
      const frameRect = frameRef.current?.getBoundingClientRect();
      if (!rect || !frameRect) return;
      const width = 232;
      const height = 64;
      const hasRoomBelow = window.innerHeight - frameRect.bottom >= height + 12;
      setPosition({
        left: Math.max(12, Math.min(rect.left, window.innerWidth - width - 12)),
        top: hasRoomBelow
          ? frameRect.bottom + 8
          : Math.max(12, frameRect.top - height - 8),
      });
    }

    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);
    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [open]);

  return (
    <div className="portal-demo portal-clipping-demo">
      <div className="portal-clipping-frame" ref={frameRef}>
        <span className="portal-demo-eyebrow">CLIPPING CONTAINER · OVERFLOW HIDDEN</span>
        <p>This frame clips anything rendered inside its bounds.</p>
        <button
          className="rgi-button rgi-button-outlined"
          type="button"
          ref={anchorRef}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Close escaped layer' : 'Open escaped layer'}
          <ArrowUpRight size={13} aria-hidden="true" />
        </button>
      </div>
      <div className="portal-demo-feedback" role="status">
        {open ? 'The layer is outside the clipping frame in document.body.' : 'Open the layer to see a portal escape its clipping parent.'}
      </div>
      {open && typeof document !== 'undefined' && createPortal(
        <aside className="portal-escaped-layer" style={{ left: position.left, top: position.top }} role="status">
          <span className="portal-demo-icon"><Layers size={13} aria-hidden="true" /></span>
          <span><strong>Outside the frame</strong><small>Portaled to document.body</small></span>
          <button type="button" aria-label="Close escaped layer" onClick={dismiss}><X size={12} aria-hidden="true" /></button>
        </aside>,
        document.body,
      )}
    </div>
  );
}

export default function PortalDemo({ demoId }) {
  if (demoId === 'portal-popover') return <CustomTargetDemo />;
  if (demoId === 'portal-layering') return <ClippingDemo />;
  return <BodyPortalDemo />;
}
