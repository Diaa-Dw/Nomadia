import { DateRange } from '@/types';
import { fetchHotelRoomsProps } from '@/types/room';

export interface SearchFormPayload {
  hotelId: number | null;
  dateRange: DateRange;
}

export interface HotelRoomsSearchProps {
  onSearch: (value: fetchHotelRoomsProps) => void;
}

export interface BaseRoomData {
  roomNumber: string;
  cost: number;
}

export interface CreateRoomRequest extends BaseRoomData {
  hotelId: number;
}

export interface CreateRoomResponse extends BaseRoomData {
  roomId: number;
}
