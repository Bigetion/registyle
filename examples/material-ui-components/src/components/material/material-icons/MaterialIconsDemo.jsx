import { useState } from 'react';
import {
  ArrowLeft,
  Bell,
  CircleCheck,
  CircleUserRound,
  Trash2,
  Heart,
  Home,
  Info,
  Mail,
  Plus,
  Search,
  Settings,
  Share2,
  ShoppingCart,
  Star,
  TriangleAlert,
} from 'lucide-react';
import { cx } from 'registyle';

const MATERIAL_GLYPHS = [
  [Home, 'Home', 'Home'],
  [Search, 'Search', 'Search'],
  [CircleUserRound, 'Account', 'Account'],
  [Bell, 'Notifications', 'Notifications'],
  [Heart, 'Favorite', 'Favorite'],
  [Star, 'Star', 'Star'],
  [Mail, 'Mail', 'Mail'],
  [ShoppingCart, 'Cart', 'Cart'],
  [Settings, 'Settings', 'Settings'],
  [Info, 'Info', 'Info'],
  [TriangleAlert, 'Warning', 'Warning'],
  [CircleCheck, 'Verified', 'Verified'],
  [Plus, 'Add', 'Add'],
  [ArrowLeft, 'Back', 'Back'],
  [Share2, 'Share', 'Share'],
  [Trash2, 'Delete', 'Delete'],
];

function MaterialGlyphs() {
  const [selected, setSelected] = useState('Home');
  const selectedGlyph = MATERIAL_GLYPHS.find(([, , name]) => name === selected) ?? MATERIAL_GLYPHS[0];
  const SelectedIcon = selectedGlyph[0];

  return (
    <div className="preview-stack">
      <div className="material-icon-grid" role="group" aria-label="Material-style icon collection">
        {MATERIAL_GLYPHS.map(([Icon, label, name]) => (
          <button
            className={cx('material-icon-tile', selected === name && 'material-icon-tile-selected')}
            key={name}
            type="button"
            aria-pressed={selected === name}
            onClick={() => setSelected(name)}
          >
            <span className="material-icon-glyph"><Icon size={21} strokeWidth={1.9} aria-hidden="true" /></span>
            <span>{label}</span>
          </button>
        ))}
      </div>
      <span className="preview-note" role="status" aria-live="polite">
        Selected glyph: {selected} · Material-inspired icon tile
      </span>
      <span className="material-icon-selection" aria-hidden="true"><SelectedIcon size={18} /> {selected}</span>
    </div>
  );
}

function MaterialIconSizes() {
  const sizes = [
    ['Small', 16, 'Dense controls'],
    ['Standard', 20, 'Default actions'],
    ['Large', 24, 'Prominent controls'],
    ['Display', 32, 'Illustrative use'],
  ];

  return (
    <div className="material-icon-size-list">
      {sizes.map(([label, size, use]) => (
        <div className="material-icon-size-item" key={label}>
          <span className="material-icon-size-glyph"><Home size={size} strokeWidth={1.9} aria-hidden="true" /></span>
          <span><strong>{label}</strong><small>{use}</small></span>
          <code>{size}px</code>
        </div>
      ))}
    </div>
  );
}

function MaterialIconActions() {
  const [cartCount, setCartCount] = useState(2);
  const [favorite, setFavorite] = useState(false);
  const [message, setMessage] = useState('Ready for an action');

  return (
    <div className="preview-stack">
      <div className="material-icon-toolbar" role="group" aria-label="Material-style action icons">
        <button type="button" aria-label="Go back" onClick={() => setMessage('Back action selected')}><ArrowLeft size={19} aria-hidden="true" /></button>
        <button type="button" aria-label="Search" onClick={() => setMessage('Search action selected')}><Search size={19} aria-hidden="true" /></button>
        <button
          className={cx(favorite && 'material-icon-action-active')}
          type="button"
          aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
          aria-pressed={favorite}
          onClick={() => {
            setFavorite((value) => !value);
            setMessage(favorite ? 'Removed from favorites' : 'Added to favorites');
          }}
        >
          <Heart size={19} fill={favorite ? 'currentColor' : 'none'} aria-hidden="true" />
        </button>
        <button className="material-icon-cart" type="button" aria-label={`Shopping cart, ${cartCount} items`} onClick={() => { setCartCount((count) => count + 1); setMessage('Added one item to cart'); }}>
          <ShoppingCart size={19} aria-hidden="true" /><span>{cartCount}</span>
        </button>
        <button type="button" aria-label="Notifications" onClick={() => setMessage('Notifications opened')}><Bell size={19} aria-hidden="true" /></button>
      </div>
      <span className="preview-note" role="status" aria-live="polite">{message}</span>
    </div>
  );
}

export default function MaterialIconsDemo({ demoId }) {
  if (demoId === 'material-icons-sizes') return <MaterialIconSizes />;
  if (demoId === 'material-icons-actions') return <MaterialIconActions />;
  return <MaterialGlyphs />;
}
