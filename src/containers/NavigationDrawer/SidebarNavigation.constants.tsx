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
    href: '/admin/cities',
  },
  {
    label: 'Hotels Management',
    Icon: <KingBedRounded />,
    href: '/admin/hotels',
  },
  {
    label: 'Rooms Management',
    Icon: <RoomIcon />,
    href: '/admin/rooms',
  },
];

export const USER_NAV_ITEMS: NavItemProps[] = [
  {
    label: 'Home',
    Icon: <HomeRounded />,
    href: '/',
  },
  {
    label: 'Search Hotels',
    Icon: <SearchRounded />,
    href: '/search',
  },
];
