import { useCallback, useId, useRef, useState } from 'react';
import { AlignCenter, AlignLeft, AlignRight, ChevronDown, Code2, Eye, History, Save } from 'lucide-react';
import { cx } from 'registyle';
import { useClickAway } from '../../Popper.jsx';

const VIEWS = [
  { label: 'Preview', Icon: Eye },
  { label: 'Source', Icon: Code2 },
  { label: 'History', Icon: History },
];

const ALIGNMENTS = [
  { label: 'Align left', Icon: AlignLeft },
  { label: 'Align center', Icon: AlignCenter },
  { label: 'Align right', Icon: AlignRight },
];

export default function ButtonGroupDemo({ demoId }) {
  const isVertical = demoId === 'button-group-vertical';
  const isSplit = demoId === 'button-group-split';
  const menuId = useId();
  const groupRef = useRef(null);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const [view, setView] = useState('Preview');
  const [alignment, setAlignment] = useState('Align left');
  const [expanded, setExpanded] = useState(false);
  const [announcement, setAnnouncement] = useState('');
  const dismiss = useCallback(() => setExpanded(false), []);

  useClickAway(isSplit && expanded, groupRef, menuRef, dismiss);

  if (isSplit) {
    return (
      <div
        className="button-group-demo"
        ref={groupRef}
        onKeyDown={(event) => {
          if (event.key === 'Escape' && expanded) {
            event.preventDefault();
            dismiss();
            toggleRef.current?.focus();
          }
        }}
      >
        <div className="button-group button-group-split" role="group" aria-label="Save actions">
          <button
            className="button-group-button button-group-primary"
            type="button"
            onClick={() => {
              setExpanded(false);
              setAnnouncement('Draft saved.');
            }}
          >
            <Save size={14} />
            Save draft
          </button>
          <button
            className="button-group-button button-group-split-toggle"
            type="button"
            aria-label="More save options"
            aria-expanded={expanded}
            aria-controls={menuId}
            ref={toggleRef}
            onClick={() => setExpanded((current) => !current)}
          >
            <ChevronDown size={14} />
          </button>
          {expanded && (
            <div className="button-group-menu" id={menuId} ref={menuRef} role="group" aria-label="More save options">
              {['Publish now', 'Schedule publish'].map((action) => (
                <button
                  className="button-group-menu-item"
                  key={action}
                  type="button"
                  onClick={() => {
                    setAnnouncement(`${action} selected.`);
                    setExpanded(false);
                  }}
                >
                  {action}
                </button>
              ))}
            </div>
          )}
        </div>
        <span className="button-group-status" role="status" aria-live="polite">
          {announcement || 'Save now or choose another publishing action.'}
        </span>
      </div>
    );
  }

  if (isVertical) {
    return (
      <div className="button-group-demo">
        <div className="button-group button-group-vertical" role="group" aria-label="Text alignment">
          {ALIGNMENTS.map(({ label, Icon }) => (
            <button
              className={cx('button-group-button', alignment === label && 'button-group-selected')}
              key={label}
              type="button"
              aria-label={label}
              aria-pressed={alignment === label}
              onClick={() => setAlignment(label)}
            >
              <Icon size={15} />
            </button>
          ))}
        </div>
        <span className="button-group-status" role="status">{alignment} selected</span>
      </div>
    );
  }

  return (
    <div className="button-group-demo">
      <div className="button-group" role="group" aria-label="Editor view">
        {VIEWS.map(({ label, Icon }) => (
          <button
            className={cx('button-group-button', view === label && 'button-group-selected')}
            key={label}
            type="button"
            aria-pressed={view === label}
            onClick={() => setView(label)}
          >
            <Icon size={14} />
            {label}
          </button>
        ))}
      </div>
      <span className="button-group-status" role="status">{view} view selected</span>
    </div>
  );
}
