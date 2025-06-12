import React from 'react';
import { HotelCardProps } from './HotelCard.types';
import { HorizontalHotelCard } from './components';

const HotelCard = ({ variant, hotelData }: HotelCardProps) => {
  if (variant === 'horizontal') {
    return <HorizontalHotelCard hotelData={hotelData} variant={variant} />;
  }
};

export default HotelCard;
