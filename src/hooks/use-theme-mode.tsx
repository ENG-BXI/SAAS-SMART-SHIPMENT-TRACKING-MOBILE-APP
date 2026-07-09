import React, {createContext, type ReactNode, useContext, useEffect, useState} from 'react';
import {useColorScheme} from 'nativewind';
import {getTheme as getSavedTheme, saveTheme} from '@/lib/theme';

interface ThemeModeContextValue {
  themeMode?: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
}
export type ThemeMode = 'light' | 'dark';

const ThemeModeContext = createContext<ThemeModeContextValue | undefined>(undefined);

export function ThemeModeProvider({children}: {children: ReactNode}) {
  const nativeScheme = useColorScheme();
  const [themeMode, setThemeModeState] = useState<ThemeMode | undefined>(undefined);

  useEffect(() => {
    async function initializeTheme() {
      const savedMode = await getSavedTheme();
      if (savedMode) {
        setThemeModeState(savedMode);
        nativeScheme.setColorScheme(savedMode);
        return;
      }

      if (nativeScheme.colorScheme) {
        setThemeModeState(nativeScheme.colorScheme);
        return;
      }

      setThemeModeState('light');
      nativeScheme.setColorScheme('light');
    }

    initializeTheme();
  }, [nativeScheme]);

  const setThemeMode = async (mode: ThemeMode) => {
    setThemeModeState(mode);
    nativeScheme.setColorScheme(mode);
    await saveTheme(mode);
  };

  return <ThemeModeContext.Provider value={{themeMode, setThemeMode}}>{children}</ThemeModeContext.Provider>;
}

export function useThemeMode() {
  const context = useContext(ThemeModeContext);
  if (!context) {
    throw new Error('useThemeMode must be used within a ThemeModeProvider');
  }

  return context;
}
