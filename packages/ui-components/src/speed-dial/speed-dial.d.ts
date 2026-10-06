import type { HTMLAttributes, ReactNode } from 'react';

export interface SpeedDialAction {
  key?: string | number;
  name: string;
  icon?: ReactNode;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export interface SpeedDialProps extends HTMLAttributes<HTMLDivElement> {
  actions?: SpeedDialAction[];
  icon?: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpen?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onActionClick?: (event: React.MouseEvent<HTMLButtonElement>, action: SpeedDialAction) => void;
  ariaLabel?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}
declare const SpeedDial: import('react').ForwardRefExoticComponent<
  SpeedDialProps & import('react').RefAttributes<HTMLDivElement>
>;
export default SpeedDial;
