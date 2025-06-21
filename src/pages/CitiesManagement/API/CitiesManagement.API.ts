import axios from '@/api';
import { City } from '../types';

export const fetchCities = async (
  pageNumber: number,
  pageSize: number,
  name = '',
  searchQuery = ''
): Promise<City[]> => {
  const response = await axios.get<City[]>('/cities', {
    params: {
      pageNumber,
      pageSize,
      ...(name ? { name } : {}),
      ...(searchQuery ? { searchQuery } : {}),
    },
  });
  return response.data;
};
