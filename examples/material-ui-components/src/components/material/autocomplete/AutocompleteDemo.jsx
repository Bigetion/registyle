import { useCallback, useId, useMemo, useRef, useState } from 'react';
import { Check, ChevronDown, Command, CornerDownLeft, Search, X } from 'lucide-react';
import { cx } from 'registyle';
import { PopperSurface, useClickAway } from '../../Popper.jsx';

const OPTIONS = [
  { label: 'React', detail: 'User interface library', group: 'Frontend', mark: 'R' },
  { label: 'Vue', detail: 'Progressive JavaScript framework', group: 'Frontend', mark: 'V' },
  { label: 'Angular', detail: 'Web application platform', group: 'Frontend', mark: 'A' },
  { label: 'Svelte', detail: 'Compiler-based UI framework', group: 'Frontend', mark: 'S' },
  { label: 'Solid', detail: 'Reactive UI library', group: 'Frontend', mark: 'So' },
  { label: 'Astro', detail: 'Content-driven web framework', group: 'Frontend', mark: 'As' },
];

function normalize(value) {
  return value.trim().toLocaleLowerCase();
}

export default function AutocompleteDemo({ demoId }) {
  const isMultiple = demoId === 'autocomplete-multiple';
  const isFreeSolo = demoId === 'autocomplete-free';
  const inputId = useId();
  const listboxId = `${inputId}-listbox`;
  const anchorRef = useRef(null);
  const inputRef = useRef(null);
  const surfaceRef = useRef(null);
  const [inputValue, setInputValue] = useState('');
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [announcement, setAnnouncement] = useState('');

  const selectedValues = isMultiple ? selected : selected.slice(0, 1);
  const options = useMemo(() => {
    const query = normalize(inputValue);
    return OPTIONS.filter((option) => {
      const matches = !query
        || normalize(`${option.label} ${option.detail} ${option.group}`).includes(query);
      return matches && (!isMultiple || !selected.some((item) => item.label === option.label));
    });
  }, [inputValue, isMultiple, selected]);
  const exactMatch = options.some((option) => normalize(option.label) === normalize(inputValue));
  const canCreate = isFreeSolo && Boolean(normalize(inputValue)) && !exactMatch;
  const optionCount = options.length + (canCreate ? 1 : 0);
  const dismiss = useCallback(() => {
    setOpen(false);
    setActiveIndex(-1);
  }, []);

  useClickAway(open, anchorRef, surfaceRef, dismiss);

  function focusInput() {
    inputRef.current?.focus();
    setOpen(true);
  }

  function selectValue(value) {
    if (isMultiple) {
      setSelected((current) => [...current, value]);
      setInputValue('');
      setAnnouncement(`${value.label} added. ${selected.length + 1} selected.`);
      setActiveIndex(-1);
      setOpen(true);
      inputRef.current?.focus();
      return;
    }

    setSelected([value]);
    setInputValue(value.label);
    setAnnouncement(`${value.label} selected.`);
    dismiss();
  }

  function removeValue(value) {
    setSelected((current) => current.filter((item) => item.label !== value.label));
    setAnnouncement(`${value.label} removed.`);
    inputRef.current?.focus();
  }

  function clearValue() {
    setInputValue('');
    setSelected([]);
    setActiveIndex(-1);
    setAnnouncement('Selection cleared.');
    focusInput();
  }

  function createValue() {
    const label = inputValue.trim();
    if (!label) return;
    selectValue({ label, detail: 'Custom value', group: 'Custom', mark: label.slice(0, 2).toUpperCase() });
  }

  function handleKeyDown(event) {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setOpen(true);
      setActiveIndex((current) => optionCount === 0 ? -1 : (current + 1 + optionCount) % optionCount);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setOpen(true);
      setActiveIndex((current) => optionCount === 0 ? -1 : current <= 0 ? optionCount - 1 : current - 1);
    } else if (event.key === 'Enter' && open) {
      event.preventDefault();
      if (activeIndex >= 0 && activeIndex < options.length) selectValue(options[activeIndex]);
      else if (activeIndex === options.length && canCreate) createValue();
      else if (activeIndex === -1 && options.length) selectValue(options[0]);
      else if (activeIndex === -1 && canCreate) createValue();
    } else if (event.key === 'Escape' && open) {
      event.preventDefault();
      dismiss();
    } else if (event.key === 'Backspace' && isMultiple && !inputValue && selected.length) {
      removeValue(selected[selected.length - 1]);
    }
  }

  const placeholder = isMultiple
    ? selected.length ? 'Add another framework…' : 'Choose frameworks…'
    : isFreeSolo ? 'Search or enter a framework…' : 'Search frameworks…';

  return (
    <div className="autocomplete" ref={anchorRef}>
      <label className="autocomplete-label" htmlFor={inputId}>
        {isMultiple ? 'Frameworks' : isFreeSolo ? 'Framework or custom value' : 'Framework'}
      </label>
      <div className={cx('autocomplete-field', open && 'autocomplete-field-open')}>
        <Search className="autocomplete-leading-icon" size={15} aria-hidden="true" />
        {isMultiple && selectedValues.length > 0 && (
          <div className="autocomplete-tags" aria-label="Selected frameworks">
            {selectedValues.map((value) => (
              <span className="autocomplete-tag" key={value.label}>
                {value.label}
                <button
                  className="autocomplete-tag-remove"
                  type="button"
                  aria-label={`Remove ${value.label}`}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => removeValue(value)}
                >
                  <X size={11} />
                </button>
              </span>
            ))}
          </div>
        )}
        <input
          id={inputId}
          className="autocomplete-input"
          ref={inputRef}
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={open}
          aria-controls={listboxId}
          aria-activedescendant={open && activeIndex >= 0 ? `${listboxId}-option-${activeIndex}` : undefined}
          aria-describedby={`${inputId}-hint`}
          autoComplete="off"
          placeholder={placeholder}
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
            if (!isMultiple) setSelected([]);
            setActiveIndex(-1);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
        />
        <div className="autocomplete-actions">
          {(inputValue || selected.length > 0) ? (
            <button
              className="autocomplete-action"
              type="button"
              aria-label="Clear selection"
              onMouseDown={(event) => event.preventDefault()}
              onClick={clearValue}
            >
              <X size={14} />
            </button>
          ) : (
            <ChevronDown size={15} aria-hidden="true" />
          )}
        </div>
      </div>
      <p className="autocomplete-hint" id={`${inputId}-hint`}>
        <span>{isMultiple ? 'Select one or more options.' : isFreeSolo ? 'Pick a suggestion or add your own.' : 'Start typing to filter the list.'}</span>
        <span className="autocomplete-shortcut"><Command size={10} /> Enter</span>
      </p>
      <span className="sr-only" role="status" aria-live="polite">{announcement}</span>

      <PopperSurface
        open={open}
        anchorRef={anchorRef}
        surfaceRef={surfaceRef}
        placement="bottom-start"
        className="autocomplete-popover"
        role="listbox"
        onEscape={dismiss}
      >
        {options.length > 0 ? options.map((option, index) => {
          const isActive = activeIndex === index;
          const isSelected = selectedValues.some((value) => value.label === option.label);
          return (
            <button
              className={cx('autocomplete-option', isActive && 'autocomplete-option-active')}
              id={`${listboxId}-option-${index}`}
              key={option.label}
              type="button"
              role="option"
              aria-selected={isSelected}
              onMouseMove={() => setActiveIndex(index)}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => selectValue(option)}
            >
              <span className="autocomplete-option-icon">{option.mark}</span>
              <span className="autocomplete-option-copy">
                <span className="autocomplete-option-title">{option.label}</span>
                <span className="autocomplete-option-description">{option.detail}</span>
              </span>
              <span className="autocomplete-count">{option.group}</span>
              {isSelected && <Check size={14} aria-hidden="true" />}
            </button>
          );
        }) : !canCreate ? (
          <div className="autocomplete-empty">
            <strong>No matching frameworks</strong>
            <span className="autocomplete-option-description">Try another search term.</span>
          </div>
        ) : null}
        {canCreate && (
          <div className="autocomplete-create">
            <button
              className={cx('autocomplete-option', activeIndex === options.length && 'autocomplete-option-active')}
              id={`${listboxId}-option-${options.length}`}
              type="button"
              role="option"
              aria-selected={activeIndex === options.length}
              onMouseMove={() => setActiveIndex(options.length)}
              onMouseDown={(event) => event.preventDefault()}
              onClick={createValue}
            >
              <span className="autocomplete-option-icon">+</span>
              <span className="autocomplete-option-copy">
                <span className="autocomplete-option-title">Add “{inputValue.trim()}”</span>
                <span className="autocomplete-option-description">Create a custom value</span>
              </span>
              <CornerDownLeft size={14} aria-hidden="true" />
            </button>
          </div>
        )}
      </PopperSurface>
    </div>
  );
}
