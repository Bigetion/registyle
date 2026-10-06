import type { ReactNode } from 'react';

export interface PortalProps {
  children?: ReactNode;
  container?: HTMLElement | null | (() => HTMLElement | null);
  className?: string;
}
declare function Portal(props: PortalProps): ReactNode;
export default Portal;
