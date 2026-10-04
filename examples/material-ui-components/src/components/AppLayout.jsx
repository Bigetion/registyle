import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowUpRight,
  CircleHelp,
  ExternalLink,
  Menu,
  Search,
  ShieldCheck,
  X,
} from 'lucide-react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { cx } from 'registyle';
import { componentGroups, componentCatalog } from '../data/components.js';

export default function AppLayout() {
  const [query, setQuery] = useState('');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const searchRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const shortcutLabel = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.userAgent)
    ? '⌘ K'
    : 'Ctrl K';

  const filteredGroups = useMemo(
    () =>
      componentGroups
        .map(({ group, items }) => ({
          group,
          items: items.filter((item) =>
            `${item.name} ${item.description}`.toLowerCase().includes(query.toLowerCase()),
          ),
        }))
        .filter(({ items }) => items.length > 0),
    [query],
  );

  useEffect(() => {
    setMobileNavOpen(false);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  useEffect(() => {
    function closeNavigation(event) {
      if (event.key === 'Escape') setMobileNavOpen(false);
    }
    window.addEventListener('keydown', closeNavigation);
    return () => window.removeEventListener('keydown', closeNavigation);
  }, []);

  useEffect(() => {
    function handleShortcut(event) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        searchRef.current?.focus();
      }
      if (event.key === 'Escape' && document.activeElement === searchRef.current) {
        setQuery('');
        searchRef.current.blur();
      }
    }
    window.addEventListener('keydown', handleShortcut);
    return () => window.removeEventListener('keydown', handleShortcut);
  }, []);

  function handleSearchKeyDown(event) {
    if (event.key === 'Enter') {
      const match = componentCatalog.find((item) =>
        item.name.toLowerCase().includes(query.trim().toLowerCase()),
      );
      if (match) navigate(`/components/${match.slug}`);
    }
  }

  const popularComponents = componentCatalog.slice(0, 8);

  return (
    <div className="app-shell">
      <header className="topbar">
        <button
          className="mobile-menu mui-icon-button"
          type="button"
          aria-label={mobileNavOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={mobileNavOpen}
          onClick={() => setMobileNavOpen((open) => !open)}
        >
          {mobileNavOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
        <NavLink className="brand-link" to="/components/autocomplete" aria-label="Material Studio home">
          <span className="brand-mark" aria-hidden="true"><span>M</span></span>
          <span className="brand-lockup"><span className="brand-name">Material Studio</span><span className="brand-subtitle">by Registyle</span></span>
        </NavLink>
        <span className="version-badge">
          <span className="version-indicator" /> v9.4.0
        </span>
        <div className="topbar-spacer" />
        <label className="search-box">
          <Search size={15} />
          <input
            ref={searchRef}
            aria-label="Search components"
            placeholder="Search components…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={handleSearchKeyDown}
          />
          {query ? (
            <button
              className="search-clear"
              type="button"
              aria-label="Clear search"
              onClick={() => setQuery('')}
            >
              <X size={13} />
            </button>
          ) : (
            <kbd>{shortcutLabel}</kbd>
          )}
          {query && (
            <div className="search-results" role="listbox" aria-label="Component results">
              {componentCatalog
                .filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
                .slice(0, 7)
                .map((item) => (
                  <button
                    key={item.slug}
                    type="button"
                    role="option"
                    onClick={() => {
                      navigate(`/components/${item.slug}`);
                      setQuery('');
                    }}
                  >
                    <span>{item.name}</span>
                    <span className="search-result-group">{item.group}</span>
                  </button>
                ))}
              {!componentCatalog.some((item) =>
                item.name.toLowerCase().includes(query.toLowerCase()),
              ) && <p>No matching components</p>}
            </div>
          )}
        </label>
        <a className="topbar-github" href="https://github.com/Bigetion/registyle" target="_blank" rel="noreferrer">
        <span>Open source</span><ArrowUpRight size={13} />
        </a>
        <a
          className="mui-icon-button help-button"
          href="https://mui.com/material-ui/getting-started/"
          target="_blank"
          rel="noreferrer"
          aria-label="Material UI documentation"
          title="Material UI documentation"
        >
          <CircleHelp size={17} />
        </a>
      </header>

      <div className="app-layout">
        {mobileNavOpen && (
          <button
            className="mobile-nav-backdrop"
            type="button"
            aria-label="Close navigation"
            onClick={() => setMobileNavOpen(false)}
          />
        )}
        <aside
          className={cx('sidebar', mobileNavOpen && 'sidebar-open')}
          aria-label="Component navigation"
        >
          <div className="sidebar-intro">
            <span className="sidebar-label">Explore library</span>
          </div>
          <div className="sidebar-scroll">
            {filteredGroups.length ? (
              filteredGroups.map(({ group, items }) => (
                <nav className="nav-section" key={group} aria-label={group}>
                  <h2 className="nav-heading">
                    {group}
                    <span className="nav-group-count">{items.length.toString().padStart(2, '0')}</span>
                  </h2>
                  {items.map(({ name, badge, slug }) => (
                    <NavLink
                      className={({ isActive }) => cx(isActive ? 'nav-link-active' : 'nav-link')}
                      key={slug}
                      to={`/components/${slug}`}
                    >
                      {name}
                      {badge && <span className="new-chip">{badge}</span>}
                    </NavLink>
                  ))}
                </nav>
              ))
            ) : (
              <p className="empty-search">No components match “{query}”.</p>
            )}
          </div>
          <div className="sidebar-bottom">
            <div className="sidebar-bottom-icon"><ShieldCheck size={14} /></div>
            <span><strong>Built with Registyle</strong><small>Semantic styling, made simple</small></span>
            <ExternalLink size={12} />
          </div>
        </aside>

        <main className="main-content">
          <nav className="mobile-nav" aria-label="Popular components">
            {popularComponents.map(({ name, slug }) => (
              <NavLink
                className={({ isActive }) =>
                  cx(isActive ? 'mobile-nav-link-active' : 'mobile-nav-link')
                }
                key={slug}
                to={`/components/${slug}`}
              >
                {name}
              </NavLink>
            ))}
          </nav>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
