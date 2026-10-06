import type { HTMLAttributes, MouseEvent, ReactNode } from 'react';

export interface AccordionProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange' | 'title'> {
  children?: ReactNode;
  defaultExpanded?: boolean;
  disabled?: boolean;
  expandIcon?: ReactNode;
  expanded?: boolean;
  onChange?: (event: MouseEvent<HTMLButtonElement>, expanded: boolean) => void;
  title: ReactNode;
}

declare const Accordion: import('react').ForwardRefExoticComponent<
  AccordionProps & import('react').RefAttributes<HTMLElement>
>;

export default Accordion;
