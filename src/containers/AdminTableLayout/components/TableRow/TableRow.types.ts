import { Column, TableRowAction } from '../../AdminTableLayout.types';

export interface DataRowProps<T> {
  row: T;
  columns: Column<T>[];
  onRowClick: (row: T) => void;
  actions: TableRowAction<T>[];
}
