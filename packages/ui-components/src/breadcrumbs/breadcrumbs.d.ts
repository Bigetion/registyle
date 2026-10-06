import type { HTMLAttributes, ReactNode } from 'react';

export interface BreadcrumbsProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  separator?: ReactNode;
  maxItems?: number;
}
declare const Breadcrumbs: import('react').ForwardRefExoticComponent<
  BreadcrumbsProps & import('react').RefAttributes<HTMLElement>
>;
export default Breadcrumbs;
