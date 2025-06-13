import { showErrorToast } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { fetchFeaturedDeals } from '../API';
import { FEATURED_DEALS_QUERY_KEY } from '../Home.constants';
import { useEffect, useRef } from 'react';

const useFetchFeaturedDeals = () => {
  const hasShownError = useRef(false);

  const {
    data: featuredDeals,
    isFetching,
    error,
  } = useQuery({
    queryFn: fetchFeaturedDeals,
    queryKey: [FEATURED_DEALS_QUERY_KEY],
    retry: 1,
  });

  useEffect(() => {
    if (error && !hasShownError.current) {
      showErrorToast('Failed to load featured deals. Please check your connection and try again');
      hasShownError.current = true;
    }
  }, [error]);

  return { featuredDeals, isFetching };
};

export default useFetchFeaturedDeals;
