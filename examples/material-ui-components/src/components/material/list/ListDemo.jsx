import { useState } from 'react';
import {
  Bell,
  ChevronRight,
  CreditCard,
  FileText,
  Folder,
  HelpCircle,
  LockKeyhole,
  Mail,
  Settings,
  ShieldCheck,
  UserRound,
} from 'lucide-react';
import { cx } from 'registyle';

const NAVIGATION_ITEMS = [
  [Folder, 'Projects', '12 active projects'],
  [FileText, 'Documents', 'Recently updated'],
  [Settings, 'Preferences', 'Manage your workspace'],
  [HelpCircle, 'Help center', 'Guides and support'],
];

function ListNavigation() {
  const [active, setActive] = useState('Projects');

  return (
    <div className="preview-stack">
      <nav className="demo-list demo-list-navigation" aria-label="Workspace navigation">
        {NAVIGATION_ITEMS.map(([Icon, label, description]) => (
          <button
            className={cx('demo-list-item', active === label && 'demo-list-item-active')}
            key={label}
            type="button"
            aria-current={active === label ? 'page' : undefined}
            onClick={() => setActive(label)}
          >
            <span className="demo-list-icon"><Icon size={17} aria-hidden="true" /></span>
            <span className="demo-list-copy"><strong>{label}</strong><small>{description}</small></span>
            <ChevronRight className="demo-list-trailing" size={15} aria-hidden="true" />
          </button>
        ))}
      </nav>
      <span className="preview-note" role="status" aria-live="polite">Current section: {active}</span>
    </div>
  );
}

function ListSecondary() {
  const messages = [
    ['AC', 'Ava Chen', 'Shared the Q3 product brief', '2m', 'avatar-blue'],
    ['JM', 'Jordan Miller', 'Left a comment on your draft', '18m', 'avatar-violet'],
    ['SK', 'Sam Kim', 'Invited you to Design review', '1h', 'avatar-green'],
  ];

  return (
    <div className="demo-list demo-list-messages" role="list" aria-label="Recent messages">
      {messages.map(([initials, name, message, time, tone]) => (
        <article className="demo-list-item demo-list-message" key={name} role="listitem">
          <span className={cx('demo-list-avatar', tone)} aria-hidden="true">{initials}</span>
          <span className="demo-list-copy">
            <strong>{name}</strong>
            <small>{message}</small>
          </span>
          <time className="demo-list-time">{time}</time>
        </article>
      ))}
      <div className="demo-list-footer"><Mail size={13} aria-hidden="true" /> Showing your latest conversations</div>
    </div>
  );
}

function ListInteractive() {
  const [enabled, setEnabled] = useState({ product: true, security: true, billing: false });
  const [notice, setNotice] = useState('Choose which updates you want to receive.');
  const settings = [
    [Bell, 'Product updates', 'New features and release notes', 'product'],
    [ShieldCheck, 'Security alerts', 'Important account activity', 'security'],
    [CreditCard, 'Billing reminders', 'Invoices and payment updates', 'billing'],
  ];

  const toggle = (key) => {
    setEnabled((current) => {
      const next = { ...current, [key]: !current[key] };
      const enabledCount = Object.values(next).filter(Boolean).length;
      setNotice(`${enabledCount} of ${settings.length} notification types enabled.`);
      return next;
    });
  };

  return (
    <div className="preview-stack">
      <div className="demo-list demo-list-settings" role="group" aria-label="Notification preferences">
        {settings.map(([Icon, title, description, key]) => (
          <button
            className="demo-list-item demo-list-setting"
            key={key}
            type="button"
            aria-pressed={enabled[key]}
            onClick={() => toggle(key)}
          >
            <span className="demo-list-icon"><Icon size={17} aria-hidden="true" /></span>
            <span className="demo-list-copy"><strong>{title}</strong><small>{description}</small></span>
            <span className={cx('list-switch', enabled[key] && 'list-switch-on')} aria-hidden="true"><i /></span>
          </button>
        ))}
      </div>
      <span className="preview-note" role="status" aria-live="polite">{notice}</span>
    </div>
  );
}

export default function ListDemo({ demoId }) {
  if (demoId === 'list-secondary') return <ListSecondary />;
  if (demoId === 'list-interactive') return <ListInteractive />;
  return <ListNavigation />;
}
