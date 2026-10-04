import type { InputHTMLAttributes, ReactNode } from 'react';

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  inputClassName?: string;
  label?: ReactNode;
}

declare const Switch: import('react').ForwardRefExoticComponent<
  SwitchProps & import('react').RefAttributes<HTMLInputElement>
>;

export default Switch;
