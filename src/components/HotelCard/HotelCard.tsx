import React from 'react';
import { CompactHotelCardProps, HorizontalHotelCardProps, HotelCardProps } from './HotelCard.types';
import { CompactHotelCard, HorizontalHotelCard } from './components';

const HotelCard = ({ hotelData }: HotelCardProps) => {
  const { variant } = hotelData;

  if (variant === 'horizontal') {
    return <HorizontalHotelCard hotelData={hotelData as HorizontalHotelCardProps} />;
  }
  if (variant === 'compact') {
    return <CompactHotelCard hotelData={hotelData as CompactHotelCardProps} />;
  }
};

export default HotelCard;
