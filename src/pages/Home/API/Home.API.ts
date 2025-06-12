import axios from '@/api';
import { FeaturedDealResponse, RecentlyVisitedHotelsResponse } from '../types';

export const fetchFeaturedDeals = async (): Promise<FeaturedDealResponse[]> => {
  const response = await axios.get<FeaturedDealResponse[]>('/home/featured-deals');
  console.log('🚀 ~ fetchFeaturedDeals ~ response:', response);

  return response.data;
};

export const fetchRecentlyVisitedHotels = async (
  userId: string
): Promise<RecentlyVisitedHotelsResponse[]> => {
  const response = await axios.get<RecentlyVisitedHotelsResponse[]>(
    `/home/users/${userId}/recent-hotels`
  );
  return response.data;
};
