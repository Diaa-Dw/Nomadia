import { useParams } from 'react-router-dom';
import { useFetchHotel } from './hooks';
import { Box, Container, Skeleton } from '@mui/material';
import { Gallery } from './components';

const Hotel = () => {
  const { hotelId: paramsId } = useParams();

  const { hotel, isPending } = useFetchHotel(parseInt(paramsId ?? '-1'));

  const hotelId = parseInt(paramsId ?? '-1');

  if (isPending) {
    <Box>
      <Skeleton height={'calc(100 - 65px)'} width={'100%'} />
    </Box>;
  }

  console.log(hotel);

  return (
    <Container maxWidth="xl">
      <Gallery id={hotelId} />
    </Container>
  );
};

export default Hotel;
