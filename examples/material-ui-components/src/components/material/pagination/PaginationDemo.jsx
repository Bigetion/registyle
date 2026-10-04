import { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { cx } from 'registyle';

const ROWS = Array.from({ length: 36 }, (_, index) => ({
  id: `PRJ-${String(1240 + index)}`,
  name: ['Website refresh', 'Mobile onboarding', 'Design system', 'Billing portal'][index % 4],
  owner: ['Avery Chen', 'Jordan Lee', 'Sam Rivera'][index % 3],
  status: ['In progress', 'In review', 'Complete'][index % 3],
}));

function getPageItems(page, pageCount) {
  if (pageCount <= 7) return Array.from({ length: pageCount }, (_, index) => index + 1);
  if (page <= 3) return [1, 2, 3, 4, 'start-gap', pageCount];
  if (page >= pageCount - 2) return [1, 'end-gap', pageCount - 3, pageCount - 2, pageCount - 1, pageCount];
  return [1, 'start-gap', page - 1, page, page + 1, 'end-gap', pageCount];
}

function PaginationControl({ page, pageCount, onChange, variant = 'standard', label = 'Pagination' }) {
  const items = getPageItems(page, pageCount);
  const buttonClass = (active = false, extra = '') => cx(
    'pagination-button',
    variant === 'outlined' && 'pagination-button-outlined',
    active && 'pagination-button-active',
    active && variant === 'outlined' && 'pagination-button-outlined-active',
    extra,
  );

  return (
    <nav className={cx('rgi-pagination', variant === 'outlined' && 'rgi-pagination-outlined')} aria-label={label}>
      <button
        className={buttonClass(false, 'pagination-edge-button')}
        type="button"
        aria-label="First page"
        disabled={page === 1}
        onClick={() => onChange(1)}
      >
        <ChevronsLeft size={14} aria-hidden="true" />
      </button>
      <button
        className={buttonClass(false, 'pagination-direction-button')}
        type="button"
        aria-label="Previous page"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
      >
        <ChevronLeft size={14} aria-hidden="true" />
        <span>Previous</span>
      </button>
      {items.map((item) => typeof item === 'number' ? (
        <button
          className={buttonClass(item === page)}
          type="button"
          key={item}
          aria-label={`Page ${item}`}
          aria-current={item === page ? 'page' : undefined}
          onClick={() => onChange(item)}
        >
          {item}
        </button>
      ) : (
        <span className="pagination-ellipsis" key={item} aria-hidden="true">…</span>
      ))}
      <button
        className={buttonClass(false, 'pagination-direction-button')}
        type="button"
        aria-label="Next page"
        disabled={page === pageCount}
        onClick={() => onChange(page + 1)}
      >
        <span>Next</span>
        <ChevronRight size={14} aria-hidden="true" />
      </button>
      <button
        className={buttonClass(false, 'pagination-edge-button')}
        type="button"
        aria-label="Last page"
        disabled={page === pageCount}
        onClick={() => onChange(pageCount)}
      >
        <ChevronsRight size={14} aria-hidden="true" />
      </button>
    </nav>
  );
}

function BasicPaginationDemo() {
  const [page, setPage] = useState(1);
  const pageCount = 12;

  return (
    <div className="pagination-demo">
      <div className="pagination-demo-heading">
        <strong>Project activity</strong>
        <span>Page {page} of {pageCount}</span>
      </div>
      <PaginationControl page={page} pageCount={pageCount} onChange={setPage} />
      <span className="preview-note" role="status">Showing projects {((page - 1) * 8) + 1}–{Math.min(page * 8, 96)} of 96</span>
    </div>
  );
}

function OutlinedPaginationDemo() {
  const [page, setPage] = useState(4);

  return (
    <div className="pagination-demo pagination-outlined-demo">
      <div className="pagination-demo-heading">
        <strong>Outlined controls</strong>
        <span>Jump between 24 pages</span>
      </div>
      <PaginationControl page={page} pageCount={24} onChange={setPage} variant="outlined" label="Outlined pagination" />
      <span className="preview-note" role="status">Page {page} selected</span>
    </div>
  );
}

function PaginationSizesDemo() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const pageCount = Math.ceil(ROWS.length / pageSize);
  const visibleRows = ROWS.slice((page - 1) * pageSize, page * pageSize);
  const firstRow = (page - 1) * pageSize + 1;
  const lastRow = Math.min(page * pageSize, ROWS.length);

  function changePageSize(nextSize) {
    setPageSize(nextSize);
    setPage(1);
  }

  return (
    <div className="pagination-demo pagination-table-demo">
      <div className="pagination-table-header">
        <div className="pagination-demo-heading">
          <strong>Recent projects</strong>
          <span>Showing {firstRow}–{lastRow} of {ROWS.length}</span>
        </div>
        <label className="pagination-size-control">
          Rows per page
          <select value={pageSize} onChange={(event) => changePageSize(Number(event.target.value))}>
            {[5, 10, 20].map((size) => <option key={size} value={size}>{size}</option>)}
          </select>
        </label>
      </div>
      <div className="pagination-table-wrap">
        <table className="pagination-table">
          <thead><tr><th>Project</th><th>Owner</th><th>Status</th></tr></thead>
          <tbody>
            {visibleRows.map((row) => (
              <tr key={row.id}>
                <td><strong>{row.name}</strong><small>{row.id}</small></td>
                <td>{row.owner}</td>
                <td><span className={cx('pagination-status', `pagination-status-${row.status.toLowerCase().replaceAll(' ', '-')}`)}>{row.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination-table-footer">
        <span className="preview-note" role="status">Page {page} of {pageCount}</span>
        <PaginationControl page={page} pageCount={pageCount} onChange={setPage} label="Project table pagination" />
      </div>
    </div>
  );
}

export default function PaginationDemo({ demoId }) {
  if (demoId === 'pagination-outlined') return <OutlinedPaginationDemo />;
  if (demoId === 'pagination-sizes') return <PaginationSizesDemo />;
  return <BasicPaginationDemo />;
}
