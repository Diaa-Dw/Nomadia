import { ArrowForwardIos } from '@mui/icons-material';
import { Box, IconButton, Rating, Stack, Typography } from '@mui/material';
import { CompactHotelCardProps } from '../../HotelCard.types';
import { CompactCardContainer, CompactHotelImage, DiscountChip } from './CompactHotelCard.style';

const CompactHotelCard = ({ hotelData }: { hotelData: CompactHotelCardProps }) => {
  const {
    hotelName,
    roomPhotoUrl: imageUrl,
    cityName,
    originalRoomPrice,
    discount,
    finalPrice,
    hotelStarRating,
  } = hotelData;

  return (
    <CompactCardContainer>
      <CompactHotelImage src={imageUrl} alt={hotelName} />
      <DiscountChip label={`${discount}%`} variant={'filled'} color={'primary'} />
      <Box px={1} py={0.5}>
        <Rating defaultValue={hotelStarRating} precision={0.5} size={'small'} readOnly />
        <Typography variant="subtitle1">{hotelName}</Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          {cityName}
        </Typography>

        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Box>
            <Typography
              variant={'body2'}
              color={'textSecondary'}
              sx={{ textDecoration: 'line-through' }}
            >
              from ${originalRoomPrice}/night
            </Typography>
            <Typography variant="subtitle1">from ${finalPrice}/night</Typography>
          </Box>

          <IconButton>{<ArrowForwardIos />}</IconButton>
        </Stack>
      </Box>
    </CompactCardContainer>
  );
};

export default CompactHotelCard;
