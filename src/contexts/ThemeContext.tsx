import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeContextType {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  dark: boolean; // resolved value — true if currently dark
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};

function getSystemDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [mode, setModeState] = useState<ThemeMode>(() => {
    return (localStorage.getItem('theme') as ThemeMode) || 'system';
  });

  const [systemDark, setSystemDark] = useState(getSystemDark);

  // Listen for OS theme changes
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => setSystemDark(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const dark = mode === 'dark' || (mode === 'system' && systemDark);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  const setMode = (m: ThemeMode) => {
    localStorage.setItem('theme', m);
    setModeState(m);
  };

  return (
    <ThemeContext.Provider value={{ mode, setMode, dark }}>
      {children}
    </ThemeContext.Provider>
  );
};
