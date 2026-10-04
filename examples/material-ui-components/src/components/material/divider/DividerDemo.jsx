import { Bell, LockKeyhole, UserRound } from 'lucide-react';

function Divider({ className = '', ...props }) {
  return <hr className={`rgi-divider ${className}`.trim()} {...props} />;
}

function DividerHorizontal() {
  return (
    <div className="divider-demo">
      <span className="divider-label">Account settings</span>
      <Divider />
      <span className="divider-label">Privacy &amp; security</span>
      <Divider />
      <span className="divider-label">Notifications</span>
    </div>
  );
}

function DividerVertical() {
  return (
    <div className="divider-toolbar" role="group" aria-label="Account navigation">
      <button type="button"><UserRound size={15} aria-hidden="true" /> Profile</button>
      <span className="rgi-divider-vertical" role="separator" aria-orientation="vertical" />
      <button type="button"><LockKeyhole size={15} aria-hidden="true" /> Security</button>
      <span className="rgi-divider-vertical" role="separator" aria-orientation="vertical" />
      <button type="button"><Bell size={15} aria-hidden="true" /> Alerts</button>
    </div>
  );
}

function DividerInset() {
  return (
    <div className="divider-list" aria-label="Settings list">
      <div className="divider-list-item">
        <span className="divider-list-icon"><UserRound size={16} aria-hidden="true" /></span>
        <span className="divider-list-copy"><strong>Personal details</strong><small>Name, email, and profile</small></span>
      </div>
      <Divider className="rgi-divider-inset" />
      <div className="divider-list-item">
        <span className="divider-list-icon"><LockKeyhole size={16} aria-hidden="true" /></span>
        <span className="divider-list-copy"><strong>Sign-in and security</strong><small>Password and two-step verification</small></span>
      </div>
    </div>
  );
}

export default function DividerDemo({ demoId }) {
  if (demoId === 'divider-vertical') return <DividerVertical />;
  if (demoId === 'divider-inset') return <DividerInset />;
  return <DividerHorizontal />;
}
