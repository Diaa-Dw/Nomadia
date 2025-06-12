import { EmblaCarousel, HotelCard, SectionTitle } from '@/components';
import { Grid, Skeleton } from '@mui/material';
import { useFetchRecentlyVisitedHotels } from '../../hooks';

const RecentlyVisitedHotels = () => {
  const { recentlyVisitedHotels, isFetching } = useFetchRecentlyVisitedHotels();
  return (
    <Grid container px={{ xs: 3, md: 6 }} py={4}>
      <SectionTitle variant="h3">Recently Visited Hotels</SectionTitle>

      <EmblaCarousel>
        {isFetching &&
          Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} variant="rectangular" height={299} width={240} />
          ))}

        {recentlyVisitedHotels &&
          recentlyVisitedHotels.length > 0 &&
          recentlyVisitedHotels.map(deal => (
            <EmblaCarousel.Slide key={deal.hotelId}>
              <HotelCard variant={'compact'} hotelData={deal} />
            </EmblaCarousel.Slide>
          ))}
        {}
      </EmblaCarousel>
    </Grid>
  );
};

export default RecentlyVisitedHotels;
