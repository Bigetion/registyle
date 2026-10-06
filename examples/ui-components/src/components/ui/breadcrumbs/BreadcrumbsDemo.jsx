import { useState } from 'react';
import { ChevronRight, Dot, MoreHorizontal, Slash } from 'lucide-react';
import { cx } from 'registyle';

const PATH = ['Workspace', 'Projects', 'Website refresh', 'Design system'];

function BreadcrumbLink({ label, onSelect }) {
  return (
    <a href={`#${label.toLowerCase().replaceAll(' ', '-')}`} onClick={(event) => { event.preventDefault(); onSelect(label); }}>
      {label}
    </a>
  );
}

function BreadcrumbsDemoExample({ demoId }) {
  const [current, setCurrent] = useState(PATH[3]);
  const [collapsed, setCollapsed] = useState(true);
  const isSeparators = demoId === 'breadcrumbs-separators';
  const isCollapsed = demoId === 'breadcrumbs-collapsed';

  function selectPage(label) {
    setCurrent(label);
  }

  const path = PATH.slice(0, PATH.indexOf(current) + 1);
  const visiblePath = isCollapsed && collapsed && path.length > 2
    ? [path[0], 'ellipsis', ...path.slice(-2)]
    : path;

  return (
    <div className={cx('breadcrumbs-demo', isCollapsed && 'breadcrumbs-collapsed-demo')}>
      <nav className="rgi-breadcrumbs" aria-label="Breadcrumb">
        <ol>
          {visiblePath.map((label, index) => {
            const last = index === visiblePath.length - 1;
            if (label === 'ellipsis') {
              return (
                <li className="breadcrumbs-collapsed-item" key="ellipsis">
                  <button type="button" aria-label="Show hidden breadcrumb items" onClick={() => setCollapsed(false)}>
                    <MoreHorizontal size={14} aria-hidden="true" />
                  </button>
                </li>
              );
            }

            return (
              <li className={cx(last && 'breadcrumbs-current-item')} key={`${label}-${index}`}>
                {last ? (
                  <span aria-current="page">{label}</span>
                ) : (
                  <BreadcrumbLink label={label} onSelect={selectPage} />
                )}
                {!last && (
                  <span className="breadcrumbs-separator" aria-hidden="true">
                    {isSeparators && index === 0 ? <Slash size={12} /> : isSeparators && index === 1 ? <Dot size={17} /> : <ChevronRight size={13} />}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      {isSeparators && (
        <div className="breadcrumbs-separator-key" aria-label="Separator examples">
          <span><ChevronRight size={12} aria-hidden="true" /> Chevron</span>
          <span><Slash size={12} aria-hidden="true" /> Slash</span>
          <span><Dot size={16} aria-hidden="true" /> Dot</span>
        </div>
      )}
      {isCollapsed && (
        <div className="breadcrumbs-collapsed-footer">
          <span className="preview-note" role="status">{collapsed ? 'Showing a compact path.' : 'All parent locations are visible.'}</span>
          {!collapsed && <button type="button" onClick={() => setCollapsed(true)}>Collapse path</button>}
        </div>
      )}
      <div className="breadcrumbs-preview">
        <span className="breadcrumbs-preview-label">CURRENT PAGE</span>
        <strong>{current}</strong>
      </div>
    </div>
  );
}

export default function BreadcrumbsDemo({ demoId }) {
  return <BreadcrumbsDemoExample demoId={demoId} />;
}
