import type { ElementType, HTMLAttributes, ReactNode } from 'react';

export type CardVariant = 'elevated' | 'outlined' | 'flat';
export type CardElevation = 0 | 1 | 2 | 3;

export interface CardProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children?: ReactNode;
  elevation?: CardElevation;
  interactive?: boolean;
  variant?: CardVariant;
}

declare const Card: import('react').ForwardRefExoticComponent<
  CardProps & import('react').RefAttributes<HTMLElement>
>;

export default Card;
