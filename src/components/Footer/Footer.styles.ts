import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const RoomCardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(3),
  marginTop: theme.spacing(8),
  borderTop: `1px solid ${theme.palette.background.paper}`,
}));

export const AuthorCredit = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',

  '& a': {
    color: theme.palette.primary.main,
  },
}));
