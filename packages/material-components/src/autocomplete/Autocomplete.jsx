import { forwardRef, useEffect, useId, useMemo, useRef, useState } from 'react';
import { cx } from 'registyle';
import './autocomplete.styles.js';

function getOption(option) {
  if (typeof option === 'string') return { label: option, value: option };
  return { ...option, value: option.value ?? option.label };
}

const Autocomplete = forwardRef(function Autocomplete(
  {
    className,
    options = [],
    value,
    defaultValue,
    onValueChange,
    onChange,
    inputValue,
    defaultInputValue,
    onInputValueChange,
    filterOptions,
    name,
    id,
    disabled = false,
    ...inputProps
  },
  ref,
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const listboxId = `${inputId}-listbox`;
  const [internalValue, setInternalValue] = useState(defaultValue ?? '');
  const optionNodes = useMemo(() => options.map(getOption), [options]);
  const selected = value ?? internalValue;
  const selectedOption = optionNodes.find((option) => option.value === selected);
  const [internalInput, setInternalInput] = useState(
    defaultInputValue ?? selectedOption?.label ?? selected,
  );
  const query = inputValue ?? internalInput;
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const previousValue = useRef(selected);
  const filteredOptions = useMemo(() => {
    if (filterOptions) return filterOptions(optionNodes, query);
    const normalizedQuery = query.trim().toLocaleLowerCase();
    return optionNodes.filter((option) =>
      option.label.toLocaleLowerCase().includes(normalizedQuery),
    );
  }, [filterOptions, optionNodes, query]);

  useEffect(() => {
    if (previousValue.current !== selected) {
      previousValue.current = selected;
      if (inputValue === undefined) {
        const nextOption = optionNodes.find((option) => option.value === selected);
        setInternalInput(nextOption?.label ?? selected);
      }
    }
  }, [inputValue, optionNodes, selected]);

  function updateInput(nextValue, event) {
    if (inputValue === undefined) setInternalInput(nextValue);
    onInputValueChange?.(nextValue, event);
    onChange?.(event);
  }

  function selectOption(option) {
    if (value === undefined) setInternalValue(option.value);
    onValueChange?.(option.value, option);
    if (inputValue === undefined) setInternalInput(option.label);
    onInputValueChange?.(option.label);
    setOpen(false);
    setActiveIndex(-1);
  }

  function handleKeyDown(event) {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      setOpen(true);
      setActiveIndex((current) => {
        if (!filteredOptions.length) return -1;
        return event.key === 'ArrowDown'
          ? (current + 1) % filteredOptions.length
          : current <= 0
            ? filteredOptions.length - 1
            : current - 1;
      });
    } else if (event.key === 'Enter' && open && filteredOptions.length) {
      event.preventDefault();
      selectOption(filteredOptions[activeIndex >= 0 ? activeIndex : 0]);
    } else if (event.key === 'Escape' && open) {
      event.preventDefault();
      setOpen(false);
      setActiveIndex(-1);
    }
  }

  return (
    <div className={cx('rgi-autocomplete', className)}>
      <input
        {...inputProps}
        ref={ref}
        id={inputId}
        className="rgi-autocomplete-input"
        type="text"
        role="combobox"
        aria-autocomplete="list"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-activedescendant={
          open && activeIndex >= 0 ? `${listboxId}-option-${activeIndex}` : undefined
        }
        autoComplete={inputProps.autoComplete ?? 'off'}
        disabled={disabled}
        value={query}
        onFocus={(event) => {
          setOpen(true);
          inputProps.onFocus?.(event);
        }}
        onBlur={(event) => {
          setOpen(false);
          setActiveIndex(-1);
          inputProps.onBlur?.(event);
        }}
        onChange={(event) => {
          updateInput(event.currentTarget.value, event);
          if (value === undefined) setInternalValue('');
          if (selected !== '') onValueChange?.('', null);
          setActiveIndex(-1);
          setOpen(true);
        }}
        onKeyDown={(event) => {
          handleKeyDown(event);
          inputProps.onKeyDown?.(event);
        }}
      />
      {name && <input type="hidden" name={name} value={selected ?? ''} />}
      <div
        className="rgi-autocomplete-listbox"
        id={listboxId}
        role="listbox"
        hidden={!open || disabled}
      >
        {filteredOptions.length ? (
          filteredOptions.map((option, index) => (
            <div
              className={cx(
                'rgi-autocomplete-option',
                activeIndex === index && 'rgi-autocomplete-option-active',
              )}
              id={`${listboxId}-option-${index}`}
              key={option.value}
              role="option"
              aria-selected={option.value === selected}
              tabIndex={-1}
              onMouseDown={(event) => event.preventDefault()}
              onMouseMove={() => setActiveIndex(index)}
              onClick={() => selectOption(option)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  selectOption(option);
                }
              }}
            >
              {option.label}
              {option.description && (
                <span className="rgi-autocomplete-description">{option.description}</span>
              )}
            </div>
          ))
        ) : (
          <div className="rgi-autocomplete-empty" role="presentation">
            No matching options
          </div>
        )}
      </div>
    </div>
  );
});

export default Autocomplete;
