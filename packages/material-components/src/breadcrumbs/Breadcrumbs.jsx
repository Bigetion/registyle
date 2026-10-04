import { Children, cloneElement, forwardRef, isValidElement } from 'react';
import { cx } from 'registyle';
import './breadcrumbs.styles.js';

const Breadcrumbs = forwardRef(function Breadcrumbs(
  { children, className, separator = '/', maxItems, ...props },
  ref,
) {
  const items = Children.toArray(children);
  const visible =
    maxItems === 1 && items.length > 1
      ? [items[items.length - 1]]
      : maxItems && maxItems >= 2 && items.length > maxItems
        ? [
            items[0],
            <span className="rgi-breadcrumbs-ellipsis" key="ellipsis">
              <span aria-hidden="true">…</span>
              <span className="sr-only">More breadcrumb items</span>
            </span>,
            ...items.slice(-(maxItems - 1)),
          ]
        : items;

  return (
    <nav
      {...props}
      ref={ref}
      aria-label={props['aria-label'] ?? 'Breadcrumb'}
      className={cx('rgi-breadcrumbs', className)}
    >
      <ol className="rgi-breadcrumbs-list">
        {visible.map((item, index) => (
          <li
            className="rgi-breadcrumbs-item"
            key={isValidElement(item) && item.key != null ? item.key : index}
            aria-current={
              index === visible.length - 1 && !isValidElement(item) ? 'page' : undefined
            }
          >
            {isValidElement(item) && index === visible.length - 1
              ? cloneElement(item, { 'aria-current': item.props['aria-current'] ?? 'page' })
              : item}
            {index < visible.length - 1 && (
              <span className="rgi-breadcrumbs-separator" aria-hidden="true">
                {separator}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
});

export default Breadcrumbs;
