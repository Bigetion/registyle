import { useState } from 'react';

const INDETERMINATE_ANIMATION = 'registyle-progress-indeterminate 1.4s ease-in-out infinite alternate';

function CircularIndicator({ value, label }) {
  const circumference = 2 * Math.PI * 19;
  const offset = value === undefined ? undefined : circumference * (1 - value / 100);

  return (
    <div
      className="progress-circular"
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
    >
      <svg className={value === undefined ? 'progress-circular-spinner' : 'progress-circular-svg'} viewBox="0 0 44 44" aria-hidden="true">
        <circle className="progress-circular-track" cx="22" cy="22" r="19" />
        <circle
          className="progress-circular-value"
          cx="22"
          cy="22"
          r="19"
          strokeDasharray={value === undefined ? '72 120' : circumference}
          strokeDashoffset={offset}
        />
      </svg>
      {value !== undefined && <span>{value}%</span>}
    </div>
  );
}

function ProgressTrack({ label, value, buffer }) {
  const indeterminate = value === undefined;

  return (
    <div
      className="rgi-progress-track progress-track"
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      aria-valuetext={buffer === undefined ? undefined : `${value}% complete, ${buffer}% buffered`}
    >
      {buffer !== undefined && <span className="progress-buffer-bar" style={{ width: `${buffer}%` }} />}
      <span
        className={`rgi-progress-bar${indeterminate ? ' progress-indeterminate-bar' : ''}`}
        style={indeterminate ? { animation: INDETERMINATE_ANIMATION } : { width: `${value}%` }}
      />
    </div>
  );
}

function LinearProgressDemo() {
  const [value, setValue] = useState(58);

  return (
    <div className="progress-demo">
      <style>{'@keyframes registyle-progress-indeterminate { 0% { transform: translateX(0); } 100% { transform: translateX(185%); } }'}</style>
      <div className="progress-example">
        <div className="progress-example-heading">
          <div className="progress-copy">
            <strong>Uploading project files</strong>
            <span>{Math.round(value / 5)} of 20 files uploaded</span>
          </div>
          <span className="progress-value">{value}%</span>
        </div>
        <ProgressTrack label="Project file upload" value={value} />
        <div className="progress-actions">
          <button className="rgi-button rgi-button-outlined" type="button" disabled={value === 0} onClick={() => setValue((current) => Math.max(0, current - 10))}>
            − 10%
          </button>
          <button className="rgi-button rgi-button-outlined" type="button" disabled={value === 100} onClick={() => setValue((current) => Math.min(100, current + 10))}>
            + 10%
          </button>
        </div>
      </div>
      <div className="progress-example progress-example-indeterminate">
        <div className="progress-copy">
          <strong>Connecting to workspace</strong>
          <span>Completion time is not available</span>
        </div>
        <ProgressTrack label="Connecting to workspace" />
      </div>
    </div>
  );
}

function CircularProgressDemo() {
  const [value, setValue] = useState(72);

  return (
    <div className="progress-demo">
      <div className="progress-circular-grid">
        <div className="progress-circular-example">
          <CircularIndicator value={value} label="File processing progress" />
          <div className="progress-copy">
            <strong>{value}% processed</strong>
            <span>File processing</span>
          </div>
        </div>
        <div className="progress-circular-example">
          <CircularIndicator label="Loading account data" />
          <div className="progress-copy">
            <strong>Loading account</strong>
            <span>Waiting for a response</span>
          </div>
        </div>
      </div>
      <div className="progress-actions">
        <button className="rgi-button rgi-button-outlined" type="button" disabled={value === 0} onClick={() => setValue((current) => Math.max(0, current - 10))}>
          − 10%
        </button>
        <button className="rgi-button rgi-button-outlined" type="button" disabled={value === 100} onClick={() => setValue((current) => Math.min(100, current + 10))}>
          + 10%
        </button>
      </div>
    </div>
  );
}

function BufferedProgressDemo() {
  const [value, setValue] = useState(42);
  const [buffer, setBuffer] = useState(76);

  function receiveChunk() {
    setValue((current) => Math.min(buffer, current + 12));
    setBuffer((current) => Math.min(100, current + 12));
  }

  function reset() {
    setValue(42);
    setBuffer(76);
  }

  return (
    <div className="progress-demo">
      <div className="progress-example">
        <div className="progress-example-heading">
          <div className="progress-copy">
            <strong>Streaming video</strong>
            <span>{value}% played · {buffer}% buffered</span>
          </div>
          <span className="progress-value">{value}%</span>
        </div>
        <ProgressTrack label="Video playback" value={value} buffer={buffer} />
        <div className="progress-buffer-legend">
          <span><i className="progress-legend-played" /> Played</span>
          <span><i className="progress-legend-buffered" /> Buffered</span>
        </div>
      </div>
      <div className="progress-actions">
        <button className="rgi-button rgi-button-contained" type="button" disabled={value === 100} onClick={receiveChunk}>
          Buffer next segment
        </button>
        <button className="rgi-button rgi-button-outlined" type="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default function ProgressDemo({ demoId }) {
  if (demoId === 'progress-circular') return <CircularProgressDemo />;
  if (demoId === 'progress-buffer') return <BufferedProgressDemo />;
  return <LinearProgressDemo />;
}
