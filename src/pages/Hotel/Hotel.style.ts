import { styled } from '@mui/material/styles';
import { Box, Stack } from '@mui/material';

export const ReviewsMapContainer = styled(Stack)(({ theme }) => ({
  marginTop: theme.spacing(4),
  alignItems: 'stretch',
  flexDirection: 'column',
  gap: theme.spacing(4),

  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

export const ReviewsWrapper = styled(Box)(({ theme }) => ({
  flexBasis: '100%',
  flexGrow: 1,
  height: 'auto',
  overflowY: 'auto',
  backgroundColor: theme.palette.background.paper,
  padding: `0 ${theme.spacing(4)}`,
  borderRadius: '8px',

  [theme.breakpoints.up('md')]: {
    flexBasis: '70%',
    height: 400,
  },
}));

export const MapWrapper = styled(Box)(({ theme }) => ({
  flexBasis: '100%',
  flexGrow: 0,
  height: 300,

  [theme.breakpoints.up('md')]: {
    flexBasis: '30%',
    height: 400,
  },
}));
