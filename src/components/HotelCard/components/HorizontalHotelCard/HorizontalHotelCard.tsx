import { Button, Chip, Rating, Stack, Typography } from '@mui/material';
import { HorizontalHotelCardProps } from '../../HotelCard.types';
import {
  HorizontalCardContainer,
  HotelImage,
  InfoSection,
  PriceSection,
  TagsSection,
} from './HorizontalHotelCard.style';

const HorizontalHotelCard = ({ hotelData }: { hotelData: HorizontalHotelCardProps }) => {
  const {
    hotelName,
    roomPhotoUrl: imageUrl,
    starRating,
    cityName,
    roomPrice,
    roomType,
    numberOfAdults,
    numberOfChildren,
    numberOfRooms,
    checkInDate,
    checkOutDate,
    discount,
    amenities,
  } = hotelData;

  const totalGuests = numberOfAdults + numberOfChildren;
  const priceAfterDiscount = roomPrice - (roomPrice * discount) / 100;
  const priceLabel = `${checkInDate} - ${checkOutDate}, ${totalGuests} guests`;

  return (
    <HorizontalCardContainer>
      <HotelImage src={imageUrl} alt={hotelName} />
      
      <InfoSection>
        <Typography variant="h6">{hotelName}</Typography>
        <Typography variant="body2" color="text.secondary">
          {cityName} • {roomType}
        </Typography>
        <Typography variant="body2">
          {numberOfAdults} adults, {numberOfChildren} children
          <br />
          {numberOfRooms} {numberOfRooms > 1 ? 'rooms' : 'room'}
        </Typography>
        <TagsSection>
          {discount > 0 && <Chip label={`-${discount}%`} color="primary" />}
          {amenities.map(a => (
            <Chip key={a.id} label={`#${a.name}`} color="primary" />
          ))}
        </TagsSection>
      </InfoSection>

      <PriceSection>
        <Rating defaultValue={starRating} precision={0.5} readOnly />{' '}
        <Stack direction="row" alignItems="center" justifyContent={'flex-end'} spacing={1}>
          <Typography
            variant="body2"
            sx={{ textDecoration: 'line-through' }}
            color={'textSecondary'}
          >
            ${roomPrice}
          </Typography>
          <Typography variant="h6" color={'textPrimary'}>
            ${priceAfterDiscount}
          </Typography>
        </Stack>
        <Typography variant="body2">{priceLabel}</Typography>
        <Button variant="contained" color={'inherit'}>
          See booking options
        </Button>
      </PriceSection>
    </HorizontalCardContainer>
  );
};

export default HorizontalHotelCard;
