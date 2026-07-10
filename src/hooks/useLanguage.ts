import {useTranslation} from 'react-i18next';
import * as SecureStore from 'expo-secure-store';
import {LANGUAGE_KEY, SUPPORTED_LANGUAGES, type SupportedLanguage} from '@/lib/language';

export type {SupportedLanguage} from '@/lib/language';

export function useLanguage() {
  const {i18n} = useTranslation();

  const changeLanguage = async (lang: SupportedLanguage) => {
    await SecureStore.setItemAsync(LANGUAGE_KEY, lang);

    await i18n.changeLanguage(lang);
  };
  const isRtl = i18n.language === 'ar' || i18n.language === 'ur';

  return {
    language: (SUPPORTED_LANGUAGES.includes(i18n.language as SupportedLanguage)
      ? (i18n.language as SupportedLanguage)
      : 'en') as SupportedLanguage,
    changeLanguage,
    isRtl
  };
}
