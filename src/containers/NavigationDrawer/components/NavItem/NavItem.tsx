import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { NavItemProps } from '../../SidebarNavigation.types';
import { Link, useLocation } from 'react-router-dom';

const NavItem = ({ href, label, Icon, onClick }: NavItemProps) => {
  const { pathname } = useLocation();
  const isActive = pathname === href;

  return (
    <ListItem disablePadding>
      <ListItemButton
        component={Link}
        to={href}
        onClick={onClick}
        sx={{
          gap: 1,
          bgcolor: isActive ? 'action.selected' : 'transparent',
        }}
      >
        <ListItemIcon sx={{ minWidth: 0 }}>{Icon}</ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  );
};

export default NavItem;
