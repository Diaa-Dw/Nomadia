import { SearchFormPayload } from '@/types';

export const searchPayload: SearchFormPayload = {
  city: 'istanbul',
  dateRange: {
    checkInDate: new Date('2025-07'),
    checkOutDate: new Date('2025-07-10'),
  },
  adults: 2,
  children: 1,
  numberOfRooms: 3,
  starRate: 5,
  sort: 'price',
};
