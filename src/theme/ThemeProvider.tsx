import { useMemo, useState } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { GlobalStyles } from '@mui/material';
import { createPalette, typography, globalStyles, components, ThemeContext } from '.';
import { type ThemeContextType } from './';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<Mode>('dark');

  const theme = useMemo(
    () =>
      createTheme({
        palette: createPalette(mode),
        typography,
        components,
      }),
    [mode]
  );

  console.log(mode);
  const toggleTheme = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const contextValue: ThemeContextType = {
    toggleTheme,
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
