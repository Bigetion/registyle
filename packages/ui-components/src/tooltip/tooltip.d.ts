import type { HTMLAttributes, ReactNode } from 'react';

export type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left';

export interface TooltipProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'content'> {
  children?: ReactNode;
  content?: ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  placement?: TooltipPlacement;
}

declare const Tooltip: import('react').ForwardRefExoticComponent<
  TooltipProps & import('react').RefAttributes<HTMLSpanElement>
>;

export default Tooltip;
