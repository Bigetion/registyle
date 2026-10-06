import type { CSSProperties, HTMLAttributes } from 'react';

export type SkeletonVariant = 'text' | 'rectangular' | 'circular';
export type SkeletonAnimation = 'pulse' | 'wave' | 'none';

export interface SkeletonProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'height' | 'width'> {
  animation?: SkeletonAnimation;
  height?: CSSProperties['height'];
  variant?: SkeletonVariant;
  width?: CSSProperties['width'];
}

declare const Skeleton: import('react').ForwardRefExoticComponent<
  SkeletonProps & import('react').RefAttributes<HTMLSpanElement>
>;

export default Skeleton;
