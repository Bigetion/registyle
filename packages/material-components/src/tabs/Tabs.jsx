import { forwardRef, useId, useState } from 'react';
import { cx } from 'registyle';
import './tabs.styles.js';

const Tabs = forwardRef(function Tabs(
  {
    tabs = [],
    className,
    value: controlledValue,
    defaultValue,
    onChange,
    orientation = 'horizontal',
    activationMode = 'automatic',
    ariaLabel = 'Tabs',
    onKeyDown,
    ...props
  },
  ref,
) {
  const id = useId();
  const [internalValue, setInternalValue] = useState(
    defaultValue ?? tabs.findIndex((tab) => !tab.disabled),
  );
  const current = controlledValue ?? internalValue;
  const hasValueMatch = tabs.some((tab) => tab.value === current);
  const selectedIndex =
    typeof current === 'number' && !hasValueMatch
      ? current
      : tabs.findIndex((tab) => tab.value === current);
  const safeIndex =
    selectedIndex >= 0 && selectedIndex < tabs.length && !tabs[selectedIndex]?.disabled
      ? selectedIndex
      : tabs.findIndex((tab) => !tab.disabled);
  function select(index, event) {
    const tab = tabs[index];
    if (!tab || tab.disabled) return;
    if (controlledValue === undefined) setInternalValue(tab.value ?? index);
    onChange?.(event, tab.value ?? index);
  }

  return (
    <div {...props} className={cx('mui-tabs', `mui-tabs-${orientation}`, className)}>
      <div
        ref={ref}
        className="mui-tabs-list"
        role="tablist"
        aria-label={ariaLabel}
        aria-orientation={orientation}
        onKeyDown={(event) => {
          onKeyDown?.(event);
          if (
            event.defaultPrevented ||
            !['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)
          )
            return;
          const backwards =
            orientation === 'vertical' ? event.key === 'ArrowUp' : event.key === 'ArrowLeft';
          if (
            orientation === 'vertical' &&
            !['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)
          )
            return;
          if (
            orientation === 'horizontal' &&
            !['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)
          )
            return;
          event.preventDefault();
          const enabled = tabs
            .map((tab, index) => (!tab.disabled ? index : -1))
            .filter((index) => index >= 0);
          const focusedTab = [...event.currentTarget.querySelectorAll('[role="tab"]')].indexOf(
            event.currentTarget.ownerDocument.activeElement,
          );
          const focusedIndex = focusedTab >= 0 ? focusedTab : safeIndex;
          const currentPosition = enabled.indexOf(focusedIndex);
          const nextIndex =
            event.key === 'Home'
              ? enabled[0]
              : event.key === 'End'
                ? enabled.at(-1)
                : enabled[
                    (currentPosition + (backwards ? enabled.length - 1 : 1)) % enabled.length
                  ];
          const button = event.currentTarget.ownerDocument.getElementById(`${id}-tab-${nextIndex}`);
          button?.focus();
          if (activationMode === 'automatic') select(nextIndex, event);
        }}
      >
        {tabs.map((tab, index) => (
          <button
            key={tab.value ?? tab.id ?? index}
            id={`${id}-tab-${index}`}
            type="button"
            role="tab"
            className={cx('mui-tab', safeIndex === index && 'mui-tab-selected')}
            aria-selected={safeIndex === index}
            aria-controls={`${id}-panel-${index}`}
            tabIndex={safeIndex === index ? 0 : -1}
            disabled={tab.disabled}
            onClick={(event) => select(index, event)}
          >
            {tab.icon && (
              <span className="mui-tab-icon" aria-hidden="true">
                {tab.icon}
              </span>
            )}
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab, index) => (
        <div
          key={tab.value ?? tab.id ?? index}
          id={`${id}-panel-${index}`}
          role="tabpanel"
          aria-labelledby={`${id}-tab-${index}`}
          tabIndex={tab.tabIndex ?? 0}
          className="mui-tab-panel"
          hidden={index !== safeIndex}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
});

export default Tabs;
