import { Children, cloneElement, forwardRef, isValidElement } from 'react';
import { cx } from 'registyle';
import './stepper.styles.js';

const Step = forwardRef(function Step(
  {
    children,
    className,
    label,
    description,
    index = 0,
    active = false,
    completed = false,
    disabled = false,
    onClick,
    ...props
  },
  ref,
) {
  const content = label ?? children;
  return (
    <li
      {...props}
      ref={ref}
      className={cx(
        'rgi-step',
        active && 'rgi-step-active',
        completed && 'rgi-step-completed',
        disabled && 'rgi-step-disabled',
        className,
      )}
      aria-current={active ? 'step' : undefined}
    >
      {onClick ? (
        <button type="button" className="rgi-step-button" disabled={disabled} onClick={onClick}>
          <span className="rgi-step-indicator" aria-hidden="true">
            {completed ? '✓' : index + 1}
          </span>
          <span className="rgi-step-copy">
            <span className="rgi-step-label">{content}</span>
            {description && <span className="rgi-step-description">{description}</span>}
          </span>
        </button>
      ) : (
        <span className="rgi-step-content">
          <span className="rgi-step-indicator" aria-hidden="true">
            {completed ? '✓' : index + 1}
          </span>
          <span className="rgi-step-copy">
            <span className="rgi-step-label">{content}</span>
            {description && <span className="rgi-step-description">{description}</span>}
          </span>
        </span>
      )}
    </li>
  );
});

const Stepper = forwardRef(function Stepper(
  {
    children,
    className,
    activeStep = 0,
    orientation = 'horizontal',
    alternativeLabel = false,
    nonLinear = false,
    onStepClick,
    ...props
  },
  ref,
) {
  const steps = Children.toArray(children);
  return (
    <ol
      {...props}
      ref={ref}
      className={cx(
        'rgi-stepper',
        `rgi-stepper-${orientation}`,
        alternativeLabel && 'rgi-stepper-alternative',
        className,
      )}
    >
      {steps.map((step, index) =>
        isValidElement(step) ? (
          cloneElement(step, {
            index,
            active: step.props.active ?? index === activeStep,
            completed: step.props.completed ?? index < activeStep,
            disabled: step.props.disabled ?? (!nonLinear && index > activeStep),
            onClick:
              step.props.onClick ??
              (onStepClick ? (event) => onStepClick(event, index) : undefined),
          })
        ) : (
          <Step key={String(step)} index={index}>
            {step}
          </Step>
        ),
      )}
    </ol>
  );
});

export { Step };
export default Stepper;
