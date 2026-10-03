import { useState } from 'react';
import { Bell, Bookmark, Compass, Home, Search, UserRound } from 'lucide-react';
import { cx } from 'registyle';

const DESTINATIONS = [
  { label: 'Home', Icon: Home },
  { label: 'Explore', Icon: Compass },
  { label: 'Saved', Icon: Bookmark },
  { label: 'Profile', Icon: UserRound },
];

function NavigationBar({ demoId, selected, onSelect }) {
  const isCompactLabel = demoId === 'bottom-navigation-labels';
  const showBadge = demoId === 'bottom-navigation-icons';
  const iconsOnly = demoId === 'bottom-navigation-icons';

  return (
    <nav className={cx('mui-bottom-navigation', isCompactLabel && 'bottom-navigation-compact-labels', iconsOnly && 'bottom-navigation-icons-only')} aria-label="Primary navigation">
      {DESTINATIONS.map(({ label, Icon }) => {
        const active = selected === label;
        return (
          <button
            className={cx('bottom-navigation-item', active && 'bottom-navigation-item-active')}
            type="button"
            key={label}
            aria-current={active ? 'page' : undefined}
            aria-label={label}
            aria-pressed={active}
            onClick={() => onSelect(label)}
          >
            <span className="bottom-navigation-icon-wrap">
              <Icon size={18} aria-hidden="true" />
              {showBadge && label === 'Saved' && <span className="bottom-navigation-badge" aria-label="2 unread saved items">2</span>}
            </span>
            <span className="bottom-navigation-label">{label}</span>
          </button>
        );
      })}
    </nav>
  );
}

function NavigationPreviewContent({ selected, demoId }) {
  const content = {
    Home: ['Your workspace', 'A quick look at what matters today.'],
    Explore: ['Discover something new', 'Browse projects and ideas from your team.'],
    Saved: ['Saved for later', 'Your bookmarked updates are ready when you are.'],
    Profile: ['Your profile', 'Manage your account and personal preferences.'],
  }[selected];

  return (
    <div className={cx('bottom-navigation-content', demoId === 'bottom-navigation-icons' && 'bottom-navigation-content-icons')}>
      <span className="bottom-navigation-content-icon">
        {selected === 'Home' ? <Home size={16} /> : selected === 'Explore' ? <Search size={16} /> : selected === 'Saved' ? <Bookmark size={16} /> : <UserRound size={16} />}
      </span>
      <span className="bottom-navigation-content-copy">
        <strong>{content[0]}</strong>
        <small>{content[1]}</small>
      </span>
      {selected === 'Saved' && <span className="bottom-navigation-unread"><Bell size={12} aria-hidden="true" /> 2 new</span>}
    </div>
  );
}

function BottomNavigationExample({ demoId }) {
  const [selected, setSelected] = useState('Home');

  return (
    <div className="bottom-navigation-demo">
      <div className="bottom-navigation-device">
        <div className="bottom-navigation-device-top">
          <span className="bottom-navigation-status"><i /> Workspace</span>
          <span className="bottom-navigation-time">9:41</span>
        </div>
        <NavigationPreviewContent selected={selected} demoId={demoId} />
        <NavigationBar demoId={demoId} selected={selected} onSelect={setSelected} />
        <div className="bottom-navigation-home-indicator" aria-hidden="true"><span /></div>
      </div>
      <div className="bottom-navigation-demo-footer">
        <span className="preview-note" role="status">Selected destination: <strong>{selected}</strong></span>
        {demoId === 'bottom-navigation-labels' && <span className="preview-note">Inactive labels stay compact.</span>}
        {demoId === 'bottom-navigation-icons' && <span className="bottom-navigation-badge-legend"><Bell size={12} aria-hidden="true" /> 2 new items in Saved</span>}
      </div>
    </div>
  );
}

export default function BottomNavigationDemo({ demoId }) {
  return <BottomNavigationExample demoId={demoId} />;
}
