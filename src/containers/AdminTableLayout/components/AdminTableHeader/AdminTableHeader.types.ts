import { ReactNode } from 'react';

export interface AdminTableHeaderProps {
  title: string;
  onAdd: () => void;
  children: ReactNode;
}
