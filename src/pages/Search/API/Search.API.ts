import axios from '@/api';
import { Amenity, SearchRequest, SearchResponse } from '@/types';

export const fetchSearchPageAmenities = async (): Promise<Amenity[]> => {
  const response = await axios.get<Amenity[]>('/search-results/amenities');

  return response.data;
};

export const fetchSearchResults = async (payload: SearchRequest) => {
  console.log('🚀 ~ searchApi ~ payload:', payload);

  const response = await axios.get<SearchResponse[]>(`/home/search`, {
    params: payload,
  });

  return response.data;
};
