import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

interface StyledProps {
  pointer?: boolean;
}

export const StyledFieldContainer = styled(Grid, {
  shouldForwardProp: prop => prop !== 'pointer',
})<StyledProps>(({ theme, pointer }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  cursor: pointer ? 'pointer' : 'default',
}));
