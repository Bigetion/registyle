import { forwardRef } from 'react';
import { cx } from 'registyle';
import './table.styles.js';

const Table = forwardRef(function Table(
  {
    children,
    className,
    density = 'standard',
    hoverable = false,
    stickyHeader = false,
    striped = false,
    ...props
  },
  ref,
) {
  return (
    <table
      {...props}
      ref={ref}
      className={cx(
        'rgi-table',
        `rgi-table-${density}`,
        hoverable && 'rgi-table-hoverable',
        stickyHeader && 'rgi-table-sticky-header',
        striped && 'rgi-table-striped',
        className,
      )}
    >
      {children}
    </table>
  );
});

export default Table;
