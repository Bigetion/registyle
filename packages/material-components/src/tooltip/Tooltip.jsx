import { cloneElement, Fragment, forwardRef, isValidElement, useId } from 'react';
import { cx } from 'registyle';
import './tooltip.styles.js';

const Tooltip = forwardRef(function Tooltip(
  { children, className, content, defaultOpen = false, id, placement = 'top', open, ...props },
  ref,
) {
  const generatedId = useId();
  const tooltipId = id ? `${id}-tooltip` : `mui-tooltip-${generatedId}`;
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
        'mui-tooltip-root',
        `mui-tooltip-${placement}`,
        isOpen && 'mui-tooltip-open',
        open === false && 'mui-tooltip-closed',
        className,
      )}
      aria-describedby={!hasElementTrigger && content ? tooltipId : undefined}
      tabIndex={props.tabIndex ?? (content != null && !hasElementTrigger ? 0 : undefined)}
    >
      {trigger}
      {content != null && (
        <span id={tooltipId} className="mui-tooltip-content" role="tooltip">
          {content}
        </span>
      )}
    </span>
  );
});

export default Tooltip;
