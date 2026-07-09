import * as SecureStore from 'expo-secure-store';

export const THEME_KEY = 'app_theme';

export type ThemeMode = 'light' | 'dark';

export async function saveTheme(mode: ThemeMode) {
  await SecureStore.setItemAsync(THEME_KEY, mode);
}

export async function getTheme(): Promise<ThemeMode | null> {
  const savedTheme = await SecureStore.getItemAsync(THEME_KEY);
  return savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : null;
}
