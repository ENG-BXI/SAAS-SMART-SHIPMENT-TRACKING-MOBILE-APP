import i18n from 'i18next';
import {I18nManager} from 'react-native';
import {initReactI18next} from 'react-i18next';
import * as SecureStore from 'expo-secure-store';

import en from '../locales/en.json';
import ar from '../locales/ar.json';
import {LANGUAGE_KEY} from '@/lib/language';

type SupportedLanguage = 'en' | 'ar';

async function initI18n() {
  const savedLanguage = (await SecureStore.getItemAsync(LANGUAGE_KEY)) as SupportedLanguage | null;
  const language: SupportedLanguage = savedLanguage === 'ar' ? 'ar' : 'en';

  I18nManager.allowRTL(true);
  I18nManager.forceRTL(language === 'ar');

  await i18n.use(initReactI18next).init({
    compatibilityJSON: 'v4',
    lng: language,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: en
      },
      ar: {
        translation: ar
      }
    }
  });

  return language;
}

export {initI18n};

export default i18n;
