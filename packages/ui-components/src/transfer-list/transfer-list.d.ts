import type { ReactNode } from 'react';

export interface TransferListItem {
  id: string;
  label: ReactNode;
  description?: ReactNode;
}

export interface TransferListProps {
  className?: string;
  defaultValue?: string[];
  items: TransferListItem[];
  onChange?: (value: string[], movedItems: TransferListItem[]) => void;
  sourceTitle?: string;
  targetTitle?: string;
  value?: string[];
}

declare const TransferList: (props: TransferListProps) => import('react').ReactElement;

export default TransferList;
