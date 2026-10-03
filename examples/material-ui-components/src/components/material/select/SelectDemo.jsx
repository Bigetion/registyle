import { useCallback, useId, useRef, useState } from 'react';
import { Check, ChevronDown, X } from 'lucide-react';
import { cx } from 'registyle';
import { PopperSurface, useClickAway } from '../../Popper.jsx';

const OPTIONS = [
  { value: 'engineering', label: 'Engineering', detail: 'Product and platform teams' },
  { value: 'design', label: 'Design', detail: 'Research and user experience' },
  { value: 'product', label: 'Product', detail: 'Planning and delivery' },
  { value: 'support', label: 'Customer support', detail: 'Customer operations' },
  { value: 'research', label: 'Research', detail: 'Not currently available', disabled: true },
];
const FALLBACK_PLACEMENTS = ['top-start'];

export default function SelectDemo({ demoId }) {
  const isMultiple = demoId === 'select-multiple';
  const id = useId();
  const labelId = `${id}-label`;
  const listboxId = `${id}-listbox`;
  const anchorRef = useRef(null);
  const triggerRef = useRef(null);
  const [selected, setSelected] = useState(isMultiple ? ['design', 'product'] : ['engineering']);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [announcement, setAnnouncement] = useState('');
  const surfaceRef = useRef(null);

  const dismiss = useCallback(() => {
    setOpen(false);
    setActiveIndex(-1);
  }, []);
  useClickAway(open, anchorRef, surfaceRef, dismiss);

  const enabledIndexes = OPTIONS.reduce((indexes, option, index) => {
    if (!option.disabled) indexes.push(index);
    return indexes;
  }, []);

  function openAt(index) {
    const initialIndex = index >= 0 ? index : enabledIndexes.find((item) => !selected.includes(OPTIONS[item].value));
    setActiveIndex(initialIndex ?? enabledIndexes[0]);
    setOpen(true);
  }

  function moveActive(direction) {
    const currentPosition = enabledIndexes.indexOf(activeIndex);
    const nextPosition = currentPosition < 0
      ? direction > 0 ? 0 : enabledIndexes.length - 1
      : (currentPosition + direction + enabledIndexes.length) % enabledIndexes.length;
    setActiveIndex(enabledIndexes[nextPosition]);
  }

  function chooseOption(option) {
    if (option.disabled) return;
    if (isMultiple) {
      const next = selected.includes(option.value)
        ? selected.filter((value) => value !== option.value)
        : [...selected, option.value];
      setSelected(next);
      setAnnouncement(`${option.label} ${next.includes(option.value) ? 'selected' : 'removed'}. ${next.length} selected.`);
      setActiveIndex(OPTIONS.findIndex((item) => item.value === option.value));
      return;
    }
    setSelected([option.value]);
    setAnnouncement(`${option.label} selected.`);
    dismiss();
  }

  function handleKeyDown(event) {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      if (!open) openAt(OPTIONS.findIndex((option) => selected.includes(option.value)));
      else moveActive(event.key === 'ArrowDown' ? 1 : -1);
      return;
    }
    if (event.key === 'Home' || event.key === 'End') {
      if (!open) return;
      event.preventDefault();
      setActiveIndex(event.key === 'Home' ? enabledIndexes[0] : enabledIndexes[enabledIndexes.length - 1]);
      return;
    }
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (!open) {
        openAt(OPTIONS.findIndex((option) => selected.includes(option.value)));
      } else if (activeIndex >= 0) {
        chooseOption(OPTIONS[activeIndex]);
      }
    } else if (event.key === 'Escape' && open) {
      event.preventDefault();
      dismiss();
    } else if (event.key === 'Tab' && open) {
      dismiss();
    }
  }

  const selectedLabels = selected
    .map((value) => OPTIONS.find((option) => option.value === value)?.label)
    .filter(Boolean);
  const selectedOption = OPTIONS.find((option) => option.value === selected[0]);

  return (
    <div className="preview-stack">
      <span className="mui-label" id={labelId}>{isMultiple ? 'Project teams' : 'Department'}</span>
      <div className="select-control" ref={anchorRef}>
        <button
          className={cx('select-trigger', open && 'select-trigger-open')}
          ref={triggerRef}
          type="button"
          role="combobox"
          aria-labelledby={`${labelId} ${id}-value`}
          aria-describedby={`${id}-status`}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listboxId}
          aria-activedescendant={open && activeIndex >= 0 ? `${listboxId}-option-${activeIndex}` : undefined}
          onClick={() => open ? dismiss() : openAt(OPTIONS.findIndex((option) => selected.includes(option.value)))}
          onKeyDown={handleKeyDown}
        >
          <span className="select-trigger-value" id={`${id}-value`}>
            {isMultiple
              ? selected.length ? `${selected.length} teams selected` : 'Choose teams'
              : selectedOption?.label ?? 'Choose a department'}
          </span>
          <ChevronDown className={cx('select-trigger-icon', open && 'select-trigger-icon-open')} size={16} aria-hidden="true" />
        </button>
        {isMultiple && selectedLabels.length > 0 && (
          <div className="select-tags" aria-label="Selected teams">
            {selected.map((value) => {
              const option = OPTIONS.find((item) => item.value === value);
              if (!option) return null;
              return (
                <span className="select-tag" key={value}>
                  {option.label}
                  <button
                    className="select-tag-remove"
                    type="button"
                    aria-label={`Remove ${option.label}`}
                    onClick={() => {
                      chooseOption(option);
                      triggerRef.current?.focus();
                    }}
                  >
                    <X size={12} aria-hidden="true" />
                  </button>
                </span>
              );
            })}
          </div>
        )}
        <PopperSurface
          open={open}
          anchorRef={anchorRef}
          surfaceRef={surfaceRef}
          placement="bottom-start"
          fallbackPlacements={FALLBACK_PLACEMENTS}
          className="select-options"
          role="presentation"
          onEscape={dismiss}
        >
          <div
            id={listboxId}
            role="listbox"
            aria-labelledby={labelId}
            aria-multiselectable={isMultiple || undefined}
          >
            {OPTIONS.map((option, index) => {
              const isSelected = selected.includes(option.value);
              return (
                <div
                  className={cx(
                    'select-option',
                    activeIndex === index && 'select-option-active',
                    option.disabled && 'select-option-disabled',
                  )}
                  id={`${listboxId}-option-${index}`}
                  key={option.value}
                  role="option"
                  aria-selected={isSelected}
                  aria-disabled={option.disabled || undefined}
                  onMouseMove={() => !option.disabled && setActiveIndex(index)}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => chooseOption(option)}
                >
                  <span className="select-option-copy">
                    <span className="select-option-label">{option.label}</span>
                    <span className="select-option-detail">{option.detail}</span>
                  </span>
                  {isSelected && <Check className="select-option-check" size={15} aria-hidden="true" />}
                </div>
              );
            })}
          </div>
        </PopperSurface>
      </div>
      <span className="preview-note" id={`${id}-status`} role="status" aria-live="polite">
        {announcement || (isMultiple ? `${selected.length} teams selected.` : `${selectedOption?.label ?? 'No department'} selected.`)}
      </span>
    </div>
  );
}
