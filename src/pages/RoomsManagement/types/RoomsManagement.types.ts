import { DateRange } from '@/types';

export interface SearchFormPayload {
  hotelId: number | null;
  dateRange: DateRange;
}

export interface UseHotelRoomsFormProps {
  onSearch: (value: SearchFormPayload) => void;
}
