import { addToCart, removeFromCart } from '@/features';
import { useAppDispatch } from '@/store';
import { Room } from '@/types/room';
import { formatDate, isCartItemValid, showErrorToast } from '@/utils';
import { ShoppingCart } from '@mui/icons-material';
import { Box, Button, Chip, Stack, Typography } from '@mui/material';
import { addDays } from 'date-fns';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { RoomCardContainer, RoomImage } from './RoomCard.style';
import { ConfirmDialog } from '../ConfirmDialog';
import { useState } from 'react';
import { CartItem } from '@/features/cart/types';

const RoomCard = ({ room }: { room: Room }) => {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  const {
    roomId,
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
  const isCartPage = pathname.includes('/cart');

  const item: CartItem = {
    ...room,
  };

  item.checkInDate = item.checkInDate || checkInDate;
  item.checkOutDate = item.checkOutDate || checkOutDate;

  const isInvalid = !isCartItemValid(item);

  const onAddToCart = () => {
    dispatch(addToCart(item));
  };

  const onRemoveFromCart = () => {
    dispatch(removeFromCart(roomId));
  };

  const onRoomCheckout = () => {
    navigate(`/me/checkout/${roomId}`);
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
        {isInvalid && (
          <Chip
            label="Invalid date"
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
              <Chip
                key={amenity.id}
                label={amenity.name}
                size="small"
                color="primary"
                variant="filled"
              />
            ))}
          </Box>
        )}

        <Typography variant="subtitle1" fontWeight="bold" mt="auto">
          ${price} / night
        </Typography>
      </Stack>

      {isCartPage ? (
        <Stack direction={'row'} gap={2} justifyContent={'space-around'} mb={2}>
          <Button
            onClick={() => setConfirmOpen(true)}
            variant="outlined"
            aria-label="remove-from-cart"
            color="error"
            disableElevation
          >
            Remove
          </Button>
          <Button
            onClick={onRoomCheckout}
            disabled={isInvalid}
            variant="contained"
            aria-label="checkout"
            color="primary"
            disableElevation
          >
            Checkout
          </Button>
        </Stack>
      ) : (
        <Button
          disabled={!availability}
          variant={'contained'}
          color="inherit"
          startIcon={<ShoppingCart />}
          onClick={onAddToCart}
        >
          Add To Cart
        </Button>
      )}

      <ConfirmDialog
        open={confirmOpen}
        title="Remove Room"
        description="Are you sure you want to remove this room from your cart?"
        onClose={() => setConfirmOpen(false)}
        onConfirm={onRemoveFromCart}
        confirmText="Remove"
        confirmColor="error"
      />
    </RoomCardContainer>
  );
};

export default RoomCard;
