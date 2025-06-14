import { useQuery } from '@tanstack/react-query';
import { fetchSearchPageAmenities } from '../API';
import { SEARCH_PAGE_AMENITIES_QUERY_KEY } from '../Search.constants';
import { useEffect, useRef } from 'react';
import { showErrorToast } from '@/utils';

const useFetchSearchPageAmenities = () => {
  const hasShownError = useRef(false);
  const {
    data: amenities,
    isFetching,
    error,
  } = useQuery({
    queryFn: fetchSearchPageAmenities,
    queryKey: [SEARCH_PAGE_AMENITIES_QUERY_KEY],
  });

  useEffect(() => {
    if (error && !hasShownError.current) {
      showErrorToast('Failed to load search page amenities.');
      hasShownError.current = true;
    }
  }, [error]);

  return { amenities, isFetching };
};

export default useFetchSearchPageAmenities;
