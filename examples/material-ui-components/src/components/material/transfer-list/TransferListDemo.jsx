import { useEffect, useId, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { cx } from 'registyle';

const OPTIONS = [
  { id: 'wifi', label: 'Wi-Fi', detail: 'Network access' },
  { id: 'bluetooth', label: 'Bluetooth', detail: 'Nearby devices' },
  { id: 'notifications', label: 'Notifications', detail: 'Alerts and reminders' },
  { id: 'location', label: 'Location', detail: 'Location-based services' },
  { id: 'camera', label: 'Camera', detail: 'Photo and video capture' },
  { id: 'contacts', label: 'Contacts', detail: 'Address book access' },
];

function TransferCheckbox({ label, checked, indeterminate = false, disabled = false, onChange }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.indeterminate = indeterminate;
  }, [indeterminate]);

  return (
    <span className={cx('transfer-checkbox', disabled && 'transfer-checkbox-disabled')}>
      <input
        ref={inputRef}
        className="transfer-checkbox-input"
        type="checkbox"
        checked={checked}
        disabled={disabled}
        aria-label={label}
        aria-checked={indeterminate ? 'mixed' : checked}
        onChange={onChange}
      />
      <span className={cx(
        'transfer-checkbox-indicator',
        checked && 'transfer-checkbox-checked',
        indeterminate && 'transfer-checkbox-indeterminate',
      )} aria-hidden="true">
        {indeterminate
          ? <span className="transfer-checkbox-dash" />
          : checked ? <Check size={11} strokeWidth={2.5} /> : null}
      </span>
    </span>
  );
}

function SelectAll({ label, items, selected, onChange }) {
  const allSelected = items.length > 0 && items.every((item) => selected.includes(item));
  const partiallySelected = !allSelected && items.some((item) => selected.includes(item));

  return (
    <label className="transfer-select-all">
      <TransferCheckbox
        label={`Select all ${label.toLowerCase()} items`}
        checked={allSelected}
        indeterminate={partiallySelected}
        disabled={items.length === 0}
        onChange={(event) => onChange(event.target.checked ? items : [])}
      />
      <span>Select all</span>
    </label>
  );
}

function TransferColumn({ title, items, selected, onToggle, selectable, showSelectAll, onSelectAll }) {
  const headingId = useId();

  return (
    <section className="transfer-list" aria-labelledby={headingId}>
      <header className="transfer-list-header">
        <h3 className="transfer-list-title" id={headingId}>{title}</h3>
        <span className="transfer-list-count">{items.length}</span>
      </header>
      {showSelectAll && (
        <SelectAll
          label={title}
          items={items.map((item) => item.id)}
          selected={selected}
          onChange={onSelectAll}
        />
      )}
      <div className="transfer-list-items" role="group" aria-label={`${title} items`}>
        {items.map((item) => (
          <label
            className={cx('transfer-item', selected.includes(item.id) && 'transfer-item-selected')}
            key={item.id}
          >
            <TransferCheckbox
              label={item.label}
              checked={selected.includes(item.id)}
              disabled={!selectable}
              onChange={() => onToggle(item.id)}
            />
            <span className="transfer-item-copy">
              <span className="transfer-item-label">{item.label}</span>
              <span className="transfer-item-detail">{item.detail}</span>
            </span>
          </label>
        ))}
        {items.length === 0 && <span className="transfer-list-empty">No items</span>}
      </div>
    </section>
  );
}

export default function TransferListDemo({ demoId }) {
  const isSelectionDemo = demoId === 'transfer-list-selection';
  const isActionsDemo = demoId === 'transfer-list-actions';
  const [available, setAvailable] = useState(OPTIONS.slice(1, 5).map((item) => item.id));
  const [chosen, setChosen] = useState([OPTIONS[0].id]);
  const [selectedAvailable, setSelectedAvailable] = useState([]);
  const [selectedChosen, setSelectedChosen] = useState([]);
  const [announcement, setAnnouncement] = useState('');
  const availableItems = OPTIONS.filter((item) => available.includes(item.id));
  const chosenItems = OPTIONS.filter((item) => chosen.includes(item.id));

  function toggleSelected(itemId, side) {
    const setter = side === 'available' ? setSelectedAvailable : setSelectedChosen;
    setter((current) => current.includes(itemId)
      ? current.filter((id) => id !== itemId)
      : [...current, itemId]);
  }

  function moveItems(direction, all = false) {
    const isMovingRight = direction === 'right';
    const sourceItems = isMovingRight ? available : chosen;
    const sourceSelected = isMovingRight ? selectedAvailable : selectedChosen;
    const moving = all ? sourceItems : sourceItems.filter((id) => sourceSelected.includes(id));
    if (moving.length === 0) return;

    const movingSet = new Set(moving);
    if (isMovingRight) {
      setAvailable((current) => current.filter((id) => !movingSet.has(id)));
      setChosen((current) => [...current, ...moving]);
      setSelectedAvailable((current) => current.filter((id) => !movingSet.has(id)));
      setSelectedChosen([]);
    } else {
      setChosen((current) => current.filter((id) => !movingSet.has(id)));
      setAvailable((current) => [...current, ...moving]);
      setSelectedChosen((current) => current.filter((id) => !movingSet.has(id)));
      setSelectedAvailable([]);
    }

    const names = moving
      .map((id) => OPTIONS.find((item) => item.id === id)?.label)
      .filter(Boolean);
    setAnnouncement(`${names.join(', ')} moved ${isMovingRight ? 'to selected' : 'to available'}.`);
  }

  function setAllSelected(side, itemIds) {
    const setter = side === 'available' ? setSelectedAvailable : setSelectedChosen;
    setter(itemIds);
  }

  return (
    <div className="transfer-demo">
      <TransferColumn
        title="Available"
        items={availableItems}
        selected={selectedAvailable}
        onToggle={(id) => toggleSelected(id, 'available')}
        selectable
        showSelectAll={isSelectionDemo}
        onSelectAll={(items) => setAllSelected('available', items)}
      />
      <div className="transfer-actions" role="group" aria-label="Move items between lists">
        <button
          className="transfer-action"
          type="button"
          aria-label="Move selected items to selected list"
          disabled={selectedAvailable.length === 0}
          onClick={() => moveItems('right')}
        >
          <ArrowRight size={16} aria-hidden="true" />
        </button>
        {isActionsDemo && (
          <button
            className="transfer-action transfer-action-all"
            type="button"
            aria-label="Move all items to selected list"
            disabled={available.length === 0}
            onClick={() => moveItems('right', true)}
          >
            <ChevronsRight size={16} aria-hidden="true" />
          </button>
        )}
        {isActionsDemo && (
          <button
            className="transfer-action transfer-action-all"
            type="button"
            aria-label="Move all items to available list"
            disabled={chosen.length === 0}
            onClick={() => moveItems('left', true)}
          >
            <ChevronsLeft size={16} aria-hidden="true" />
          </button>
        )}
        <button
          className="transfer-action"
          type="button"
          aria-label="Move selected items to available list"
          disabled={selectedChosen.length === 0}
          onClick={() => moveItems('left')}
        >
          <ArrowLeft size={16} aria-hidden="true" />
        </button>
      </div>
      <TransferColumn
        title="Selected"
        items={chosenItems}
        selected={selectedChosen}
        onToggle={(id) => toggleSelected(id, 'chosen')}
        selectable
        showSelectAll={isSelectionDemo}
        onSelectAll={(items) => setAllSelected('chosen', items)}
      />
      <span className="transfer-status" role="status" aria-live="polite">
        {announcement || `${available.length} available, ${chosen.length} selected.`}
      </span>
    </div>
  );
}
