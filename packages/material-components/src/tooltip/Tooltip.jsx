import { cloneElement, Fragment, forwardRef, isValidElement, useId } from 'react';
import { cx } from 'registyle';
import './tooltip.styles.js';

const Tooltip = forwardRef(function Tooltip(
  { children, className, content, defaultOpen = false, id, placement = 'top', open, ...props },
  ref,
) {
  const generatedId = useId();
  const tooltipId = id ? `${id}-tooltip` : `rgi-tooltip-${generatedId}`;
  const isOpen = open ?? defaultOpen;
  const hasElementTrigger =
    content != null && isValidElement(children) && children.type !== Fragment;
  const trigger = hasElementTrigger
    ? cloneElement(children, {
        'aria-describedby':
          [children.props['aria-describedby'], content != null ? tooltipId : undefined]
            .filter(Boolean)
            .join(' ') || undefined,
        tabIndex:
          children.props.tabIndex ??
          (typeof children.type !== 'string' ||
          !/^(a|button|input|select|textarea|summary)$/.test(children.type)
            ? 0
            : undefined),
      })
    : children;

  return (
    <span
      {...props}
      ref={ref}
      id={id}
      className={cx(
        'rgi-tooltip-root',
        `rgi-tooltip-${placement}`,
        isOpen && 'rgi-tooltip-open',
        open === false && 'rgi-tooltip-closed',
        className,
      )}
      aria-describedby={!hasElementTrigger && content ? tooltipId : undefined}
      tabIndex={props.tabIndex ?? (content != null && !hasElementTrigger ? 0 : undefined)}
    >
      {trigger}
      {content != null && (
        <span id={tooltipId} className="rgi-tooltip-content" role="tooltip">
          {content}
        </span>
      )}
    </span>
  );
});

export default Tooltip;
