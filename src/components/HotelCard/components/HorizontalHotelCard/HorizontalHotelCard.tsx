import { Button, Chip, Rating, Stack, Typography } from '@mui/material';
import { HorizontalHotelCardProps } from '../../HotelCard.types';
import {
  HorizontalCardContainer,
  HotelImage,
  InfoSection,
  PriceSection,
  TagsSection,
} from './HorizontalHotelCard.style';
import { useNavigate } from 'react-router-dom';

const HorizontalHotelCard = ({ hotelData }: { hotelData: HorizontalHotelCardProps }) => {
  const navigate = useNavigate();

  const {
    hotelId,
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

  const onCardClick = () => {
    navigate(`/me/hotels/${hotelId}`);
  };

  const priceAfterDiscount = roomPrice - (roomPrice * discount) / 100;
  const priceLabel = `${checkInDate} - ${checkOutDate}`;

  return (
    <HorizontalCardContainer>
      <HotelImage src={imageUrl} alt={hotelName} onClick={onCardClick} />

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
        <Button variant="contained" color={'inherit'} onClick={onCardClick}>
          See booking options
        </Button>
      </PriceSection>
    </HorizontalCardContainer>
  );
};

export default HorizontalHotelCard;
