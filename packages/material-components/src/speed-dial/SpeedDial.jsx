import { forwardRef, useId, useState } from 'react';
import { cx } from 'registyle';
import './speed-dial.styles.js';

const SpeedDial = forwardRef(function SpeedDial(
  {
    actions = [],
    className,
    icon = '+',
    open: controlledOpen,
    defaultOpen = false,
    onOpen,
    onClose,
    onActionClick,
    ariaLabel = 'Open actions',
    direction = 'up',
    ...props
  },
  ref,
) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const open = controlledOpen ?? internalOpen;
  const listId = useId();

  function setOpen(next, event) {
    if (controlledOpen === undefined) setInternalOpen(next);
    (next ? onOpen : onClose)?.(event);
  }

  return (
    <div
      {...props}
      ref={ref}
      className={cx(
        'rgi-speed-dial',
        `rgi-speed-dial-${direction}`,
        open && 'rgi-speed-dial-open',
        className,
      )}
    >
      <fieldset id={listId} className="rgi-speed-dial-actions" aria-label="Actions" hidden={!open}>
        {actions.map((action, index) => (
          <button
            key={action.key ?? action.name ?? index}
            type="button"
            className="rgi-speed-dial-action"
            aria-label={action.name ?? `Action ${index + 1}`}
            title={action.name ?? `Action ${index + 1}`}
            disabled={action.disabled}
            onClick={(event) => {
              action.onClick?.(event);
              if (!event.defaultPrevented) onActionClick?.(event, action);
              if (!event.defaultPrevented) setOpen(false, event);
            }}
          >
            {action.icon ?? action.name}
          </button>
        ))}
      </fieldset>
      <button
        type="button"
        className="rgi-speed-dial-trigger"
        aria-label={open ? 'Close actions' : ariaLabel}
        aria-expanded={open}
        aria-controls={listId}
        onClick={(event) => setOpen(!open, event)}
      >
        {icon}
      </button>
    </div>
  );
});

export default SpeedDial;
