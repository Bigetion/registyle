import type { HTMLAttributes } from 'react';

export type ProgressVariant = 'linear' | 'circular';

export interface ProgressProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  label?: string;
  max?: number;
  size?: number;
  value?: number | null;
  variant?: ProgressVariant;
}

declare const Progress: import('react').ForwardRefExoticComponent<
  ProgressProps & import('react').RefAttributes<HTMLDivElement>
>;

export default Progress;
