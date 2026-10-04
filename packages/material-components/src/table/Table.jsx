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
        'mui-table',
        `mui-table-${density}`,
        hoverable && 'mui-table-hoverable',
        stickyHeader && 'mui-table-sticky-header',
        striped && 'mui-table-striped',
        className,
      )}
    >
      {children}
    </table>
  );
});

export default Table;
