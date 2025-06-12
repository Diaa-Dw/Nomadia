import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HorizontalCardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(1),
  overflow: 'hidden',
  boxShadow: theme.shadows[2],
  margin: theme.spacing(2),
}));

export const HotelImage = styled('img')({
  width: 180,
  height: 160,
  objectFit: 'cover',

  '@media (max-width: 560px)': {
    width: '100%',
    height: 'auto',
  },
});

export const InfoSection = styled('div')(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(2),
}));

export const PriceSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),

  display: ' flex',
  alignItems: 'flex-end',
  flexDirection: 'column',
  gap: theme.spacing(1),

  '@media (max-width: 800px)': {
    alignItems: 'flex-start',
    width: '100%',

    button: {
      width: '100%',
    },
  },
}));

export const TagsSection = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(1),
  display: 'flex',
  gap: theme.spacing(1),
}));
