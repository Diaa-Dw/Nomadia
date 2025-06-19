import { selectIsAdmin } from '@/features';
import { useAppSelector } from '@/store';
import { List, Typography } from '@mui/material';
import { NavItem } from './components';
import { ADMIN_NAV_ITEMS, USER_NAV_ITEMS } from './SidebarNavigation.constants';
import { Drawer } from './SidebarNavigation.styles';
import { SidebarNavigationProps } from './SidebarNavigation.types';

const SidebarNavigation = ({ isOpen, onCloseSidebar }: SidebarNavigationProps) => {
  const isAdmin = useAppSelector(selectIsAdmin);

  const navItems = isAdmin ? ADMIN_NAV_ITEMS : USER_NAV_ITEMS;

  return (
    <Drawer open={isOpen} onClose={onCloseSidebar}>
      <Typography variant={'h2'} fontWeight={600} color={'primary'} p={2}>
        Nomadia
      </Typography>

      <List>
        {navItems.map(({ label, Icon, href }) => (
          <NavItem key={label} label={label} Icon={Icon} href={href} />
        ))}
      </List>
    </Drawer>
  );
};

export default SidebarNavigation;
