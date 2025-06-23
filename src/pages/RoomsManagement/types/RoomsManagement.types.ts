import { DateRange } from '@/types';
import { fetchHotelRoomsProps } from '@/types/room';

export interface SearchFormPayload {
  hotelId: number | null;
  dateRange: DateRange;
}

export interface HotelRoomsSearchProps {
  onSearch: (value: fetchHotelRoomsProps) => void;
}
