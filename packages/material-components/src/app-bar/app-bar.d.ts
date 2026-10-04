import type { HTMLAttributes, ReactNode } from 'react';

export type AppBarPosition = 'static' | 'sticky' | 'fixed';
export type AppBarElevation = 0 | 1 | 2 | 3;

export interface AppBarProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  elevation?: AppBarElevation;
  position?: AppBarPosition;
}

declare const AppBar: import('react').ForwardRefExoticComponent<
  AppBarProps & import('react').RefAttributes<HTMLElement>
>;

export default AppBar;
