import { Filters } from '@/types';

interface SearchOption<T> {
  label: string;
  value: keyof T;
}

export interface AdminFilterFormProps<T> {
  searchOptions: SearchOption<T>[];
  onFilterChange: (value: Filters) => void;
}
