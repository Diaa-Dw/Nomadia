import { DateRange } from '@/types';

export interface SearchFormPayload {
  hotelId: number | null;
  dateRange: DateRange;
}

export interface HotelRoomsSearchProps {
  onSearch: (value: SearchFormPayload) => void;
}
