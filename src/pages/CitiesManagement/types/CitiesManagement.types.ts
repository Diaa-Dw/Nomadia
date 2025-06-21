import { InfiniteData } from '@tanstack/react-query';

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
export interface UseCityMutationProps {
  mode: 'add' | 'edit';
}

export interface AddCityRequest {
  name: string;
  description: string;
}

export interface UpdateCityRequest extends AddCityRequest {
  id: number;
}

export interface UseCityFormProps {
  initialValues: AddCityRequest | UpdateCityRequest;
  mutateAsync: (values: AddCityRequest | UpdateCityRequest) => Promise<City>;
  onClose: () => void;
}

export interface CityFilters {
  name?: string;
  searchQuery?: string;
}

export type CitiesInfiniteData = InfiniteData<City[]>;
