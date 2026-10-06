import { useCallback, useId, useRef, useState } from 'react';
import { ArrowUpRight, Check, ChevronDown, FolderKanban, Layers, X } from 'lucide-react';
import { cx } from 'registyle';
import { PopperSurface, useClickAway } from '../../Popper.jsx';

const PLACEMENTS = ['top', 'right', 'bottom', 'left'];
const FALLBACK_PLACEMENTS = ['top', 'right', 'left'];
const COLORS = [
  ['indigo', 'Indigo', '#8baeff'],
  ['teal', 'Teal', '#5bc7b0'],
  ['amber', 'Amber', '#e8b968'],
  ['rose', 'Rose', '#e992a8'],
];

function PopoverDemoExample({ demoId }) {
  const anchorRef = useRef(null);
  const surfaceRef = useRef(null);
  const titleId = useId();
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('bottom');
  const [selectedColor, setSelectedColor] = useState('indigo');
  const [notice, setNotice] = useState('');
  const isPlacement = demoId === 'popover-placements';
  const isInteractive = demoId === 'popover-interactive';
  const dismiss = useCallback(() => setOpen(false), []);
  useClickAway(open, anchorRef, surfaceRef, dismiss);

  function toggle() {
    setNotice('');
    setOpen((current) => !current);
  }

  function selectColor(color) {
    setSelectedColor(color);
    setNotice(`${color.charAt(0).toUpperCase() + color.slice(1)} workspace color selected.`);
    dismiss();
  }

  return (
    <div className={cx('popover-demo', isPlacement && 'popover-placement-demo')}>
      {isPlacement && (
        <div className="popover-placement-picker" role="group" aria-label="Popover placement">
          {PLACEMENTS.map((item) => (
            <button
              className={cx('popover-placement-option', placement === item && 'popover-placement-option-active')}
              key={item}
              type="button"
              aria-pressed={placement === item}
              onClick={() => { setPlacement(item); setOpen(true); }}
            >
              {item}
            </button>
          ))}
        </div>
      )}
      <div className="popover-stage">
        <button
          ref={anchorRef}
          className={cx('rgi-button', 'rgi-button-outlined', 'popover-trigger')}
          type="button"
          aria-haspopup="dialog"
          aria-expanded={open}
          onClick={toggle}
        >
          {isInteractive ? 'Choose workspace color' : isPlacement ? `${placement.charAt(0).toUpperCase()}${placement.slice(1)} placement` : 'View project details'}
          <ChevronDown size={13} aria-hidden="true" />
        </button>
      </div>
      <PopperSurface
        open={open}
        anchorRef={anchorRef}
        surfaceRef={surfaceRef}
        placement={placement}
        fallbackPlacements={FALLBACK_PLACEMENTS}
        className="rgi-popover"
        role="dialog"
        ariaLabel={isInteractive ? 'Choose workspace color' : isPlacement ? 'Popover placement preview' : 'Project details'}
        onEscape={dismiss}
      >
        {isInteractive ? (
          <div className="popover-content">
            <div className="popover-heading">
              <span className="popover-heading-icon"><Layers size={15} aria-hidden="true" /></span>
              <span><strong>Workspace color</strong><small>Choose an accent for this space.</small></span>
              <button className="popover-close" type="button" aria-label="Close popover" onClick={dismiss}><X size={14} aria-hidden="true" /></button>
            </div>
            <div className="popover-color-list" role="group" aria-label="Workspace colors">
              {COLORS.map(([name, label, color]) => (
                <button
                  className="popover-color-option"
                  key={name}
                  type="button"
                  aria-pressed={selectedColor === name}
                  onClick={() => selectColor(name)}
                >
                  <i style={{ backgroundColor: color }} />
                  {label}
                  {selectedColor === name && <Check size={13} aria-hidden="true" />}
                </button>
              ))}
            </div>
          </div>
        ) : isPlacement ? (
          <div className="popover-content popover-placement-content">
            <div className="popover-heading">
              <span className="popover-heading-icon"><Layers size={15} aria-hidden="true" /></span>
              <span><strong>{placement.charAt(0).toUpperCase() + placement.slice(1)} placement</strong><small>Anchored to the selected trigger.</small></span>
              <button className="popover-close" type="button" aria-label="Close popover" onClick={dismiss}><X size={14} aria-hidden="true" /></button>
            </div>
            <span className="popover-placement-note">Popper flips the surface when space is limited.</span>
          </div>
        ) : (
          <div className="popover-content">
            <div className="popover-heading">
              <span className="popover-heading-icon"><FolderKanban size={15} aria-hidden="true" /></span>
              <span><strong>Website refresh</strong><small>Updated 12 minutes ago</small></span>
              <button className="popover-close" type="button" aria-label="Close popover" onClick={dismiss}><X size={14} aria-hidden="true" /></button>
            </div>
            <p className="popover-description">A shared project for the new customer workspace experience.</p>
            <div className="popover-project-meta"><span><i /> In progress</span><span>4 members</span></div>
            <button className="popover-open-project" type="button" onClick={() => { setNotice('Website refresh project opened.'); dismiss(); }}>
              Open project <ArrowUpRight size={12} aria-hidden="true" />
            </button>
          </div>
        )}
      </PopperSurface>
      <div className="popover-demo-footer">
        <span className="preview-note" role="status">
          {notice || (open ? 'Click outside or press Escape to dismiss.' : `Selected color: ${selectedColor}.`)}
        </span>
        {isInteractive && <span className="popover-color-preview"><i style={{ backgroundColor: COLORS.find(([name]) => name === selectedColor)[2] }} /> {selectedColor}</span>}
      </div>
    </div>
  );
}

export default function PopoverDemo({ demoId }) {
  return <PopoverDemoExample demoId={demoId} />;
}
