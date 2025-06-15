import { useParams } from 'react-router-dom';
import { useFetchHotel } from './hooks';
import { Box, Container, Skeleton, Typography } from '@mui/material';
import { Gallery } from './components';
import { HotelInfo } from './components/HotelInfo';

const Hotel = () => {
  const { hotelId: paramsId } = useParams();

  const { hotel, isPending } = useFetchHotel(parseInt(paramsId ?? '-1'));

  const hotelId = parseInt(paramsId ?? '-1');

  if (isPending) {
    <Box>
      <Skeleton height={'calc(100 - 65px)'} width={'100%'} />
    </Box>;
  }

  if (!hotel) {
    return <Typography>There is no hotel with provided ID</Typography>;
  }

  return (
    <Container maxWidth="xl">
      <Gallery id={hotelId} />
      <HotelInfo hotel={hotel} />
    </Container>
  );
};

export default Hotel;
