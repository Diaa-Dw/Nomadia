import axios from '@/api';
import { Hotel } from '@/pages/HotelsMAnagement/types/HotelsMAnagement.types';

export const fetchHotelsApi = async (name: string): Promise<Hotel[]> => {
  const response = await axios.get<Hotel[]>('/hotels', {
    params: {
      name,
    },
  });

  return response.data;
};
