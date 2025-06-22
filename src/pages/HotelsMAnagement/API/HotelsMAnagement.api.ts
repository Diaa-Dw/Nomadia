import { Filters } from '@/types';
import { AddHotelRequest, Hotel, UpdateHotelRequest } from '../types/HotelsMAnagement.types';
import axios from '@/api';

export const fetchHotels = async (
  pageNumber: number,
  pageSize: number,
  filters: Filters
): Promise<Hotel[]> => {
  const { name, searchQuery } = filters;

  const response = await axios.get<Hotel[]>('/hotels', {
    params: {
      pageNumber,
      pageSize,
      ...(name ? { name } : {}),
      ...(searchQuery ? { searchQuery } : {}),
    },
  });
  return response.data;
};

export const addHotel = async (hotel: AddHotelRequest): Promise<Hotel> => {
  const response = await axios.post('/cities/1/hotels', hotel);

  return response.data;
};

export const updateHotel = async ({ hotelId, ...rest }: UpdateHotelRequest): Promise<number> => {
  await axios.put(`/hotels/${hotelId}`, rest);
  return hotelId;
};
