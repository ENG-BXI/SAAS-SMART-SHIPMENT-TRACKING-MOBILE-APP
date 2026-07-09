import * as SecureStore from 'expo-secure-store';

export const LANGUAGE_KEY = 'app_language';

export async function saveLanguage(language: 'ar' | 'en') {
  await SecureStore.setItemAsync(LANGUAGE_KEY, language);
}

export async function getLanguage() {
  return await SecureStore.getItemAsync(LANGUAGE_KEY);
}
