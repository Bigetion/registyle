import { useState } from 'react';
import { Check, CreditCard, MapPin, PackageCheck, UserRound } from 'lucide-react';
import { cx } from 'registyle';

const STEPS = [
  { label: 'Account', Icon: UserRound, detail: 'Create your workspace profile.' },
  { label: 'Address', Icon: MapPin, detail: 'Add a billing and delivery address.' },
  { label: 'Payment', Icon: CreditCard, detail: 'Choose a payment method.' },
  { label: 'Review', Icon: PackageCheck, detail: 'Review the details before finishing.' },
];

function StepIcon({ index, activeStep, Icon, alternative = false }) {
  const completed = index < activeStep;
  const active = index === activeStep;

  return (
    <span className={cx('stepper-icon', completed && 'stepper-icon-complete', active && 'stepper-icon-active', alternative && 'stepper-icon-alternative')}>
      {completed ? <Check size={13} aria-hidden="true" /> : alternative ? <Icon size={13} aria-hidden="true" /> : index + 1}
    </span>
  );
}

function StepperActions({ step, onBack, onNext, onFinish, onReset, lastStep, completed = false }) {
  return (
    <div className="stepper-actions">
      <button className="stepper-text-button" type="button" disabled={step === 0} onClick={onBack}>Back</button>
      {completed ? (
        <button className="stepper-primary-button" type="button" onClick={onReset}>Start over</button>
      ) : step < lastStep ? (
        <button className="stepper-primary-button" type="button" onClick={onNext}>Continue</button>
      ) : (
        <button className="stepper-primary-button" type="button" onClick={onFinish}>Finish</button>
      )}
    </div>
  );
}

function HorizontalStepperDemo() {
  const [step, setStep] = useState(0);
  const [complete, setComplete] = useState(false);

  function advance() {
    if (step === STEPS.length - 1) setComplete(true);
    else setStep((value) => value + 1);
  }

  function reset() {
    setStep(0);
    setComplete(false);
  }

  return (
    <div className="stepper-showcase">
      <ol className="mui-stepper" aria-label="Checkout steps">
        {STEPS.map(({ label, Icon }, index) => (
          <li className={cx('mui-step', index < STEPS.length - 1 && 'mui-step-with-connector')} key={label}>
            <span className="stepper-indicator">
              <StepIcon index={index} activeStep={step} Icon={Icon} />
              {index < STEPS.length - 1 && <i className={cx('stepper-connector', index < step && 'stepper-connector-complete')} />}
            </span>
            <span className={cx('stepper-label', index === step && 'stepper-label-active', index < step && 'stepper-label-complete')}>{label}</span>
          </li>
        ))}
      </ol>
      <div className="stepper-content">
        {complete ? (
          <div className="stepper-complete-message" role="status"><span><Check size={14} aria-hidden="true" /></span><strong>Checkout ready</strong><small>Your information has been reviewed.</small></div>
        ) : (
          <>
            <span className="stepper-content-eyebrow">STEP {step + 1} OF {STEPS.length}</span>
            <strong>{STEPS[step].label}</strong>
            <span>{STEPS[step].detail}</span>
          </>
        )}
      </div>
      <StepperActions
        step={step}
        onBack={() => { setComplete(false); setStep((value) => Math.max(0, value - 1)); }}
        onNext={advance}
        onFinish={() => setComplete(true)}
        onReset={reset}
        lastStep={STEPS.length - 1}
        completed={complete}
      />
    </div>
  );
}

function VerticalStepperDemo() {
  const [step, setStep] = useState(0);
  const [complete, setComplete] = useState(false);

  function advance() {
    if (step === STEPS.length - 1) setComplete(true);
    else setStep((value) => value + 1);
  }

  function reset() {
    setStep(0);
    setComplete(false);
  }

  return (
    <div className="stepper-showcase stepper-vertical-showcase">
      <ol className="mui-stepper-vertical" aria-label="Setup steps">
        {STEPS.map(({ label, detail, Icon }, index) => (
          <li className="mui-step-vertical" key={label}>
            <button
              className={cx('stepper-vertical-heading', index === step && !complete && 'stepper-vertical-heading-active', index < step && 'stepper-vertical-heading-complete')}
              type="button"
              aria-current={index === step && !complete ? 'step' : undefined}
              aria-expanded={index === step && !complete}
              onClick={() => { setComplete(false); setStep(index); }}
            >
              <StepIcon index={index} activeStep={complete ? STEPS.length : step} Icon={Icon} />
              <span>{label}</span>
            </button>
            <i className={cx('stepper-vertical-connector', index < step && 'stepper-vertical-connector-complete')} aria-hidden="true" />
            {index === step && !complete && (
              <div className="stepper-vertical-content">
                <p>{detail}</p>
                <StepperActions step={step} onBack={() => setStep((value) => Math.max(0, value - 1))} onNext={advance} onReset={reset} lastStep={STEPS.length - 1} />
              </div>
            )}
          </li>
        ))}
        {complete && (
          <li className="stepper-vertical-success" role="status">
            <Check size={13} /> Setup complete. Your workspace is ready.
            <button className="stepper-text-button" type="button" onClick={reset}>Start over</button>
          </li>
        )}
      </ol>
    </div>
  );
}

function AlternativeStepperDemo() {
  const [step, setStep] = useState(1);
  const [complete, setComplete] = useState(false);

  function changeStep(next) {
    setComplete(false);
    setStep(Math.max(0, Math.min(STEPS.length - 1, next)));
  }

  function finish() {
    setComplete(true);
  }

  return (
    <div className="stepper-showcase stepper-alternative-showcase">
      <ol className="mui-stepper-alternative" aria-label="Project launch milestones">
        {STEPS.map(({ label, Icon }, index) => (
          <li className="mui-step-alternative" key={label}>
            <button
              className="stepper-alternative-button"
              type="button"
              aria-label={`${label}${index === step ? ', current step' : ''}`}
              aria-current={index === step ? 'step' : undefined}
              onClick={() => changeStep(index)}
            >
              <StepIcon index={index} activeStep={step} Icon={Icon} alternative />
              <span className={cx('stepper-label', index === step && 'stepper-label-active', index < step && 'stepper-label-complete')}>{label}</span>
            </button>
            {index < STEPS.length - 1 && <i className={cx('stepper-connector', index < step && 'stepper-connector-complete')} aria-hidden="true" />}
          </li>
        ))}
      </ol>
      <div className="stepper-alternative-summary">
        <span className="stepper-content-eyebrow">MILESTONE {step + 1} / {STEPS.length}</span>
        <strong>{complete ? 'Project ready to launch' : STEPS[step].label}</strong>
        <span>{complete ? 'All launch milestones are complete.' : `Select a milestone above or use the controls to ${step === STEPS.length - 1 ? 'finish' : 'continue'}.`}</span>
      </div>
      <div className="stepper-actions">
        <button className="stepper-text-button" type="button" disabled={step === 0} onClick={() => changeStep(step - 1)}>Back</button>
        {complete ? (
          <button className="stepper-primary-button" type="button" onClick={() => { setComplete(false); setStep(0); }}>Start over</button>
        ) : (
          <button className="stepper-primary-button" type="button" onClick={() => step === STEPS.length - 1 ? finish() : changeStep(step + 1)}>{step === STEPS.length - 1 ? 'Finish' : 'Continue'}</button>
        )}
      </div>
    </div>
  );
}

export default function StepperDemo({ demoId }) {
  if (demoId === 'stepper-vertical') return <VerticalStepperDemo />;
  if (demoId === 'stepper-alternative') return <AlternativeStepperDemo />;
  return <HorizontalStepperDemo />;
}
