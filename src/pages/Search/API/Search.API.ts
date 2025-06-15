import axios from '@/api';
import { Amenity } from '@/types';

export const fetchSearchPageAmenities = async (): Promise<Amenity[]> => {
  const response = await axios.get<Amenity[]>('/search-results/amenities');

  return response.data;
};
