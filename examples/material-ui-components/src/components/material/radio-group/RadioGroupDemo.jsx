import { RadioGroup } from '@registyle/material-components';
import { useState } from 'react';

const PLANS = [
  { id: 'starter', label: 'Starter', description: 'For personal projects' },
  { id: 'team', label: 'Team', description: 'For growing teams' },
  { id: 'business', label: 'Business', description: 'For larger organizations' },
];

const DENSITIES = [
  { id: 'compact', label: 'Compact' },
  { id: 'comfortable', label: 'Comfortable' },
  { id: 'spacious', label: 'Spacious' },
];

export default function RadioGroupDemo({ demoId }) {
  const isRow = demoId === 'radio-group-row';
  const isDisabled = demoId === 'radio-group-disabled';
  const options = isRow ? DENSITIES : PLANS;
  const [selected, setSelected] = useState(isRow ? 'comfortable' : 'team');
  const disabledOption = isDisabled ? 'business' : '';
  const legend = isRow
    ? 'Interface density'
    : isDisabled
      ? 'Choose a workspace plan'
      : 'Select a plan';

  return (
    <div className="preview-stack">
      <RadioGroup
        className="radio-preview-group"
        legend={legend}
        orientation={isRow ? 'horizontal' : 'vertical'}
        options={options.map(({ id, ...option }) => ({
          ...option,
          value: id,
          disabled: id === disabledOption,
        }))}
        value={selected}
        onChange={(event) => setSelected(event.target.value)}
      />
      <span className="preview-note" role="status" aria-live="polite">
        {selected
          ? `${options.find((option) => option.id === selected)?.label} selected.`
          : 'Choose an option.'}
      </span>
    </div>
  );
}
