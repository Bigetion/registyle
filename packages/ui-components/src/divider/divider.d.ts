import type { HTMLAttributes, ReactNode } from 'react';

export type DividerOrientation = 'horizontal' | 'vertical';
export type DividerTextAlign = 'left' | 'center' | 'right';

export interface DividerProps extends HTMLAttributes<HTMLHRElement | HTMLDivElement> {
  children?: ReactNode;
  flexItem?: boolean;
  inset?: boolean;
  orientation?: DividerOrientation;
  textAlign?: DividerTextAlign;
}

declare const Divider: import('react').ForwardRefExoticComponent<
  DividerProps & import('react').RefAttributes<HTMLHRElement | HTMLDivElement>
>;

export default Divider;
