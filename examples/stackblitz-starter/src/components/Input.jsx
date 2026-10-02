import { cx } from 'registyle';

export function Input({ label, error, hint, className, ...props }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      {label && (
        <label style={{ fontSize: '13px', fontWeight: 500, color: '#374151' }}>
          {label}
        </label>
      )}
      <input
        className={cx('input-field', error && 'input-field-error', className)}
        {...props}
      />
      {error && (
        <span style={{ fontSize: '12px', color: '#ef4444' }}>{error}</span>
      )}
      {hint && !error && (
        <span style={{ fontSize: '12px', color: '#6b7280' }}>{hint}</span>
      )}
    </div>
  );
}
