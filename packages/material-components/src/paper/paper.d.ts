import type { HTMLAttributes, ReactNode } from 'react';

export type PaperElevation = 0 | 1 | 2 | 3 | 4 | 5;

export interface PaperProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  elevation?: PaperElevation;
  square?: boolean;
}

declare const Paper: import('react').ForwardRefExoticComponent<
  PaperProps & import('react').RefAttributes<HTMLDivElement>
>;

export default Paper;
