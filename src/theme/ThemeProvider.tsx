import { useMemo, useState } from 'react';
import type { Theme, ThemeContextType, ThemeProivderProps } from '.';
import { components, createPalette, typography, ThemeContext } from '.';

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

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
