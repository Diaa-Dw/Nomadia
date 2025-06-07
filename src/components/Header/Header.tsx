import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { useAppSelector } from '@/store';
import { selectUser } from '@/features';
import { UserMenu } from '../UserMenu';

const Header = () => {
  const { isAuthenticated } = useAppSelector(selectUser);

  return (
    <AppBar position={'static'} color={'transparent'}>
      <Container maxWidth={'xl'}>
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
          {isAuthenticated ? <UserMenu /> : <ThemeToggle />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
