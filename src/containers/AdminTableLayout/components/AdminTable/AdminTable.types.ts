import { Column, TableRowAction } from '../../AdminTableLayout.types';

export interface AdminTableProps<T> {
  columns: Column<T>[];
  data: T[];
  isLoading: boolean;
  onRowClick: (row: T) => void;
  actions: (row: T) => TableRowAction<T>[];
}
