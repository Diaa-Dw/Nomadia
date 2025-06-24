import {
  HomeRounded,
  KingBedRounded,
  LocationCityRounded,
  SearchRounded,
} from '@mui/icons-material';
import RoomIcon from '@mui/icons-material/ChairRounded';
import { NavItemProps } from './SidebarNavigation.types';

export const DRAWER_WIDTH = 300;

export const ADMIN_NAV_ITEMS: NavItemProps[] = [
  {
    label: 'Cities Management',
    Icon: <LocationCityRounded />,
    href: '/me/admin/cities',
  },
  {
    label: 'Hotels Management',
    Icon: <KingBedRounded />,
    href: '/me/admin/hotels',
  },
  {
    label: 'Rooms Management',
    Icon: <RoomIcon />,
    href: '/me/admin/rooms',
  },
];

export const USER_NAV_ITEMS: NavItemProps[] = [
  {
    label: 'Home',
    Icon: <HomeRounded />,
    href: '/me',
  },
  {
    label: 'Search Hotels',
    Icon: <SearchRounded />,
    href: '/me/search',
  },
];
