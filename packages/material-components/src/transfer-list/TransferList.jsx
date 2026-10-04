import { useId, useState } from 'react';
import { cx } from 'registyle';
import './transfer-list.styles.js';

function TransferList({
  className,
  defaultValue = [],
  items = [],
  onChange,
  sourceTitle = 'Available',
  targetTitle = 'Selected',
  value,
}) {
  const generatedId = useId();
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [sourceSelection, setSourceSelection] = useState([]);
  const [targetSelection, setTargetSelection] = useState([]);
  const [announcement, setAnnouncement] = useState('');
  const selectedIds = value ?? internalValue;
  const selectedSet = new Set(selectedIds);
  const sourceItems = items.filter(({ id }) => !selectedSet.has(id));
  const targetItems = items.filter(({ id }) => selectedSet.has(id));

  function commit(nextValue, movedItems, destinationTitle) {
    if (value === undefined) setInternalValue(nextValue);
    onChange?.(nextValue, movedItems);
    setAnnouncement(
      `${movedItems.length} ${movedItems.length === 1 ? 'item' : 'items'} moved to ${destinationTitle}.`,
    );
  }

  function moveSelected(fromItems, selection, toTitle, toTarget) {
    const moving = fromItems.filter(({ id }) => selection.includes(id));
    if (!moving.length) return;
    const movingIds = new Set(moving.map(({ id }) => id));
    const nextValue = toTarget
      ? [...selectedIds, ...moving.map(({ id }) => id)]
      : selectedIds.filter((id) => !movingIds.has(id));
    commit(nextValue, moving, toTitle);
    if (toTarget) setSourceSelection([]);
    else setTargetSelection([]);
  }

  function moveAll(fromItems, toTitle, toTarget) {
    if (!fromItems.length) return;
    const movingIds = new Set(fromItems.map(({ id }) => id));
    const nextValue = toTarget
      ? [...selectedIds, ...fromItems.map(({ id }) => id)]
      : selectedIds.filter((id) => !movingIds.has(id));
    commit(nextValue, fromItems, toTitle);
    if (toTarget) setSourceSelection([]);
    else setTargetSelection([]);
  }

  function toggleSelection(id, selected, setter) {
    setter((current) =>
      selected
        ? current.includes(id)
          ? current
          : [...current, id]
        : current.filter((itemId) => itemId !== id),
    );
  }

  function renderItems(sideItems, selection, setSelection, side) {
    if (!sideItems.length) return <p className="rgi-transfer-list-empty">No items</p>;

    return sideItems.map(({ id, label, description }) => (
      <label className="rgi-transfer-item" key={id}>
        <input
          checked={selection.includes(id)}
          className="rgi-transfer-checkbox"
          onChange={(event) => toggleSelection(id, event.currentTarget.checked, setSelection)}
          type="checkbox"
        />
        <span className="rgi-transfer-item-copy">
          <span className="rgi-transfer-item-label">{label}</span>
          {description != null && (
            <span className="rgi-transfer-item-description">{description}</span>
          )}
        </span>
        <span className="sr-only">{side}</span>
      </label>
    ));
  }

  return (
    <div className={cx('rgi-transfer-list', className)}>
      <section className="rgi-transfer-panel" aria-labelledby={`${generatedId}-source`}>
        <h3 className="rgi-transfer-heading" id={`${generatedId}-source`}>
          {sourceTitle}
          <span className="rgi-transfer-count">{sourceItems.length}</span>
        </h3>
        <fieldset className="rgi-transfer-items" aria-label={sourceTitle}>
          {renderItems(sourceItems, sourceSelection, setSourceSelection, sourceTitle)}
        </fieldset>
      </section>

      <fieldset className="rgi-transfer-actions" aria-label="Move items">
        <button
          className="rgi-transfer-action"
          type="button"
          aria-label={`Move selected to ${targetTitle}`}
          disabled={!sourceSelection.some((id) => sourceItems.some((item) => item.id === id))}
          onClick={() => moveSelected(sourceItems, sourceSelection, targetTitle, true)}
        >
          <span aria-hidden="true">→</span>
        </button>
        <button
          className="rgi-transfer-action"
          type="button"
          aria-label={`Move all to ${targetTitle}`}
          disabled={!sourceItems.length}
          onClick={() => moveAll(sourceItems, targetTitle, true)}
        >
          <span aria-hidden="true">»</span>
        </button>
        <button
          className="rgi-transfer-action"
          type="button"
          aria-label={`Move selected to ${sourceTitle}`}
          disabled={!targetSelection.some((id) => targetItems.some((item) => item.id === id))}
          onClick={() => moveSelected(targetItems, targetSelection, sourceTitle, false)}
        >
          <span aria-hidden="true">←</span>
        </button>
        <button
          className="rgi-transfer-action"
          type="button"
          aria-label={`Move all to ${sourceTitle}`}
          disabled={!targetItems.length}
          onClick={() => moveAll(targetItems, sourceTitle, false)}
        >
          <span aria-hidden="true">«</span>
        </button>
      </fieldset>

      <section className="rgi-transfer-panel" aria-labelledby={`${generatedId}-target`}>
        <h3 className="rgi-transfer-heading" id={`${generatedId}-target`}>
          {targetTitle}
          <span className="rgi-transfer-count">{targetItems.length}</span>
        </h3>
        <fieldset className="rgi-transfer-items" aria-label={targetTitle}>
          {renderItems(targetItems, targetSelection, setTargetSelection, targetTitle)}
        </fieldset>
      </section>
      <span className="rgi-transfer-status" role="status" aria-live="polite">
        {announcement}
      </span>
    </div>
  );
}

export default TransferList;
