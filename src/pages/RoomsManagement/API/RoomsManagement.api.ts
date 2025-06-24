import axios from '@/api';
import { Hotel } from '@/pages/HotelsMAnagement/types/HotelsMAnagement.types';
import { CreateRoomRequest, CreateRoomResponse } from '../types';

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

export const addRoom = async ({
  hotelId,
  ...rest
}: CreateRoomRequest): Promise<CreateRoomResponse> => {
  const response = await axios.post<CreateRoomResponse>(`/hotels/${hotelId}/rooms`, rest);
  return response.data;
};
