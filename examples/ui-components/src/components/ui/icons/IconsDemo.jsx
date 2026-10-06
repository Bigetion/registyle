import { useState } from 'react';
import {
  Activity,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Bell,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Code2,
  Copy,
  File,
  FileText,
  Filter,
  Heart,
  Home,
  Image,
  Mail,
  Menu,
  MoreHorizontal,
  Plus,
  Search,
  Settings,
  Share2,
  ShieldCheck,
  Star,
  Trash2,
  User,
  X,
} from 'lucide-react';
import { cx } from 'registyle';

const ICONS = [
  [Home, 'Home', 'Navigation'],
  [Search, 'Search', 'Actions'],
  [Settings, 'Settings', 'Actions'],
  [Bell, 'Notifications', 'Actions'],
  [User, 'Profile', 'People'],
  [Heart, 'Favorite', 'Actions'],
  [Star, 'Star', 'Actions'],
  [Mail, 'Mail', 'Files'],
  [FileText, 'Document', 'Files'],
  [Image, 'Image', 'Files'],
  [Cloud, 'Cloud', 'Files'],
  [ShieldCheck, 'Security', 'People'],
  [ArrowLeft, 'Arrow left', 'Navigation'],
  [ArrowRight, 'Arrow right', 'Navigation'],
  [ArrowUp, 'Arrow up', 'Navigation'],
  [ArrowDown, 'Arrow down', 'Navigation'],
  [ChevronLeft, 'Previous', 'Navigation'],
  [ChevronRight, 'Next', 'Navigation'],
  [ChevronDown, 'Expand', 'Navigation'],
  [Menu, 'Menu', 'Navigation'],
  [Plus, 'Add', 'Actions'],
  [X, 'Close', 'Actions'],
  [Check, 'Confirm', 'Actions'],
  [Copy, 'Copy', 'Actions'],
  [Share2, 'Share', 'Actions'],
  [Filter, 'Filter', 'Actions'],
  [Trash2, 'Delete', 'Actions'],
  [MoreHorizontal, 'More', 'Actions'],
  [Code2, 'Code', 'Files'],
  [File, 'File', 'Files'],
  [Activity, 'Activity', 'People'],
];

const CATEGORIES = ['All', 'Navigation', 'Actions', 'Files', 'People'];

function IconLibrary() {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState('Home');
  const icons = ICONS.filter(([, name, group]) => (
    (category === 'All' || category === group)
    && name.toLowerCase().includes(query.trim().toLowerCase())
  ));

  return (
    <div className="preview-stack">
      <label className="icon-search">
        <Search size={15} aria-hidden="true" />
        <input
          aria-label="Search icons"
          placeholder="Search icons"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        {query && <button type="button" aria-label="Clear search" onClick={() => setQuery('')}><X size={13} /></button>}
      </label>
      <div className="icon-category-list" role="group" aria-label="Filter icon category">
        {CATEGORIES.map((item) => (
          <button
            className={cx('icon-category', category === item && 'icon-category-active')}
            key={item}
            type="button"
            aria-pressed={category === item}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="icon-library-grid" role="group" aria-label="Icon library">
        {icons.map(([Icon, name]) => (
          <button
            className={cx('icon-library-item', selected === name && 'icon-library-item-selected')}
            key={name}
            type="button"
            aria-pressed={selected === name}
            onClick={() => setSelected(name)}
          >
            <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
            <span>{name}</span>
          </button>
        ))}
        {!icons.length && <span className="icon-empty-state">No icons match “{query}”.</span>}
      </div>
      <span className="preview-note" role="status" aria-live="polite">{icons.length} icons · Selected: {selected}</span>
    </div>
  );
}

function IconColors() {
  const examples = [
    ['Default', Search, 'icon-tone-default'],
    ['Primary', Star, 'icon-tone-primary'],
    ['Success', Check, 'icon-tone-success'],
    ['Warning', Activity, 'icon-tone-warning'],
    ['Danger', Trash2, 'icon-tone-danger'],
  ];

  return (
    <div className="preview-stack">
      <div className="icon-color-grid">
        {examples.map(([label, Icon, tone]) => (
          <div className="icon-color-item" key={label}>
            <span className={cx('icon-color-swatch', tone)}><Icon size={19} strokeWidth={1.8} aria-hidden="true" /></span>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <span className="preview-note">Use color to reinforce meaning; keep decorative icons neutral.</span>
    </div>
  );
}

function IconButtons() {
  const [favorite, setFavorite] = useState(false);
  const [notice, setNotice] = useState('No action selected');
  const actions = [
    [Search, 'Search'],
    [Share2, 'Share'],
    [MoreHorizontal, 'More options'],
  ];

  return (
    <div className="preview-stack">
      <div className="icon-action-row" role="group" aria-label="Icon button actions">
        {actions.map(([Icon, label]) => (
          <button className="icon-action-button" key={label} type="button" aria-label={label} onClick={() => setNotice(`${label} action selected`)}>
            <Icon size={17} aria-hidden="true" />
          </button>
        ))}
        <button
          className={cx('icon-action-button', favorite && 'icon-action-button-active')}
          type="button"
          aria-label={favorite ? 'Remove favorite' : 'Add to favorites'}
          aria-pressed={favorite}
          onClick={() => {
            setFavorite((value) => !value);
            setNotice(favorite ? 'Removed from favorites' : 'Added to favorites');
          }}
        >
          <Heart size={17} fill={favorite ? 'currentColor' : 'none'} aria-hidden="true" />
        </button>
      </div>
      <span className="preview-note" role="status" aria-live="polite">{notice}</span>
    </div>
  );
}

export default function IconsDemo({ demoId }) {
  if (demoId === 'icons-colors') return <IconColors />;
  if (demoId === 'icons-buttons') return <IconButtons />;
  return <IconLibrary />;
}
