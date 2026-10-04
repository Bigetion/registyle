import type { HTMLAttributes, ReactNode } from 'react';

export type AlertSeverity = 'info' | 'success' | 'warning' | 'error';
export type AlertVariant = 'standard' | 'outlined';

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  children?: ReactNode;
  closeLabel?: string;
  icon?: ReactNode | null;
  onClose?: HTMLAttributes<HTMLButtonElement>['onClick'];
  severity?: AlertSeverity;
  title?: ReactNode;
  variant?: AlertVariant;
}

declare const Alert: import('react').ForwardRefExoticComponent<
  AlertProps & import('react').RefAttributes<HTMLDivElement>
>;

export default Alert;
