import type { AnchorHTMLAttributes, ReactNode } from 'react';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode;
  underline?: 'always' | 'hover' | 'none';
  color?: 'primary' | 'secondary' | 'inherit';
}
declare const Link: import('react').ForwardRefExoticComponent<
  LinkProps & import('react').RefAttributes<HTMLAnchorElement>
>;
export default Link;
