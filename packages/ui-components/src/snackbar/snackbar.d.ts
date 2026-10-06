import type { HTMLAttributes, ReactNode } from 'react';

export type SnackbarSeverity = 'info' | 'success' | 'warning' | 'error';
export type SnackbarCloseReason = 'timeout' | 'closeButtonClick';

export interface SnackbarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  action?: ReactNode;
  autoHideDuration?: number | null;
  children?: ReactNode;
  closeLabel?: string;
  onClose?: (reason: SnackbarCloseReason) => void;
  open?: boolean;
  severity?: SnackbarSeverity;
}

declare const Snackbar: import('react').ForwardRefExoticComponent<
  SnackbarProps & import('react').RefAttributes<HTMLDivElement>
>;

export default Snackbar;
