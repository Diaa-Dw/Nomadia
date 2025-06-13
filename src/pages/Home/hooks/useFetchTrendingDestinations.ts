import { showErrorToast } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { fetchTrendingDestinations } from '../API';
import { TRENDING_DESTINATIONS_QUERY_KEY } from '../Home.constants';
import { useEffect, useRef } from 'react';

const useFetchTrendingDestinations = () => {
  const hasShownError = useRef(false);

  const {
    data: trendingDestinations,
    isFetching,
    error,
  } = useQuery({
    queryFn: fetchTrendingDestinations,
    queryKey: [TRENDING_DESTINATIONS_QUERY_KEY],
  });

  useEffect(() => {
    if (error && !hasShownError.current) {
      showErrorToast(
        'Failed to load Trending Destinations. Please check your connection and try again'
      );
      hasShownError.current = true;
    }
  }, [error]);

  return { trendingDestinations, isFetching };
};

export default useFetchTrendingDestinations;
