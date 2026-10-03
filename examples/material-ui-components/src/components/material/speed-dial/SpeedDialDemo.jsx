import { useRef, useState } from 'react';
import { FilePlus2, Image, Mail, Plus, Share2, X } from 'lucide-react';
import { cx } from 'registyle';

const ACTIONS = [
  { label: 'Upload image', Icon: Image },
  { label: 'New document', Icon: FilePlus2 },
  { label: 'Send email', Icon: Mail },
];

const DIRECTIONS = ['up', 'right', 'down', 'left'];

function SpeedDial({ open, onToggle, direction = 'up', onSelect, label = 'Quick actions' }) {
  const fabRef = useRef(null);

  function selectAction(action) {
    onSelect(action);
    fabRef.current?.focus();
  }

  return (
    <div
      className={cx('mui-speed-dial', `mui-speed-dial-${direction}`)}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && open) {
          event.preventDefault();
          onToggle();
          fabRef.current?.focus();
        }
      }}
    >
      <div className={cx('mui-speed-dial-actions', !open && 'mui-speed-dial-actions-hidden')} aria-hidden={!open}>
        {ACTIONS.map(({ label: action, Icon }) => (
          <button
            className="mui-speed-dial-action"
            type="button"
            key={action}
            tabIndex={open ? 0 : -1}
            aria-label={action}
            title={action}
            onClick={() => selectAction(action)}
          >
            <Icon size={15} aria-hidden="true" />
            <span className="speed-dial-action-tooltip">{action}</span>
          </button>
        ))}
      </div>
      <button
        className="mui-speed-dial-fab"
        type="button"
        ref={fabRef}
        aria-label={open ? 'Close quick actions' : label}
        aria-expanded={open}
        onClick={onToggle}
      >
        {open ? <X size={19} aria-hidden="true" /> : <Plus size={20} aria-hidden="true" />}
      </button>
    </div>
  );
}

function StandardSpeedDialDemo() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  function selectAction(action) {
    setOpen(false);
    setMessage(`${action} selected.`);
  }

  return (
    <div className="speed-dial-showcase">
      <div className="speed-dial-stage">
        <div className="speed-dial-stage-copy">
          <span className="speed-dial-kicker">WORKSPACE SHORTCUTS</span>
          <strong>What would you like to create?</strong>
          <span>Open the speed dial to get started.</span>
        </div>
        <SpeedDial
          open={open}
          onToggle={() => { setMessage(''); setOpen((value) => !value); }}
          onSelect={selectAction}
        />
      </div>
      <span className="preview-note" role="status">{message || (open ? 'Choose an action or close the speed dial.' : 'Quick actions are grouped behind one floating button.')}</span>
    </div>
  );
}

function DirectionSpeedDialDemo() {
  const [direction, setDirection] = useState('up');
  const [open, setOpen] = useState(true);
  const [message, setMessage] = useState('');

  function selectAction(action) {
    setOpen(false);
    setMessage(`${action} selected.`);
  }

  return (
    <div className="speed-dial-showcase">
      <div className="speed-dial-direction-controls" role="group" aria-label="Speed dial direction">
        {DIRECTIONS.map((item) => (
          <button
            className={cx('speed-dial-direction-option', direction === item && 'speed-dial-direction-option-active')}
            type="button"
            key={item}
            aria-pressed={direction === item}
            onClick={() => { setDirection(item); setOpen(true); setMessage(''); }}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="speed-dial-direction-stage">
        <SpeedDial
          open={open}
          direction={direction}
          onToggle={() => setOpen((value) => !value)}
          onSelect={selectAction}
          label="Open directional actions"
        />
        <span className="preview-note" role="status">{message || `Actions expand ${direction} from the floating button.`}</span>
      </div>
    </div>
  );
}

function AlwaysOpenSpeedDialDemo() {
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(true);

  return (
    <div className="speed-dial-showcase">
      <div className="speed-dial-open-stage">
        <div className="speed-dial-open-header">
          <span className="speed-dial-open-icon"><Share2 size={15} aria-hidden="true" /></span>
          <span><strong>Share this workspace</strong><small>Invite a teammate or share a link.</small></span>
        </div>
        <SpeedDial
          open={open}
          onToggle={() => setOpen((value) => !value)}
          onSelect={(action) => { setMessage(`${action} selected.`); setOpen(false); }}
          label="Open sharing actions"
        />
      </div>
      <span className="preview-note" role="status">{message || (open ? 'The actions are expanded and ready to select.' : 'Open the speed dial to show the available actions.')}</span>
    </div>
  );
}

export default function SpeedDialDemo({ demoId }) {
  if (demoId === 'speed-dial-directions') return <DirectionSpeedDialDemo />;
  if (demoId === 'speed-dial-open') return <AlwaysOpenSpeedDialDemo />;
  return <StandardSpeedDialDemo />;
}
