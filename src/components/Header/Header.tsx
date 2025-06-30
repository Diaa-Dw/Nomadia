import { ShoppingCart, ThemeToggle, UserMenu } from '@/components';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Container, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import { HeaderPorps } from './Header.types';
import { Link } from 'react-router-dom';

const Header = ({ onOpenSidebar, isAuthenticated, isAdmin }: HeaderPorps) => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Stack direction="row" alignItems="center" spacing={2}>
            {isAuthenticated && onOpenSidebar && (
              <IconButton
                onClick={onOpenSidebar}
                edge="start"
                color="inherit"
                aria-label="Open navigation menu"
                sx={{ mr: 1 }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography
              component={Link}
              to={isAdmin ? '/admin/cities' : '/'}
              variant="h2"
              fontWeight={600}
              color="primary"
              noWrap
              sx={{ textDecoration: 'none' }}
            >
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
