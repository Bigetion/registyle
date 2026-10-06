import { forwardRef } from 'react';
import { cx } from 'registyle';
import './icon-glyph.styles.js';

const paths = {
  home: <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </>
  ),
  account: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  notifications: (
    <>
      <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
      <path d="M10 21h4" />
    </>
  ),
  favorite: (
    <path d="m12 21-1.5-1.4C5.2 14.7 2 11.8 2 8.2A5.2 5.2 0 0 1 7.2 3c1.8 0 3.6.9 4.8 2.3A6.4 6.4 0 0 1 16.8 3 5.2 5.2 0 0 1 22 8.2c0 3.6-3.2 6.5-8.5 11.4z" />
  ),
  star: <path d="m12 2.8 2.8 5.7 6.3.9-4.6 4.5 1.1 6.3-5.6-3-5.6 3 1.1-6.3L3 9.4l6.3-.9z" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  cart: (
    <>
      <path d="M3 4h2l2.5 11h10L20 8H6" />
      <circle cx="9" cy="19" r="1" />
      <circle cx="17" cy="19" r="1" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path
        d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.6a8 8 0 0 1-1.7 1l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.7-1l-1.7.6-1.4-2.4 1.4-1.1a7 7 0 0 1 0-2l-1.4-1.1 1.4-2.4 1.7.6a8 8 0 0 1 1.7-1l.3-1.8h2.8l.3 1.8a8 8 0 0 1 1.7 1l1.7-.6 1.4 2.4-1.4 1.1a7 7 0 0 1-.1 2z"
        transform="translate(-1 -2)"
      />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5m0-8h.01" />
    </>
  ),
  warning: (
    <>
      <path d="M10.3 4.3 2.6 18a2 2 0 0 0 1.7 3h15.4a2 2 0 0 0 1.7-3L13.7 4.3a2 2 0 0 0-3.4 0z" />
      <path d="M12 9v4m0 4h.01" />
    </>
  ),
  verified: (
    <>
      <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  add: <path d="M12 5v14m-7-7h14" />,
  back: (
    <>
      <path d="m15 18-6-6 6-6" />
      <path d="M9 12h12" />
    </>
  ),
  share: (
    <>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="m8.7 10.7 6.6-4.4m-6.6 7 6.6 4.4" />
    </>
  ),
  delete: (
    <>
      <path d="M3 6h18m-2 0-.9 14H5.9L5 6m4 0V4h6v2m-5 4v6m4-6v6" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  more: (
    <>
      <circle cx="5" cy="12" r="1" />
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
    </>
  ),
};

const IconGlyph = forwardRef(function IconGlyph(
  { className, color = 'currentColor', name, size = 24, title, ...props },
  ref,
) {
  const accessibleTitle = title ?? name;

  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: Unnamed icons are decorative and hidden from assistive technology.
    <svg
      {...props}
      ref={ref}
      className={cx('rgi-icon-glyph', className)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={props.fill ?? 'none'}
      stroke={color}
      strokeWidth={props.strokeWidth ?? 2}
      strokeLinecap={props.strokeLinecap ?? 'round'}
      strokeLinejoin={props.strokeLinejoin ?? 'round'}
      role={accessibleTitle ? 'img' : undefined}
      aria-hidden={accessibleTitle ? undefined : true}
    >
      {accessibleTitle && <title>{accessibleTitle}</title>}
      {paths[name] ?? paths.info}
    </svg>
  );
});

export default IconGlyph;
