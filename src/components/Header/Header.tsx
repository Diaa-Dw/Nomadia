import { selectUser } from '@/features';
import { useAppSelector } from '@/store';
import { AppBar, Container, Stack, Toolbar, Typography } from '@mui/material';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { UserMenu } from '../UserMenu';
import { ShoppingCart } from '../ShoppingCart';

const Header = () => {
  const { isAuthenticated } = useAppSelector(selectUser);

  return (
    <AppBar position={'static'} color={'transparent'}>
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            component={'h1'}
            variant={'h2'}
            fontWeight={600}
            color="primary"
            sx={{ flexGrow: 1 }}
          >
            Nomadia
          </Typography>
          {isAuthenticated ? (
            <Stack direction={'row'} gap={3}>
              <ShoppingCart />
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
