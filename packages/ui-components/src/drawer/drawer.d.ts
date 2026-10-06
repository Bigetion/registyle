import type { HTMLAttributes, ReactNode } from 'react';

export type DrawerAnchor = 'left' | 'right' | 'top' | 'bottom';
export type DrawerVariant = 'temporary' | 'persistent' | 'permanent';
export interface DrawerProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  open?: boolean;
  onClose?: (event: Event | React.SyntheticEvent) => void;
  anchor?: DrawerAnchor;
  variant?: DrawerVariant;
  closeOnEscape?: boolean;
  closeOnBackdrop?: boolean;
  'aria-label'?: string;
}
declare const Drawer: import('react').ForwardRefExoticComponent<
  DrawerProps & import('react').RefAttributes<HTMLElement>
>;
export default Drawer;
