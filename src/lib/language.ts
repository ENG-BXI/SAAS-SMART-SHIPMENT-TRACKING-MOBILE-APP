import * as SecureStore from 'expo-secure-store';

export type SupportedLanguage = 'en' | 'ar' | 'zh' | 'hi' | 'es' | 'fr' | 'bn' | 'pt' | 'ru' | 'ur';
export const SUPPORTED_LANGUAGES: SupportedLanguage[] = ['en', 'ar', 'zh', 'hi', 'es', 'fr', 'bn', 'pt', 'ru', 'ur'];
export const LANGUAGE_KEY = 'app_language';

export async function saveLanguage(language: SupportedLanguage) {
  await SecureStore.setItemAsync(LANGUAGE_KEY, language);
}

export async function getLanguage() {
  return (await SecureStore.getItemAsync(LANGUAGE_KEY)) as SupportedLanguage | null;
}
