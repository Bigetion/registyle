import type { HTMLAttributes, MouseEvent, ReactNode } from 'react';

export type DialogCloseReason = 'escapeKeyDown' | 'backdropClick' | 'closeButtonClick';

export interface DialogProps extends Omit<HTMLAttributes<HTMLElement>, 'title' | 'onClose'> {
  actions?: ReactNode;
  children?: ReactNode;
  closeLabel?: string;
  description?: ReactNode;
  onClose?: (
    event: KeyboardEvent | MouseEvent<HTMLButtonElement> | MouseEvent<HTMLDivElement>,
    reason: DialogCloseReason,
  ) => void;
  open?: boolean;
  title?: ReactNode;
}

declare const Dialog: import('react').ForwardRefExoticComponent<
  DialogProps & import('react').RefAttributes<HTMLElement>
>;

export default Dialog;
