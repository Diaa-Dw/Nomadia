import React from 'react';
import { useFetchHotelRooms } from '../../hooks';
import { RoomsContainerProps } from './RoomsContainer.type';
import { useSearchParams } from 'react-router-dom';
import { addDays } from 'date-fns';
import { formatDate } from '@/utils';
import { Grid, Skeleton } from '@mui/material';
import { EmblaCarousel, RoomCard } from '@/components';

const RoomsContainer = ({ hotelId }: RoomsContainerProps) => {
  const [searchParams] = useSearchParams();

  const checkInDate = searchParams.get('checkInDate') ?? formatDate(new Date());
  const checkOutDate = searchParams.get('checkOutDate') ?? formatDate(addDays(new Date(), 1));

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
