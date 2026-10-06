import { useState } from 'react';
import { AlignCenter, AlignLeft, AlignRight, Check } from 'lucide-react';
import { cx } from 'registyle';

const WEIGHTS = [
  ['Regular', 400],
  ['Medium', 500],
  ['Semibold', 600],
  ['Bold', 700],
];

const COLORS = [
  ['Primary', 'primary'],
  ['Secondary', 'secondary'],
  ['Muted', 'muted'],
  ['Success', 'success'],
  ['Warning', 'warning'],
];

function TypographyScale() {
  return (
    <div className="typography-scale">
      <div className="typography-scale-row">
        <span className="typography-scale-label">Display</span>
        <span className="typography-sample typography-display">Build better products</span>
        <span className="typography-spec">20 / 25 · 700</span>
      </div>
      <div className="typography-scale-row">
        <span className="typography-scale-label">Heading 1</span>
        <span className="typography-sample typography-heading-one">A clear hierarchy</span>
        <span className="typography-spec">17 / 21 · 600</span>
      </div>
      <div className="typography-scale-row">
        <span className="typography-scale-label">Heading 2</span>
        <span className="typography-sample typography-heading-two">Designed for people</span>
        <span className="typography-spec">14 / 19 · 600</span>
      </div>
      <div className="typography-scale-row">
        <span className="typography-scale-label">Body</span>
        <span className="typography-sample typography-body">Thoughtful type makes every interaction easier to understand.</span>
        <span className="typography-spec">11 / 18 · 400</span>
      </div>
      <div className="typography-scale-row">
        <span className="typography-scale-label">Caption</span>
        <span className="typography-sample typography-caption">Updated just now · visible to your team</span>
        <span className="typography-spec">9 / 15 · 400</span>
      </div>
    </div>
  );
}

function TypographyWeights() {
  const [weight, setWeight] = useState(500);
  const selected = WEIGHTS.find(([label, value]) => value === weight)?.[0];

  return (
    <div className="preview-stack">
      <div className="typography-weight-picker" role="group" aria-label="Font weight">
        {WEIGHTS.map(([label, value]) => (
          <button
            className={cx('typography-weight-button', weight === value && 'typography-weight-active')}
            key={value}
            type="button"
            aria-pressed={weight === value}
            onClick={() => setWeight(value)}
          >
            {label}<span>{value}</span>
          </button>
        ))}
      </div>
      <div className="typography-weight-preview">
        <span className="typography-weight-meta">INTERFACE LABEL · {selected.toUpperCase()}</span>
        <strong style={{ fontWeight: weight }}>Make the important things easy to find.</strong>
        <p style={{ fontWeight: weight }}>Good typography builds hierarchy through consistent weight, size, and spacing.</p>
      </div>
      <span className="preview-note" role="status" aria-live="polite">Selected weight: {weight} ({selected})</span>
    </div>
  );
}

function TypographyColors() {
  const [tone, setTone] = useState('primary');
  const [alignment, setAlignment] = useState('left');
  const Icon = alignment === 'center' ? AlignCenter : alignment === 'right' ? AlignRight : AlignLeft;
  const selectedColor = COLORS.find(([label, value]) => value === tone)?.[0];

  return (
    <div className="preview-stack">
      <div className="typography-controls">
        <div className="typography-tone-picker" role="group" aria-label="Text color">
          {COLORS.map(([label, value]) => (
            <button
              className={cx('typography-tone-button', `typography-tone-${value}`, tone === value && 'typography-tone-active')}
              key={value}
              type="button"
              aria-pressed={tone === value}
              onClick={() => setTone(value)}
            >
              {tone === value && <Check size={11} aria-hidden="true" />}{label}
            </button>
          ))}
        </div>
        <div className="typography-alignment-picker" role="group" aria-label="Text alignment">
          {[
            ['left', AlignLeft],
            ['center', AlignCenter],
            ['right', AlignRight],
          ].map(([value, AlignmentIcon]) => (
            <button
              className={cx('typography-alignment-button', alignment === value && 'typography-alignment-active')}
              key={value}
              type="button"
              aria-label={`Align ${value}`}
              aria-pressed={alignment === value}
              onClick={() => setAlignment(value)}
            >
              <AlignmentIcon size={13} aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>
      <div
        className={cx('typography-color-preview', `typography-text-${tone}`, `typography-align-${alignment}`)}
        style={{ textAlign: alignment }}
      >
        <span className="typography-color-eyebrow">PROJECT UPDATE</span>
        <strong>Everything is moving in the right direction.</strong>
        <p>Your team completed the latest milestone. Keep the message readable and use color to add meaning—not decoration.</p>
      </div>
      <span className="preview-note" role="status" aria-live="polite">Text tone: {selectedColor} · Alignment: {alignment}</span>
    </div>
  );
}

export default function TypographyDemo({ demoId }) {
  if (demoId === 'typography-weights') return <TypographyWeights />;
  if (demoId === 'typography-colors') return <TypographyColors />;
  return <TypographyScale />;
}
