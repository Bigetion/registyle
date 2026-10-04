import type { SVGAttributes } from 'react';

export type MaterialIconName =
  | 'home'
  | 'search'
  | 'account'
  | 'notifications'
  | 'favorite'
  | 'star'
  | 'mail'
  | 'cart'
  | 'settings'
  | 'info'
  | 'warning'
  | 'verified'
  | 'add'
  | 'back'
  | 'share'
  | 'delete'
  | 'check'
  | 'close'
  | 'menu'
  | 'more';

export interface MaterialIconsProps
  extends Omit<SVGAttributes<SVGSVGElement>, 'color' | 'height' | 'width'> {
  color?: string;
  name: MaterialIconName;
  size?: number | string;
  title?: string;
}

declare const MaterialIcons: import('react').ForwardRefExoticComponent<
  MaterialIconsProps & import('react').RefAttributes<SVGSVGElement>
>;

export default MaterialIcons;
