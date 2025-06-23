import { addDays } from 'date-fns';
import { SearchFormPayload } from '../types';

export const TITLE = 'Rooms Management';
export const HOTELS_QUERY_KEY = 'rooms/hotels';

export const INITIAL_VALUES: SearchFormPayload = {
  hotelId: null,
  dateRange: {
    checkInDate: new Date(),
    checkOutDate: addDays(new Date(), 1),
  },
};
