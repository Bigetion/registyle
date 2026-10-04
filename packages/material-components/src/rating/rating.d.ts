import type { HTMLAttributes, RefAttributes } from 'react';

export interface RatingProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  max?: number;
  name?: string;
  label?: string;
  disabled?: boolean;
  readOnly?: boolean;
}

declare const Rating: import('react').ForwardRefExoticComponent<
  RatingProps & RefAttributes<HTMLDivElement>
>;

export default Rating;
