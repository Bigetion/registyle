import type { ReactNode, SVGAttributes } from 'react';

export interface IconsProps
  extends Omit<SVGAttributes<SVGSVGElement>, 'color' | 'children' | 'height' | 'width'> {
  children?: ReactNode;
  color?: string;
  size?: number | string;
  title?: string;
  viewBox?: string;
}

declare const Icons: import('react').ForwardRefExoticComponent<
  IconsProps & import('react').RefAttributes<SVGSVGElement>
>;

export default Icons;
