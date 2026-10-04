import { createPortal } from 'react-dom';
import { cx } from 'registyle';
import './portal.styles.js';

function Portal({ children, container, className }) {
  if (typeof document === 'undefined') return children ?? null;
  const target = typeof container === 'function' ? container() : container;
  const node = target ?? document.body;
  return createPortal(<div className={cx('mui-portal', className)}>{children}</div>, node);
}

export default Portal;
