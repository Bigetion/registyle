import { User } from 'lucide-react';
import { cx } from 'registyle';

function Avatar({ label, initials, variant, size = 'medium', children }) {
  return (
    <span
      className={cx('rgi-avatar', variant, size !== 'medium' && `rgi-avatar-${size}`)}
      role="img"
      aria-label={label}
    >
      {children ?? initials}
    </span>
  );
}

function AvatarFallbacks() {
  return (
    <div className="preview-stack">
      <div className="avatar-examples" role="list" aria-label="Avatar fallback examples">
        <Avatar label="Jordan Davis" initials="JD" variant="avatar-indigo" />
        <Avatar label="Morgan Kim" variant="avatar-teal"><User size={18} aria-hidden="true" /></Avatar>
        <Avatar label="Alex Lee" initials="AL" variant="avatar-amber" />
        <Avatar label="No profile image" initials="?" variant="avatar-neutral" />
      </div>
      <span className="preview-note">Use initials or an icon when a profile image is unavailable.</span>
    </div>
  );
}

function AvatarSizes() {
  const sizes = [
    ['xs', 24],
    ['sm', 32],
    ['medium', 40],
    ['lg', 48],
    ['xl', 56],
  ];

  return (
    <div className="preview-stack">
      <div className="avatar-size-examples" role="list" aria-label="Avatar sizes">
        {sizes.map(([size, pixels]) => (
          <div className="avatar-size-item" key={size}>
            <Avatar
              label={`${pixels} pixel avatar`}
              initials="JD"
              variant="avatar-indigo"
              size={size}
            />
            <span className="avatar-size-label">{pixels}px</span>
          </div>
        ))}
      </div>
      <span className="preview-note">Scale avatars to match the density and hierarchy of their context.</span>
    </div>
  );
}

function AvatarGroup() {
  const members = [
    { label: 'Jordan Davis', initials: 'JD', variant: 'avatar-indigo' },
    { label: 'Morgan Kim', initials: 'MK', variant: 'avatar-teal' },
    { label: 'Alex Lee', initials: 'AL', variant: 'avatar-amber' },
    { label: 'Taylor Chen', initials: 'TC', variant: 'avatar-violet' },
  ];

  return (
    <div className="preview-stack">
      <div className="avatar-group" role="group" aria-label="Project team: four members and two more">
        {members.map((member) => (
          <Avatar key={member.label} {...member} />
        ))}
        <span className="avatar-group-overflow" aria-label="2 additional team members">+2</span>
      </div>
      <span className="preview-note">Overlap related profile avatars and summarize additional members.</span>
    </div>
  );
}

export default function AvatarDemo({ demoId }) {
  if (demoId === 'avatar-sizes') return <AvatarSizes />;
  if (demoId === 'avatar-group') return <AvatarGroup />;
  return <AvatarFallbacks />;
}
