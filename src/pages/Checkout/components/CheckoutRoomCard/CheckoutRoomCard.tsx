import { CartItem } from '@/features/cart/types';
import { getDateDifference, pluralize } from '@/utils';
import { Stack, Typography } from '@mui/material';
import { Card, RoomImage } from './CheckoutRoomCard.styles';

const CheckoutRoomCard = ({ room }: { room: CartItem }) => {
  const {
    roomType,
    roomPhotoUrl,
    capacityOfAdults,
    capacityOfChildren,
    price,
    checkInDate,
    checkOutDate,
  } = room;

  const nights = getDateDifference(checkInDate, checkOutDate);
  const total = price * nights;

  return (
    <Card>
      <RoomImage src={roomPhotoUrl} alt={roomType} />

      <Stack spacing={0.5} justifyContent="center">
        <Typography variant="subtitle1" fontWeight="bold">
          {roomType}
        </Typography>

        <Typography variant="body2" color="textSecondary">
          {capacityOfAdults} {pluralize(capacityOfAdults, 'adult')}
          {capacityOfChildren > 0 &&
            ` · ${capacityOfChildren} ${pluralize(capacityOfChildren, 'child')}`}
        </Typography>

        <Typography variant="body2" color="textSecondary">
          {checkInDate} → {checkOutDate}
        </Typography>

        <Typography variant="body2" color="textSecondary">
          ${price} / night
        </Typography>

        <Typography mt={1} fontWeight="bold">
          Total: ${total.toFixed(2)} ({nights} {pluralize(nights, 'night')})
        </Typography>
      </Stack>
    </Card>
  );
};

export default CheckoutRoomCard;
