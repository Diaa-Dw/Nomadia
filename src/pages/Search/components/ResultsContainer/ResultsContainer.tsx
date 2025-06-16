import { HotelCard } from '@/components';
import { useFetchSearchResults } from '@/pages/Search/hooks';
import { Skeleton, Stack } from '@mui/material';

const ResultsContainer = () => {
  const { searchResults, isPending } = useFetchSearchResults();

  return (
    <Stack spacing={2} p={2}>
      {isPending
        ? Array.from({ length: 8 }).map((_, index) => (
            <Skeleton
              key={index}
              variant="rectangular"
              height={180}
              animation="wave"
              sx={{ borderRadius: 2 }}
            />
          ))
        : searchResults?.map(result => (
            <HotelCard key={result.hotelId} variant="horizontal" hotelData={result} />
          ))}
    </Stack>
  );
};
export default ResultsContainer;
