import { addToCart } from '@/features';
import { useAppDispatch } from '@/store';
import { Room } from '@/types/room';
import { formatDate } from '@/utils';
import { ShoppingCart } from '@mui/icons-material';
import { Box, Button, Chip, Stack, Typography } from '@mui/material';
import { addDays } from 'date-fns';
import { useSearchParams } from 'react-router-dom';
import { RoomCardContainer, RoomImage } from './RoomCard.style';

const RoomCard = ({ room }: { room: Room }) => {
  const [searchParams] = useSearchParams();

  const dispatch = useAppDispatch();

  const {
    roomPhotoUrl,
    roomType,
    capacityOfAdults,
    capacityOfChildren,
    amenities,
    price,
    availability,
  } = room;

  const checkInDate = searchParams.get('checkInDate') || formatDate(new Date());
  const checkOutDate = searchParams.get('checkOutDate') || formatDate(addDays(new Date(), 1));

  const item = {
    ...room,
    checkInDate,
    checkOutDate,
  };

  const onAddToCard = () => {
    dispatch(addToCart(item));
  };

  return (
    <RoomCardContainer>
      <Box position="relative">
        <RoomImage src={roomPhotoUrl} alt={roomType} availability={availability} />
        {!availability && (
          <Chip
            label="Not Available"
            color="error"
            size="small"
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              fontWeight: 'bold',
              boxShadow: 3,
            }}
          />
        )}
      </Box>

      <Stack direction="column" flexGrow={1} p={2} spacing={1}>
        <Typography variant="h6">{roomType}</Typography>
        <Typography variant="body2" color="text.secondary">
          Capacity: {capacityOfAdults} Adults, {capacityOfChildren} Children
        </Typography>

        {amenities?.length > 0 && (
          <Box display="flex" flexWrap="wrap" gap={1} mt={1}>
            {amenities.map(amenity => (
              <Chip key={amenity.id} label={amenity.name} size="small" variant="outlined" />
            ))}
          </Box>
        )}

        <Typography variant="subtitle1" fontWeight="bold" mt="auto">
          ${price} / night
        </Typography>
      </Stack>

      <Button
        disabled={!availability}
        variant={'contained'}
        color="inherit"
        startIcon={<ShoppingCart />}
        onClick={onAddToCard}
      >
        Add To Cart
      </Button>
    </RoomCardContainer>
  );
};

export default RoomCard;
