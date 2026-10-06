import { useState } from 'react';
import { AlignCenter, AlignLeft, AlignRight, Grid2X2, List, Map, Table2 } from 'lucide-react';
import { cx } from 'registyle';

const VIEW_OPTIONS = [
  { id: 'list', label: 'List', Icon: List },
  { id: 'grid', label: 'Grid', Icon: Grid2X2 },
  { id: 'table', label: 'Table', Icon: Table2 },
];

const ALIGNMENT_OPTIONS = [
  { id: 'left', label: 'Align left', Icon: AlignLeft },
  { id: 'center', label: 'Align center', Icon: AlignCenter },
  { id: 'right', label: 'Align right', Icon: AlignRight },
];

function ToggleButtonGroup({ label, options, value, onChange, size = 'medium', exclusive = true }) {
  return (
    <div
      className={cx('toggle-button-demo', size === 'icon' && 'toggle-button-demo-icon')}
      role="group"
      aria-label={label}
    >
      {options.map(({ id, label: optionLabel, Icon }) => {
        const selected = exclusive ? value === id : value.includes(id);
        return (
          <button
            className={cx(
              'toggle-button-demo-button',
              size === 'icon' && 'toggle-button-demo-button-icon',
              selected && 'toggle-button-demo-selected',
            )}
            key={id}
            type="button"
            aria-label={optionLabel}
            aria-pressed={selected}
            onClick={() => onChange(id)}
          >
            <Icon size={size === 'small' ? 14 : 16} aria-hidden="true" />
            {size !== 'icon' && <span>{optionLabel}</span>}
          </button>
        );
      })}
    </div>
  );
}

function DefaultToggleButtons() {
  const [view, setView] = useState('list');

  return (
    <div className="preview-stack">
      <ToggleButtonGroup
        label="Choose a view"
        options={VIEW_OPTIONS}
        value={view}
        onChange={setView}
      />
      <span className="preview-note" role="status" aria-live="polite">
        {view.charAt(0).toUpperCase() + view.slice(1)} view selected.
      </span>
    </div>
  );
}

function ExclusiveToggleButtons() {
  const [alignment, setAlignment] = useState(null);

  return (
    <div className="preview-stack">
      <ToggleButtonGroup
        label="Text alignment"
        options={ALIGNMENT_OPTIONS}
        value={alignment}
        onChange={(value) => setAlignment((current) => current === value ? null : value)}
      />
      <span className="preview-note" role="status" aria-live="polite">
        {alignment
          ? `${alignment.charAt(0).toUpperCase() + alignment.slice(1)} alignment selected.`
          : 'No alignment selected. Select the active option again to clear it.'}
      </span>
    </div>
  );
}

function ToggleButtonSizes() {
  const [view, setView] = useState('map');
  const options = [
    { id: 'map', label: 'Map', Icon: Map },
    { id: 'grid', label: 'Grid', Icon: Grid2X2 },
  ];

  return (
    <div className="preview-stack">
      <span className="preview-note">Compact icon-only controls</span>
      <ToggleButtonGroup
        label="Map display"
        options={options}
        value={view}
        onChange={setView}
        size="icon"
      />
      <span className="preview-note" role="status" aria-live="polite">
        {view === 'map' ? 'Map view selected.' : 'Grid view selected.'}
      </span>
    </div>
  );
}

export default function ToggleButtonDemo({ demoId }) {
  if (demoId === 'toggle-button-exclusive') return <ExclusiveToggleButtons />;
  if (demoId === 'toggle-button-sizes') return <ToggleButtonSizes />;
  return <DefaultToggleButtons />;
}
