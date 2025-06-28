import { logout, selectUser } from '@/features';
import { useAppDispatch, useAppSelector } from '@/store';
import { DarkMode, LightMode, Logout as LogoutIcon } from '@mui/icons-material';
import { Box, Button, IconButton, Menu, Tooltip, Typography, Divider, Stack } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MouseEvent } from 'react';
import { useThemeContext } from '@/theme';
import { Avatar, CardContent } from './UserMenu.style';

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { mode, toggleTheme } = useThemeContext();
  const { givenName, familyName } = useAppSelector(selectUser);
  const initials = `${givenName[0]}${familyName[0]}`;
  const fullName = `${givenName} ${familyName}`;

  const themeIcon = mode === 'light' ? <DarkMode /> : <LightMode />;

  const onCloseMenu = () => setAnchorEl(null);

  const onOpenMenu = (e: MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const onLogout = () => {
    dispatch(logout());
    setTimeout(() => {
      navigate('/login', { replace: true });
    });
  };

  const onToggleTheme = () => {
    toggleTheme();
    onCloseMenu();
  };

  return (
    <Box>
      <Tooltip title="Open settings">
        <IconButton onClick={onOpenMenu} size="small" aria-label="Open user menu" sx={{ p: 0 }}>
          <Avatar>{initials}</Avatar>
        </IconButton>
      </Tooltip>

      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={onCloseMenu}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        keepMounted
        sx={{ padding: 0 }}
      >
        <CardContent>
          <Stack direction={'row'} gap={1} alignItems={'center'} px={1} sx={{ cursor: 'pointer' }}>
            <Avatar>{initials}</Avatar>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              {fullName}
            </Typography>
          </Stack>
          <Divider sx={{ my: 1 }} />
          <Button
            onClick={onToggleTheme}
            startIcon={themeIcon}
            color={'inherit'}
            aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
            fullWidth
          >
            Theme
          </Button>
          <Button
            onClick={onLogout}
            startIcon={<LogoutIcon />}
            color={'error'}
            size={'large'}
            aria-label="Log out"
            fullWidth
          >
            Log out
          </Button>
        </CardContent>
      </Menu>
    </Box>
  );
};

export default UserMenu;
