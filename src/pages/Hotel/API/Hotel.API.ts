import axiosInstance from '@/api';
import { HotelResponse } from '../types';

export const fetchHotel = async (hotelId: number): Promise<HotelResponse> => {
  const response = await axiosInstance.get<HotelResponse>(`/hotels/${hotelId}`);

  return response.data;
};

