import { useId, useState } from 'react';
import { cx } from 'registyle';

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

function RadioOption({ name, id, label, description, checked, disabled = false, onChange }) {
  return (
    <label className={cx('selection-option', disabled && 'is-disabled')}>
      <span className={cx('mui-radio', disabled && 'mui-radio-disabled')}>
        <input
          className="mui-radio-input"
          type="radio"
          name={name}
          id={id}
          value={id}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
        />
        <span className={cx('mui-radio-indicator', checked && 'mui-radio-checked')} aria-hidden="true">
          {checked && <span className="mui-radio-dot" />}
        </span>
      </span>
      <span className="selection-copy">
        <span>{label}</span>
        {description && <span className="preview-note">{description}</span>}
      </span>
    </label>
  );
}

export default function RadioGroupDemo({ demoId }) {
  const groupId = useId();
  const isRow = demoId === 'radio-group-row';
  const isDisabled = demoId === 'radio-group-disabled';
  const options = isRow ? DENSITIES : PLANS;
  const [selected, setSelected] = useState(isRow ? 'comfortable' : 'team');
  const disabledOption = isDisabled ? 'business' : '';
  const legend = isRow ? 'Interface density' : isDisabled ? 'Choose a workspace plan' : 'Select a plan';

  return (
    <div className="preview-stack">
      <fieldset className={cx('radio-preview-group', isRow ? 'selection-list' : 'selection-list-vertical')}>
        <legend className="preview-note">{legend}</legend>
        {options.map((option) => (
          <RadioOption
            key={option.id}
            name={groupId}
            id={`${groupId}-${option.id}`}
            {...option}
            disabled={option.id === disabledOption}
            checked={selected === option.id}
            onChange={() => setSelected(option.id)}
          />
        ))}
      </fieldset>
      <span className="preview-note" role="status" aria-live="polite">
        {selected ? `${options.find((option) => option.id === selected)?.label} selected.` : 'Choose an option.'}
      </span>
    </div>
  );
}
