import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { NavItemProps } from '../../SidebarNavigation.types';
import { Link } from 'react-router-dom';

const NavItem = ({ href, label, Icon }: NavItemProps) => {
  return (
    <ListItem disablePadding>
      <ListItemButton component={Link} sx={{ gap: 1 }} to={href}>
        <ListItemIcon sx={{ minWidth: 0 }}>{Icon}</ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  );
};

export default NavItem;
