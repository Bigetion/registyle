import type { HTMLAttributes, ReactNode } from 'react';

export type PopoverPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'right';
export type PopoverCloseReason = 'backdropClick' | 'escapeKeyDown';

export interface PopoverProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onClose'> {
  anchorEl?: HTMLElement | null;
  children?: ReactNode;
  label?: string;
  labelledBy?: string;
  offset?: number;
  onClose?: (event: PointerEvent | KeyboardEvent, reason: PopoverCloseReason) => void;
  open?: boolean;
  placement?: PopoverPlacement;
  role?: 'dialog' | 'menu' | 'listbox' | 'tooltip' | 'region';
}

declare const Popover: import('react').ForwardRefExoticComponent<
  PopoverProps & import('react').RefAttributes<HTMLDivElement>
>;

export default Popover;
