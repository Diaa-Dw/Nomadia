import { ShoppingCart, ThemeToggle, UserMenu } from '@/components';
import { selectIsAdmin, selectUser } from '@/features';
import { useAppSelector } from '@/store';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Container, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import { HeaderPorps } from './Header.types';

const Header = ({ onOpenSidebar }: HeaderPorps) => {
  const { isAuthenticated } = useAppSelector(selectUser);
  const isAdmin = useAppSelector(selectIsAdmin);

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Stack direction="row" alignItems="center" spacing={2}>
            {onOpenSidebar && (
              <IconButton onClick={onOpenSidebar} edge="start" color="inherit" sx={{ mr: 1 }}>
                <MenuIcon />
              </IconButton>
            )}
            <Typography component="h1" variant="h2" fontWeight={600} color="primary" noWrap>
              Nomadia
            </Typography>
          </Stack>

          {isAuthenticated ? (
            <Stack direction="row" spacing={2} alignItems="center">
              {!isAdmin && <ShoppingCart />}
              <UserMenu />
            </Stack>
          ) : (
            <ThemeToggle />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
