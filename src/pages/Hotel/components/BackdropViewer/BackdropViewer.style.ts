import { styled } from '@mui/material/styles';
import { Backdrop, Box, IconButton } from '@mui/material';

export const StyledBackdrop = styled(Backdrop)(({ theme }) => ({
  zIndex: theme.zIndex.modal + 1,
  backdropFilter: 'blur(5px)',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
}));

export const ContentWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  maxWidth: '90%',
  maxHeight: '90%',
  width: '100%',

  [theme.breakpoints.up('md')]: {
    width: 'auto',
  },
}));

export const CloseButton = styled(IconButton)(() => ({
  position: 'absolute',
  top: 8,
  right: 8,
  color: '#ffffff',
  zIndex: 1,
}));

export const NavButton = styled(IconButton, {
  shouldForwardProp: prop => prop !== 'position',
})<{ position: 'left' | 'right' }>(({ position, theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  [position]: 16,
  color: theme.palette.action.active,
  backgroundColor: theme.palette.background.paper,
  transition: 'all .2s ease-in',
  '&:hover': {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.primary.light,
  },
}));
