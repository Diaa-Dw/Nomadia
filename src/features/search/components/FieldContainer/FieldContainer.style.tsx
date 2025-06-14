import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

interface StyledProps {
  pointer?: boolean;
}

export const StyledFieldContainer = styled(Box, {
  shouldForwardProp: prop => prop !== 'pointer',
})<StyledProps>(({ theme, pointer }) => ({
  borderRadius: '8px',
  padding: '8px',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  cursor: pointer ? 'pointer' : 'default',

  '& > *:last-child': {
    flexGrow: 1,
  },
}));
