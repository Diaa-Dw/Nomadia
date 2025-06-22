import { Filters } from '@/types';
import { Hotel } from '../types/HotelsMAnagement.types';
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
