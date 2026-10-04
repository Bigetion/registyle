import { useState } from 'react';
import { cx } from 'registyle';

const MARKS = [0, 25, 50, 75, 100];

function SliderInput({ id, label, value, min = 0, max = 100, step = 1, onChange }) {
  return (
    <input
      className="rgi-slider"
      id={id}
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      aria-label={label}
      onChange={(event) => onChange(Number(event.target.value))}
    />
  );
}

function SingleSlider({ demoId }) {
  const isMarked = demoId === 'slider-marks';
  const [value, setValue] = useState(isMarked ? 50 : 40);
  const title = isMarked ? 'Zoom level' : 'Volume';
  const valueLabel = isMarked ? `${value}%` : `${value}%`;

  return (
    <div className="slider-example">
      <div className="slider-heading">
        <label className="rgi-label" htmlFor={`${demoId}-input`}>{title}</label>
        <output className="slider-value" htmlFor={`${demoId}-input`}>{valueLabel}</output>
      </div>
      <SliderInput
        id={`${demoId}-input`}
        label={title}
        value={value}
        step={isMarked ? 25 : 1}
        onChange={setValue}
      />
      {isMarked && (
        <div className="slider-marks" aria-hidden="true">
          {MARKS.map((mark) => (
            <span className={cx(mark === value && 'slider-mark-active')} key={mark}>{mark}</span>
          ))}
        </div>
      )}
      <span className="sr-only" role="status" aria-live="polite">{title}: {valueLabel}</span>
    </div>
  );
}

function RangeSlider() {
  const [range, setRange] = useState([25, 70]);

  return (
    <div className="slider-example">
      <div className="slider-heading">
        <span className="rgi-label">Price range</span>
        <output className="slider-value">${range[0]} – ${range[1]}</output>
      </div>
      <div className="range-inputs">
        <SliderInput
          id="slider-range-min"
          label="Minimum price"
          value={range[0]}
          max={range[1]}
          onChange={(value) => setRange(([, high]) => [value, high])}
        />
        <SliderInput
          id="slider-range-max"
          label="Maximum price"
          value={range[1]}
          min={range[0]}
          onChange={(value) => setRange(([low]) => [low, value])}
        />
      </div>
      <div className="slider-range-labels" aria-hidden="true"><span>$0</span><span>$100</span></div>
      <span className="sr-only" role="status" aria-live="polite">
        Price range: ${range[0]} to ${range[1]}.
      </span>
    </div>
  );
}

export default function SliderDemo({ demoId }) {
  if (demoId === 'slider-range') return <RangeSlider />;
  return <SingleSlider demoId={demoId} />;
}
