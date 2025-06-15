import axios from '@/api';
import { HotelResponse, PhotoResponse } from '../types';

export const fetchHotel = async (hotelId: number): Promise<HotelResponse> => {
  const response = await axios.get<HotelResponse>(`/hotels/${hotelId}`);

  return response.data;
};

export const fetchHotelGallery = async (id: number) => {
  const response = await axios.get<PhotoResponse[]>(`/hotels/${id}/gallery`);
  return response.data;
};

