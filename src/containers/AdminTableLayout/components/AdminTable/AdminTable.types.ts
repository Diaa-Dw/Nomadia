import { Column } from '../../AdminTableLayout.types';

export interface AdminTableProps<T> {
  columns: Column<T>[];
  data: T[];
  isLoading: boolean;
  isError: boolean;
  onRowClick: (row: T) => void;
  onDelete: (row: T) => void;
  isDeleting: boolean;
}
