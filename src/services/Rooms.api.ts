import axios from '@/api';
import { fetchHotelRoomsProps, Room } from '@/types/room';

export const fetchHotelRooms = async ({
  hotelId,
  checkInDate,
  checkOutDate,
}: fetchHotelRoomsProps) => {
  const response = await axios.get<Room[]>(
    `hotels/${hotelId}/rooms?checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`
  );
  console.log('🚀 ~ response:', response);
  return response.data;
};
