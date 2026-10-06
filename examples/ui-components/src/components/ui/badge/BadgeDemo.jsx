import { useState } from 'react';
import { Bell, Mail, MessageCircle, ShoppingCart } from 'lucide-react';
import { cx } from 'registyle';

function Badge({ children, content, label, variant = 'badge-count', hidden = false, overlap = 'circular' }) {
  return (
    <span
      className={cx('badge-anchor', overlap === 'rectangular' && 'badge-anchor-rectangular')}
      role="img"
      aria-label={label}
    >
      {children}
      {!hidden && content !== null && (
        <span
          className={cx(
            variant,
            typeof content === 'number' && content > 99 && 'badge-count-max',
            content === 0 && 'badge-count-zero',
          )}
          aria-hidden="true"
        >
          {typeof content === 'number' && content > 99 ? '99+' : content}
        </span>
      )}
    </span>
  );
}

function BadgeCounts() {
  const [unread, setUnread] = useState(4);
  const [messages, setMessages] = useState(104);

  return (
    <div className="preview-stack">
      <div className="badge-examples" role="group" aria-label="Notification badge counts">
        <Badge content={unread} label={`${unread} unread notifications`}><Bell size={21} aria-hidden="true" /></Badge>
        <Badge content={messages} label="99 plus unread messages"><Mail size={21} aria-hidden="true" /></Badge>
        <Badge content={0} label="No unread messages"><MessageCircle size={21} aria-hidden="true" /></Badge>
      </div>
      <div className="badge-actions">
        <button className="rgi-button rgi-button-outlined" type="button" onClick={() => setUnread((count) => Math.max(0, count - 1))}>Mark one read</button>
        <button className="rgi-button rgi-button-outlined" type="button" onClick={() => setMessages((count) => Math.min(120, count + 1))}>Add message</button>
      </div>
      <span className="preview-note" role="status" aria-live="polite">
        {unread} unread notifications · {messages} total messages
      </span>
    </div>
  );
}

function BadgeDots() {
  const [online, setOnline] = useState(true);
  const [cartItems, setCartItems] = useState(2);

  return (
    <div className="preview-stack">
      <div className="badge-examples" role="group" aria-label="Dot and compact badges">
        <Badge
          variant="badge-dot"
          content=""
          label={`Morgan Kim is ${online ? 'online' : 'offline'}`}
          overlap="rectangular"
        >
          <span className="badge-avatar" aria-hidden="true">MK</span>
        </Badge>
        <Badge
          content={cartItems}
          label={`Shopping cart with ${cartItems} ${cartItems === 1 ? 'item' : 'items'}`}
          overlap="rectangular"
        >
          <ShoppingCart size={21} aria-hidden="true" />
        </Badge>
      </div>
      <div className="badge-actions">
        <button className="rgi-button rgi-button-outlined" type="button" onClick={() => setOnline((value) => !value)}>
          Set {online ? 'offline' : 'online'}
        </button>
        <button className="rgi-button rgi-button-outlined" type="button" onClick={() => setCartItems((count) => count + 1)}>
          Add to cart
        </button>
      </div>
      <span className="preview-note" role="status" aria-live="polite">
        Morgan is {online ? 'online' : 'offline'} · {cartItems} items in cart
      </span>
    </div>
  );
}

function BadgeVisibility() {
  const [visible, setVisible] = useState(true);

  return (
    <div className="preview-stack">
      <div className="badge-examples" role="group" aria-label="Badge visibility examples">
        <Badge content={8} label={visible ? '8 unread notifications' : 'Notifications badge hidden'} hidden={!visible}>
          <Bell size={21} aria-hidden="true" />
        </Badge>
        <Badge content={3} label="3 tasks remaining" variant="badge-count badge-count-secondary">
          <span className="badge-task-anchor" aria-hidden="true">Tasks</span>
        </Badge>
      </div>
      <button className="rgi-button rgi-button-outlined" type="button" onClick={() => setVisible((value) => !value)}>
        {visible ? 'Hide notification badge' : 'Show notification badge'}
      </button>
      <span className="preview-note" role="status" aria-live="polite">
        Notification badge {visible ? 'visible' : 'hidden'}.
      </span>
    </div>
  );
}

export default function BadgeDemo({ demoId }) {
  if (demoId === 'badge-dot') return <BadgeDots />;
  if (demoId === 'badge-colors') return <BadgeVisibility />;
  return <BadgeCounts />;
}
