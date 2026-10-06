import type { Modifier } from '@popperjs/core';
import type { CSSProperties, HTMLAttributes, ReactNode, RefObject } from 'react';

export type Placement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end';
export interface PopperProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  anchorEl?: HTMLElement | null;
  anchorRef?: RefObject<HTMLElement>;
  open?: boolean;
  placement?: Placement;
  offset?: number;
  strategy?: 'fixed' | 'absolute';
  container?: HTMLElement | null | (() => HTMLElement | null);
  disablePortal?: boolean;
  fallbackPlacements?: Placement[];
  preventOverflow?: boolean;
  modifiers?: Partial<Modifier<string, object>>[];
  style?: CSSProperties;
}
declare const Popper: import('react').ForwardRefExoticComponent<
  PopperProps & import('react').RefAttributes<HTMLDivElement>
>;
export default Popper;
