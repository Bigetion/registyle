import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

export interface BottomNavigationProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
  'aria-label'?: string;
  value?: string | number;
  onChange?: (event: React.MouseEvent<HTMLButtonElement>, value: string | number) => void;
  children?: ReactNode;
}
export interface BottomNavigationItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  label?: ReactNode;
  value?: string | number;
  selected?: boolean;
  onSelect?: (event: React.MouseEvent<HTMLButtonElement>, value?: string | number) => void;
}
declare const BottomNavigation: import('react').ForwardRefExoticComponent<
  BottomNavigationProps & import('react').RefAttributes<HTMLElement>
>;
export declare const BottomNavigationItem: import('react').ForwardRefExoticComponent<
  BottomNavigationItemProps & import('react').RefAttributes<HTMLButtonElement>
>;
export default BottomNavigation;
