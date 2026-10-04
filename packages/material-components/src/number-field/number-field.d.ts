import type { ChangeEvent, InputHTMLAttributes } from 'react';

export type NumberFieldValue = number | string;
export type NumberFieldStep = number | 'any';
export type NumberFieldUnitPosition = 'start' | 'end';

export interface NumberFieldProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'type' | 'value' | 'defaultValue' | 'onChange' | 'min' | 'max' | 'step'
  > {
  value?: NumberFieldValue;
  defaultValue?: NumberFieldValue;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onValueChange?: (value: string) => void;
  min?: number;
  max?: number;
  step?: NumberFieldStep;
  unit?: string;
  unitPosition?: NumberFieldUnitPosition;
  inputClassName?: string;
  decrementLabel?: string;
  incrementLabel?: string;
}

declare const NumberField: import('react').ForwardRefExoticComponent<
  NumberFieldProps & import('react').RefAttributes<HTMLInputElement>
>;

export default NumberField;
