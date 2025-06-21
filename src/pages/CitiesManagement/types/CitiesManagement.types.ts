export interface City {
  id: number;
  name: string;
  description: string;
}

type FilterField = 'name' | 'description';

export interface SearchFormValues {
  filterField: FilterField;
  searchValue: string;
}

export interface ColumnDefinition<T> {
  label: string;
  accessor: keyof T;
}
