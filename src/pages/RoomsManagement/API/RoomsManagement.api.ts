import axios from '@/api';
import { Hotel } from '@/pages/HotelsMAnagement/types/HotelsMAnagement.types';

export const fetchHotelsApi = async (name: string): Promise<Hotel[]> => {
  const response = await axios.get<Hotel[]>('/hotels', {
    params: {
      name,
    },
  });

  return response.data;
};

export const deleteRoomApi = async (hotelId: number, roomId: number) => {
  await axios.delete(`/hotels/${hotelId}/rooms/${roomId}`);

  return roomId;
};
