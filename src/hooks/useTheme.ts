import { useThemeContext } from '@/theme';
import { getStoredTheme, setStoredTheme } from '@/utils';

const useTheme = () => {
  const { toggleTheme, theme, mode } = useThemeContext();

  const setTheme = (newMode: 'light' | 'dark') => {
    setStoredTheme(newMode);
    if (newMode !== mode) {
      toggleTheme();
    }
  };

  const getCurrentTheme = () => {
    return getStoredTheme();
  };

  return {
    theme,
    mode,
    toggleTheme,
    setTheme,
    getCurrentTheme,
    isDark: mode === 'dark',
    isLight: mode === 'light',
  };
};

export default useTheme;
