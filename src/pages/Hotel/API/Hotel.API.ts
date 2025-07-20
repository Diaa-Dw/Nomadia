import axios from '@/api';
import { HotelResponse, PhotoResponse, ReviewResponse } from '../types';

export const fetchHotel = async (hotelId: number): Promise<HotelResponse> => {
  const response = await axios.get<HotelResponse>(`/hotels/${hotelId}`);

  return response.data;
};

export const fetchHotelGallery = async (hotelId: number) => {
  const response = await axios.get<PhotoResponse[]>(`/hotels/${hotelId}/gallery`);

  return response.data;
};

export const fetchHotelReviews = async (hotelId: number): Promise<ReviewResponse[]> => {
  const response = await axios.get<ReviewResponse[]>(`/hotels/${hotelId}/reviews`);

  return response.data;
};
