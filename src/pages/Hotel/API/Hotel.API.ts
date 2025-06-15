import axios from '@/api';
import { HotelResponse, PhotoResponse, ReviewResponse } from '../types';

export const fetchHotel = async (hotelId: number): Promise<HotelResponse> => {
  const response = await axios.get<HotelResponse>(`/hotels/${hotelId}`);

  return response.data;
};

export const fetchHotelGallery = async (id: number) => {
  const response = await axios.get<PhotoResponse[]>(`/hotels/${id}/gallery`);

  return response.data;
};

export const fetchHotelReviews= async (id: number): Promise<ReviewResponse[]> => {
  const response = await axios.get<ReviewResponse[]>(`/hotels/${id}/reviews`);

  return response.data;
};
