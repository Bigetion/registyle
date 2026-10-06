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

const ICON_GLYPHS = [
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

function IconGlyphs() {
  const [selected, setSelected] = useState('Home');
  const selectedGlyph = ICON_GLYPHS.find(([, , name]) => name === selected) ?? ICON_GLYPHS[0];
  const SelectedIcon = selectedGlyph[0];

  return (
    <div className="preview-stack">
      <div className="icon-glyph-grid" role="group" aria-label="Common interface icon collection">
        {ICON_GLYPHS.map(([Icon, label, name]) => (
          <button
            className={cx('icon-glyph-tile', selected === name && 'icon-glyph-tile-selected')}
            key={name}
            type="button"
            aria-pressed={selected === name}
            onClick={() => setSelected(name)}
          >
            <span className="icon-glyph-symbol"><Icon size={21} strokeWidth={1.9} aria-hidden="true" /></span>
            <span>{label}</span>
          </button>
        ))}
      </div>
      <span className="preview-note" role="status" aria-live="polite">
        Selected glyph: {selected}
      </span>
      <span className="icon-glyph-selection" aria-hidden="true"><SelectedIcon size={18} /> {selected}</span>
    </div>
  );
}

function IconGlyphSizes() {
  const sizes = [
    ['Small', 16, 'Dense controls'],
    ['Standard', 20, 'Default actions'],
    ['Large', 24, 'Prominent controls'],
    ['Display', 32, 'Illustrative use'],
  ];

  return (
    <div className="icon-glyph-size-list">
      {sizes.map(([label, size, use]) => (
        <div className="icon-glyph-size-item" key={label}>
          <span className="icon-glyph-size-symbol"><Home size={size} strokeWidth={1.9} aria-hidden="true" /></span>
          <span><strong>{label}</strong><small>{use}</small></span>
          <code>{size}px</code>
        </div>
      ))}
    </div>
  );
}

function IconGlyphActions() {
  const [cartCount, setCartCount] = useState(2);
  const [favorite, setFavorite] = useState(false);
  const [message, setMessage] = useState('Ready for an action');

  return (
    <div className="preview-stack">
      <div className="icon-glyph-toolbar" role="group" aria-label="Icon actions">
        <button type="button" aria-label="Go back" onClick={() => setMessage('Back action selected')}><ArrowLeft size={19} aria-hidden="true" /></button>
        <button type="button" aria-label="Search" onClick={() => setMessage('Search action selected')}><Search size={19} aria-hidden="true" /></button>
        <button
          className={cx(favorite && 'icon-glyph-action-active')}
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
        <button className="icon-glyph-cart" type="button" aria-label={`Shopping cart, ${cartCount} items`} onClick={() => { setCartCount((count) => count + 1); setMessage('Added one item to cart'); }}>
          <ShoppingCart size={19} aria-hidden="true" /><span>{cartCount}</span>
        </button>
        <button type="button" aria-label="Notifications" onClick={() => setMessage('Notifications opened')}><Bell size={19} aria-hidden="true" /></button>
      </div>
      <span className="preview-note" role="status" aria-live="polite">{message}</span>
    </div>
  );
}

export default function IconGlyphDemo({ demoId }) {
  if (demoId === 'icon-glyph-sizes') return <IconGlyphSizes />;
  if (demoId === 'icon-glyph-actions') return <IconGlyphActions />;
  return <IconGlyphs />;
}
