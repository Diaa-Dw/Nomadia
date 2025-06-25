import { useErrorToastOnce } from '@/hooks';
import { useQuery } from '@tanstack/react-query';
import { fetchSearchPageAmenities } from '../API';
import { SEARCH_PAGE_AMENITIES_QUERY_KEY } from '../constants';

const useFetchSearchPageAmenities = () => {
  const {
    data: amenities,
    isFetching,
    error,
  } = useQuery({
    queryFn: fetchSearchPageAmenities,
    queryKey: [SEARCH_PAGE_AMENITIES_QUERY_KEY],
  });

  useErrorToastOnce(error, 'Failed to load search page amenities.');

  return { amenities, isFetching };
};

export default useFetchSearchPageAmenities;
