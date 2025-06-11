import { SearchFormPayload } from '@/types';
import { addDays } from 'date-fns';
import { SearchCounter } from '../components/SearchBar/Search.type';

export const INITIAL_VALUES: SearchFormPayload = {
  city: '',
  dateRange: {
    startDate: new Date(),
    endDate: addDays(new Date(), 1),
  },
  adults: 2,
  children: 0,
  numberOfRooms: 1,
  starRate: undefined,
  sort: 'rating',
};

export const SORT_OPTIONS = ['price', 'rating'];

export const STAR_RATES = [1, 2, 3, 4, 5];

export const SEARCH_FORM_COUNTERS: SearchCounter[] = [
  {
    name: 'adults',
    label: 'Adults',
    min: 1,
  },
  {
    name: 'children',
    label: 'Children',
    min: 0,
  },
  {
    name: 'numberOfRooms',
    label: 'Rooms',
    min: 1,
  },
];
