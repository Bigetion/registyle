import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Check, Layers, Move, X } from 'lucide-react';
import { cx } from 'registyle';
import { PopperSurface, useClickAway } from '../../Popper.jsx';

const PLACEMENTS = [
  ['top', ArrowUp],
  ['right', ArrowRight],
  ['bottom', ArrowDown],
  ['left', ArrowLeft],
];
const FALLBACK_PLACEMENTS = ['top', 'right', 'bottom', 'left'];

function BasicPopperDemo() {
  const anchorRef = useRef(null);
  const surfaceRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [notice, setNotice] = useState('');
  const dismiss = useCallback(() => setOpen(false), []);
  useClickAway(open, anchorRef, surfaceRef, dismiss);

  return (
    <div className="popper-demo">
      <div className="popper-demo-stage">
        <div className="popper-demo-copy">
          <span className="popper-demo-eyebrow">ANCHORED FLOATING UI</span>
          <strong>Position content relative to a trigger</strong>
          <span>The surface is portaled to the document and stays aligned as the page changes.</span>
        </div>
        <button
          className="mui-button mui-button-outlined"
          type="button"
          ref={anchorRef}
          aria-haspopup="dialog"
          aria-expanded={open}
          onClick={() => { setNotice(''); setOpen((value) => !value); }}
        >
          {open ? 'Close details' : 'Open details'}
          <Move size={13} aria-hidden="true" />
        </button>
      </div>
      <div className="popper-demo-footer" role="status">
        <span>{notice || (open ? 'Click outside or press Escape to dismiss.' : 'The floating surface uses a body portal.')}</span>
      </div>
      <PopperSurface
        open={open}
        anchorRef={anchorRef}
        surfaceRef={surfaceRef}
        placement="bottom-start"
        className="popper-demo-surface"
        role="dialog"
        ariaLabel="Popper anchored content"
        onEscape={dismiss}
      >
        <div className="popper-demo-content">
          <span className="popper-demo-icon"><Layers size={15} aria-hidden="true" /></span>
          <div>
            <strong>Anchored surface</strong>
            <span>Positioned with Popper.js</span>
          </div>
          <button type="button" className="popper-demo-close" aria-label="Close details" onClick={dismiss}>
            <X size={14} aria-hidden="true" />
          </button>
          <p>Popper keeps this content next to its reference element and updates its position when needed.</p>
        </div>
      </PopperSurface>
    </div>
  );
}

function PlacementDemo() {
  const anchorRef = useRef(null);
  const surfaceRef = useRef(null);
  const [placement, setPlacement] = useState('bottom');
  const [actualPlacement, setActualPlacement] = useState('');
  const [open, setOpen] = useState(false);
  const dismiss = useCallback(() => setOpen(false), []);
  useClickAway(open, anchorRef, surfaceRef, dismiss);

  useEffect(() => {
    const surface = surfaceRef.current;
    if (!open || !surface) return undefined;

    const updatePlacement = () => {
      const value = surface.getAttribute('data-popper-placement');
      if (value) setActualPlacement(value);
    };
    const observer = new MutationObserver(updatePlacement);
    observer.observe(surface, { attributes: true, attributeFilter: ['data-popper-placement'] });
    updatePlacement();
    return () => observer.disconnect();
  }, [open, placement]);

  function choosePlacement(value) {
    setPlacement(value);
    setActualPlacement('');
    setOpen(true);
  }

  return (
    <div className="popper-demo popper-placement-demo">
      <div className="popper-placement-controls" role="group" aria-label="Choose Popper placement">
        {PLACEMENTS.map(([value, Icon]) => (
          <button
            className={cx('popper-placement-option', placement === value && 'popper-placement-option-active')}
            key={value}
            type="button"
            aria-pressed={placement === value}
            onClick={() => choosePlacement(value)}
          >
            <Icon size={12} aria-hidden="true" />
            {value}
          </button>
        ))}
      </div>
      <div className="popper-placement-stage">
        <span className="popper-demo-eyebrow">LIVE PLACEMENT PREVIEW</span>
        <button
          className="mui-button mui-button-outlined"
          type="button"
          ref={anchorRef}
          aria-haspopup="dialog"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          Reference element
        </button>
        <span className="popper-placement-status" role="status">
          {open
            ? actualPlacement
              ? `Actual placement: ${actualPlacement}${actualPlacement === placement ? '' : ` (flipped from ${placement})`}`
              : 'Calculating placement…'
            : 'Select a direction to open the floating surface.'}
        </span>
      </div>
      <PopperSurface
        open={open}
        anchorRef={anchorRef}
        surfaceRef={surfaceRef}
        placement={placement}
        fallbackPlacements={FALLBACK_PLACEMENTS}
        className="popper-demo-surface popper-placement-surface"
        role="dialog"
        ariaLabel="Popper placement preview"
        onEscape={dismiss}
      >
        <div className="popper-placement-content">
          <strong>{actualPlacement || placement}</strong>
          <span>Popper chooses the best available position.</span>
        </div>
      </PopperSurface>
    </div>
  );
}

function OffsetDemo() {
  const anchorRef = useRef(null);
  const surfaceRef = useRef(null);
  const [skidding, setSkidding] = useState(0);
  const [distance, setDistance] = useState(12);
  const [open, setOpen] = useState(false);
  const modifiers = useMemo(
    () => [{ name: 'offset', options: { offset: [skidding, distance] } }],
    [distance, skidding],
  );
  const dismiss = useCallback(() => setOpen(false), []);
  useClickAway(open, anchorRef, surfaceRef, dismiss);

  return (
    <div className="popper-demo popper-offset-demo">
      <div className="popper-offset-controls">
        <label className="popper-range-control">
          <span><strong>Skidding</strong><output>{skidding}px</output></span>
          <input
            type="range"
            min="-32"
            max="32"
            step="1"
            value={skidding}
            aria-label="Skidding offset"
            onChange={(event) => { setSkidding(Number(event.target.value)); setOpen(true); }}
          />
          <small>Shift along the reference edge.</small>
        </label>
        <label className="popper-range-control">
          <span><strong>Distance</strong><output>{distance}px</output></span>
          <input
            type="range"
            min="0"
            max="32"
            step="1"
            value={distance}
            aria-label="Distance offset"
            onChange={(event) => { setDistance(Number(event.target.value)); setOpen(true); }}
          />
          <small>Move away from the reference.</small>
        </label>
      </div>
      <div className="popper-offset-stage">
        <span className="popper-demo-eyebrow">OFFSET MODIFIER</span>
        <button
          className="mui-button mui-button-outlined"
          type="button"
          ref={anchorRef}
          aria-haspopup="dialog"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          Reference element
        </button>
        <span className="popper-placement-status" role="status">
          {open ? `Offset: [${skidding}, ${distance}]px` : 'Adjust an offset or open the preview.'}
        </span>
      </div>
      <PopperSurface
        open={open}
        anchorRef={anchorRef}
        surfaceRef={surfaceRef}
        placement="bottom"
        fallbackPlacements={['top', 'right', 'left']}
        modifiers={modifiers}
        className="popper-demo-surface popper-offset-surface"
        role="dialog"
        ariaLabel="Popper offset preview"
        onEscape={dismiss}
      >
        <div className="popper-offset-content">
          <span className="popper-demo-icon"><Check size={14} aria-hidden="true" /></span>
          <div><strong>Offset applied</strong><span>Skidding {skidding}px · distance {distance}px</span></div>
        </div>
      </PopperSurface>
    </div>
  );
}

export default function PopperDemo({ demoId }) {
  if (demoId === 'popper-placements') return <PlacementDemo />;
  if (demoId === 'popper-offset') return <OffsetDemo />;
  return <BasicPopperDemo />;
}
