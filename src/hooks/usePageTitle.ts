import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface RouteTitle {
  path: string;
  title: string;
}

const ROUTE_TITLES: RouteTitle[] = [
  { path: '/', title: 'Home - Nomadia' },
  { path: '/login', title: 'Login - Nomadia' },
  { path: '/login-required', title: 'Login Required - Nomadia' },
  { path: '/access-denied', title: 'Access Denied - Nomadia' },
  { path: '/search', title: 'Search Hotels - Nomadia' },
  { path: '/hotels/:hotelId', title: 'Hotel Details - Nomadia' },
  { path: '/cart', title: 'Shopping Cart - Nomadia' },
  { path: '/checkout/:roomId', title: 'Checkout - Nomadia' },
  { path: '/admin/cities', title: 'Cities Management - Nomadia Admin' },
  { path: '/admin/hotels', title: 'Hotels Management - Nomadia Admin' },
  { path: '/admin/rooms', title: 'Rooms Management - Nomadia Admin' },
];

const DEFAULT_TITLE = 'Nomadia - Your Digital Journey Begins Here';

let customTitle: string | null = null;

export const setCustomTitle = (title: string) => {
  customTitle = title;
  document.title = title;
};

export const clearCustomTitle = () => {
  customTitle = null;
};

export const usePageTitle = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (customTitle) {
      document.title = customTitle;
      return;
    }

    const routeTitle = ROUTE_TITLES.find(route => {
      if (route.path === pathname) return true;

      if (route.path.includes(':')) {
        const pathSegments = route.path.split('/');
        const currentSegments = pathname.split('/');

        if (pathSegments.length !== currentSegments.length) return false;

        return pathSegments.every((segment, index) => {
          return segment.startsWith(':') || segment === currentSegments[index];
        });
      }

      return false;
    });

    const title = routeTitle?.title || DEFAULT_TITLE;
    document.title = title;
  }, [pathname]);
};
