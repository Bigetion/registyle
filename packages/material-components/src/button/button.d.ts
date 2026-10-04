import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'contained' | 'outlined' | 'text';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonColor = 'primary' | 'success' | 'warning' | 'danger';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  color?: ButtonColor;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

declare const Button: import('react').ForwardRefExoticComponent<
  ButtonProps & import('react').RefAttributes<HTMLButtonElement>
>;

export default Button;
