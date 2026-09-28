import React from 'react';
import { cx } from 'registyle';

export function Badge({ children, variant = 'default', size, dot, className }) {
  if (dot) {
    return <span className={cx('badge badge-dot', `badge-dot-${variant}`, className)} />;
  }
  return (
    <span className={cx('badge', `badge-${variant}`, size && `badge-${size}`, className)}>
      {children}
    </span>
  );
}
