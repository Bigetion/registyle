import type { HTMLAttributes, ReactNode } from 'react';

export type ButtonGroupOrientation = 'horizontal' | 'vertical';

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  orientation?: ButtonGroupOrientation;
}

declare const ButtonGroup: import('react').ForwardRefExoticComponent<
  ButtonGroupProps & import('react').RefAttributes<HTMLDivElement>
>;

export default ButtonGroup;
