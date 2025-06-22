import axios from '@/api';
import { City } from '@/pages/CitiesManagement/types';
import { Filters } from '@/types';
import { AddHotelRequest, Hotel } from '../types/HotelsMAnagement.types';

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
  const { cityId } = hotel;
  const response = await axios.post(`/cities/${cityId}/hotels`, hotel);

  return response.data;
};

export const updateHotel = async ({ id: hotelId, ...rest }: Hotel): Promise<number> => {
  await axios.put(`/hotels/${hotelId}`, rest);

  return hotelId;
};

export const fetchCities = async (name: string): Promise<City[]> => {
  const response = await axios.get<City[]>('/cities', {
    params: {
      name,
    },
  });

  return response.data;
};

export const deleteHotelApi = async (hotelId: number) => {
  const res = await axios.get(`/hotels/${hotelId}`);
  const { cityId } = res.data;

  await axios.delete(`/cities/${cityId}/hotels/${hotelId}`);

  return hotelId;
};
