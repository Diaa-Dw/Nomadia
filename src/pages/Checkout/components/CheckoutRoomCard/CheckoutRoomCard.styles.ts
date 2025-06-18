import { Box, styled } from '@mui/material';

export const Card = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  display: 'flex',
  alignSelf: 'start',
  flexDirection: 'column',
  maxWidth: '440px',
  borderRadius: '16px',
  padding: theme.spacing(2),
  boxShadow: theme.shadows[2],
}));

export const RoomImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '240px',
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(1),
}));
