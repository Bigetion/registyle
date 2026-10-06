import type { HTMLAttributes, ReactNode } from 'react';

export type BadgeColor = 'default' | 'primary' | 'success' | 'warning' | 'danger';
export type BadgeOverlap = 'circular' | 'rectangular';
export type BadgeVariant = 'standard' | 'dot';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  badgeContent?: ReactNode;
  badgeLabel?: string;
  children?: ReactNode;
  color?: BadgeColor;
  invisible?: boolean;
  max?: number;
  overlap?: BadgeOverlap;
  showZero?: boolean;
  variant?: BadgeVariant;
}

declare const Badge: import('react').ForwardRefExoticComponent<
  BadgeProps & import('react').RefAttributes<HTMLSpanElement>
>;

export default Badge;
