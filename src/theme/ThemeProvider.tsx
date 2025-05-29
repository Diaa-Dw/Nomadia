import { useMemo, useState } from 'react';
import type { Theme, ThemeContextType, ThemeProivderProps } from '.';
import { components, createPalette, typography, ThemeContext, globalStyles } from '.';
import { GlobalStyles } from '@mui/material';

const createTheme = (mode: Mode): Theme => {
  return {
    palette: createPalette(mode),
    typography,
    components,
    mode,
  };
};

const ThemeProvider = ({ children }: ThemeProivderProps) => {
  const [mode, setMode] = useState<Mode>('light');

  const theme = useMemo(() => createTheme(mode), [mode]);

  const toggleTheme = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const contextValue: ThemeContextType = {
    toggleTheme,
    theme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <GlobalStyles styles={globalStyles} />
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
