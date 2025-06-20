import { useErrorToastOnce } from '@/hooks';
import { useQuery } from '@tanstack/react-query';
import { fetchTrendingDestinations } from '../API';
import { TRENDING_DESTINATIONS_QUERY_KEY } from '../Home.constants';

const useFetchTrendingDestinations = () => {
  const {
    data: trendingDestinations,
    isFetching,
    error,
  } = useQuery({
    queryFn: fetchTrendingDestinations,
    queryKey: [TRENDING_DESTINATIONS_QUERY_KEY],
  });

  useErrorToastOnce(
    error,
    'Failed to load Trending Destinations. Please check your connection and try again.'
  );

  return { trendingDestinations, isFetching };
};

export default useFetchTrendingDestinations;
