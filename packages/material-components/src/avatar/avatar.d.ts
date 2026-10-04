import type { HTMLAttributes, ReactNode } from 'react';

export type AvatarColor = 'default' | 'primary' | 'success' | 'warning';
export type AvatarSize = 'small' | 'medium' | 'large';

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  alt?: string;
  children?: ReactNode;
  color?: AvatarColor;
  size?: AvatarSize;
  src?: string;
}

declare const Avatar: import('react').ForwardRefExoticComponent<
  AvatarProps & import('react').RefAttributes<HTMLSpanElement>
>;

export default Avatar;
