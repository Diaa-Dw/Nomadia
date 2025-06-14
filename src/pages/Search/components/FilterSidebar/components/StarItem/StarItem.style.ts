import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const StarRow = styled(Box, {
  shouldForwardProp: prop => prop !== 'selected',
})<{ selected: boolean }>(({ theme, selected }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  cursor: 'pointer',
  padding: theme.spacing(0.75, 1),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: selected ? theme.palette.action.selected : 'transparent',
  border: '1px solid',
  borderColor: selected ? 'transparent' : theme.palette.background.paper,
  transition: 'background-color 0.2s ease',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));
