import { useState } from 'react';
import { FileText, Heart, Image, Mail, Plus, X } from 'lucide-react';
import { cx } from 'registyle';

const ACTIONS = [
  { label: 'Upload image', Icon: Image },
  { label: 'New document', Icon: FileText },
  { label: 'Send email', Icon: Mail },
];

function Fab({ label, size = '', variant = 'primary', children, ...props }) {
  return (
    <button
      className={cx('fab-control', `fab-control-${variant}`, size && `fab-control-${size}`)}
      type="button"
      aria-label={label}
      {...props}
    >
      {children}
    </button>
  );
}

export default function FloatingActionButtonDemo({ demoId }) {
  if (demoId === 'fab-sizes') {
    return (
      <div className="preview-row" role="group" aria-label="Floating action button sizes">
        <Fab label="Create, small size" size="small"><Plus size={17} /></Fab>
        <Fab label="Create, default size"><Plus size={21} /></Fab>
        <Fab label="Create, large size" size="large"><Plus size={25} /></Fab>
        <span className="preview-note">Small · Default · Large</span>
      </div>
    );
  }

  if (demoId === 'fab-group') {
    return <SpeedDialDemo />;
  }

  return (
    <div className="preview-row">
      <Fab label="Create item"><Plus size={21} /></Fab>
      <Fab label="Add to favorites" variant="secondary"><Heart size={18} /></Fab>
      <Fab label="Compose a message" variant="extended"><Mail size={16} /> Compose</Fab>
    </div>
  );
}

function SpeedDialDemo() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');

  return (
    <div className="preview-stack">
      <div className="preview-row" role="group" aria-label="Quick actions">
        <Fab
          label={open ? 'Close quick actions' : 'Open quick actions'}
          aria-expanded={open}
          aria-controls="fab-quick-actions"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={20} /> : <Plus size={21} />}
        </Fab>
        {open && (
          <div className="preview-row" id="fab-quick-actions" role="group" aria-label="Available quick actions">
            {ACTIONS.map(({ label, Icon }) => (
              <Fab
                key={label}
                label={label}
                variant="action"
                size="small"
                onClick={() => {
                  setSelected(label);
                  setOpen(false);
                }}
              >
                <Icon size={16} />
              </Fab>
            ))}
          </div>
        )}
      </div>
      <span className="preview-note" role="status" aria-live="polite">
        {selected ? `${selected} selected.` : open ? 'Choose a quick action.' : 'Open the action menu.'}
      </span>
    </div>
  );
}
