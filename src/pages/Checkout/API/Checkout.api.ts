import axios from '@/api';
import { BookResponse, BookRequest } from '../types';

export const submitBookingRequest = async (bookRequest: BookRequest): Promise<BookResponse> => {
  const response = await axios.post<BookResponse>('/bookings', bookRequest);

  return response.data;
};
