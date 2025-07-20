import { ReactElement } from 'react';

export interface SidebarNavigationProps {
  isOpen: boolean;
  isAdmin: boolean;
  onCloseSidebar: () => void;
}

export interface NavItemProps {
  label: string;
  Icon: ReactElement;
  href: string;
  onClick: () => void;
}
