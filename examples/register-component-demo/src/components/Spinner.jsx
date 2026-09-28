import React from 'react';
import { cx } from 'registyle';

export function Spinner({ size = 'md', color = 'primary', className }) {
  return <span className={cx('spinner', `spinner-${size}`, `spinner-${color}`, className)} />;
}
