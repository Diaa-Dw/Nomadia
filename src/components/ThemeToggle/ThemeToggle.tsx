import { useThemeContext } from '@/theme';
import { DarkMode, LightMode } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const ThemeToggle = () => {
  const { mode, toggleTheme } = useThemeContext();

  const isDark = mode === 'dark';

  const ThemeIcon = isDark ? <DarkMode /> : <LightMode />;

  return (
    <IconButton onClick={toggleTheme} color={'inherit'}>
      {ThemeIcon}
    </IconButton>
  );
};

export default ThemeToggle;
