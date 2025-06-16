import { memo, useMemo } from 'react';
import { Stack, Skeleton } from '@mui/material';

import { HotelCard } from '@/components';
import { NoResults } from '../NoResults';
import { ResultsContainerProps } from './ResultsContainer.types';

const ResultsContainerComponent = ({
  searchResults,
  selectedAmenities,
  isPending,
}: ResultsContainerProps) => {
  const filteredHotels = useMemo(() => {
    if (isPending) return [];
    return searchResults.filter(hotel =>
      selectedAmenities.every(selected =>
        hotel.amenities.some(amenity => amenity.name === selected)
      )
    );
  }, [searchResults, selectedAmenities, isPending]);

  const isEmpty = !isPending && filteredHotels.length === 0;

  return (
    <Stack spacing={2} p={2}>
      {isPending &&
        Array.from({ length: 8 }).map((_, index) => (
          <Skeleton
            key={`skeleton-${index}`}
            variant="rectangular"
            height={180}
            animation="wave"
            sx={{ borderRadius: 2 }}
          />
        ))}

      {isEmpty && <NoResults />}

      {!isPending &&
        filteredHotels.map(hotel => (
          <HotelCard key={hotel.hotelId} variant="horizontal" hotelData={hotel} />
        ))}
    </Stack>
  );
};

export const ResultsContainer = memo(ResultsContainerComponent);
