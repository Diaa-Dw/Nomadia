import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import { fetchSearchResults } from '../API';
import { SEARCH_QUERY_KEY } from '../constants';
import { formatDate, parseSearchQueryParams } from '@/utils';
import { SearchRequest } from '@/types';

const useFetchSearchResults = () => {
  const { search } = useLocation();

  const formPayload = parseSearchQueryParams(search);

  const isValid =
    !!formPayload.city &&
    !!formPayload.dateRange?.checkInDate &&
    !!formPayload.dateRange?.checkOutDate &&
    formPayload.adults != null &&
    formPayload.children != null &&
    formPayload.numberOfRooms != null;

  const requestPayload: SearchRequest | null = isValid
    ? {
        city: formPayload.city,
        checkInDate: formatDate(formPayload.dateRange.checkInDate),
        checkOutDate: formatDate(formPayload.dateRange.checkOutDate),
        adults: formPayload.adults,
        children: formPayload.children,
        numberOfRooms: formPayload.numberOfRooms,
        starRate: formPayload.starRate,
        sort: formPayload.sort,
      }
    : null;

  const { data: searchResults, isFetching: isPending } = useQuery({
    queryKey: [SEARCH_QUERY_KEY, requestPayload],
    queryFn: () => fetchSearchResults(requestPayload!),
    enabled: !!requestPayload,
  });

  return { searchResults, isPending };
};

export default useFetchSearchResults;
