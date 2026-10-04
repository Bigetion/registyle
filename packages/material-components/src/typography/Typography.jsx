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
        'mui-typography',
        `mui-typography-${variant}`,
        `mui-typography-${align}`,
        `mui-typography-weight-${weight}`,
        color !== 'default' && `mui-typography-color-${color}`,
        className,
      )}
    >
      {children}
    </Tag>
  );
});

export default Typography;
