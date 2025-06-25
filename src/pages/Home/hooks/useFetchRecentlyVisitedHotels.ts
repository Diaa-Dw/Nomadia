import { selectUser } from '@/features';
import { useErrorToastOnce } from '@/hooks';
import { useAppSelector } from '@/store';
import { useQuery } from '@tanstack/react-query';
import { fetchRecentlyVisitedHotels } from '../API';
import { RECENTLY_VISITED_HOTELS_QUERY_KEY } from '../constants';

const useFetchRecentlyVisitedHotels = () => {
  const { userId } = useAppSelector(selectUser);

  const {
    data: recentlyVisitedHotels,
    isFetching,
    error,
  } = useQuery({
    queryFn: () => fetchRecentlyVisitedHotels(userId),
    queryKey: [RECENTLY_VISITED_HOTELS_QUERY_KEY, userId],
  });

  useErrorToastOnce(
    error,
    'Failed to load recently visited hotels. Please check your connection and try again.'
  );

  return { recentlyVisitedHotels, isFetching };
};

export default useFetchRecentlyVisitedHotels;
