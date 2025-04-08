import { createContext, Dispatch, SetStateAction, useContext } from 'react';

interface ThemeContextType {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
