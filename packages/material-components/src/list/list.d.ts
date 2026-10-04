import type { ElementType, HTMLAttributes, ReactNode } from 'react';

export interface ListProps extends HTMLAttributes<HTMLUListElement | HTMLOListElement> {
  children?: ReactNode;
  component?: ElementType;
  dense?: boolean;
  disablePadding?: boolean;
  ordered?: boolean;
}

export interface ListItemProps extends HTMLAttributes<HTMLLIElement> {
  children?: ReactNode;
  divider?: boolean;
  disableGutters?: boolean;
}

export interface ListItemTextProps extends HTMLAttributes<HTMLSpanElement> {
  primary?: ReactNode;
  secondary?: ReactNode;
}

export declare const ListItem: import('react').ForwardRefExoticComponent<
  ListItemProps & import('react').RefAttributes<HTMLLIElement>
>;

export declare const ListItemText: import('react').ForwardRefExoticComponent<
  ListItemTextProps & import('react').RefAttributes<HTMLSpanElement>
>;

declare const List: import('react').ForwardRefExoticComponent<
  ListProps & import('react').RefAttributes<HTMLUListElement | HTMLOListElement>
>;

export default List;
