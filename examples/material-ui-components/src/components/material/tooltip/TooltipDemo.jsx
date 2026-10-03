import { useId, useRef, useState } from 'react';
import { Check, CircleHelp, Keyboard, Sparkles } from 'lucide-react';
import { cx } from 'registyle';
import { PopperSurface } from '../../Popper.jsx';

const PLACEMENTS = ['top', 'right', 'bottom', 'left'];
const FALLBACK_PLACEMENTS = ['top', 'right', 'bottom', 'left'];

function TooltipTrigger({ label, children, placement = 'top', className }) {
  const id = useId();
  const anchorRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const open = hovered || focused;
  const dismiss = () => {
    setHovered(false);
    setFocused(false);
  };

  return (
    <span className="tooltip-anchor">
      <button
        className={cx('tooltip-trigger', className)}
        type="button"
        ref={anchorRef}
        aria-label={label}
        aria-describedby={open ? id : undefined}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        {children}
      </button>
      <PopperSurface
        open={open}
        anchorRef={anchorRef}
        placement={placement}
        fallbackPlacements={FALLBACK_PLACEMENTS}
        className="tooltip-surface"
        role="tooltip"
        onEscape={dismiss}
      >
        <span id={id}>{label}</span>
      </PopperSurface>
    </span>
  );
}

function BasicTooltip() {
  const id = useId();
  const anchorRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const visible = hovered || focused;
  const dismiss = () => {
    setHovered(false);
    setFocused(false);
  };

  return (
    <div className="tooltip-demo">
      <button
        className="tooltip-trigger tooltip-trigger-basic"
        type="button"
        ref={anchorRef}
        aria-describedby={visible ? id : undefined}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        Hover or focus me
      </button>
      <PopperSurface
        open={visible}
        anchorRef={anchorRef}
        placement="top"
        fallbackPlacements={FALLBACK_PLACEMENTS}
        className="tooltip-surface"
        role="tooltip"
        onEscape={dismiss}
      >
        <span id={id}>Helpful information appears on hover or focus.</span>
      </PopperSurface>
      <span className="preview-note">Try hovering, focusing with Tab, or pressing Escape.</span>
    </div>
  );
}

function PlacementTooltips() {
  const [placement, setPlacement] = useState('top');

  return (
    <div className="tooltip-demo tooltip-placement-demo">
      <div className="tooltip-placement-picker" role="group" aria-label="Tooltip placement">
        {PLACEMENTS.map((item) => (
          <button
            className={cx('tooltip-placement-button', placement === item && 'tooltip-placement-active')}
            key={item}
            type="button"
            aria-pressed={placement === item}
            onClick={() => setPlacement(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <TooltipTrigger
        className="tooltip-trigger-basic"
        label={`Tooltip positioned ${placement}`}
        placement={placement}
      >
        Hover to preview
      </TooltipTrigger>
      <span className="preview-note">Current placement: {placement}</span>
    </div>
  );
}

function RichTooltip() {
  const id = useId();
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const visible = open || hovered || focused;
  const dismiss = () => {
    setOpen(false);
    setHovered(false);
    setFocused(false);
  };

  return (
    <div className="tooltip-demo">
      <button
        className="tooltip-trigger tooltip-trigger-rich"
        type="button"
        ref={anchorRef}
        aria-describedby={visible ? id : undefined}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onClick={() => setOpen((value) => !value)}
      >
        <CircleHelp size={15} aria-hidden="true" /> Click or hover for details
      </button>
      <PopperSurface
        open={visible}
        anchorRef={anchorRef}
        placement="top"
        fallbackPlacements={FALLBACK_PLACEMENTS}
        className="tooltip-surface tooltip-surface-rich"
        role="tooltip"
        onEscape={dismiss}
      >
        <span className="tooltip-rich-content" id={id}>
          <span className="tooltip-rich-icon"><Sparkles size={15} aria-hidden="true" /></span>
          <span><strong>Smart suggestions</strong><small>Use shortcuts to finish common tasks faster.</small><span className="tooltip-shortcut"><Keyboard size={11} aria-hidden="true" /> Press <kbd>⌘</kbd><kbd>K</kbd> to search</span></span>
          <Check className="tooltip-rich-check" size={14} aria-hidden="true" />
        </span>
      </PopperSurface>
      <span className="preview-note">This tooltip also opens on click and dismisses with Escape.</span>
    </div>
  );
}

export default function TooltipDemo({ demoId }) {
  if (demoId === 'tooltip-placements') return <PlacementTooltips />;
  if (demoId === 'tooltip-interactive') return <RichTooltip />;
  return <BasicTooltip />;
}
