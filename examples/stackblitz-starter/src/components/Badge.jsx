import { cx } from 'registyle';

export function Badge({ variant = 'default', className, children }) {
  return (
    <span className={cx('badge', `badge-${variant}`, className)}>
      {children}
    </span>
  );
}
