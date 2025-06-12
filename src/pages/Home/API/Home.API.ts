import axios from 'axios';
import { FeaturedDealResponse } from '../types';

export const getFeaturedDeals = async (): Promise<FeaturedDealResponse[]> => {
  const response = await axios.get<FeaturedDealResponse[]>('/home/featured-deals"');

  return response.data;
};

