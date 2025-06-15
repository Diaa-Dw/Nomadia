import { styled } from '@mui/material/styles';

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

export const RoomImage = styled('img')({
  width: '100%',
  height: 150,
  objectFit: 'cover',
});
