import type { HTMLAttributes, ReactNode } from 'react';

export interface ClickAwayListenerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  onClickAway: (event: MouseEvent | TouchEvent) => void;
  mouseEvent?: 'click' | 'mousedown' | 'none';
  touchEvent?: 'touchend' | 'none';
}
declare const ClickAwayListener: import('react').ForwardRefExoticComponent<
  ClickAwayListenerProps & import('react').RefAttributes<HTMLDivElement>
>;
export default ClickAwayListener;
