import { formatDate } from '@/utils';
import { setCustomTitle, clearCustomTitle } from '@/hooks';
import { Box, Container, Skeleton, Typography } from '@mui/material';
import { addDays } from 'date-fns';
import 'leaflet/dist/leaflet.css';
import { useParams, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Gallery, HotelInfo, HotelMap, HotelReviews, RoomsContainer } from './components';
import { useFetchHotel } from './hooks';
import { MapWrapper, ReviewsMapContainer, ReviewsWrapper } from './Hotel.style';

const Hotel = () => {
  const { hotelId: paramsId } = useParams();
  const [searchParams] = useSearchParams();

  const checkInDate = searchParams.get('checkInDate') ?? formatDate(new Date());
  const checkOutDate = searchParams.get('checkOutDate') ?? formatDate(addDays(new Date(), 1));

  const hotelId = parseInt(paramsId ?? '-1');
  const { hotel, isPending } = useFetchHotel(hotelId);

  useEffect(() => {
    if (hotel) {
      setCustomTitle(`${hotel.hotelName} - Nomadia`);
    }

    return () => {
      clearCustomTitle();
    };
  }, [hotel]);

  if (isPending) {
    return (
      <Box>
        <Skeleton variant="rectangular" height="calc(100vh - 65px)" width="100%" />
      </Box>
    );
  }

  if (!hotel) {
    return (
      <Typography variant="body1" color="text.secondary" mt={2}>
        There is no hotel with the provided ID.
      </Typography>
    );
  }

  return (
    <Container maxWidth="xl">
      <Gallery id={hotelId} />
      <HotelInfo hotel={hotel} />

      <RoomsContainer hotelId={hotelId} checkOutDate={checkOutDate} checkInDate={checkInDate} />

      <ReviewsMapContainer>
        <ReviewsWrapper>
          <HotelReviews id={hotelId} />
        </ReviewsWrapper>

        <MapWrapper>
          <HotelMap lat={hotel.latitude} lng={hotel.longitude} name={hotel.hotelName} />
        </MapWrapper>
      </ReviewsMapContainer>
    </Container>
  );
};

export default Hotel;
