import { EmblaCarousel, HotelCard, SectionTitle } from '@/components';
import { Grid, Skeleton } from '@mui/material';
import { useFetchFeaturedDeals } from '../../hooks';

const FeaturedDeals = () => {
  const { featuredDeals, isFetching } = useFetchFeaturedDeals();
  return (
    <Grid container px={{ xs: 3, md: 6 }} py={4}>
      <SectionTitle variant="h3">Featured Deals</SectionTitle>

      <EmblaCarousel>
        {isFetching &&
          Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} variant="rectangular" height={299} width={240} />
          ))}

        {featuredDeals &&
          featuredDeals.length > 0 &&
          featuredDeals.map(deal => (
            <EmblaCarousel.Slide key={deal.hotelId}>
              <HotelCard variant={'compact'} hotelData={deal} />
            </EmblaCarousel.Slide>
          ))}
        {}
      </EmblaCarousel>
    </Grid>
  );
};

export default FeaturedDeals;
