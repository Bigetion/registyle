import type { InputHTMLAttributes } from 'react';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  indeterminate?: boolean;
  inputClassName?: string;
}

declare const Checkbox: import('react').ForwardRefExoticComponent<
  CheckboxProps & import('react').RefAttributes<HTMLInputElement>
>;

export default Checkbox;
