import type { SVGAttributes } from 'react';

export type IconGlyphName =
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

export interface IconGlyphProps
  extends Omit<SVGAttributes<SVGSVGElement>, 'color' | 'height' | 'width'> {
  color?: string;
  name: IconGlyphName;
  size?: number | string;
  title?: string;
}

declare const IconGlyph: import('react').ForwardRefExoticComponent<
  IconGlyphProps & import('react').RefAttributes<SVGSVGElement>
>;

export default IconGlyph;
