import { styled } from '@mui/material/styles';
import { RoomImageProps } from './RoomCard.types';
import { Box } from '@mui/material';

export const RoomCardContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '280px',
  height: '100%',
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(1),
  overflow: 'hidden',
  boxShadow: theme.shadows[2],
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
}));

export const RoomImageWrapper = styled(Box)(() => ({
  width: '100%',
  height: 150,
}));

export const RoomImage = styled('img', {
  shouldForwardProp: prop => prop !== 'availability',
})<RoomImageProps>(({ availability = true }) => ({
  width: '100%',
  height: 150,
  objectFit: 'cover',
  filter: availability ? 'none' : 'grayscale(100%)',
  opacity: availability ? 1 : 0.6,
}));
