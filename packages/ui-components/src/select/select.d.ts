import type { ReactNode, SelectHTMLAttributes } from 'react';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
  helperText?: ReactNode;
  inputClassName?: string;
  label?: ReactNode;
}

declare const Select: import('react').ForwardRefExoticComponent<
  SelectProps & import('react').RefAttributes<HTMLSelectElement>
>;

export default Select;
