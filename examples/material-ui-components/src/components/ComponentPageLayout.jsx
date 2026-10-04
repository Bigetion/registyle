import { ArrowLeft, ArrowRight, Check, Component as ComponentIcon, ExternalLink, Layers, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { componentCatalog } from '../data/components.js';
import DemoPanel from './DemoPanel.jsx';

const IMPLEMENTATION_ROWS = [
  ['Page', 'src/pages/components/{slug}/Page.jsx', 'Dedicated React Router page.'],
  ['Component', 'src/components/material/{slug}/{name}.jsx', 'Dedicated component page entry point.'],
  ['Registyle', 'src/registyles/components/{slug}.js', 'Component-specific styles and variants.'],
  ['Examples', '{count} live examples', 'Rendered in the examples section above.'],
];

export default function ComponentPageLayout({ component, children }) {
  const index = componentCatalog.findIndex((item) => item.slug === component.slug);
  const previous = componentCatalog[(index - 1 + componentCatalog.length) % componentCatalog.length];
  const next = componentCatalog[(index + 1) % componentCatalog.length];
  const importName = component.name.replace(/\s+/g, '');
  const importCode = `import ${importName} from './components/material/${component.slug}/${importName}.jsx';\n\nexport default function ${importName}Example() {\n  return <${importName} />;\n}`;
  const implementationRows = IMPLEMENTATION_ROWS.map(([area, source, purpose]) => [
    area,
    source
      .replaceAll('{slug}', component.slug)
      .replace('{name}', importName)
      .replace('{count}', component.demos.length),
    purpose,
  ]);
  if (['chip', 'divider', 'icons', 'material-icons', 'list', 'table', 'tooltip', 'typography', 'alert', 'dialog', 'progress', 'snackbar', 'skeleton', 'accordion', 'app-bar', 'card', 'paper', 'popover', 'bottom-navigation', 'breadcrumbs', 'drawer', 'link', 'menu', 'pagination', 'speed-dial', 'stepper', 'tabs', 'click-away-listener'].includes(component.slug)) {
    implementationRows.splice(2, 0, [
      'Demo',
      `src/components/material/${component.slug}/${importName}Demo.jsx`,
      'Interactive examples rendered in the showcase above.',
    ]);
  }

  return (
    <div className="content-width component-page">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link to="/components/autocomplete">Components</Link>
        <span>/</span>
        <span>{component.group}</span>
        <span>/</span>
        <span className="breadcrumb-current">{component.name}</span>
      </nav>

      <header className="component-hero">
        <div className="component-hero-copy">
          <div className="component-eyebrow"><span className="eyebrow-glow" /> {component.group} <span className="eyebrow-divider">/</span> COMPONENT</div>
          <h1 className="page-heading">{component.name}</h1>
          <p className="page-intro">{component.description}</p>
          <div className="hero-meta">
            <span><Check size={13} /> Dedicated Registyle module</span>
            <span><Layers size={13} /> {component.demos.length} live examples</span>
          </div>
        </div>
        <div className="hero-emblem" aria-hidden="true">
          <div className="hero-emblem-halo" />
          <div className="hero-emblem-icon"><ComponentIcon size={34} strokeWidth={1.35} /></div>
          <span className="hero-emblem-orbit orbit-one" />
          <span className="hero-emblem-orbit orbit-two" />
          <span className="hero-emblem-spark"><Sparkles size={15} /></span>
        </div>
        <a
          className="mui-button mui-button-outlined docs-button"
          href={`https://mui.com/material-ui/react-${component.slug}/`}
          target="_blank"
          rel="noreferrer"
        >
          <ExternalLink size={14} /> Documentation
        </a>
      </header>

      <div className="component-navigation">
        <Link to={`/components/${previous.slug}`}>
          <ArrowLeft size={14} />
          <span><small>PREVIOUS</small>{previous.name}</span>
        </Link>
        <Link to={`/components/${next.slug}`}>
          <span><small>NEXT</small>{next.name}</span>
          <ArrowRight size={14} />
        </Link>
      </div>

      <nav className="component-toc" aria-label="On this page">
        <span className="toc-label">On this page</span>
        <a href={`#${component.slug}-examples-heading`}>Examples</a>
        <a href={`#${component.slug}-usage-heading`}>Usage</a>
        <a href={`#${component.slug}-implementation-heading`}>Implementation</a>
        <span className="toc-version">v9.4.0</span>
      </nav>

      <section className="page-section" aria-labelledby={`${component.slug}-examples-heading`}>
        <div className="section-heading">
          <div>
            <p className="component-count"><span className="component-count-dot" /> COMPONENT</p>
            <h2 id={`${component.slug}-examples-heading`}>Examples</h2>
          </div>
          <span className="example-count">{component.demos.length} examples</span>
        </div>
        {children}
      </section>

      <section className="page-section" aria-labelledby={`${component.slug}-usage-heading`}>
        <div className="section-heading">
          <div>
            <p className="component-count">GET STARTED</p>
            <h2 id={`${component.slug}-usage-heading`}>Usage</h2>
          </div>
        </div>
        <DemoPanel
          title="Import component"
          caption="Import this component's dedicated React module to render its interactive examples."
          code={importCode}
        >
          <div className="usage-preview">
            <span className="usage-preview-icon">&lt;/&gt;</span>
            <div>
              <strong>{importName}</strong>
              <p>Interactive examples and styles are maintained in component-specific modules.</p>
            </div>
          </div>
        </DemoPanel>
      </section>

      <section className="page-section implementation-section" aria-labelledby={`${component.slug}-implementation-heading`}>
        <div className="section-heading">
          <div>
            <p className="component-count">SOURCE MAP</p>
            <h2 id={`${component.slug}-implementation-heading`}>{component.name} implementation</h2>
          </div>
        </div>
        <div className="api-table-wrap">
          <table className="api-table">
            <thead>
              <tr><th>Area</th><th>Source</th><th>Purpose</th></tr>
            </thead>
            <tbody>
              {implementationRows.map(([area, source, purpose]) => (
                <tr key={area}>
                  <td>{area}</td>
                  <td><code>{source}</code></td>
                  <td>{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <footer className="page-footer" id="registyle-source">
        <div className="footer-brand">
          <span className="brand-mark brand-mark-small">M</span>
          <span>Material UI Components</span>
        </div>
        <span>Semantic styles, powered by Registyle.</span>
        <div className="footer-links">
          <Link to={`/components/${previous.slug}`} aria-label={`Previous: ${previous.name}`}><ArrowLeft size={15} /></Link>
          <Link to={`/components/${next.slug}`} aria-label={`Next: ${next.name}`}><ArrowRight size={15} /></Link>
        </div>
      </footer>
    </div>
  );
}
