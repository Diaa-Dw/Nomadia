import { Box, Chip, Divider, Rating, Stack, Typography } from '@mui/material';
import { HotelResponse } from '../../types';

const HotelInfo = ({ hotel }: { hotel: HotelResponse }) => {
  const { hotelName, location, description, amenities, starRating } = hotel;

  return (
    <Box mt={4}>
      <Stack direction={'row'} alignItems={'flex-start'} justifyContent={'space-between'}>
        <Box>
          <Typography variant="h2" fontWeight={600}>
            {hotelName}
          </Typography>

          <Typography variant="subtitle1" color="text.secondary">
            {location}
          </Typography>
        </Box>
        <Rating defaultValue={starRating} precision={0.5} readOnly />{' '}
      </Stack>

      <Divider sx={{ my: 2 }} />

      <Typography variant="body1" color={'textSecondary'} mb={2}>
        {description}
      </Typography>

      <Stack direction="row" spacing={1} flexWrap="wrap">
        {amenities.map(amenity => (
          <Chip
            key={amenity.id}
            label={amenity.name}
            variant="outlined"
            color="primary"
            sx={{ mb: 1 }}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default HotelInfo;
