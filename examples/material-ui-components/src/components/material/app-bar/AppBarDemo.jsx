import { useState } from 'react';
import {
  Bell,
  Check,
  ChevronDown,
  Command,
  Menu,
  Search,
  Settings,
  X,
} from 'lucide-react';
import { cx } from 'registyle';

function Brand({ subtitle = 'Design workspace' }) {
  return (
    <div className="appbar-brand">
      <span className="appbar-brand-mark">M</span>
      <span className="appbar-brand-copy">
        <strong>Material Studio</strong>
        <small>{subtitle}</small>
      </span>
    </div>
  );
}

function AppBarDemoExample({ demoId }) {
  const isSearch = demoId === 'app-bar-search';
  const isResponsive = demoId === 'app-bar-responsive';
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [selected, setSelected] = useState('Overview');
  const [notice, setNotice] = useState('');

  const items = ['Overview', 'Projects', 'Team'];
  const filteredItems = items.filter((item) => item.toLowerCase().includes(query.toLowerCase()));

  function selectItem(item) {
    setSelected(item);
    setMenuOpen(false);
    setNotice(`${item} selected.`);
  }

  return (
    <div className={cx('appbar-demo', isResponsive && 'appbar-demo-responsive')}>
      <div className="appbar-preview">
        <header className={cx('mui-appbar', isSearch && 'mui-appbar-search', isResponsive && 'mui-appbar-responsive')}>
          {isResponsive && (
            <button
              className="appbar-icon-button appbar-mobile-menu"
              type="button"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          )}
          <Brand subtitle={isResponsive ? selected : 'Design workspace'} />
          <nav className="appbar-nav" aria-label="Workspace">
            {items.map((item) => (
              <button
                className={cx('appbar-nav-link', selected === item && 'appbar-nav-link-active')}
                key={item}
                type="button"
                onClick={() => selectItem(item)}
              >
                {item}
              </button>
            ))}
          </nav>
          {isSearch && (
            <div className={cx('appbar-search', searchOpen && 'appbar-search-open')}>
              <Search size={14} aria-hidden="true" />
              <input
                aria-label="Search workspace"
                placeholder="Search workspace"
                value={query}
                onFocus={() => setSearchOpen(true)}
                onChange={(event) => setQuery(event.target.value)}
              />
              <kbd><Command size={10} /> K</kbd>
              {searchOpen && query && (
                <div className="appbar-search-results" role="listbox" aria-label="Navigation results">
                  {filteredItems.length ? filteredItems.map((item) => (
                    <button key={item} type="button" role="option" aria-selected={false} onMouseDown={(event) => event.preventDefault()} onClick={() => { selectItem(item); setQuery(''); setSearchOpen(false); }}>
                      <Search size={12} aria-hidden="true" /> {item}
                    </button>
                  )) : <span>No matching sections</span>}
                </div>
              )}
            </div>
          )}
          <div className="appbar-spacer" />
          <button
            className={cx('appbar-icon-button', !notifications && 'appbar-icon-button-muted')}
            type="button"
            aria-label={notifications ? 'Mute notifications' : 'Enable notifications'}
            aria-pressed={notifications}
            onClick={() => { setNotifications((enabled) => !enabled); setNotice(notifications ? 'Notifications muted.' : 'Notifications enabled.'); }}
          >
            <Bell size={15} />
            {notifications && <i className="appbar-notification-dot" />}
          </button>
          <button className="appbar-settings-button" type="button" aria-label="Workspace settings" onClick={() => setNotice('Workspace settings opened.')}>
            <Settings size={15} />
            <span>Settings</span>
          </button>
          <button className="appbar-account" type="button" onClick={() => setNotice('Signed in as Jordan Lee.')}>
            <span className="appbar-avatar">JL</span>
            <ChevronDown size={12} aria-hidden="true" />
          </button>
        </header>
        {isResponsive && menuOpen && (
          <nav className="appbar-mobile-panel" aria-label="Mobile workspace">
            {items.map((item) => (
              <button className={cx(selected === item && 'appbar-mobile-link-active')} key={item} type="button" onClick={() => selectItem(item)}>
                {item}
                {selected === item && <Check size={13} aria-hidden="true" />}
              </button>
            ))}
          </nav>
        )}
        <div className="appbar-content">
          <span className="appbar-content-eyebrow">WORKSPACE / {selected.toUpperCase()}</span>
          <strong>{selected === 'Overview' ? 'Good morning, Jordan' : selected}</strong>
          <span>Your team’s latest updates and activity appear here.</span>
        </div>
      </div>
      <div className="appbar-demo-footer">
        <span className="preview-note" role="status">{notice || `Current section: ${selected}`}</span>
        {isSearch && <span className="preview-note">{filteredItems.length} matching sections</span>}
        {isResponsive && <span className="appbar-breakpoint-note">Resize to preview compact navigation.</span>}
      </div>
    </div>
  );
}

export default function AppBarDemo({ demoId }) {
  return <AppBarDemoExample demoId={demoId} />;
}
