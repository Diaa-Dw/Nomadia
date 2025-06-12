import axios from '@/api';
import { FeaturedDealResponse } from '../types';

export const fetchFeaturedDeals = async (): Promise<FeaturedDealResponse[]> => {
  const response = await axios.get<FeaturedDealResponse[]>('/home/featured-deals');
  console.log('🚀 ~ fetchFeaturedDeals ~ response:', response);

  return response.data;
};
