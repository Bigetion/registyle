import { useId, useState } from 'react';
import { Checkbox } from '@registyle/ui-components';

const PREFERENCES = [
  { id: 'product', label: 'Product updates', description: 'News about features and releases.' },
  { id: 'guides', label: 'Tips and guides', description: 'Occasional advice to help you get more out of the product.' },
  { id: 'events', label: 'Events and webinars', description: 'Invitations to product sessions and community events.' },
];

function CheckboxControl({ id, label, description, checked, disabled = false, indeterminate = false, onChange }) {
  return (
    <label className="selection-option">
      <Checkbox
        id={id}
        checked={checked}
        disabled={disabled}
        indeterminate={indeterminate}
        onChange={onChange}
      />
      <span className="selection-copy">
        <span>{label}</span>
        {description && <span className="preview-note">{description}</span>}
      </span>
    </label>
  );
}

export default function CheckboxDemo({ demoId }) {
  const instanceId = useId();
  const [basicChecked, setBasicChecked] = useState(true);
  const [disabledChecked, setDisabledChecked] = useState(true);
  const [selected, setSelected] = useState(['product']);
  const selectedCount = selected.length;
  const allSelected = selectedCount === PREFERENCES.length;
  const partlySelected = selectedCount > 0 && !allSelected;

  if (demoId === 'checkbox-indeterminate') {
    function toggleAll() {
      setSelected(allSelected ? [] : PREFERENCES.map(({ id }) => id));
    }

    return (
      <div className="preview-stack">
        <div>
          <div>
            <strong>Notification preferences</strong>
            <p className="preview-note">Choose the updates you want to receive.</p>
          </div>
          <span className="preview-note">{selectedCount} of {PREFERENCES.length} selected</span>
        </div>
        <div className="preview-stack" role="group" aria-label="Notification preferences">
          <CheckboxControl
            id={`${instanceId}-all`}
            label="Select all preferences"
            checked={allSelected}
            indeterminate={partlySelected}
            onChange={toggleAll}
          />
          {PREFERENCES.map((preference) => (
            <CheckboxControl
              key={preference.id}
              id={`${instanceId}-${preference.id}`}
              {...preference}
              checked={selected.includes(preference.id)}
              onChange={() => setSelected((current) => current.includes(preference.id)
                ? current.filter((id) => id !== preference.id)
                : [...current, preference.id])}
            />
          ))}
        </div>
        <span className="preview-note" role="status" aria-live="polite">
          {selectedCount === 0 ? 'No preferences selected.' : `${selectedCount} ${selectedCount === 1 ? 'preference' : 'preferences'} selected.`}
        </span>
      </div>
    );
  }

  if (demoId === 'checkbox-group') {
    return (
      <div className="preview-stack" role="group" aria-label="Choose your interests">
        <div>
          <strong>Choose your interests</strong>
          <p className="preview-note">Select all topics you would like to hear about.</p>
        </div>
        <div className="selection-list">
          {PREFERENCES.map((preference) => (
            <CheckboxControl
              key={preference.id}
              id={`${instanceId}-${preference.id}`}
              {...preference}
              checked={selected.includes(preference.id)}
              onChange={() => setSelected((current) => current.includes(preference.id)
                ? current.filter((id) => id !== preference.id)
                : [...current, preference.id])}
            />
          ))}
        </div>
        <span className="preview-note" role="status" aria-live="polite">
          {selectedCount === 0
            ? 'Nothing selected yet.'
            : `Selected: ${PREFERENCES.filter(({ id }) => selected.includes(id)).map(({ label }) => label).join(', ')}`}
        </span>
      </div>
    );
  }

  return (
    <div className="preview-stack">
      <div className="selection-list">
        <CheckboxControl
          id={`${instanceId}-updates`}
          label="Send me product updates"
          description="A short email when something useful ships."
          checked={basicChecked}
          onChange={(event) => setBasicChecked(event.target.checked)}
        />
        <CheckboxControl
          id={`${instanceId}-newsletter`}
          label="Subscribe to the monthly newsletter"
          description="A monthly round-up of product news and tips."
          checked={disabledChecked}
          onChange={(event) => setDisabledChecked(event.target.checked)}
        />
        <CheckboxControl
          id={`${instanceId}-unavailable`}
          label="SMS notifications"
          description="Unavailable for this workspace."
          checked={false}
          disabled
        />
      </div>
      <span className="preview-note" role="status" aria-live="polite">
        {basicChecked ? 'Product updates enabled.' : 'Product updates disabled.'}
      </span>
    </div>
  );
}
