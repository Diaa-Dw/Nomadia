import { useInfiniteQuery } from '@tanstack/react-query';
import { HOTELS_PER_PAGE, HOTELS_QUERY_KEY } from '../constants';
import { useErrorToastOnce } from '@/hooks';
import { Filters } from '@/types';
import { fetchHotels } from '../API';

const useFetchHotels = (filters: Filters) => {
  const { data, isFetching, error, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: [HOTELS_QUERY_KEY, filters],
      queryFn: ({ pageParam = 1 }) => fetchHotels(pageParam, HOTELS_PER_PAGE, filters),
      getNextPageParam: (lastPage, allPages) =>
        lastPage.length < HOTELS_PER_PAGE ? undefined : allPages.length + 1,
      initialPageParam: 1,
    });

  useErrorToastOnce(error, 'Failed to load hotels. Please try again later.');

  const hotels = data?.pages.flatMap(page => page) ?? [];

  return {
    hotels,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  };
};

export default useFetchHotels;
