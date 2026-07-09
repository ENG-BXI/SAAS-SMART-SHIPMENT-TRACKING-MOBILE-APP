import {useTranslation} from 'react-i18next';
import * as SecureStore from 'expo-secure-store';
import { LANGUAGE_KEY } from '@/lib/language';


export function useLanguage() {
  const {i18n} = useTranslation();

  const changeLanguage = async (lang: 'en' | 'ar') => {
    await SecureStore.setItemAsync(LANGUAGE_KEY, lang);

    await i18n.changeLanguage(lang);
  };

  return {
    language: i18n.language,
    changeLanguage
  };
}
