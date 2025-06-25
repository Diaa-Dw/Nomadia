import { ArrowForwardIos } from '@mui/icons-material';
import { Box, IconButton, Rating, Stack, Typography } from '@mui/material';
import { CompactHotelCardProps } from '../../HotelCard.types';
import {
  CompactCardContainer,
  CompactHotelImage,
  DiscountChip,
  HotelImageWrapper,
} from './CompactHotelCard.style';
import { useNavigate } from 'react-router-dom';

const HotelCard = ({ hotelData }: { hotelData: CompactHotelCardProps }) => {
  const navigate = useNavigate();

  const {
    hotelId,
    hotelName,
    cityName,
    hotelStarRating,
    starRating,
    originalRoomPrice,
    discount,
    finalPrice,
    priceLowerBound,
    priceUpperBound,
    roomPhotoUrl,
    thumbnailUrl,
    title,
    description,
    visitDate,
  } = hotelData;

  const onCardClick = () => {
    navigate(`/me/hotels/${hotelId}`);
  };

  const imageUrl = roomPhotoUrl || thumbnailUrl || '';
  const rating = hotelStarRating ?? starRating ?? 0;

  return (
    <CompactCardContainer>
      <HotelImageWrapper>
        <CompactHotelImage
          src={imageUrl}
          alt={hotelName}
          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
          onClick={onCardClick}
        />
        {discount !== undefined && (
          <DiscountChip label={`${discount}% OFF`} color="primary" size="small" />
        )}
      </HotelImageWrapper>

      <Stack direction={'column'} flexGrow={1} p={2}>
        <Rating value={rating} precision={0.5} size="small" readOnly />
        <Typography variant="h6" component="h2" gutterBottom>
          {hotelName}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={1}>
          {cityName}
        </Typography>

        {title && (
          <Typography variant="subtitle2" gutterBottom>
            {title}
          </Typography>
        )}
        {description && (
          <Typography variant="body2" color="text.secondary" mb={2}>
            {description}
          </Typography>
        )}

        {visitDate && (
          <Typography variant="body2" color="text.secondary" mb={2}>
            Visit Date: {new Date(visitDate).toLocaleDateString()}
          </Typography>
        )}

        <Stack direction="row" justifyContent="space-between" alignItems={'flex-end'} flexGrow={1}>
          <Box>
            {priceLowerBound !== undefined && priceUpperBound !== undefined ? (
              <Typography variant="body2" color="text.secondary">
                Price range: ${priceLowerBound} - ${priceUpperBound} / night
              </Typography>
            ) : (
              <>
                {originalRoomPrice !== undefined && (
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textDecoration: 'line-through' }}
                  >
                    from ${originalRoomPrice} / night
                  </Typography>
                )}
                {finalPrice !== undefined && (
                  <Typography variant="subtitle1" fontWeight="bold">
                    from ${finalPrice} / night
                  </Typography>
                )}
              </>
            )}
          </Box>

          <IconButton aria-label={`View details for ${hotelName}`}>
            <ArrowForwardIos fontSize="small" />
          </IconButton>
        </Stack>
      </Stack>
    </CompactCardContainer>
  );
};

export default HotelCard;
