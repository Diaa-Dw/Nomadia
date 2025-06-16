import { Menu, MenuItem, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const GuestSummaryStack = styled(Stack)({
  width: '100%',
  flexDirection: 'row',
  gap: '0.5rem',
});

export const GuestSummaryText = styled(Typography)({
  display: 'flex',
  flexWrap: 'wrap',
});

export const StyledMenu = styled(Menu)({
  '& .MuiMenu-list': {
    padding: 16,
  },
});

export const SortMenuItem = styled(MenuItem)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
}));
