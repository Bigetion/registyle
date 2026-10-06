import { useState } from 'react';
import { ArrowRight, Check, Code2, Copy, Sparkles } from 'lucide-react';

export default function DemoPanel({ title, caption, code, children }) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch (error) {
      console.error('Could not copy example code:', error);
    }
  }

  return (
    <section className="demo-card">
      <header className="demo-card-header">
        <div>
          <div className="demo-title-row">
            <h2 className="demo-title">{title}</h2>
            <span className="demo-live-pill"><span /> LIVE</span>
          </div>
          <p className="demo-caption">{caption}</p>
        </div>
        <button
          className="code-toggle"
          type="button"
          onClick={() => setShowCode((value) => !value)}
          aria-expanded={showCode}
        >
          <Code2 size={14} /> {showCode ? 'Hide code' : 'Show code'}
        </button>
      </header>
      <div className="demo-content">
        <div className="demo-canvas">{children}</div>
        <div className="canvas-watermark" aria-hidden="true"><Sparkles size={14} /></div>
      </div>
      {showCode && (
        <div className="code-block">
          <pre>{code}</pre>
          <button className="copy-button" type="button" onClick={copyCode}>
            {copied ? <Check size={13} /> : <Copy size={13} />}
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
      )}
      <footer className="demo-footer">
        <span>Semantic styles compiled by Registyle</span>
        <a className="source-link" href="#registyle-source">
          View style source <ArrowRight size={12} />
        </a>
      </footer>
    </section>
  );
}
