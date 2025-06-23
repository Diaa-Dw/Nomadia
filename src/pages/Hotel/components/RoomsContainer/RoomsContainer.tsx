import { EmblaCarousel, RoomCard } from '@/components';
import { Grid, Skeleton } from '@mui/material';
import { RoomsContainerProps } from './RoomsContainer.type';
import useFetchHotelRooms from '@/hooks/useFetchHotelRooms';

const RoomsContainer = ({ hotelId, checkInDate, checkOutDate }: RoomsContainerProps) => {
  const { hotelRooms, isPending } = useFetchHotelRooms({ hotelId, checkInDate, checkOutDate });

  return (
    <Grid container px={{ xs: 3, md: 6 }} py={4}>
      <EmblaCarousel>
        {isPending &&
          Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} variant="rectangular" height={355} width={280} />
          ))}

        {hotelRooms &&
          hotelRooms.length > 0 &&
          hotelRooms.map(room => (
            <EmblaCarousel.Slide key={room.roomId}>
              <RoomCard room={room} />
            </EmblaCarousel.Slide>
          ))}
        {}
      </EmblaCarousel>
    </Grid>
  );
};

export default RoomsContainer;
