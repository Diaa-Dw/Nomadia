import { EmblaCarousel, SectionTitle } from '@/components';
import { Grid, Skeleton } from '@mui/material';
import { useFetchTrendingDestinations } from '../../hooks';
import { TrendingDestinationCard } from '../';

const TrendingDestinations = () => {
  const { trendingDestinations, isFetching } = useFetchTrendingDestinations();
  return (
    <Grid container px={{ xs: 3, md: 6 }} py={4}>
      <SectionTitle variant="h3">Trending Destinations</SectionTitle>

      <EmblaCarousel>
        {isFetching &&
          Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} variant="rectangular" height={299} width={240} />
          ))}

        {trendingDestinations &&
          trendingDestinations.length > 0 &&
          trendingDestinations.map(detantion => (
            <EmblaCarousel.Slide width={'337px'} key={detantion.cityId}>
              <TrendingDestinationCard destination={detantion} />
            </EmblaCarousel.Slide>
          ))}
        {}
      </EmblaCarousel>
    </Grid>
  );
};

export default TrendingDestinations;
