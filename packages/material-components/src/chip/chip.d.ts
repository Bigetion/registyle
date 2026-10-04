import type { ComponentType, HTMLAttributes, MouseEventHandler, ReactNode } from 'react';

export type ChipColor = 'default' | 'primary' | 'success' | 'warning';
export type ChipSize = 'small' | 'medium';
export type ChipVariant = 'filled' | 'outlined';

export interface ChipProps extends Omit<HTMLAttributes<HTMLElement>, 'onClick'> {
  children?: ReactNode;
  color?: ChipColor;
  deleteIcon?: ReactNode;
  deleteLabel?: string;
  disabled?: boolean;
  icon?: ComponentType<{ size?: number; className?: string; 'aria-hidden'?: boolean }>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onDelete?: MouseEventHandler<HTMLButtonElement>;
  selected?: boolean;
  size?: ChipSize;
  variant?: ChipVariant;
}

declare const Chip: import('react').ForwardRefExoticComponent<
  ChipProps & import('react').RefAttributes<HTMLElement>
>;

export default Chip;
