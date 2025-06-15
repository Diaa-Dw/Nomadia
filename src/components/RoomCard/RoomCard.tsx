import { Room } from '@/types/room';
import { ShoppingCart } from '@mui/icons-material';
import { Box, Button, Chip, Stack, Typography } from '@mui/material';
import { RoomCardContainer, RoomImage } from './RoomCard.style';

const RoomCard = ({ room }: { room: Room }) => {
  const {
    roomPhotoUrl,
    roomType,
    capacityOfAdults,
    capacityOfChildren,
    amenities,
    price,
    availability,
  } = room;

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
      >
        Add To Cart
      </Button>
    </RoomCardContainer>
  );
};

export default RoomCard;
