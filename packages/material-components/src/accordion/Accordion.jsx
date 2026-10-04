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
        'mui-accordion',
        isExpanded && 'mui-accordion-expanded',
        disabled && 'mui-accordion-disabled',
        className,
      )}
    >
      <h3 className="mui-accordion-heading">
        <button
          id={summaryId}
          className="mui-accordion-trigger"
          type="button"
          aria-expanded={isExpanded}
          aria-controls={panelId}
          disabled={disabled}
          onClick={toggle}
        >
          <span className="mui-accordion-title">{title}</span>
          <span className="mui-accordion-icon" aria-hidden="true">
            {expandIcon}
          </span>
        </button>
      </h3>
      <section
        id={panelId}
        className="mui-accordion-panel"
        aria-labelledby={summaryId}
        hidden={!isExpanded}
      >
        <div className="mui-accordion-content">{children}</div>
      </section>
    </section>
  );
});

export default Accordion;
