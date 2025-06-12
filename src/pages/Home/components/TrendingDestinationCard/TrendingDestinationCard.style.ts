import { Box, Card, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CardContainer = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 320,
  borderRadius: theme.shape.borderRadius * 2,
  margin: '0 auto',
  overflow: 'hidden',
  boxShadow: theme.shadows[4],
}));

export const Thumbnail = styled('img')({
  height: 192,
  width: '100%',
  objectFit: 'cover',
});

export const Content = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}));

export const TitleRow = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const CityName = styled(Typography)({
  fontSize: '1.25rem',
  fontWeight: 600,
});

export const Description = styled(Typography)(({ theme }) => ({
  fontSize: '0.875rem',
  color: theme.palette.text.secondary,
}));
