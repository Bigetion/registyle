import type { HTMLAttributes, ReactNode } from 'react';

export type TableDensity = 'standard' | 'dense';

export interface TableProps extends HTMLAttributes<HTMLTableElement> {
  children?: ReactNode;
  density?: TableDensity;
  hoverable?: boolean;
  stickyHeader?: boolean;
  striped?: boolean;
}

declare const Table: import('react').ForwardRefExoticComponent<
  TableProps & import('react').RefAttributes<HTMLTableElement>
>;

export default Table;
