import { formatDate } from '@/utils';
import { Box, Container, Skeleton, Typography } from '@mui/material';
import { addDays } from 'date-fns';
import 'leaflet/dist/leaflet.css';
import { useParams, useSearchParams } from 'react-router-dom';
import { Gallery, HotelMap, RoomsContainer } from './components';
import { HotelInfo } from './components/HotelInfo';
import { HotelReviews } from './components/HotelReviews';
import { useFetchHotel } from './hooks';
import { MapWrapper, ReviewsMapContainer, ReviewsWrapper } from './Hotel.style';

const Hotel = () => {
  const { hotelId: paramsId } = useParams();
  const [searchParams] = useSearchParams();

  const checkInDate = searchParams.get('checkInDate') ?? formatDate(new Date());
  const checkOutDate = searchParams.get('checkOutDate') ?? formatDate(addDays(new Date(), 1));

  const hotelId = parseInt(paramsId ?? '-1');
  const { hotel, isPending } = useFetchHotel(hotelId);

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

      {/* <RoomCard
        room={{
          roomId: 201,
          roomNumber: 101,
          roomPhotoUrl:
            'https://cf.bstatic.com/xdata/images/hotel/max1280x900/486144361.jpg?k=8c25e93bdc21997d0c129b913f23010dc50b5f22ada1cf003225d1cc6af8d619&o=&hp=1',
          roomType: 'Deluxe Suite',
          capacityOfAdults: 2,
          capacityOfChildren: 2,
          amenities: [
            {
              id: 1,
              name: 'Free Wi-Fi',
              description: 'High-speed internet access',
            },
            {
              id: 2,
              name: 'Air Conditioning',
              description: 'Individually controlled air conditioning',
            },
          ],
          price: 250.0,
          availability: true,
        }}
      /> */}
    </Container>
  );
};

export default Hotel;
