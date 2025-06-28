import { ReactNode } from 'react';

export interface Column<T> {
  label: string;
  accessor: keyof T;
  align?: 'left' | 'center' | 'right';
  filterable?: boolean;
  render?: (value: unknown, row: T) => ReactNode;
}

export interface SearchOption<T> {
  label: string;
  value: keyof T;
}

export interface SearchFormBase {
  filterField: string;
  searchValue: string;
}

export interface TableRowAction<T> {
  label: string;
  icon: ReactNode;
  onClick: (row: T) => void;
  color?: 'primary' | 'error';
  isPending?: boolean;
}

export interface AdminTableLayoutProps {
  children: ReactNode;
}
