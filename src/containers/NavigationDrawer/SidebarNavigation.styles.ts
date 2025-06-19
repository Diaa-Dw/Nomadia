import { Drawer as MuiDrawer, styled } from '@mui/material';
import { DRAWER_WIDTH } from './SidebarNavigation.constants';

export const Drawer = styled(MuiDrawer)(({ theme }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,

  '& .MuiPaper-root': {
    width: DRAWER_WIDTH,
    '--Paper-shadow': 'none',
    '--Paper-overlay': 'none !important',
    boxShadow: 'none',
    backgroundColor: theme.palette.background.paper,
  },
  '& .MuiBackdrop-root': {
    backgroundColor: 'transparent',
  },
}));
