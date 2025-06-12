import { selectUser } from '@/features';
import { useAppSelector } from '@/store';
import { useQuery } from '@tanstack/react-query';
import { RECENTLY_VISITED_HOTELS_QUERY_KEY } from '../Home.constants';
import { fetchRecentlyVisitedHotels } from '../API';
import { showErrorToast } from '@/utils';

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

  if (error) {
    showErrorToast('Failed to load featured deals. Please check your connection and try again');
  }

  return { recentlyVisitedHotels, isFetching };
};

export default useFetchRecentlyVisitedHotels;
