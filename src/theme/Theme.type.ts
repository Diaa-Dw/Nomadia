import type { ReactNode } from 'react';

export interface ThemeContextType {
  toggleTheme: () => void;
  mode: string;
}

export interface ThemeProivderProps {
  children: ReactNode;
}
