import { cx } from 'registyle';

export function Button({ variant = 'primary', className, children, ...props }) {
  return (
    <a className={cx('action-button', `action-button-${variant}`, className)} {...props}>
      {children}
    </a>
  );
}