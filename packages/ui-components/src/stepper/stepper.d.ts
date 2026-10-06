import type { HTMLAttributes, ReactNode } from 'react';

export interface StepProps extends HTMLAttributes<HTMLLIElement> {
  label?: ReactNode;
  description?: ReactNode;
  index?: number;
  active?: boolean;
  completed?: boolean;
  disabled?: boolean;
}
export interface StepperProps extends HTMLAttributes<HTMLOListElement> {
  children?: ReactNode;
  activeStep?: number;
  orientation?: 'horizontal' | 'vertical';
  alternativeLabel?: boolean;
  nonLinear?: boolean;
  onStepClick?: (event: React.MouseEvent<HTMLButtonElement>, index: number) => void;
}
export declare const Step: import('react').ForwardRefExoticComponent<
  StepProps & import('react').RefAttributes<HTMLLIElement>
>;
declare const Stepper: import('react').ForwardRefExoticComponent<
  StepperProps & import('react').RefAttributes<HTMLOListElement>
>;
export default Stepper;
