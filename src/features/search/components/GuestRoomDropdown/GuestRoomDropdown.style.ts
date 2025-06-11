import { Menu, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const GuestSummaryStack = styled(Stack)({
  width: '100%',
  flexDirection: 'row',
  gap: '0.5rem',
});

export const GuestSummaryText = styled(Typography)({
  wordSpacing: 3,
});

export const StyledMenu = styled(Menu)({
  '& .MuiMenu-list': {
    padding: 16,
  },
});
