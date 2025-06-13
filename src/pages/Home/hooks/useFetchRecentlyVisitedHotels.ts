import { selectUser } from '@/features';
import { useAppSelector } from '@/store';
import { useQuery } from '@tanstack/react-query';
import { RECENTLY_VISITED_HOTELS_QUERY_KEY } from '../Home.constants';
import { fetchRecentlyVisitedHotels } from '../API';
import { showErrorToast } from '@/utils';
import { useEffect, useRef } from 'react';

const useFetchRecentlyVisitedHotels = () => {
  const hasShownError = useRef(false);
  const { userId } = useAppSelector(selectUser);

  const {
    data: recentlyVisitedHotels,
    isFetching,
    error,
  } = useQuery({
    queryFn: () => fetchRecentlyVisitedHotels(userId),
    queryKey: [RECENTLY_VISITED_HOTELS_QUERY_KEY, userId],
  });

  useEffect(() => {
    if (error && !hasShownError.current) {
      showErrorToast(
        'Failed to load recently visited hotels. Please check your connection and try again'
      );
      hasShownError.current = true;
    }
  }, [error]);

  return { recentlyVisitedHotels, isFetching };
};

export default useFetchRecentlyVisitedHotels;
