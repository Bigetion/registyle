import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type FloatingActionButtonSize = 'small' | 'medium' | 'large';
export type FloatingActionButtonVariant = 'primary' | 'secondary' | 'extended' | 'action';

export interface FloatingActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  label?: string;
  size?: FloatingActionButtonSize;
  variant?: FloatingActionButtonVariant;
}

declare const FloatingActionButton: import('react').ForwardRefExoticComponent<
  FloatingActionButtonProps & import('react').RefAttributes<HTMLButtonElement>
>;

export default FloatingActionButton;
