import type { ChangeEvent, FieldsetHTMLAttributes, ReactNode } from 'react';

export interface RadioGroupOption {
  value: string;
  label: ReactNode;
  description?: ReactNode;
  disabled?: boolean;
}

export type RadioGroupOrientation = 'horizontal' | 'vertical';

export interface RadioGroupProps
  extends Omit<FieldsetHTMLAttributes<HTMLFieldSetElement>, 'onChange' | 'value'> {
  options?: RadioGroupOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  legend?: ReactNode;
  orientation?: RadioGroupOrientation;
  required?: boolean;
}

declare const RadioGroup: import('react').ForwardRefExoticComponent<
  RadioGroupProps & import('react').RefAttributes<HTMLFieldSetElement>
>;

export default RadioGroup;
