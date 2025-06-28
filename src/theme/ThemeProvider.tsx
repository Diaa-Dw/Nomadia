import { useMemo, useState, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { GlobalStyles } from '@mui/material';
import { createPalette, typography, globalStyles, components, ThemeContext } from '.';
import { type ThemeContextType } from './';
import { getStoredTheme, setStoredTheme } from '@/utils/theme';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<Mode>(() => getStoredTheme());

  const theme = useMemo(
    () =>
      createTheme({
        palette: createPalette(mode),
        typography,
        components,
      }),
    [mode]
  );

  const toggleTheme = () => {
    setMode(prev => {
      const newMode = prev === 'light' ? 'dark' : 'light';
      setStoredTheme(newMode);
      return newMode;
    });
  };

  useEffect(() => {
    setStoredTheme(mode);
  }, [mode]);

  const contextValue: ThemeContextType = {
    toggleTheme,
    theme,
    mode,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>
        <GlobalStyles styles={globalStyles} />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
