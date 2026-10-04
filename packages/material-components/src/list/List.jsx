import { forwardRef } from 'react';
import { cx } from 'registyle';
import './list.styles.js';

const List = forwardRef(function List(
  {
    children,
    className,
    component,
    dense = false,
    disablePadding = false,
    ordered = false,
    ...props
  },
  ref,
) {
  const Tag = component ?? (ordered ? 'ol' : 'ul');
  return (
    <Tag
      {...props}
      ref={ref}
      className={cx(
        'mui-list',
        dense && 'mui-list-dense',
        disablePadding && 'mui-list-no-padding',
        className,
      )}
    >
      {children}
    </Tag>
  );
});

export const ListItem = forwardRef(function ListItem(
  { children, className, divider = false, disableGutters = false, ...props },
  ref,
) {
  return (
    <li
      {...props}
      ref={ref}
      className={cx(
        'mui-list-item',
        divider && 'mui-list-item-divider',
        disableGutters && 'mui-list-item-no-gutters',
        className,
      )}
    >
      {children}
    </li>
  );
});

export const ListItemText = forwardRef(function ListItemText(
  { className, primary, secondary, ...props },
  ref,
) {
  return (
    <span {...props} ref={ref} className={cx('mui-list-item-text', className)}>
      {primary != null && <span className="mui-list-primary">{primary}</span>}
      {secondary != null && <span className="mui-list-secondary">{secondary}</span>}
    </span>
  );
});

export default List;
