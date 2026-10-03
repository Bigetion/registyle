import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowDown, ArrowUp, ArrowUpDown, Check, ChevronDown, Download } from 'lucide-react';
import { cx } from 'registyle';

const INITIAL_ROWS = [
  { id: 'PRJ-2048', name: 'Mobile app redesign', owner: 'Olivia Martin', initials: 'OM', tone: 'table-avatar-blue', status: 'In progress', updated: '2026-10-02', progress: 72 },
  { id: 'PRJ-2047', name: 'Design system v2', owner: 'Jackson Lee', initials: 'JL', tone: 'table-avatar-violet', status: 'Review', updated: '2026-10-01', progress: 91 },
  { id: 'PRJ-2046', name: 'Customer insights', owner: 'Isabella Nguyen', initials: 'IN', tone: 'table-avatar-green', status: 'Complete', updated: '2026-09-29', progress: 100 },
  { id: 'PRJ-2045', name: 'API documentation', owner: 'William Kim', initials: 'WK', tone: 'table-avatar-amber', status: 'Planned', updated: '2026-09-26', progress: 18 },
];

const COLUMNS = [
  ['name', 'Project'],
  ['owner', 'Owner'],
  ['status', 'Status'],
  ['updated', 'Last updated'],
];

function SortButton({ column, label, sort, onSort }) {
  const active = sort.key === column;
  const Icon = !active ? ArrowUpDown : sort.direction === 'asc' ? ArrowUp : ArrowDown;
  return (
    <button
      className={cx('table-sort-button', active && 'table-sort-button-active')}
      type="button"
      aria-label={`Sort by ${label}${active ? `, ${sort.direction === 'asc' ? 'ascending' : 'descending'}` : ''}`}
      aria-pressed={active}
      onClick={() => onSort(column)}
    >
      {label}<Icon size={12} aria-hidden="true" />
    </button>
  );
}

function TableCheckbox({ checked, indeterminate = false, onChange, label }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);

  return (
    <input
      ref={ref}
      className="table-checkbox"
      type="checkbox"
      checked={checked}
      onChange={onChange}
      aria-label={label}
    />
  );
}

function TableGrid({ demoId }) {
  const [rows] = useState(INITIAL_ROWS);
  const [sort, setSort] = useState({ key: 'updated', direction: 'desc' });
  const [selected, setSelected] = useState([]);
  const [exportNotice, setExportNotice] = useState('');
  const isDense = demoId === 'table-dense';
  const hasSelection = demoId === 'table-selection';

  const sortedRows = useMemo(() => [...rows].sort((a, b) => {
    const result = String(a[sort.key]).localeCompare(String(b[sort.key]), undefined, {
      numeric: true,
      sensitivity: 'base',
    });
    return sort.direction === 'asc' ? result : -result;
  }), [rows, sort]);

  const allSelected = selected.length === rows.length;
  const someSelected = selected.length > 0 && !allSelected;

  const changeSort = (key) => {
    setSort((current) => ({
      key,
      direction: current.key === key && current.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  const toggleRow = (id) => {
    setSelected((current) => (
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    ));
  };

  const toggleAll = () => setSelected(allSelected ? [] : rows.map((row) => row.id));

  return (
    <div className="preview-stack">
      <div className="table-toolbar">
        <span className="table-result-count">{hasSelection ? `${selected.length} selected` : `${rows.length} projects`}</span>
        {hasSelection ? (
          <button className="table-toolbar-button" type="button" disabled={!selected.length} onClick={() => setSelected([])}>
            <Check size={13} aria-hidden="true" /> Clear selection
          </button>
        ) : (
          <button className="table-toolbar-button" type="button" onClick={() => changeSort('updated')}>
            Recently updated <ChevronDown size={13} aria-hidden="true" />
          </button>
        )}
      </div>
      <div className="table-wrap">
        <table className={cx('mini-table', isDense && 'mini-table-dense')}>
          <thead>
            <tr>
              {hasSelection && (
                <th className="table-check-cell">
                  <TableCheckbox
                    checked={allSelected}
                    indeterminate={someSelected}
                    onChange={toggleAll}
                    label="Select all projects"
                  />
                </th>
              )}
              {COLUMNS.map(([key, label]) => (
                <th key={key} aria-sort={sort.key === key ? (sort.direction === 'asc' ? 'ascending' : 'descending') : 'none'}>
                  <SortButton column={key} label={label} sort={sort} onSort={changeSort} />
                </th>
              ))}
              <th className="table-progress-heading">Progress</th>
            </tr>
          </thead>
          <tbody>
            {sortedRows.map((row) => (
              <tr className={cx(hasSelection && selected.includes(row.id) && 'table-row-selected')} key={row.id}>
                {hasSelection && (
                  <td className="table-check-cell">
                    <TableCheckbox
                      checked={selected.includes(row.id)}
                      onChange={() => toggleRow(row.id)}
                      label={`Select ${row.name}`}
                    />
                  </td>
                )}
                <td>
                  <span className="table-project">
                    <strong>{row.name}</strong>
                    <small>{row.id}</small>
                  </span>
                </td>
                <td>
                  <span className="table-owner">
                    <span className={cx('table-avatar', row.tone)} aria-hidden="true">{row.initials}</span>
                    {row.owner}
                  </span>
                </td>
                <td><span className={cx('table-status', `table-status-${row.status.toLowerCase().replace(' ', '-')}`)}>{row.status}</span></td>
                <td><time dateTime={row.updated}>{new Date(`${row.updated}T12:00:00`).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</time></td>
                <td className="table-progress-cell">
                  <span className="table-progress-value">{row.progress}%</span>
                  <span className="table-progress-track" aria-label={`${row.progress}% complete`}><i style={{ width: `${row.progress}%` }} /></span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="table-footer">
        <span>{hasSelection ? `${selected.length} of ${rows.length} rows selected` : `Showing ${rows.length} of ${rows.length} projects`}</span>
        <button className="table-export-button" type="button" onClick={() => setExportNotice(`Export ready for ${hasSelection ? selected.length : rows.length} projects.`)}>
          <Download size={13} aria-hidden="true" /> Export
        </button>
      </div>
      <span className="preview-note" role="status" aria-live="polite">
        {exportNotice || (isDense ? 'Compact density · reduced row padding' : hasSelection ? `${selected.length} of ${rows.length} projects selected` : `Sorted by ${COLUMNS.find(([key]) => key === sort.key)?.[1].toLowerCase()}, ${sort.direction === 'asc' ? 'ascending' : 'descending'}`)}
      </span>
    </div>
  );
}

export default function TableDemo({ demoId }) {
  return <TableGrid demoId={demoId} />;
}
