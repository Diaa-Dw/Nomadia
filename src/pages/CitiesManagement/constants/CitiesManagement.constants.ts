import { Column } from '@/containers/AdminTableLayout/AdminTableLayout.types';
import { City, SearchFormValues } from '../types';

export const CITIES_QUERY_KEY = 'cities';
export const CITIES_PER_PAGE = 10;

export const INITIAL_VALUES: SearchFormValues = {
  filterField: 'name',
  searchValue: '',
};

export const CITY_COLUMNS: Column<City>[] = [
  {
    label: 'ID',
    accessor: 'id',
  },

  {
    label: 'Name',
    accessor: 'name',
    filterable: true,
  },
  {
    label: 'Description',
    accessor: 'description',
    filterable: true,
  },
];
