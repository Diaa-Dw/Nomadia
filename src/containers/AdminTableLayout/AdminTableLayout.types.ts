import { UseQueryResult } from '@tanstack/react-query';

export interface Column<T> {
  label: string;
  accessor: keyof T;
  align?: 'left' | 'center' | 'right';
  render?: (value: unknown, row: T) => React.ReactNode;
}

export interface AdminTableLayoutProps<T> {
  title: string;
  columns: Column<T>[];
  queryResult: UseQueryResult<{ data: T[]; total: number }>;
  onAdd: () => void;
  onRowClick: (row: T) => void;
  onDelete?: (row: T) => void;
  page: number;
  rowsPerPage: number;
  onPageChange: (page: number) => void;
  onSearchChange: (value: string) => void;
  searchValue: string;
}
