import { Column } from '@/containers/AdminTableLayout/AdminTableLayout.types';
import { AddCityRequest, City } from '../types';
import { Delete } from '@mui/icons-material';

export const CITIES_QUERY_KEY = 'cities';
export const CITIES_PER_PAGE = 10;

export const TITLE = 'City Management';

export const CITY_DIALOG_INTIAL_VALUES: AddCityRequest = { name: '', description: '' };

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

export const CITY_ACTIONS = [
  {
    key: 'deleteHotel',
    label: 'Delete Hotel',
    icon: <Delete />,
    color: 'error' as const,
  },
];
