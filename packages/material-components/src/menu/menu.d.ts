import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import type { Placement } from '../popper/popper';

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  open?: boolean;
  anchorEl?: HTMLElement | null;
  placement?: Placement;
  onClose?: (event: Event | React.SyntheticEvent) => void;
  'aria-label'?: string;
}
export interface MenuItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
declare const Menu: import('react').ForwardRefExoticComponent<
  MenuProps & import('react').RefAttributes<HTMLDivElement>
>;
export declare const MenuItem: import('react').ForwardRefExoticComponent<
  MenuItemProps & import('react').RefAttributes<HTMLButtonElement>
>;
export default Menu;
