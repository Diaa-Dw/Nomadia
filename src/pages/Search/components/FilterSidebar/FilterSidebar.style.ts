import { styled } from '@mui/material/styles';
import { IconButton, Drawer as MuiDrawer } from '@mui/material';

export const Drawer = styled(MuiDrawer)(({ theme }) => ({
  '& .MuiPaper-root': {
    '--Paper-shadow': 'none',
    '--Paper-overlay': 'none !important',
    boxShadow: 'none',
    backgroundColor: theme.palette.background.paper,
  },
  '& .MuiBackdrop-root': {
    backgroundColor: 'transparent',
  },
}));

export const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1.5),
  right: theme.spacing(1.5),
}));
