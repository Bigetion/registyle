import type { ElementType, HTMLAttributes, ReactNode } from 'react';

export type TypographyAlign = 'inherit' | 'left' | 'center' | 'right' | 'justify';
export type TypographyColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger';
export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'overline';
export type TypographyWeight = 'regular' | 'medium' | 'bold';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  align?: TypographyAlign;
  children?: ReactNode;
  color?: TypographyColor;
  component?: ElementType;
  variant?: TypographyVariant;
  weight?: TypographyWeight;
}

declare const Typography: import('react').ForwardRefExoticComponent<
  TypographyProps & import('react').RefAttributes<HTMLElement>
>;

export default Typography;
