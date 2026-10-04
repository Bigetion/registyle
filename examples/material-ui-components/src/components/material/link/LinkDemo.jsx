import { useState } from 'react';
import { ArrowUpRight, ExternalLink, FileText, Link as LinkIcon } from 'lucide-react';

function preventNavigation(event, setNotice, destination) {
  event.preventDefault();
  setNotice(`Link activated: ${destination}.`);
}

function InlineLinksDemo() {
  const [notice, setNotice] = useState('');

  return (
    <div className="link-demo">
      <div className="link-content-card">
        <span className="link-content-icon"><FileText size={16} aria-hidden="true" /></span>
        <div className="link-copy">
          <strong>Keep exploring</strong>
          <p>Browse the workspace guide or visit the project overview to learn more about your team.</p>
          <div className="link-inline-row">
            <a className="rgi-link" href="#workspace-guide" onClick={(event) => preventNavigation(event, setNotice, 'Workspace guide')}>
              Workspace guide <ArrowUpRight size={12} aria-hidden="true" />
            </a>
            <span className="link-inline-divider" aria-hidden="true" />
            <a className="rgi-link" href="#project-overview" onClick={(event) => preventNavigation(event, setNotice, 'Project overview')}>
              Project overview
            </a>
          </div>
        </div>
      </div>
      <span className="preview-note" role="status">{notice || 'Activate a link to preview its destination.'}</span>
    </div>
  );
}

function LinkVariantsDemo() {
  const [notice, setNotice] = useState('');
  const links = [
    ['Default', 'rgi-link', 'Default destination'],
    ['Underlined', 'rgi-link rgi-link-underlined', 'Underlined destination'],
    ['Subtle', 'rgi-link rgi-link-subtle', 'Subtle destination'],
    ['External', 'rgi-link rgi-link-external', 'External documentation'],
  ];

  return (
    <div className="link-demo">
      <div className="link-variant-list">
        {links.map(([label, className, destination]) => (
          <div className="link-variant-row" key={label}>
            <span>{label}</span>
            <a className={className} href={`#${destination.toLowerCase().replaceAll(' ', '-')}`} onClick={(event) => preventNavigation(event, setNotice, destination)}>
              {destination}
              {label === 'External' && <><ExternalLink size={12} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></>}
            </a>
          </div>
        ))}
      </div>
      <span className="preview-note" role="status">{notice || 'Link emphasis can change independently from its destination.'}</span>
    </div>
  );
}

function LinkAccessibilityDemo() {
  const [notice, setNotice] = useState('');
  const [available, setAvailable] = useState(true);

  return (
    <div className="link-demo">
      <div className="link-accessibility-card">
        <span className="link-content-icon"><LinkIcon size={16} aria-hidden="true" /></span>
        <div className="link-copy">
          <strong>Keyboard-friendly navigation</strong>
          <p>Use Tab to focus each available link. Focus styling remains visible and the unavailable destination is not focusable.</p>
          <div className="link-accessibility-row">
            <a className="rgi-link rgi-link-underlined" href="#accessibility-guide" onClick={(event) => preventNavigation(event, setNotice, 'Accessibility guide')}>
              Read accessibility guide <ArrowUpRight size={12} aria-hidden="true" />
            </a>
            {available && (
              <a className="rgi-link rgi-link-disabled" href="#coming-soon" aria-disabled="true" tabIndex={-1} onClick={(event) => event.preventDefault()}>
                Coming soon
              </a>
            )}
            {!available && <span className="rgi-link-disabled" aria-disabled="true">Unavailable</span>}
          </div>
        </div>
      </div>
      <div className="link-demo-footer">
        <span className="preview-note" role="status">{notice || 'A disabled destination remains readable but does not act like a normal link.'}</span>
        <button className="link-toggle-button" type="button" aria-pressed={!available} onClick={() => setAvailable((value) => !value)}>
          Toggle availability
        </button>
      </div>
    </div>
  );
}

export default function LinkDemo({ demoId }) {
  if (demoId === 'link-variants') return <LinkVariantsDemo />;
  if (demoId === 'link-accessibility') return <LinkAccessibilityDemo />;
  return <InlineLinksDemo />;
}
