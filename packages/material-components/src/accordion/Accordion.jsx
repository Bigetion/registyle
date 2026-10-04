import { forwardRef, useId, useState } from 'react';
import { cx } from 'registyle';
import './accordion.styles.js';

const Accordion = forwardRef(function Accordion(
  {
    children,
    className,
    defaultExpanded = false,
    disabled = false,
    expandIcon = '⌄',
    onChange,
    expanded,
    title,
    ...props
  },
  ref,
) {
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);
  const isExpanded = expanded ?? internalExpanded;
  const id = useId();
  const summaryId = `${id}-summary`;
  const panelId = `${id}-panel`;

  function toggle(event) {
    const nextExpanded = !isExpanded;
    if (expanded === undefined) setInternalExpanded(nextExpanded);
    onChange?.(event, nextExpanded);
  }

  return (
    <section
      {...props}
      ref={ref}
      className={cx(
        'rgi-accordion',
        isExpanded && 'rgi-accordion-expanded',
        disabled && 'rgi-accordion-disabled',
        className,
      )}
    >
      <h3 className="rgi-accordion-heading">
        <button
          id={summaryId}
          className="rgi-accordion-trigger"
          type="button"
          aria-expanded={isExpanded}
          aria-controls={panelId}
          disabled={disabled}
          onClick={toggle}
        >
          <span className="rgi-accordion-title">{title}</span>
          <span className="rgi-accordion-icon" aria-hidden="true">
            {expandIcon}
          </span>
        </button>
      </h3>
      <section
        id={panelId}
        className="rgi-accordion-panel"
        aria-labelledby={summaryId}
        hidden={!isExpanded}
      >
        <div className="rgi-accordion-content">{children}</div>
      </section>
    </section>
  );
});

export default Accordion;
