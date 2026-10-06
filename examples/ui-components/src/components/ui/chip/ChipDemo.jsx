import { useState } from 'react';
import { Check, Clock3, Code2, X } from 'lucide-react';
import { Chip } from '@registyle/ui-components';

function ChipVariants() {
  return (
    <div className="preview-stack">
      <div className="chip-examples" role="group" aria-label="Chip variants">
        <Chip variant="outlined">Outlined</Chip>
        <Chip>Filled</Chip>
        <Chip color="primary" icon={Code2}>React</Chip>
        <Chip color="success" icon={Check}>Build passed</Chip>
        <Chip color="warning" icon={Clock3}>In review</Chip>
        <Chip size="small">Compact</Chip>
      </div>
      <span className="preview-note">Use a leading icon and color to add context without increasing visual weight.</span>
    </div>
  );
}

function ChipColors() {
  const [selected, setSelected] = useState(['Design']);
  const filters = ['Design', 'Engineering', 'Product', 'Research'];

  const toggle = (filter) => {
    setSelected((current) => (
      current.includes(filter)
        ? current.filter((item) => item !== filter)
        : [...current, filter]
    ));
  };

  return (
    <div className="preview-stack">
      <div className="chip-examples" role="group" aria-label="Filter by team">
        {filters.map((filter) => (
          <Chip key={filter} color="primary" selected={selected.includes(filter)} onClick={() => toggle(filter)}>
            {filter}
          </Chip>
        ))}
      </div>
      <span className="preview-note" role="status" aria-live="polite">
        Selected: {selected.length ? selected.join(', ') : 'none'}
      </span>
    </div>
  );
}

function ChipDeletable() {
  const [tags, setTags] = useState(['Design system', 'React', 'Accessibility']);

  return (
    <div className="preview-stack">
      <div className="chip-examples" role="group" aria-label="Removable tags">
        {tags.map((tag) => (
          <Chip key={tag} variant="outlined" deleteIcon={<X size={13} aria-hidden="true" />} onDelete={() => setTags((current) => current.filter((item) => item !== tag))}>
            {tag}
          </Chip>
        ))}
        {!tags.length && <span className="preview-note">All tags removed.</span>}
      </div>
      <div className="chip-actions">
        <span className="preview-note" role="status" aria-live="polite">{tags.length} tags remaining</span>
        <button className="rgi-button rgi-button-text" type="button" onClick={() => setTags(['Design system', 'React', 'Accessibility'])} disabled={tags.length === 3}>
          Restore tags
        </button>
      </div>
    </div>
  );
}

export default function ChipDemo({ demoId }) {
  if (demoId === 'chip-colors') return <ChipColors />;
  if (demoId === 'chip-deletable') return <ChipDeletable />;
  return <ChipVariants />;
}
