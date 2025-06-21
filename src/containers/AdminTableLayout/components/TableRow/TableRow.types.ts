import { Column } from '../../AdminTableLayout.types';

export interface DataRowProps<T> {
  row: T;
  columns: Column<T>[];
  onRowClick: (row: T) => void;
  onDelete: (row: T) => void;
  isDeleting: boolean;
}
