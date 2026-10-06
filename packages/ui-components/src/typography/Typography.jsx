import { forwardRef } from 'react';
import { cx } from 'registyle';
import './typography.styles.js';

const Typography = forwardRef(function Typography(
  {
    align = 'inherit',
    children,
    className,
    color = 'default',
    component,
    variant = 'body1',
    weight = 'regular',
    ...props
  },
  ref,
) {
  const defaultTag =
    variant === 'h1' || variant === 'h2' || variant === 'h3' || variant === 'h4'
      ? variant
      : variant === 'subtitle1' ||
          variant === 'subtitle2' ||
          variant === 'body1' ||
          variant === 'body2'
        ? 'p'
        : variant === 'caption' || variant === 'overline'
          ? 'span'
          : 'p';
  const Tag = component ?? defaultTag;

  return (
    <Tag
      {...props}
      ref={ref}
      className={cx(
        'rgi-typography',
        `rgi-typography-${variant}`,
        `rgi-typography-${align}`,
        `rgi-typography-weight-${weight}`,
        color !== 'default' && `rgi-typography-color-${color}`,
        className,
      )}
    >
      {children}
    </Tag>
  );
});

export default Typography;
