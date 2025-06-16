import { Menu, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SortSummaryStack = styled(Stack)({
  width: '100%',
  flexDirection: 'row',
  gap: '0.5rem',
});

export const SortSummaryText = styled(Typography)({
  display: 'flex',
  flexWrap: 'wrap',
});

export const StyledMenu = styled(Menu)({
  '& .MuiMenu-list': {
    padding: 16,
  },
});
