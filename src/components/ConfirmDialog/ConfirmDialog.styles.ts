import { Button, styled } from '@mui/material';
import { ConfirmButtonProps } from './ConfirmDialog.types';

export const ConfirmButton = styled(Button, {
  shouldForwardProp: prop => prop !== 'isError',
})<ConfirmButtonProps>(({ theme, isError }) => ({
  backgroundColor: isError ? theme.palette.error.main : theme.palette.primary.main,
  color: theme.palette.text.primary,
  fontWeight: 600,
}));
