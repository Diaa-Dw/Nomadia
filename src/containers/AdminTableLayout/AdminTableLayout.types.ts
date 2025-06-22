import { FormikProps } from 'formik';
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

export interface AdminTableLayoutProps<T, F> {
  title: string;
  columns: Column<T>[];
  data: T[];
  isFetching: boolean;
  isFetchingNextPage: boolean;
  isError: boolean;
  fetchNextPage: () => void;
  onAdd: () => void;
  onRowClick: (row: T) => void;
  rowsPerPage: number;
  onSearchChange: (value: string) => void;
  searchValue: string;
  hasNextPage: boolean;
  formikProps: FormikProps<F>;
  searchOptions: SearchOption<T>[];
  actions: TableRowAction<T>[];
}
