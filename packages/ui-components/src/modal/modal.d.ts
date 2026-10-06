import type { HTMLAttributes, ReactNode } from 'react';

export type ModalCloseReason = 'escapeKeyDown' | 'backdropClick';
export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onClose'> {
  children?: ReactNode;
  open?: boolean;
  onClose?: (
    event: KeyboardEvent | React.MouseEvent<HTMLDivElement>,
    reason: ModalCloseReason,
  ) => void;
  closeOnEscape?: boolean;
  closeOnBackdrop?: boolean;
  container?: HTMLElement | null | (() => HTMLElement | null);
  'aria-label'?: string;
  'aria-labelledby'?: string;
}
declare const Modal: import('react').ForwardRefExoticComponent<
  ModalProps & import('react').RefAttributes<HTMLDivElement>
>;
export default Modal;
