import { forwardRef } from 'react';
import { cx } from 'registyle';
import './pagination.styles.js';

function getPages(count, page, siblingCount, boundaryCount) {
  const pages = new Set();
  for (let i = 1; i <= Math.min(boundaryCount, count); i += 1) pages.add(i);
  for (let i = Math.max(1, page - siblingCount); i <= Math.min(count, page + siblingCount); i += 1)
    pages.add(i);
  for (let i = Math.max(1, count - boundaryCount + 1); i <= count; i += 1) pages.add(i);
  const sorted = [...pages].sort((a, b) => a - b);
  const result = [];
  sorted.forEach((item, index) => {
    if (index && item - sorted[index - 1] > 1) result.push({ ellipsis: true, key: `gap-${item}` });
    result.push({ page: item, key: item });
  });
  return result;
}

const Pagination = forwardRef(function Pagination(
  {
    className,
    count = 1,
    page = 1,
    onChange,
    siblingCount = 1,
    boundaryCount = 1,
    disabled = false,
    getItemAriaLabel = (type, item) =>
      type === 'page'
        ? `Go to page ${item}`
        : `${type === 'previous' ? 'Go to previous' : 'Go to next'} page`,
    ...props
  },
  ref,
) {
  const total = Number.isFinite(count) ? Math.max(0, Math.floor(count)) : 0;
  const current = total ? Math.min(total, Math.max(1, Math.floor(page))) : 0;
  const pages = getPages(total, current, Math.max(0, siblingCount), Math.max(0, boundaryCount));
  const change = (next, event) => {
    if (!disabled && next >= 1 && next <= total && next !== current) onChange?.(event, next);
  };
  const button = (type, label, target, isDisabled) => (
    <button
      key={type}
      type="button"
      className="mui-pagination-button"
      aria-label={getItemAriaLabel(type, target)}
      disabled={disabled || isDisabled}
      onClick={(event) => change(target, event)}
    >
      {label}
    </button>
  );
  return (
    <nav
      {...props}
      ref={ref}
      aria-label={props['aria-label'] ?? 'Pagination'}
      className={cx('mui-pagination', className)}
    >
      <ul className="mui-pagination-list">
        <li>{button('previous', '‹', current - 1, current <= 1)}</li>
        {pages.map(({ page: pageNumber, key, ellipsis }) => (
          <li key={key}>
            {ellipsis ? (
              <span className="mui-pagination-ellipsis" aria-hidden="true">
                …
              </span>
            ) : (
              <button
                type="button"
                className={cx(
                  'mui-pagination-button',
                  pageNumber === current && 'mui-pagination-current',
                )}
                aria-current={pageNumber === current ? 'page' : undefined}
                aria-label={getItemAriaLabel('page', pageNumber)}
                disabled={disabled}
                onClick={(event) => change(pageNumber, event)}
              >
                {pageNumber}
              </button>
            )}
          </li>
        ))}
        <li>{button('next', '›', current + 1, current >= total)}</li>
      </ul>
    </nav>
  );
});

export default Pagination;
