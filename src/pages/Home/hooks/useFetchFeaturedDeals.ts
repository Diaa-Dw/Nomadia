import { showErrorToast } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { fetchFeaturedDeals } from '../API';
import { FEATURED_DEALS_QUERY_KEY } from '../Home.constants';

const useFetchFeaturedDeals = () => {
  const {
    data: featuredDeals,
    isFetching,
    error,
  } = useQuery({
    queryFn: fetchFeaturedDeals,
    queryKey: [FEATURED_DEALS_QUERY_KEY],
    retry: 1,
  });

  if (error) {
    showErrorToast('Failed to load featured deals. Please check your connection and try again');
  }

  return { featuredDeals, isFetching };
};

export default useFetchFeaturedDeals;
