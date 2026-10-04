import type { HTMLAttributes, ReactNode } from 'react';

export interface TabDefinition {
  id?: string;
  value?: string | number;
  label: ReactNode;
  content: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
  tabIndex?: number;
}
export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  tabs?: TabDefinition[];
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (
    event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLDivElement>,
    value: string | number,
  ) => void;
  orientation?: 'horizontal' | 'vertical';
  activationMode?: 'automatic' | 'manual';
  ariaLabel?: string;
}
declare const Tabs: import('react').ForwardRefExoticComponent<
  TabsProps & import('react').RefAttributes<HTMLDivElement>
>;
export default Tabs;
