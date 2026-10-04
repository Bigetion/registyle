import type { ButtonHTMLAttributes } from 'react';

export interface ToggleButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'aria-pressed' | 'size'> {
  selected?: boolean;
  size?: 'small' | 'medium';
}

declare const ToggleButton: import('react').ForwardRefExoticComponent<
  ToggleButtonProps & import('react').RefAttributes<HTMLButtonElement>
>;

export default ToggleButton;
